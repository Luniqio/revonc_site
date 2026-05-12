import { SiteFooter } from "@/components/SiteFooter";

const sections = [
  {
    title: "1. Algemeen",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Deze voorwaarden zijn van toepassing op elk gebruik van de RevOnc-app en bijbehorende diensten.",
  },
  {
    title: "2. Toegang en gebruik",
    body: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    title: "3. Account en verantwoordelijkheden",
    body: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
  },
  {
    title: "4. Medische disclaimer",
    body: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. RevOnc vervangt geen medisch advies van een behandelend arts of kinesitherapeut.",
  },
  {
    title: "5. Intellectueel eigendom",
    body: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
  },
  {
    title: "6. Aansprakelijkheid",
    body: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur. At vero eos et accusamus et iusto odio dignissimos ducimus.",
  },
  {
    title: "7. Wijzigingen",
    body: "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus. Wij behouden ons het recht voor deze voorwaarden te wijzigen.",
  },
  {
    title: "8. Toepasselijk recht",
    body: "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Op deze voorwaarden is het Belgisch recht van toepassing.",
  },
];

export default function VoorwaardenPage() {
  return (
    <>
      <section className="w-full px-6 pt-20 pb-24">
        <div className="text-center">
          <h1
            className="mx-auto max-w-3xl text-5xl font-medium leading-[0.95] tracking-[-1.5px] text-white md:text-7xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Voorwaarden
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-sm text-white/70">
            Laatst bijgewerkt: 12 mei 2026
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-3xl space-y-12">
          {sections.map(({ title, body }) => (
            <section key={title}>
              <h2
                className="text-xl font-medium text-white md:text-2xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-white/80">
                {body}
              </p>
            </section>
          ))}
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
