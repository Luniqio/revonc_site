"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

/* Routes that opt out of the scroll progress line. */
const HIDDEN_ON = ["/verhaal", "/voor-organisaties", "/privacy", "/voorwaarden"];

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

/* Progress = how far the viewport-probe has travelled from the start of
   the path (y=0 in wrap coords) to its end (= the last waypoint's y),
   not the full wrapper height. This way the orange reaches 100% exactly
   when the probe hits the line's stopping point. */
function probeProgress(wrap: Element, pathEndY: number): number {
  if (pathEndY <= 0) return 0;
  const rect = wrap.getBoundingClientRect();
  const probe = window.innerHeight * PROBE;
  return Math.min(1, Math.max(0, (probe - rect.top) / pathEndY));
}

export function ScrollProgress() {
  const pathname = usePathname();
  // A non-SVG wrapper gives us reliable CSS-driven dimensions to measure.
  const wrapRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<SVGPathElement>(null);
  const lengthRef = useRef(0);
  const pathEndYRef = useRef(0);
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

      // Stash the path's last y so progress maps 0..1 over the path, not
      // over the wrapper (which extends to the bottom of <main>).
      pathEndYRef.current = points[points.length - 1].y;

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

    const schedule = () => {
      if (rafId !== null) return;
      rafId = requestAnimationFrame(rebuild);
    };

    rebuild();
    const ro = new ResizeObserver(schedule);
    ro.observe(wrap);
    window.addEventListener("resize", schedule);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", schedule);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
    // pathname is in deps so the effect re-runs when navigating back to a
    // route where the line is shown. On hidden routes this returns null
    // and the early `if (!wrap) return;` bails out cleanly.
  }, [pathname]);

  // When path changes: recompute length and apply the current scroll
  // progress. Defer the dashoffset write by one frame so any pending
  // scroll reset (e.g. Next.js scrolling to top after route navigation)
  // has time to settle — otherwise we'd read the previous page's
  // scrollY and the bar would land on the wrong value.
  useEffect(() => {
    const fill = fillRef.current;
    const wrap = wrapRef.current;
    if (!fill || !wrap) return;
    const len = fill.getTotalLength();
    lengthRef.current = len;
    fill.style.strokeDasharray = `${len}`;
    const rafId = requestAnimationFrame(() => {
      if (fillRef.current && wrapRef.current) {
        fillRef.current.style.strokeDashoffset = `${
          len * (1 - probeProgress(wrapRef.current, pathEndYRef.current))
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
      if (fill && wrap && lengthRef.current > 0) {
        fill.style.strokeDashoffset = `${
          lengthRef.current * (1 - probeProgress(wrap, pathEndYRef.current))
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
      <svg
        width="100%"
        height="100%"
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
        {/* Orange fill (single, no clip) */}
        <path
          ref={fillRef}
          d={data.path}
          fill="none"
          stroke="#FFA17A"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          style={{
            strokeWidth: "8px",
            filter: "drop-shadow(0 0 4px rgba(255, 161, 122, 0.7)) drop-shadow(0 0 10px rgba(255, 161, 122, 0.35))",
          }}
        />
      </svg>
    </div>
  );
}
