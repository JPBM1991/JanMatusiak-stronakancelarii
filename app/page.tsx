import type { Metadata } from "next";
import Hero from "@/components/Hero";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://matusiak.legal",
    languages: {
      pl: "https://matusiak.legal",
      en: "https://matusiak.legal/en",
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "Jan Matusiak Kancelaria Radcy Prawnego",
  description:
    "Jednoosobowa kancelaria radcy prawnego. Strategiczne wsparcie prawne dla przedsiębiorców i klientów indywidualnych — prawo spółek, kontrakty, sprawy sporne, majątek.",
  url: "https://matusiak.legal",
  telephone: "+48500255293",
  email: "jan.matusiak@matusiak.legal",
  address: {
    "@type": "PostalAddress",
    streetAddress: "ul. Stańczyka 22",
    addressLocality: "Kraków",
    postalCode: "30-126",
    addressCountry: "PL",
  },
  areaServed: "PL",
  founder: {
    "@type": "Person",
    name: "Jan Matusiak",
    jobTitle: "Radca Prawny",
  },
  image: "https://matusiak.legal/jan-matusiak.jpg",
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
    </>
  );
}
