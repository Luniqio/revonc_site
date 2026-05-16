"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

/* Routes that opt out of the scroll progress line. */
const HIDDEN_ON = ["/verhaal", "/voor-organisaties", "/privacy", "/voorwaarden", "/download"];

/* Probe = vertical position inside the viewport that the orange/white
   boundary tracks. 0.55 = just past the visual centre of the screen. */
const PROBE = 0.55;

type Waypoint = {
  /** id of a <section> the y-position is anchored to. */
  sectionId: string;
  /** Position within the section, 0 = top, 1 = bottom. Defaults to 0. */
  yOffset?: number;
  /** Horizontal position as a fraction of width. 0 = far left, 1 = far right. */
  x: number;
};

/* Edit this list to shape the path. Smooth S-curves fill the gaps
   between waypoints; the line locks in vertical at each one. */
const WAYPOINTS: Waypoint[] = [
  { sectionId: "hero", yOffset: 0.35,  x: .1 / 4 },
  { sectionId: "hero", yOffset: 0.75,  x: 2 / 4 },
  { sectionId: "probleem",  x: 2 / 4 },
  { sectionId: "probleem", yOffset: 1.5,  x: .5 / 4 },
  { sectionId: "oplossing", yOffset: 1,  x: .5 / 4 },
  { sectionId: "resultaten", yOffset: .75,  x: 2 / 4 },
  { sectionId: "verhalen", yOffset: -0.2,  x: 2 / 4 },
  { sectionId: "verhalen", yOffset: .3,  x: 1 / 4 },
  { sectionId: "verhalen", yOffset: 1.225,  x: 3.9 / 4 },
  { sectionId: "faq", yOffset: 0.7,  x: .5 / 4 },
  { sectionId: "contact", yOffset: 0.5, x: .5 / 4 },
];

/* Element ids whose background is light/mint. Over these the line's
   track switches from white/20 to a dark teal so it stays visible. */
const WHITE_BG_ELEMENT_IDS = ["resultaten", "contact-bg"];

type YRange = { top: number; bottom: number };

function invertRanges(white: YRange[], h: number): YRange[] {
  const sorted = [...white].sort((a, b) => a.top - b.top);
  const out: YRange[] = [];
  let cursor = 0;
  for (const r of sorted) {
    if (r.top > cursor) out.push({ top: cursor, bottom: r.top });
    cursor = Math.max(cursor, r.bottom);
  }
  if (cursor < h) out.push({ top: cursor, bottom: h });
  return out;
}

function buildPath(points: { x: number; y: number }[]): string {
  if (points.length === 0) return "M 0 0";
  let d = `M ${points[0].x} ${points[0].y}`;
  for (let i = 1; i < points.length; i++) {
    const p = points[i - 1];
    const c = points[i];
    const cy = p.y + (c.y - p.y) / 2;
    d += ` C ${p.x} ${cy} ${c.x} ${cy} ${c.x} ${c.y}`;
  }
  return d;
}

/* Progress = the arc-length fraction of the path at which it crosses the
   probe's y-coordinate. Reading geometry from the path itself (rather
   than dividing by a fixed `pathEndY`) keeps the orange tip anchored to
   the section under the probe even when content below the probe changes
   height — e.g. when an FAQ accordion opens and pushes the last waypoint
   further down the page. */
function probeProgress(wrap: Element, fill: SVGPathElement | null): number {
  if (!fill) return 0;
  const total = fill.getTotalLength();
  if (total <= 0) return 0;
  const rect = wrap.getBoundingClientRect();
  const probeY = window.innerHeight * PROBE - rect.top;
  if (probeY <= 0) return 0;
  // Binary-search the arc-length whose point.y matches probeY.
  // 20 iterations is sub-pixel precision for any realistic page height.
  let lo = 0;
  let hi = total;
  for (let i = 0; i < 20; i++) {
    const mid = (lo + hi) / 2;
    if (fill.getPointAtLength(mid).y < probeY) lo = mid;
    else hi = mid;
  }
  return Math.min(1, Math.max(0, ((lo + hi) / 2) / total));
}

