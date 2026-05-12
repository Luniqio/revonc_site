"use client";

import { useState } from "react";
import { THEMES } from "@/lib/themes";
import { useTheme } from "./ThemeProvider";

/**
 * Floating theme picker, dev-only.
 * In production builds the component renders nothing.
 */
export function ThemeSwitcher() {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  if (process.env.NODE_ENV !== "development") return null;

  const active = THEMES.find((t) => t.id === theme) ?? THEMES[0];

  return (
    <div
      className="fixed bottom-4 left-4 z-[9999] font-mono text-[11px]"
      style={{ fontFamily: "ui-monospace, monospace" }}
    >
      {open && (
        <div className="mb-2 flex flex-col gap-1 rounded-lg border border-black/10 bg-white p-2 shadow-lg dark:border-white/10 dark:bg-zinc-900">
          {THEMES.map((t) => {
            const isActive = t.id === theme;
            return (
              <button
                key={t.id}
                onClick={() => {
                  setTheme(t.id);
                  setOpen(false);
                }}
                className={`flex items-center gap-2 rounded-md px-2 py-1.5 text-left transition-colors hover:bg-black/5 dark:hover:bg-white/10 ${
                  isActive ? "bg-black/5 dark:bg-white/10" : ""
                }`}
              >
                <span className="flex shrink-0 overflow-hidden rounded-sm border border-black/10 dark:border-white/10">
                  <span
                    aria-hidden
                    className="block h-4 w-4"
                    style={{ background: t.preview.bg }}
                  />
                  <span
                    aria-hidden
                    className="block h-4 w-4"
                    style={{ background: t.preview.primary }}
                  />
                </span>
                <span className="flex flex-col leading-tight">
                  <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                    {t.name}
                  </span>
                  <span className="text-zinc-500 dark:text-zinc-400">
                    {t.description}
                  </span>
                </span>
                {isActive && (
                  <span aria-hidden className="ml-auto pl-2 text-emerald-600">
                    ●
                  </span>
                )}
              </button>
            );
          })}
        </div>
      )}

      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label="Theme switcher"
        className="flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1.5 shadow-md hover:shadow-lg dark:border-white/10 dark:bg-zinc-900"
      >
        <span className="flex overflow-hidden rounded-sm">
          <span
            aria-hidden
            className="block h-3 w-3"
            style={{ background: active.preview.bg }}
          />
          <span
            aria-hidden
            className="block h-3 w-3"
            style={{ background: active.preview.primary }}
          />
        </span>
        <span className="text-zinc-700 dark:text-zinc-200">{active.name}</span>
        <span aria-hidden className="text-zinc-400">
          {open ? "▾" : "▴"}
        </span>
      </button>
    </div>
  );
}
