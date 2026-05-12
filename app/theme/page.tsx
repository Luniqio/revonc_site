const swatches = [
  { name: "bg",        var: "--bg" },
  { name: "surface",   var: "--surface" },
  { name: "surface-2", var: "--surface-2" },
  { name: "fg",        var: "--fg" },
  { name: "fg-muted",  var: "--fg-muted" },
  { name: "fg-subtle", var: "--fg-subtle" },
  { name: "primary",   var: "--primary" },
  { name: "accent",    var: "--accent" },
  { name: "border",    var: "--border" },
];

export default function ThemePage() {
  return (
    <div className="w-full px-6 py-24">
      <section className="mb-16">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-accent">
          Theme system
        </p>
        <h1
          className="text-5xl leading-[0.95] tracking-tight md:text-7xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Same component,
          <br />
          different palette.
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-fg-muted">
          The base of the Next.js project is wired up. Pick a theme from the
          floating switcher (bottom-left, dev only) and watch every token swap
          in place. New themes go in <code className="rounded bg-surface-2 px-1.5 py-0.5 text-sm">lib/themes.ts</code>{" "}
          and <code className="rounded bg-surface-2 px-1.5 py-0.5 text-sm">app/globals.css</code>.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <button className="rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-fg transition-colors hover:bg-primary-hover">
            Primary action
          </button>
          <button className="rounded-md border border-border-strong bg-transparent px-5 py-2.5 text-sm font-medium text-fg transition-colors hover:bg-fg hover:text-bg">
            Secondary
          </button>
        </div>
      </section>

      <section>
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-accent">
          Tokens
        </p>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {swatches.map((s) => (
            <div
              key={s.name}
              className="overflow-hidden rounded-md border border-border bg-surface"
            >
              <div
                className="aspect-5/3 border-b border-border"
                style={{ background: `var(${s.var})` }}
              />
              <div className="px-3 py-2 text-xs">
                <div className="font-medium">{s.name}</div>
                <div className="text-fg-subtle font-mono">{s.var}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
