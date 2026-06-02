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
    "Jan Matusiak — Kancelaria Radcy Prawnego w Krakowie. Rozwiązania prawne dla przedsiębiorców i klientów indywidualnych.",
  keywords:
    "radca prawny, Jan Matusiak, prawo spółek, obsługa przedsiębiorców, kancelaria prawna, prawo umów, własność intelektualna",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: "https://matusiak.legal",
    siteName: "Jan Matusiak Kancelaria Radcy Prawnego",
    title: "Jan Matusiak Kancelaria Radcy Prawnego Kraków",
    description:
      "Jan Matusiak — Kancelaria Radcy Prawnego w Krakowie. Rozwiązania prawne dla przedsiębiorców i klientów indywidualnych.",
    images: [{ url: "/jan-matusiak.jpg", width: 800, height: 800, alt: "Jan Matusiak — Radca Prawny" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jan Matusiak Kancelaria Radcy Prawnego Kraków",
    description:
      "Kancelaria radcy prawnego Jana Matusiaka. Strategiczne wsparcie prawne dla przedsiębiorców i klientów indywidualnych.",
    images: ["/jan-matusiak.jpg"],
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
