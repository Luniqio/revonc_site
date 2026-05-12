import Image from "next/image";
import { SiteFooter } from "@/components/SiteFooter";

export default function VerhaalPage() {
  return (
    <>
      <section className="w-full px-6 pt-20 pb-24 text-center">
      <h1
        className="mx-auto max-w-3xl text-5xl font-medium leading-[0.95] tracking-[-1.5px] text-white md:text-7xl"
        style={{ fontFamily: "var(--font-display)" }}
      >
        Gebouwd door<br></br> iemand die het zag van binnenuit.
      </h1>

      <div className="mx-auto mt-12 max-w-xl space-y-6 text-left text-base leading-relaxed text-white/90">
        <p>Liv zei het in één zin: &ldquo;Ik viel in een zwart gat.&rdquo;</p>
        <p>
          Na haar kankerbehandeling was er niets. Geen opvolging, geen plan,
          geen begeleiding. Het systeem dat haar behandelde, liet haar alleen
          voor alles wat daarna kwam. Ze moest opnieuw alleen vechten.
        </p>
        <p>Dat was het startpunt van RevOnc.</p>
        <p>
          Yorin De Smet is kinesitherapeut. Na zijn studies aan de UGent en
          stages in oncologische revalidatie zag hij hetzelfde patroon:
          patiënten werden ontslagen met een pamflet en aan hun lot
          overgelaten. Hij besloot te bouwen wat niemand anders bouwde.
        </p>
        <p>
          RevOnc werd opgericht in 2024 in Gent. Een pilootstudie bij AZorg
          Aalst met significante resultaten. Steun van VLAIO en Vocatio. Het
          doel: een wereld waarin iemand als Liv haar leven effectief kan
          heropbouwen.
        </p>
      </div>

      <div className="mx-auto mt-12 flex max-w-xl items-center justify-center gap-4">
        <Image
          src="/yorin.webp"
          alt="Yorin De Smet"
          width={56}
          height={56}
          className="h-14 w-14 rounded-full object-cover"
        />
        <div className="text-left">
          <p className="text-base font-medium text-white">Yorin De Smet</p>
          <p className="text-sm text-white/70">
            Founder &amp; Kinesitherapeut · RevOnc BV
          </p>
        </div>
      </div>
    </section>

      <SiteFooter />
    </>
  );
}
