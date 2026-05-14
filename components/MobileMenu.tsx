"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  { href: "/",                   label: "Home" },
  { href: "/#probleem",          label: "Het probleem" },
  { href: "/#resultaten",        label: "Resultaten" },
  { href: "/verhaal",            label: "Verhaal" },
  { href: "/voor-organisaties",  label: "Organisaties" },
];

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Lock background scroll while the drawer is open.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // Close on Esc.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <button
        type="button"
        aria-label="Menu openen"
        aria-expanded={open}
        onClick={() => setOpen(true)}
        className="flex cursor-pointer flex-col items-end gap-1.5 p-2 md:hidden"
      >
        <span className="block h-0.5 w-6 bg-white" />
        <span className="block h-0.5 w-6 bg-white" />
        <span className="block h-0.5 w-6 bg-white" />
      </button>

      {/* Always mounted so opacity can transition; pointer-events-none
          when closed so taps pass through. aria-hidden mirrors state. */}
      <div
        aria-hidden={!open}
        className={`fixed inset-0 z-60 flex flex-col bg-[#176768] px-6 py-5 transition-opacity duration-200 ease-out md:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex items-center justify-between">
          <Image
            src="/branding/revonc_white.svg"
            alt="Revonc"
            width={140}
            height={32}
            priority
            className="h-8 w-auto"
          />
          <button
            type="button"
            aria-label="Menu sluiten"
            onClick={() => setOpen(false)}
            className="cursor-pointer p-2 text-3xl leading-none text-white"
          >
            ×
          </button>
        </div>

        <nav className="flex flex-1 flex-col items-center justify-center gap-8 text-center">
          {items.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={`text-3xl text-white ${
                  active ? "font-bold" : "font-normal"
                }`}
                style={{ fontFamily: "var(--font-display)" }}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/#contact"
          onClick={() => setOpen(false)}
          className="mx-auto rounded-[100px] bg-[#FFA17A] px-7 py-3 text-base font-normal text-[#00260e] transition-opacity duration-200 ease-out hover:opacity-90"
        >
          Plan een gesprek
        </Link>
      </div>
    </>
  );
}
