import Image from "next/image";
import Link from "next/link";

const segmenten = [
  {
    title: "Farma en biotech",
    body: "Uw behandeling stopt niet bij het laatste infuus. Co-brandbare patiëntbegeleiding met exporteerbare real-world evidence voor markttoelatingsdossiers.",
  },
  {
    title: "Ziekenhuizen",
    body: "Uw patiënten verdwijnen na ontslag uit beeld. RevOnc is het digitale verlengstuk van uw zorgpad. Gepersonaliseerd bewegen zonder extra belasting van uw team.",
  },
  {
    title: "Verzekeraars en arbo",
    body: "Verlaag verzuimduur, bied preventieve oncologische zorg en differentieer van concurrenten. Meetbare impact op werkhervatting.",
  },
];

const reasons = [
  {
    title: "Geen IT-integratie nodig",
    body: "Patiënten downloaden de app zelf. Geen EMR-koppeling, geen IT-project. Integratie is optioneel in fase 2.",
  },
  {
    title: "Bewezen in pilootstudie",
    body: "Pilootstudie bij AZorg Aalst met 43 patiënten. Significante vermoeidheidsreductie. 8.1/10 tevredenheid. Op weg naar MDR-proof.",
  },
  {
    title: "Real-world evidence",
    body: "Geaggregeerde inzichten over patiëntuitkomsten. Bruikbaar voor markttoelating, kwaliteitsrapportage en analyses.",
  },
  {
    title: "GDPR-compliant",
    body: "Data gehost op AWS Frankfurt. Geen individuele patiëntdata gedeeld met derden.",
  },
  {
    title: "Co-branding mogelijk",
    body: "Uw logo, uw kleuren, uw patiënten. RevOnc kan volledig onder uw merk draaien.",
  },
];

const stats = [
  { value: "43",     label: "Patiënten geëncludeerd" },
  { value: "10 wk",  label: "Programma AZorg Aalst" },
  { value: "8.1/10", label: "Patiënttevredenheid" },
  { value: "83%",    label: "Wil doorgaan na programma" },
];

function FormField({
  id,
  label,
  type = "text",
  light = false,
}: {
  id: string;
  label: string;
  type?: string;
  light?: boolean;
}) {
  const labelCls = light ? "text-white/80" : "text-[#00260e]";
  const inputCls = light
    ? "border-white/30 text-white focus:border-white"
    : "border-[#00260e]/30 text-[#00260e] focus:border-[#176768]";
  return (
    <div>
      <label htmlFor={id} className={`block text-xs ${labelCls}`}>
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        className={`mt-1 w-full border-b bg-transparent py-1 text-sm outline-none ${inputCls}`}
      />
    </div>
  );
}

