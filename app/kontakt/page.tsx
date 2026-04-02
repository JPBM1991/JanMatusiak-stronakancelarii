import type { Metadata } from "next";
import { Box, Container, Grid, Typography } from "@mui/material";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Kontakt | Jan Matusiak — Radca Prawny",
  description:
    "Skontaktuj się z kancelarią. Opisz sprawę — umówimy wstępną rozmowę.",
};

const NAVY = "#2B3A4A";
const GOLD = "#2B3A4A";
const BORDER = "#D4E2EA";
const LIGHT = "#EDF3F6";

const contactDetails = [
  {
    label: "E-mail",
    value: "j.matusiak@kmtlegal.pl",
    href: "mailto:j.matusiak@kmtlegal.pl",
  },
  {
    label: "Telefon",
    value: "+48 500 255 293",
    href: "tel:+48500255293",
  },
];

const infoItems = [
  {
    title: "Jak pracuję",
    text: "Obsługuję klientów przede wszystkim w sposób zdalny. Spotkania stacjonarne są organizowane każdorazowo przy zaistnieniu takiej potrzeby.",
  },
  {
    title: "Czas odpowiedzi",
    text: "Na wiadomości e-mail i zgłoszenia z formularza odpowiadam w ciągu 1–2 dni roboczych. W pilnych sprawach — zadzwoń bezpośrednio.",
  },
  {
    title: "Współpraca",
    text: "Nawiązanie współpracy zaczynamy od korespondencji e-mail bądź krótkiej rozmowy telefonicznej, żebym mógł ocenić czy jestem w stanie pomóc w Twojej sprawie.",
  },
];

export default function KontaktPage() {
  return (
    <Box sx={{ backgroundColor: "#ffffff", minHeight: "100vh" }}>

      {/* ── NAGŁÓWEK ── */}
      <Box
        sx={{
          backgroundColor: NAVY,
          pt: { xs: "88px", md: "108px" },
          pb: { xs: 6, md: 7 },
          borderBottom: `3px solid ${GOLD}`,
        }}
      >
        <Container maxWidth="lg" sx={{ px: { xs: 3, md: 6 } }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2.5 }}>
            <Box sx={{ width: 24, height: "1.5px", backgroundColor: GOLD, flexShrink: 0 }} />
            <Typography sx={{
              color: GOLD,
              fontSize: "0.68rem",
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
            }}>
              Kontakt
            </Typography>
          </Box>
          <Typography
            variant="h1"
            sx={{
              color: "#ffffff",
              fontSize: { xs: "2rem", md: "2.8rem" },
              lineHeight: 1.15,
              letterSpacing: "-0.015em",
              mb: 1.5,
              maxWidth: 560,
            }}
          >
            Napisz, z czym{" "}
            <Box component="span" sx={{ color: GOLD, fontStyle: "italic" }}>
              przychodzisz.
            </Box>
          </Typography>
          <Typography sx={{
            color: "rgba(255,255,255,0.6)",
            fontSize: { xs: "0.9rem", md: "1rem" },
            lineHeight: 1.7,
            maxWidth: 460,
          }}>
            Pierwszym krokiem jest krótka rozmowa — żeby ocenić, czy sprawa
            pasuje do zakresu mojej praktyki.
          </Typography>
        </Container>
      </Box>

      {/* ── TREŚĆ ── */}
      <Box sx={{ backgroundColor: LIGHT, py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg" sx={{ px: { xs: 3, md: 6 } }}>
          <Grid container spacing={{ xs: 4, md: 6 }} alignItems="flex-start">

            {/* LEWA — formularz */}
            <Grid size={{ xs: 12, md: 7 }}>
              <ContactForm />
            </Grid>

            {/* PRAWA — dane + info */}
            <Grid size={{ xs: 12, md: 5 }}>

              {/* Dane kontaktowe */}
              <Box
                sx={{
                  backgroundColor: "#ffffff",
                  border: `1px solid ${BORDER}`,
                  borderTop: `3px solid ${GOLD}`,
                  p: { xs: 3, md: 3.5 },
                  mb: 3,
                }}
              >
                <Typography sx={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontWeight: 700,
                  fontSize: "1.05rem",
                  color: NAVY,
                  mb: 2.5,
                }}>
                  Dane kontaktowe
                </Typography>

                {contactDetails.map((item) => (
                  <Box key={item.label} sx={{ mb: 2 }}>
                    <Typography sx={{
                      fontSize: "0.68rem",
                      fontWeight: 600,
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: GOLD,
                      mb: 0.4,
                    }}>
                      {item.label}
                    </Typography>
                    <Typography
                      component="a"
                      href={item.href}
                      sx={{
                        fontSize: "0.95rem",
                        fontWeight: 500,
                        color: NAVY,
                        textDecoration: "none",
                        "&:hover": { color: GOLD },
                        transition: "color 0.2s",
                      }}
                    >
                      {item.value}
                    </Typography>
                  </Box>
                ))}

                <Box sx={{ borderTop: `1px solid ${BORDER}`, pt: 2, mt: 2.5 }}>
                  <Typography sx={{ fontSize: "0.68rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: GOLD, mb: 0.4 }}>
                    Zasięg
                  </Typography>
                  <Typography sx={{ fontSize: "0.88rem", color: "#4A4A4A", lineHeight: 1.65 }}>
                    Ogólnopolskie · Doradztwo międzynarodowe
                    <br />
                    Obsługa w języku polskim i angielskim
                  </Typography>
                </Box>

                <Box sx={{ borderTop: `1px solid ${BORDER}`, pt: 2, mt: 2.5 }}>
                  <Typography sx={{ fontSize: "0.68rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: GOLD, mb: 0.4 }}>
                    Spotkania osobiste
                  </Typography>
                  <Typography sx={{ fontSize: "0.88rem", color: "#4A4A4A", lineHeight: 1.65 }}>
                    Po wcześniejszym uzgodnieniu, w wybranym miejscu w Krakowie lub online (wideokonferencja).
                  </Typography>
                </Box>

                <Box sx={{ borderTop: `1px solid ${BORDER}`, pt: 2, mt: 2.5 }}>
                  <Typography sx={{ fontSize: "0.68rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: GOLD, mb: 0.4 }}>
                    Adres rejestrowy
                  </Typography>
                  <Typography sx={{ fontSize: "0.88rem", color: "#4A4A4A", lineHeight: 1.65 }}>
                    ul. Stańczyka 22/54
                    <br />
                    30-126 Kraków
                  </Typography>
                </Box>
              </Box>

              {/* Info o sposobie pracy */}
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {infoItems.map((item) => (
                  <Box
                    key={item.title}
                    sx={{
                      backgroundColor: "#ffffff",
                      border: `1px solid ${BORDER}`,
                      borderLeft: `3px solid ${GOLD}`,
                      p: { xs: 2.5, md: 3 },
                    }}
                  >
                    <Typography sx={{
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      fontWeight: 700,
                      fontSize: "0.9rem",
                      color: NAVY,
                      mb: 0.75,
                    }}>
                      {item.title}
                    </Typography>
                    <Typography sx={{ fontSize: "0.8rem", color: "#5A5A5A", lineHeight: 1.7 }}>
                      {item.text}
                    </Typography>
                  </Box>
                ))}
              </Box>

            </Grid>
          </Grid>
        </Container>
      </Box>

    </Box>
  );
}
