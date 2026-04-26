import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import ThemeRegistry from "@/components/ThemeRegistry";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";

export const metadata: Metadata = {
  metadataBase: new URL("https://matusiak.legal"),
  title: "Jan Matusiak Kancelaria Radcy Prawnego Kraków",
  description:
    "Jednoosobowa kancelaria radcy prawnego. Strategiczne wsparcie prawne dla przedsiębiorców i klientów indywidualnych — prawo spółek, kontrakty, sprawy sporne, majątek. Ogólnopolsko.",
  keywords:
    "radca prawny, Jan Matusiak, prawo spółek, obsługa przedsiębiorców, kancelaria prawna, prawo umów, własność intelektualna",
  robots: {
    index: true,
    follow: true,
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
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-BV02YPCF28" strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-BV02YPCF28');
        `}</Script>
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
