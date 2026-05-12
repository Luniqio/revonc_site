import { SiteFooter } from "@/components/SiteFooter";

const sections = [
  {
    title: "1. Inleiding",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: "2. Welke gegevens verzamelen wij",
    body: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
  },
  {
    title: "3. Hoe gebruiken wij uw gegevens",
    body: "Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
  },
  {
    title: "4. Bewaartermijn",
    body: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
  },
  {
    title: "5. Uw rechten",
    body: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.",
  },
  {
    title: "6. Cookies",
    body: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi.",
  },
  {
    title: "7. Contact",
    body: "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus. Voor vragen over dit privacybeleid kunt u contact opnemen via yorin@revonc.be.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <section className="w-full px-6 pt-20 pb-24">
        <div className="text-center">
          <h1
            className="mx-auto max-w-3xl text-5xl font-medium leading-[0.95] tracking-[-1.5px] text-white md:text-7xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Privacybeleid
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
