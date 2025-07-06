import "server-only";
import { Dictionary } from "../types";

const dictionaries = {
  en: () => import("@/lib/lang/en.json").then((module) => module.default),
  ja: () => import("@/lib/lang/ja.json").then((module) => module.default),
};

export const getDictionary = async (locale: "en" | "ja"): Promise<Dictionary> =>
  dictionaries[locale]() as Promise<Dictionary>;
