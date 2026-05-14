import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { NavMenu } from "@/components/NavMenu";
import { MobileMenu } from "@/components/MobileMenu";
import { ScrollProgress } from "@/components/ScrollProgress";
import { DEFAULT_THEME, STORAGE_KEY, THEMES } from "@/lib/themes";

/* Body font ------------------------------------------------ */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

/* Display font (GC Akihiko Demo) — all 8 weights -------- */
const akihiko = localFont({
  src: [
    { path: "../public/fonts/GCAkihikoDemo-Thin-BF69e09758787bf.ttf",       weight: "100", style: "normal" },
    { path: "../public/fonts/GCAkihikoDemo-ExtraLight-BF69e097582a1fc.ttf", weight: "200", style: "normal" },
    { path: "../public/fonts/GCAkihikoDemo-Light-BF69e097584be86.ttf",      weight: "300", style: "normal" },
    { path: "../public/fonts/GCAkihikoDemo-Regular-BF69e0975868fd8.ttf",    weight: "400", style: "normal" },
    { path: "../public/fonts/GCAkihikoDemo-Medium-BF69e097585a8e8.ttf",     weight: "500", style: "normal" },
    { path: "../public/fonts/GCAkihikoDemo-SemiBold-BF69e097583a507.ttf",   weight: "600", style: "normal" },
    { path: "../public/fonts/GCAkihikoDemo-Bold-BF69e09757d1553.ttf",       weight: "700", style: "normal" },
    { path: "../public/fonts/GCAkihikoDemo-ExtraBold-BF69e097580747d.ttf",  weight: "800", style: "normal" },
  ],
  variable: "--font-display",
  display: "swap",
  fallback: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
});

export const metadata: Metadata = {
  title: "Revonc",
  description:
    "Persoonlijke beweegbegeleiding na kanker. Klinisch onderbouwd, dagelijks afgestemd.",
  icons: { icon: "/branding/revonc_icon.svg" },
};

/* No-flash theme bootstrap.
   Runs synchronously in <head> before React hydrates so
   the right palette is applied on the first paint. */
const validIds = THEMES.map((t) => t.id).join(",");
const themeBootstrap = `
(function(){
  try {
    var s = localStorage.getItem("${STORAGE_KEY}");
    var valid = "${validIds}".split(",");
    var t = (s && valid.indexOf(s) !== -1) ? s : "${DEFAULT_THEME}";
    document.documentElement.dataset.theme = t;
  } catch (e) {
    document.documentElement.dataset.theme = "${DEFAULT_THEME}";
  }
})();
`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="nl"
      data-theme={DEFAULT_THEME}
      className={`${inter.variable} ${akihiko.variable} overflow-x-clip`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootstrap }} />
      </head>
      <body className="min-h-full flex flex-col overflow-x-clip">
        <ThemeProvider>
          <div aria-hidden className="gutter-pattern gutter-pattern--left" />
          <div aria-hidden className="gutter-pattern gutter-pattern--right" />
          <header className="relative z-50 border-b border-[#CFCFCF]/20">
            <div className="relative isolate mx-auto grid h-20 w-full max-w-300 grid-cols-[1fr_auto_1fr] items-center border-x border-[#CFCFCF]/20 px-4">
              <div aria-hidden className="navbar-pattern-fill" />
              <Link href="/" className="inline-flex items-center justify-self-start">
                <Image
                  src="/branding/revonc_white.svg"
                  alt="Revonc"
                  width={140}
                  height={32}
                  priority
                  className="h-9 w-auto"
                />
              </Link>
              <NavMenu className="justify-self-center" />
              <div className="col-start-3 justify-self-end">
                <Link
                  href="/#contact"
                  className="hidden rounded-[100px] bg-[#FFA17A] px-5 py-2 text-sm font-normal text-[#00260e] transition-opacity duration-200 ease-out hover:opacity-90 md:inline-flex"
                >
                  Plan een gesprek
                </Link>
                <MobileMenu />
              </div>
              <Image
                src="/cross.svg"
                alt=""
                aria-hidden
                width={17}
                height={18}
                className="pointer-events-none absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2"
              />
              <Image
                src="/cross.svg"
                alt=""
                aria-hidden
                width={17}
                height={18}
                className="pointer-events-none absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2"
              />
            </div>
          </header>
          <main className="relative isolate mx-auto flex w-full max-w-300 flex-1 flex-col border-x border-[#CFCFCF]/20">
            <ScrollProgress />
            {children}
          </main>
          <ThemeSwitcher />
        </ThemeProvider>
      </body>
    </html>
  );
}
