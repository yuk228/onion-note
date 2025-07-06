import "server-only";
import { LegalDictionary } from "@/lib/types";

const legalDictionaries = {
  terms: {
    en: () => import("@/lib/lang/legal/terms/en.json").then((module) => module.default),
    ja: () => import("@/lib/lang/legal/terms/ja.json").then((module) => module.default),
  },
  privacy: {
    en: () => import("@/lib/lang/legal/privacy/en.json").then((module) => module.default),
    ja: () => import("@/lib/lang/legal/privacy/ja.json").then((module) => module.default),
  },
};

export const getLegalDictionary = async (
  type: "terms" | "privacy",
  locale: "en" | "ja"
): Promise<LegalDictionary> => legalDictionaries[type][locale]() as Promise<LegalDictionary>;
