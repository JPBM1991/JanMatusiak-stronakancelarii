import type { Metadata } from "next";
import "./globals.css";
import ThemeRegistry from "@/components/ThemeRegistry";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";

export const metadata: Metadata = {
  title: "Jan Matusiak | Radca Prawny",
  description:
    "Jednoosobowa kancelaria radcy prawnego. Strategiczne doradztwo prawne dla przedsiębiorców — prawo spółek, kontrakty, sprawy sporne, własność intelektualna. Ogólnopolsko.",
  keywords:
    "radca prawny, Jan Matusiak, prawo spółek, obsługa przedsiębiorców, kancelaria prawna, prawo umów, własność intelektualna",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body>
        <ThemeRegistry>
          <Navigation />
          <main>{children}</main>
          <Footer />
          <CookieConsent />
        </ThemeRegistry>
      </body>
    </html>
  );
}
