/**
 * Theme catalog.
 *
 * Each theme is just a string id. The actual color values live in
 * `app/globals.css` under `:root[data-theme="..."]` selectors. The
 * <ThemeProvider /> applies the active id to `<html data-theme>`.
 *
 * To add a new theme:
 *   1. Add an entry below.
 *   2. Add a matching `:root[data-theme="<id>"]` block in globals.css.
 */

export type Theme = {
  id: string;
  name: string;
  description: string;
  /** Two swatches the dev-only switcher shows next to the name. */
  preview: { bg: string; primary: string };
};

export const THEMES = [
  {
    id: "mint",
    name: "Mint",
    description: "Brand white + teal — default",
    preview: { bg: "#eefffe", primary: "#176768" },
  },
  {
    id: "noir",
    name: "Noir",
    description: "Bone + black, no teal",
    preview: { bg: "#f7fefd", primary: "#00260e" },
  },
  {
    id: "dusk",
    name: "Dusk",
    description: "Dark ink + bright teal accent",
    preview: { bg: "#00260e", primary: "#41c5c0" },
  },
  {
    id: "paper",
    name: "Paper",
    description: "Warm cream + dark green",
    preview: { bg: "#f8f3e8", primary: "#133530" },
  },
] as const satisfies readonly Theme[];

export type ThemeId = (typeof THEMES)[number]["id"];

export const DEFAULT_THEME: ThemeId = "mint";

export const STORAGE_KEY = "revonc:theme";
