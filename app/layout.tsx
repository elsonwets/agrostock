import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/components/language-provider";
import { PwaRegister } from "@/components/pwa-register";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "AgroStock — Entrepôts en Guinée-Bissau",
  description: "Trouvez des entrepôts, hangars et dépôts à louer ou à vendre en Guinée-Bissau.",
  manifest: "/manifest.webmanifest",
  icons: { icon: "/pwa-icon-1024.png", apple: "/pwa-icon-1024.png" },
};

export const viewport = { themeColor: "#176B3A" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr"><body><LanguageProvider><PwaRegister/><SiteHeader/>{children}<SiteFooter/></LanguageProvider></body></html>;
}
