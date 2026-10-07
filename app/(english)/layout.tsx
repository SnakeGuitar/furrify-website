import type { Viewport } from "next";
import { SiteLayout } from "../components/site-layout";
import { createMetadata } from "../metadata";

export const metadata = createMetadata("en");

export const viewport: Viewport = {
  themeColor: "#08090c",
  colorScheme: "dark",
};

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return <SiteLayout locale="en">{children}</SiteLayout>;
}
