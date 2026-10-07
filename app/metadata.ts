import type { Metadata } from "next";
import type { Locale } from "./i18n";
import { translations } from "./i18n";

export function createMetadata(locale: Locale): Metadata {
  const { meta } = translations[locale];

  return {
    title: meta.title,
    description: meta.description,
    applicationName: "Furrify",
    keywords: [
      "furry marketplace",
      "furry artists",
      "fursuit makers",
      "art commissions",
      "creator marketplace",
    ],
    icons: { icon: "/favicon.svg" },
    alternates: {
      canonical: locale === "en" ? "/" : `/${locale}`,
      languages: {
        en: "/",
        es: "/es",
        pt: "/pt",
        ja: "/ja",
      },
    },
  };
}
