import { SiteFooter } from "@/components/SiteFooter";

const QR_SIZE = 25;
const FINDERS: [number, number][] = [
  [0, 0],
  [0, QR_SIZE - 7],
  [QR_SIZE - 7, 0],
];

function finderFill(r: number, c: number): boolean | null {
  for (const [fr, fc] of FINDERS) {
    const dr = r - fr;
    const dc = c - fc;
    if (dr >= 0 && dr < 7 && dc >= 0 && dc < 7) {
      if (dr === 0 || dr === 6 || dc === 0 || dc === 6) return true;
      if (dr === 1 || dr === 5 || dc === 1 || dc === 5) return false;
      return true;
    }
  }
  return null;
}

function FakeQR() {
  const cells: React.ReactNode[] = [];
  for (let r = 0; r < QR_SIZE; r++) {
    for (let c = 0; c < QR_SIZE; c++) {
      const f = finderFill(r, c);
      const fill =
        f === true ||
        (f === null && (((r * 31 + c * 17) ^ (r * c * 13)) & 7) < 4);
      if (fill) {
        cells.push(
          <rect key={`${r}-${c}`} x={c} y={r} width={1} height={1} />,
        );
      }
    }
  }
  return (
    <svg
      viewBox={`0 0 ${QR_SIZE} ${QR_SIZE}`}
      shapeRendering="crispEdges"
      fill="#0a0a0a"
      className="h-full w-full"
    >
      {cells}
    </svg>
  );
}

export default function DownloadPage() {
  return (
    <>
      <section className="w-full px-6 pt-20 pb-24 text-center">
        <h1
          className="mx-auto max-w-3xl text-5xl font-medium leading-[0.95] tracking-[-1.5px] text-white md:text-7xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Download <span className="text-[#75cfc3]">de app.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/90">
          Scan straks deze QR-code om Revonc te installeren. Binnenkort
          beschikbaar in de App Store en Google Play.
        </p>

        <div className="mx-auto mt-14 inline-block">
          <div className="relative">
            <div className="rounded-2xl bg-white p-5 blur-md">
              <div className="h-56 w-56">
                <FakeQR />
              </div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="rounded-full bg-white px-5 py-2 text-sm font-medium tracking-wide text-[#00260e] shadow-[0_10px_24px_rgba(0,0,0,0.18)]">
                Coming soon
              </span>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
