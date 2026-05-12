"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  { href: "/",                   label: "Home" },
  { href: "/#probleem",          label: "Het probleem" },
  { href: "/#resultaten",        label: "Resultaten" },
  { href: "/verhaal",            label: "Verhaal" },
  { href: "/voor-organisaties",  label: "Organisaties" },
];

export function NavMenu({ className = "" }: { className?: string }) {
  const pathname = usePathname();
  return (
    <nav className={`flex items-center gap-7 whitespace-nowrap text-sm text-white ${className}`}>
      {items.map(({ href, label }) => {
        const active = pathname === href;
        return (
          <Link
            key={href}
            href={href}
            className={`transition-colors duration-200 ease-out hover:text-white/70 ${
              active ? "font-bold" : "font-normal"
            }`}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
