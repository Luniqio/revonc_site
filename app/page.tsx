import Image from "next/image";
import Link from "next/link";
import { FaqAccordion } from "@/components/FaqAccordion";

const faqs = [
  {
    q: "Wat is Revonc?",
    a: "Revonc is een wellbeing-app die je begeleidt bij je herstel na kankerbehandeling, met persoonlijke beweegprogramma's op maat.",
  },
  {
    q: "Is Revonc een medisch hulpmiddel?",
    a: "Antwoord volgt.",
  },
  {
    q: "Is bewegen na kanker veilig?",
    a: "Antwoord volgt.",
  },
  {
    q: "Er zijn toch al apps voor kankerpatiënten?",
    a: "Antwoord volgt.",
  },
  {
    q: "Vervangt Revonc kinesitherapie?",
    a: "Antwoord volgt.",
  },
  {
    q: "Moeten we IT-integratie doen om te starten?",
    a: "Antwoord volgt.",
  },
  {
    q: "Hoe beschermt Revonc mijn data?",
    a: "Antwoord volgt.",
  },
  {
    q: "Kan mijn organisatie Revonc exclusief aanbieden?",
    a: "Antwoord volgt.",
  },
  {
    q: "In welke talen is Revonc beschikbaar?",
    a: "Antwoord volgt.",
  },
];