export default function VoorOrganisatiesPage() {
  return (
    <>
      {/* Hero --------------------------------------------------------- */}
      <section className="w-full px-6 pt-20 pb-12 text-center">
        <h1
          className="mx-auto max-w-3xl text-5xl font-medium leading-[0.9] tracking-[-1.5px] text-white md:text-7xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Digitale nazorg
          <br />
          als dienst.
        </h1>
        <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-white/90">
          RevOnc biedt ziekenhuizen, farmabedrijven, verzekeraars en
          arbodiensten een kant-en-klaar digitaal nazorgplatform. Bewezen in
          pilootstudie, geen IT-integratie nodig.
        </p>

        <div className="mx-auto mt-10 max-w-md rounded-2xl bg-[#DEF7F6] p-8 text-[#00260e]">
          <form className="space-y-5 text-left">
            <FormField id="org-naam" label="Naam" />
            <FormField id="org-bedrijf" label="Bedrijf / Organisatie" />
            <FormField id="org-email" label="E-mailadres" type="email" />
            <FormField id="org-tel" label="Telefoonnummer" type="tel" />
            <button
              type="submit"
              className="mt-2 w-full cursor-pointer rounded-full bg-[#41c5c0] px-6 py-2.5 text-sm font-normal text-white transition-colors duration-200 ease-out hover:bg-[#176768]"
            >
              Plan een kennismaking
            </button>
          </form>
          <p className="mt-4 text-center text-xs text-[#00260e]/70">
            We nemen binnen 24 uur contact met u op.
          </p>
        </div>
      </section>

      {/* Onze segmenten ----------------------------------------------- */}
      <section id="segmenten" className="px-6 py-24">
        <div className="text-center">
          <h2
            className="mx-auto max-w-2xl text-4xl font-medium leading-[0.95] tracking-[-1px] md:text-5xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <span className="text-white">Voor elk type organisatie</span>
            <span className="text-[#75cfc3]"> een passend model.</span>
          </h2>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-3.5 md:grid-cols-3">
          {segmenten.map(({ title, body }) => (
            <article
              key={title}
              className="flex flex-col items-start gap-3.5 rounded-[10px] bg-[#398E8D] p-5"
            >
              <h3
                className="text-lg font-medium capitalize leading-[1.4] tracking-[0.36px] text-[#FFA17A]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {title}
              </h3>
              <p className="text-sm leading-relaxed text-white/90">{body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Waarom RevOnc — full-bleed mint ------------------------------ */}
      <section
        id="waarom"
        className="relative ml-[calc(50%-50vw)] w-screen py-20 text-[#00260e]"
      >
        <div
          aria-hidden
          className="absolute inset-0 -z-20 rounded-[20px] bg-[#DEF7F6]"
        />
        <div className="mx-auto max-w-5xl px-6 md:px-12">
          <div className="text-center">
            <h2
              className="mx-auto max-w-2xl text-4xl font-medium leading-[0.95] tracking-[-1px] md:text-5xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              <span className="text-[#00260e]">Waarom organisaties kiezen</span>
              <span className="text-[#41c5c0]"> voor RevOnc.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed">
              Geen maanden onboarding. Geen IT-projecten. Resultaat vanaf dag
              1.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-x-12 gap-y-8 md:grid-cols-2">
            {reasons.map(({ title, body }) => (
              <div key={title} className="border-l border-[#176768]/40 pl-5">
                <h3
                  className="text-lg font-medium tracking-[-0.2px]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#00260e]/80">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Onze pilootresultaten ---------------------------------------- */}
      <section id="resultaten-org" className="px-6 py-24">
        <div className="text-center">
          <h2
            className="text-4xl font-medium leading-[0.95] tracking-[-1px] md:text-5xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <span className="text-white">Onze </span>
            <span className="text-[#75cfc3]">pilootresultaten.</span>
          </h2>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map(({ value, label }) => (
            <div
              key={label}
              className="border-l border-white/20 pl-5 text-left"
            >
              <div
                className="text-5xl font-medium leading-none text-[#FFA17A] md:text-6xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {value}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-white/90">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Closing CTA — on teal/gradient bg ---------------------------- */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <h2
              className="mx-auto max-w-2xl text-4xl font-medium leading-[0.95] tracking-[-1px] md:text-5xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              <span className="text-white">Ontvang het volledige</span>{" "}
              <span className="text-[#75cfc3]">pilootrapport.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/90">
              Wij sturen u de volledige resultaten van onze pilootstudie. Geen
              verkooppraatje, gewoon data.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-md rounded-2xl bg-[#DEF7F6] p-8 text-[#00260e]">
            <form className="space-y-5">
              <FormField id="rep-naam" label="Naam" />
              <FormField id="rep-bedrijf" label="Bedrijf / Organisatie" />
              <FormField id="rep-email" label="E-mailadres" type="email" />
              <FormField id="rep-tel" label="Telefoonnummer" type="tel" />
              <button
                type="submit"
                className="mt-2 w-full cursor-pointer rounded-full bg-[#41c5c0] px-6 py-2.5 text-sm font-normal text-white transition-colors duration-200 ease-out hover:bg-[#176768]"
              >
                Vraag het rapport aan
              </button>
            </form>
            <p className="mt-4 text-center text-xs text-[#00260e]/70">
              We sturen het rapport binnen 24 uur naar uw e-mail.
            </p>
          </div>
        </div>
      </section>

      {/* Footer ------------------------------------------------------- */}
      <div
        id="contact-bg"
        className="relative ml-[calc(50%-50vw)] w-screen text-[#00260e]"
      >
        <div
          aria-hidden
          className="absolute inset-0 -z-20 rounded-t-[20px] bg-[#DEF7F6]"
        />

        <footer id="footer" className="px-6">
          <div className="mx-auto max-w-5xl border-t border-[#00260e]/15 py-8 text-sm">
            <div className="flex flex-col items-start gap-4 md:flex-row md:flex-wrap md:items-center md:justify-between md:gap-x-8 md:gap-y-4">
              <Link href="/" aria-label="Naar de homepage" className="inline-flex">
                <Image
                  src="/branding/revonc_full.svg"
                  alt="Revonc"
                  width={120}
                  height={28}
                  className="h-7 w-auto"
                />
              </Link>
              <span>© 2026 RevOnc BV — Voskenslaan 464, 9000 Gent</span>
              <a href="mailto:yorin@revonc.be" className="hover:underline">
                yorin@revonc.be
              </a>
              <Link href="/privacy" className="hover:underline">
                Privacybeleid
              </Link>
              <Link href="/voorwaarden" className="hover:underline">
                Voorwaarden
              </Link>
              <a
                href="https://www.linkedin.com/company/revonc"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                LinkedIn
              </a>
            </div>
            <div className="mt-8 text-center text-xs text-[#00260e]/30">
              <a
                href="https://luniq.io"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-[#00260e]/60"
              >
                Built by Luniq
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
