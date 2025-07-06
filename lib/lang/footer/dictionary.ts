import "server-only";
import { FooterDictionary } from "@/lib/types";

const dictionaries = {
  en: () => import("@/lib/lang/footer/en.json").then((module) => module.default),
  ja: () => import("@/lib/lang/footer/ja.json").then((module) => module.default),
};

export const getFooterDictionary = async (locale: "en" | "ja"): Promise<FooterDictionary> =>
  dictionaries[locale]() as Promise<FooterDictionary>;
