import type { Metadata } from "next";
import type { Locale } from "./i18n";

const description =
  "Marketplace for furry artists, fursuit makers and their clients.";
const openGraphDescription =
  "The marketplace built for furry creators and their clients.";

export function createMetadata(locale: Locale): Metadata {
  return {
    title: "Furrify",
    description,
    applicationName: "Furrify",
    keywords: [
      "furry marketplace",
      "furry artists",
      "fursuit makers",
      "art commissions",
      "creator marketplace",
    ],
    icons: { icon: "/favicon.svg" },
    openGraph: {
      title: "Furrify",
      description: openGraphDescription,
      siteName: "Furrify",
      type: "website",
    },
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
