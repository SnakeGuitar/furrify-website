import { notFound } from "next/navigation";
import { LandingPage } from "../components/landing-page";
import { isLocalizedLocale, localizedLocales } from "../i18n";

export function generateStaticParams() {
  return localizedLocales.map((locale) => ({ locale }));
}

export default async function LocalePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocalizedLocale(locale)) notFound();
  return <LandingPage locale={locale} />;
}
