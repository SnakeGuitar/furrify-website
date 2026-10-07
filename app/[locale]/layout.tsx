import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { SiteLayout } from "../components/site-layout";
import { isLocalizedLocale } from "../i18n";
import { createMetadata } from "../metadata";

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: LocaleLayoutProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocalizedLocale(locale)) return {};
  return createMetadata(locale);
}

export const viewport: Viewport = {
  themeColor: "#08090c",
  colorScheme: "dark",
};

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;
  if (!isLocalizedLocale(locale)) notFound();
  return <SiteLayout locale={locale}>{children}</SiteLayout>;
}