export function ScrollProgress() {
  const pathname = usePathname();
  // A non-SVG wrapper gives us reliable CSS-driven dimensions to measure.
  const wrapRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<SVGPathElement>(null);
  const [data, setData] = useState({
    path: "M 0 0",
    w: 1,
    h: 1,
    whiteRanges: [] as YRange[],
    tealRanges: [] as YRange[],
  });

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    let rafId: number | null = null;
    let debounceId: ReturnType<typeof setTimeout> | null = null;
    let lastW = 0;
    let lastH = 0;

    const rebuild = () => {
      rafId = null;
      const wrapRect = wrap.getBoundingClientRect();
      const w = wrapRect.width;
      const h = wrapRect.height;
      if (w === 0 || h === 0) return;
      if (w === lastW && h === lastH) return;
      lastW = w;
      lastH = h;

      const wrapTopDoc = wrapRect.top + window.scrollY;
      const points: { x: number; y: number }[] = [];
      for (const wp of WAYPOINTS) {
        const sec = document.getElementById(wp.sectionId);
        if (!sec) continue;
        const r = sec.getBoundingClientRect();
        const y =
          r.top + window.scrollY - wrapTopDoc + (wp.yOffset ?? 0) * r.height;
        points.push({ x: wp.x * w, y });
      }
      if (points.length === 0) {
        points.push({ x: 0, y: 0 }, { x: 0, y: h });
      } else {
        // Implicit start at the top of the SVG using the first waypoint's x.
        // No implicit end — the path stops wherever the last waypoint says,
        // so you can use e.g. { sectionId: "footer", yOffset: 0.5 } to stop
        // the line in the middle of the footer.
        points.unshift({ x: points[0].x, y: 0 });
      }

      const whiteRanges: YRange[] = [];
      for (const id of WHITE_BG_ELEMENT_IDS) {
        const el = document.getElementById(id);
        if (!el) continue;
        const r = el.getBoundingClientRect();
        const top = r.top + window.scrollY - wrapTopDoc;
        const bottom = top + r.height;
        const ct = Math.max(0, Math.min(h, top));
        const cb = Math.max(0, Math.min(h, bottom));
        if (cb > ct) whiteRanges.push({ top: ct, bottom: cb });
      }
      const tealRanges = invertRanges(whiteRanges, h);

      setData({ path: buildPath(points), w, h, whiteRanges, tealRanges });
    };

    const runRebuild = () => {
      if (rafId !== null) return;
      rafId = requestAnimationFrame(rebuild);
    };

    // Width changes (window resize) need an immediate rebuild — otherwise
    // the viewBox would lag behind the SVG's CSS width and the path would
    // visibly stretch horizontally. Height-only changes are usually from
    // in-page content animating open/closed (e.g. the FAQ accordion);
    // rebuilding the path mid-animation reshapes the curve every frame
    // and the user sees the line jitter. Debounce those so we redraw
    // once after the animation settles.
    const schedule = () => {
      const w = wrap.getBoundingClientRect().width;
      if (w !== lastW) {
        if (debounceId !== null) {
          clearTimeout(debounceId);
          debounceId = null;
        }
        runRebuild();
      } else {
        if (debounceId !== null) clearTimeout(debounceId);
        debounceId = setTimeout(() => {
          debounceId = null;
          runRebuild();
        }, 350);
      }
    };

    rebuild();
    const ro = new ResizeObserver(schedule);
    ro.observe(wrap);
    window.addEventListener("resize", schedule);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", schedule);
      if (rafId !== null) cancelAnimationFrame(rafId);
      if (debounceId !== null) clearTimeout(debounceId);
    };
    // pathname is in deps so the effect re-runs when navigating back to a
    // route where the line is shown. On hidden routes this returns null
    // and the early `if (!wrap) return;` bails out cleanly.
  }, [pathname]);

  // When the path rebuilds (initial mount, layout shifts, resize), reapply
  // progress. The path uses pathLength="1" so dasharray stays at 1 and
  // only the dashoffset changes — no race where a stale dasharray makes
  // the stroke render fully solid. Defer the write by one frame so any
  // pending scroll reset (e.g. Next.js scrolling to top after route
  // navigation) has time to settle.
  useEffect(() => {
    const fill = fillRef.current;
    const wrap = wrapRef.current;
    if (!fill || !wrap) return;
    const rafId = requestAnimationFrame(() => {
      if (fillRef.current && wrapRef.current) {
        fillRef.current.style.strokeDashoffset = `${
          1 - probeProgress(wrapRef.current, fillRef.current)
        }`;
      }
    });
    return () => cancelAnimationFrame(rafId);
  }, [data.path]);

  useEffect(() => {
    let ticking = false;
    const update = () => {
      const fill = fillRef.current;
      const wrap = wrapRef.current;
      if (fill && wrap) {
        fill.style.strokeDashoffset = `${
          1 - probeProgress(wrap, fill)
        }`;
      }
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (HIDDEN_ON.includes(pathname)) return null;

  return (
    <div
      ref={wrapRef}
      aria-hidden
      className="pointer-events-none absolute top-[35vh] right-0 bottom-0 -left-0.75 -z-10 hidden md:block"
    >
      {/* Width tracks the wrap (100%), but height is pinned to data.h in
          pixels rather than 100% of the wrap. Otherwise the SVG would
          grow with the wrap whenever in-page content expands (e.g. FAQ
          accordion opening), and with the viewBox lagging until the next
          rebuild, preserveAspectRatio="none" would stretch the path
          vertically every frame of the animation. */}
      <svg
        width="100%"
        height={data.h}
        viewBox={`0 0 ${data.w} ${data.h}`}
        preserveAspectRatio="none"
        style={{ display: "block", overflow: "visible" }}
      >
        <defs>
          <clipPath id="line-clip-teal">
            {data.tealRanges.map((r, i) => (
              <rect
                key={i}
                x={0}
                y={r.top}
                width={data.w}
                height={r.bottom - r.top}
              />
            ))}
          </clipPath>
          <clipPath id="line-clip-white">
            {data.whiteRanges.map((r, i) => (
              <rect
                key={i}
                x={0}
                y={r.top}
                width={data.w}
                height={r.bottom - r.top}
              />
            ))}
          </clipPath>
        </defs>
        {/* Track over teal-bg sections */}
        <path
          d={data.path}
          fill="none"
          stroke="rgba(255,255,255,0.2)"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          clipPath="url(#line-clip-teal)"
          style={{ strokeWidth: "8px" }}
        />
        {/* Track over white-bg sections (#176768 at 20%) */}
        <path
          d={data.path}
          fill="none"
          stroke="rgba(23,103,104,0.2)"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          clipPath="url(#line-clip-white)"
          style={{ strokeWidth: "8px" }}
        />
        {/* Orange fill (single, no clip). pathLength=1 normalizes the
            stroke-dash math so dasharray stays at 1 and dashoffset=(1-p)
            in [0..1] regardless of the path's actual geometric length.
            Initial dashoffset=1 keeps the stroke hidden until JS writes
            a real progress. */}
        <path
          ref={fillRef}
          d={data.path}
          pathLength={1}
          fill="none"
          stroke="#FFA17A"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          style={{
            strokeWidth: "8px",
            strokeDasharray: 1,
            strokeDashoffset: 1,
            filter: "drop-shadow(0 0 4px rgba(255, 161, 122, 0.7)) drop-shadow(0 0 10px rgba(255, 161, 122, 0.35))",
          }}
        />
      </svg>
    </div>
  );
}
