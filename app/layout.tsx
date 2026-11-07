import type { Metadata } from "next";
import "./globals.css";
import { SiteFooter } from "@/components/navigation/site-footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://weelitead.com"),
  title: { default: "We Elite — Creative excellence, elevated.", template: "%s — We Elite" },
  description: "We Elite creates refined interiors and delivers considered construction projects from concept to completion.",
  keywords: ["construction", "interior design", "turnkey projects", "fit-out", "We Elite"],
  alternates: { canonical: "/" },
  openGraph: { title: "We Elite — Creative excellence, elevated.", description: "A refined creative partner for ambitious brands.", url: "https://weelitead.com", siteName: "We Elite", type: "website", images: [{ url: "/images/hero-gallery.png", width: 1536, height: 864, alt: "Warm modern gallery interior" }] },
  twitter: { card: "summary_large_image", title: "We Elite — Creative excellence, elevated.", description: "A refined creative partner for ambitious brands.", images: ["/images/hero-gallery.png"] },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" suppressHydrationWarning><body suppressHydrationWarning><a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-gold focus:px-4 focus:py-3 focus:text-xs focus:text-ink">Skip to content</a>{children}<SiteFooter /></body></html>;
}