export default function Home() {
  return (
    <>
      <section id="hero" className="w-full px-6 pt-20 text-center">
        <h1
          className="text-5xl font-medium leading-[0.9] tracking-[-1.8px] text-white md:text-[90px]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Jouw herstel,
          <br />
          Jouw pad.
        </h1>

        <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-white/90">
          Revonc is de wellbeing app die je begeleidt bij je herstel na
          kankerbehandeling. Persoonlijke kracht- en uithoudingsprogramma&apos;s
          op maat, ontwikkeld met wetenschappelijke onderbouwing en AI.
          Klinisch onderbouwd bij AZorg Aalst.
        </p>

        <div className="mt-10 flex justify-center">
          <Link
            href="/#contact"
            className="inline-flex items-center gap-3 rounded-[100px] border border-[#E7E7E4] bg-white px-7 py-3.5 text-base font-normal text-[#176768] shadow-[0_26px_27.4px_0_rgba(0,0,0,0.10)] transition-colors duration-200 ease-out hover:bg-white/90 hover:text-[#0E4F50]"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden
              className="h-5 w-5 text-[#F97316]"
            >
              <path d="M12 0 L13 11 L24 12 L13 13 L12 24 L11 13 L0 12 L11 11 Z" />
            </svg>
            Plan een gesprek
          </Link>
        </div>

        <div className="relative -mx-6 flex justify-center md:mx-0">
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 h-130.25 w-130.25 -translate-x-1/2 -translate-y-1/2 rounded-[260.505px] bg-white opacity-25 blur-[72px]"
          />
          <Image
            src="/hero_img.png"
            alt="Revonc app op iPhone"
            width={770}
            height={735}
            priority
            className="relative w-full max-w-4xl"
          />
        </div>
      </section>

      <section
        id="probleem"
        className="grid grid-cols-1 gap-16 px-6 py-24 text-left md:grid-cols-2 md:gap-24"
      >
        <div>
          <h2
            className="text-4xl font-medium leading-[0.95] tracking-[-1px] text-white md:text-5xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Na de behandeling
            <br />
            is de zorg voorbij.
            <br />
            <span className="text-[#75cfc3]">Het herstel niet.</span>
          </h2>
          <p className="mt-8 max-w-2xs text-sm leading-relaxed text-white/80">
            Je bent ontslagen uit het ziekenhuis. De afspraken worden zeldzamer.
            Niemand vertelt je hoeveel je mag bewegen, hoe je veilig opbouwt,
            of wat normaal is. Geen plan. Geen begeleiding.
          </p>
        </div>

        <div className="space-y-16">
          <div className="border-l border-white/20 pl-6 md:ml-30">
            <div
              className="text-7xl font-medium leading-[0.9] text-[#FB923C] md:text-8xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              40%
            </div>
            <p className="mt-4 max-w-55 text-sm leading-relaxed text-white/90">
              Risicoreductie herval via gepersonaliseerde beweging
            </p>
          </div>

          <div className="border-l border-white/20 pl-6">
            <div
              className="text-7xl font-medium leading-[0.9] text-[#FB923C] md:text-8xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              0
            </div>
            <p className="mt-4 max-w-55 text-sm leading-relaxed text-white/90">
              Gestructureerde digitale oplossingen bestaan vandaag
            </p>
          </div>
        </div>
      </section>

      <section
        id="oplossing"
        className="grid grid-cols-1 gap-16 px-6 py-24 md:grid-cols-2 md:gap-16"
      >
        <div className="order-2 grid grid-cols-1 gap-3.5 md:order-1 md:grid-cols-[15.4375rem_15.4375rem]">
          <article className="flex flex-col items-start gap-3.5 rounded-[10px] bg-[#398E8D] p-3.5">
            <h3
              className="text-lg font-medium capitalize leading-[1.4] tracking-[0.36px] text-[#FFA17A]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              1. Beweegdroom Instellen
            </h3>
            <p className="text-xs leading-relaxed text-white/80">
              Jij kiest het doel. Van opnieuw de trap oplopen tot 5 km
              wandelen. Dit is jouw noordster.
            </p>
          </article>

          <article className="flex flex-col items-start gap-3.5 rounded-[10px] bg-[#398E8D] p-3.5">
            <h3
              className="text-lg font-medium capitalize leading-[1.4] tracking-[0.36px] text-[#FFA17A]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              2. Fysieke Assessment
            </h3>
            <p className="text-xs leading-relaxed text-white/80">
              Een korte vragenlijst bepaalt waar jouw lichaam nu staat. Veilig
              en volledig op maat.
            </p>
          </article>

          <article className="flex flex-col items-start gap-3.5 rounded-[10px] bg-[#398E8D] p-3.5 md:col-span-2">
            <h3
              className="text-lg font-medium capitalize leading-[1.4] tracking-[0.36px] text-[#FFA17A]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              3. Persoonlijk Trainingsplan
            </h3>
            <p className="text-xs leading-relaxed text-white/80">
              De RevOnc Engine maakt jouw schema. Dagelijks 3 oefeningen met
              video, timing en intensiteit afgestemd op jouw niveau.
            </p>
          </article>

          <article className="flex flex-col items-start gap-3.5 rounded-[10px] bg-[#398E8D] p-3.5">
            <h3
              className="text-lg font-medium capitalize leading-[1.4] tracking-[0.36px] text-[#FFA17A]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              4. Dagelijks Bewegen
            </h3>
            <p className="text-xs leading-relaxed text-white/80">
              Voltooi sessies, bouw streaks op en voel hoe je sterker wordt.
            </p>
          </article>

          <article className="flex flex-col items-start gap-3.5 rounded-[10px] bg-[#398E8D] p-3.5">
            <h3
              className="text-lg font-medium capitalize leading-[1.4] tracking-[0.36px] text-[#FFA17A]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              5. Wekelijkse Evolutie
            </h3>
            <p className="text-xs leading-relaxed text-white/80">
              Het plan past zich aan jouw energie en voortgang aan. Elke week
              een stap verder.
            </p>
          </article>
        </div>

        <div className="order-1 text-left md:order-2 md:text-right">
          <h2
            className="text-4xl font-medium leading-[0.95] tracking-[-1px] md:text-5xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <span className="text-[#75cfc3]">Onze oplossing:</span>
            <br />
            <span className="text-white">
              vijf stappen naar jouw beweegdroom.
            </span>
          </h2>
          <p className="mt-8 max-w-2xs text-sm leading-relaxed text-white/80 md:ml-auto">
            RevOnc stelt een persoonlijk programma samen op basis van jouw
            niveau. Elke dag weet je wat je moet doen.
          </p>
        </div>
      </section>

      <section
        id="resultaten"
        className="relative ml-[calc(50%-50vw)] w-screen py-16 text-[#00260e]"
      >
        <div
          aria-hidden
          className="absolute inset-0 -z-20 rounded-[20px] bg-[#DEF7F6]"
        />
        <div className="mx-auto max-w-5xl px-6 md:px-12">
          <div className="text-center">
            <h2
              className="text-4xl font-medium leading-[0.95] tracking-[-1px] md:text-5xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Niet zomaar een app.
              <br />
              <span className="text-[#41c5c0]">Onderbouwd.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed">
              Pilootprogramma bij AZorg Aalst. 40% patiënten, 10 weken. In samenwerking met Prof. Marieke De Craemer (UGent).
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
            <div>
              <h3
                className="text-2xl font-medium tracking-[-0.5px] md:text-3xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Vermoeidheid<br></br> significant gedaald
              </h3>
              <p className="mt-2 text-sm">
                Meetbaar minder vermoeid na 10 weken.
              </p>

              <div className="mt-10 grid grid-cols-2 gap-4">
                <div className="border-l border-[#41c5c0]/40 pl-4">
                  <p className="text-xs font-medium uppercase tracking-[0.12em] text-[#41c5c0]">
                    Tevredenheid
                  </p>
                  <div
                    className="mt-3 text-5xl font-medium leading-none text-[#FFA17A] md:text-6xl"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    8.1/10
                  </div>
                  <p className="mt-4 text-sm">Gemiddelde patiëntscore</p>
                </div>

                <div className="border-l border-[#41c5c0]/40 pl-4 pt-25">
                  <p className="text-xs font-medium uppercase tracking-[0.12em] text-[#41c5c0]">
                    Continuatie
                  </p>
                  <div
                    className="mt-3 text-5xl font-medium leading-none text-[#FFA17A] md:text-6xl"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    83%
                  </div>
                  <p className="mt-4 text-sm">
                    Vroeg om door te gaan met het programma
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-[#C5E8E4] p-8">
              <h3 className="font-medium capitalize">
                Ontvang het volledige pilootrapport
              </h3>
              <p className="mt-2 text-sm">
                Vul je gegevens in en wij sturen je de resultaten van de
                pilootstudie.
              </p>

              <form className="mt-6 space-y-5">
                <div>
                  <label
                    htmlFor="naam"
                    className="block text-xs text-[#00260e]"
                  >
                    Uw naam
                  </label>
                  <input
                    id="naam"
                    name="naam"
                    type="text"
                    className="mt-1 w-full border-b border-[#00260e]/30 bg-transparent py-1 text-sm outline-none focus:border-[#176768]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs text-[#00260e]"
                  >
                    Uw email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="mt-1 w-full border-b border-[#00260e]/30 bg-transparent py-1 text-sm outline-none focus:border-[#176768]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="organisatie"
                    className="block text-xs text-[#00260e]"
                  >
                    Organisatie (optioneel)
                  </label>
                  <input
                    id="organisatie"
                    name="organisatie"
                    type="text"
                    className="mt-1 w-full border-b border-[#00260e]/30 bg-transparent py-1 text-sm outline-none focus:border-[#176768]"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 w-full cursor-pointer rounded-full bg-[#41c5c0] px-6 py-2.5 text-sm font-normal text-white transition-colors duration-200 ease-out hover:bg-[#176768]"
                >
                  Pilootrapport downloaden
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section id="verhalen" className="px-6 py-24">
        <div className="text-center">
          <h2
            className="text-4xl font-medium leading-[0.95] tracking-[-1px] md:text-5xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <span className="text-white">Echte verhalen,</span>
            <br />
            <span className="text-[#75cfc3]">echte impact.</span>
          </h2>
          <p className="mt-6 text-sm text-white/90">
            Stemmen uit onze pilootstudie bij AZorg Aalst.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 justify-items-center gap-6 md:grid-cols-3">
          <article className="testimonial-card flex flex-col overflow-hidden">
            <div className="flex h-42 items-center justify-center bg-[#1A1A1A]">
              <button
                type="button"
                aria-label="Speel video af"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FFA17A] transition-colors hover:bg-[#FF8C42]"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="white"
                  aria-hidden
                  className="ml-0.5 h-5 w-5"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <p className="text-sm leading-relaxed text-[#00260e]">
                Experts led medical services for every individual and family,
                built on a foundation of care, precision, and trust.
              </p>
              <p className="mt-auto pt-4 text-xs font-medium text-[#176768]">
                — Pilootdeelnemer, AZorg Aalst
              </p>
            </div>
          </article>

          <article className="testimonial-card flex flex-col p-6">
            <div className="flex flex-1 flex-col">
              <span
                aria-hidden
                className="text-3xl leading-none text-[#41c5c0]"
                style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
              >
                &ldquo;
              </span>
              <p className="mt-3 text-sm leading-relaxed text-[#00260e]">
                Experts led medical services for every individual and family,
                built on a foundation of care, precision, and trust.
              </p>
            </div>
            <div className="mt-auto border-t border-[#00260e]/15 pt-4">
              <p className="text-sm font-medium text-[#176768]">
                Pilootdeelnemer
              </p>
              <p className="mt-0.5 text-xs text-[#00260e]/70">
                AZorg Aalst — 10 weken programma
              </p>
            </div>
          </article>

          <article className="testimonial-card flex flex-col p-6">
            <div className="flex flex-1 flex-col">
              <span
                aria-hidden
                className="text-3xl leading-none text-[#41c5c0]"
                style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
              >
                &ldquo;
              </span>
              <p className="mt-3 text-sm leading-relaxed text-[#00260e]">
                Experts led medical services for every individual and family,
                built on a foundation of care, precision, and trust.
              </p>
            </div>
            <div className="mt-auto border-t border-[#00260e]/15 pt-4">
              <p className="text-sm font-medium text-[#176768]">
                Pilootdeelnemer
              </p>
              <p className="mt-0.5 text-xs text-[#00260e]/70">
                AZorg Aalst — 10 weken programma
              </p>
            </div>
          </article>
        </div>
      </section>

      <section id="organisaties" className="px-6 py-24 text-center">
        <h2
          className="mx-auto max-w-3xl text-4xl font-medium leading-[0.95] tracking-[-1px] text-white md:text-5xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Bent u een ziekenhuis,
          <br />
          verzekeraar of farmabedrijf?
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/90">
          RevOnc biedt organisaties een kant-en-klaar digitaal nazorgplatform. Standalone, klinisch onderbouwd, geen IT-integratie nodig.
        </p>
        <div className="mt-10 flex justify-center">
          <Link
            href="/voor-organisaties"
            className="rounded-full bg-[#FFA17A] px-7 py-3.5 text-base font-normal text-[#00260e] transition-colors duration-200 ease-out hover:bg-[#FF8C42]"
          >
            Ontdek ons aanbod
          </Link>
        </div>
      </section>

      <section
        id="faq"
        className="grid grid-cols-1 gap-12 px-6 py-24 md:grid-cols-2 md:items-start md:gap-16"
      >
        <h2
          className="text-5xl font-medium leading-[0.95] tracking-[-1px] md:text-6xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          <span className="text-white">Veelgestelde</span>
          <br />
          <span className="text-[#75cfc3]">Vragen.</span>
        </h2>

        <div className="md:mt-25">
          <FaqAccordion items={faqs} />
        </div>
      </section>

      <div
        id="contact-bg"
        className="relative ml-[calc(50%-50vw)] w-screen text-[#00260e]"
      >
        <div
          aria-hidden
          className="absolute inset-0 -z-20 rounded-t-[20px] bg-[#DEF7F6]"
        />
        <section id="contact" className="px-6 py-20">
          <div className="mx-auto max-w-5xl">
            <div className="text-center">
              <h2
                className="mx-auto max-w-3xl text-5xl font-medium leading-[0.95] tracking-[-1.5px] md:text-7xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Neem je leven
                <br />
                <span className="text-[#FFA17A]">terug na kanker.</span>
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed">
                Patiënt, zorgverlener of organisatie? Laten we kennismaken.
              </p>
            </div>

            <div className="mx-auto mt-12 max-w-md">
              <div className="rounded-2xl bg-[#C5E8E4] p-8">
                <form className="space-y-5">
                  <div>
                    <label htmlFor="c-naam" className="block text-xs">
                      Uw naam
                    </label>
                    <input
                      id="c-naam"
                      name="naam"
                      type="text"
                      className="mt-1 w-full border-b border-[#00260e]/30 bg-transparent py-1 text-sm outline-none focus:border-[#176768]"
                    />
                  </div>
                  <div>
                    <label htmlFor="c-email" className="block text-xs">
                      Uw email
                    </label>
                    <input
                      id="c-email"
                      name="email"
                      type="email"
                      className="mt-1 w-full border-b border-[#00260e]/30 bg-transparent py-1 text-sm outline-none focus:border-[#176768]"
                    />
                  </div>
                  <div>
                    <label htmlFor="c-org" className="block text-xs">
                      Organisatie (optioneel)
                    </label>
                    <input
                      id="c-org"
                      name="organisatie"
                      type="text"
                      className="mt-1 w-full border-b border-[#00260e]/30 bg-transparent py-1 text-sm outline-none focus:border-[#176768]"
                    />
                  </div>
                  <div>
                    <label htmlFor="c-tel" className="block text-xs">
                      Telefoonnummer (optioneel)
                    </label>
                    <input
                      id="c-tel"
                      name="telefoon"
                      type="tel"
                      className="mt-1 w-full border-b border-[#00260e]/30 bg-transparent py-1 text-sm outline-none focus:border-[#176768]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="mt-2 w-full cursor-pointer rounded-full bg-[#41c5c0] px-6 py-2.5 text-sm font-normal text-white transition-colors duration-200 ease-out hover:bg-[#176768]"
                  >
                    Plan een kennismaking
                  </button>
                </form>
              </div>

              <div className="mt-6 text-center">
                <Link
                  href="/download"
                  className="inline-flex items-center gap-1 text-sm text-[#00260e] transition-colors duration-200 ease-out hover:text-[#176768]"
                >
                  Download de app <span aria-hidden>→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <footer id="footer" className="px-6">
          <div className="mx-auto max-w-5xl border-t border-[#00260e]/15 py-8 text-sm">
            <div className="flex flex-col items-start gap-4 md:flex-row md:flex-wrap md:items-center md:justify-between md:gap-x-8 md:gap-y-4">
              <Image
                src="/branding/revonc_full.svg"
                alt="Revonc"
                width={120}
                height={28}
                className="h-7 w-auto"
              />
              <span>© 2026 RevOnc BV — Voskenslaan 464, 9000 Gent</span>
              <a
                href="mailto:yorin@revonc.be"
                className="hover:underline"
              >
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
