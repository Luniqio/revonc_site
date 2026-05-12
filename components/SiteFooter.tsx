import Image from "next/image";
import Link from "next/link";

export function SiteFooter() {
  return (
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
          <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-4">
            <Image
              src="/branding/revonc_full.svg"
              alt="Revonc"
              width={120}
              height={28}
              className="h-7 w-auto"
            />
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
  );
}
