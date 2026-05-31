import type { Metadata } from "next";
import { Box, Container, Grid, Typography } from "@mui/material";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/link";
import { DlaPrzedsiebiorcowCTA } from "@/components/DlaPrzedsiebiorcowClient";

export const metadata: Metadata = {
  title: "Dla przedsiębiorców | Jan Matusiak — Radca Prawny",
  description:
    "Obsługa prawna dla przedsiębiorców MSP i właścicieli firm. Zewnętrzny radca prawny zamiast stałych zobowiązań — stałe wsparcie, elastyczny model, bezpośredni dostęp.",
  alternates: {
    canonical: "https://matusiak.legal/dla-przedsiebiorcow",
    languages: {
      pl: "https://matusiak.legal/dla-przedsiebiorcow",
      en: "https://matusiak.legal/en/dla-przedsiebiorcow",
    },
  },
};

const NAVY = "#2B3A4A";
const GOLD = "#2B3A4A";
const BORDER = "#D4E2EA";
const LIGHT = "#EDF3F6";


const modelPoints = [
  {
    label: "Bezpośredni dostęp",
    desc: "Kontaktujesz się bezpośrednio ze mną — nie z asystentem ani sekretariatem.",
  },
  {
    label: "Stałe wsparcie bez etatu",
    desc: "Model retainer (ryczałt miesięczny) albo zlecenia ad hoc. Dostajesz dostęp do radcy prawnego bez kosztów i zobowiązań etatu.",
  },
  {
    label: "Zrozumienie kontekstu biznesowego",
    desc: "Interesuje mnie, jak decyzja prawna wpłynie na Twój biznes — nie tylko co mówi przepis.",
  },
  {
    label: "Terminowość i jasne zasady współpracy",
    desc: "Dotrzymuję terminów. Jeśli sprawa wymaga większego nakładu czasu lub zaangażowania dodatkowych ekspertów — informuję o tym z wyprzedzeniem, nie po fakcie.",
  },
  {
    label: "Zdalnie i sprawnie",
    desc: "Działam ogólnopolsko, głównie zdalnie — telefon, mail, wideokonferencje. Jeśli sprawa tego wymaga, chętnie spotkam się też osobiście.",
  },
  {
    label: "Transparentność jako gwarancja jakości",
    desc: "Stawiam na bezpośrednią relację z klientem. Prowadzę sprawy, w których mogę realnie pomóc, a jeśli temat wykracza poza moje kompetencje, powiem o tym wprost.",
  },
];

export default function DlaPrzedsiebiorcowPage() {
  return (
    <Box sx={{ backgroundColor: "#ffffff", minHeight: "100vh" }}>

      {/* ── NAGŁÓWEK ── */}
      <Box sx={{
        backgroundColor: NAVY,
        pt: { xs: "88px", md: "108px" },
        pb: { xs: 6, md: 7 },
        borderBottom: `3px solid ${GOLD}`,
      }}>
        <Container maxWidth="lg" sx={{ px: { xs: 3, md: 6 } }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2.5 }}>
            <Box sx={{ width: 24, height: "1.5px", backgroundColor: GOLD }} />
            <Typography sx={{
              color: GOLD, fontSize: "0.68rem", fontWeight: 600,
              letterSpacing: "0.22em", textTransform: "uppercase",
            }}>
              Dla przedsiębiorców
            </Typography>
          </Box>
          <Typography variant="h1" sx={{
            color: "#ffffff",
            fontSize: { xs: "2rem", md: "3rem" },
            lineHeight: 1.15, letterSpacing: "-0.015em", mb: 2, maxWidth: 680,
          }}>
            Radca prawny dla{" "}
            <Box component="span" sx={{ color: "#EDF3F6", fontStyle: "italic" }}>
              właściciela firmy.
            </Box>
          </Typography>
          <Typography sx={{
            color: "rgba(255,255,255,0.6)",
            fontSize: { xs: "0.9rem", md: "1rem" },
            lineHeight: 1.75, maxWidth: 580,
          }}>
            Nie każda firma potrzebuje własnego działu prawnego. Natomiast każda,
            szczególnie w fazie wzrostu, powinna wiedzieć do kogo zwrócić się o wsparcie
            w sytuacjach wymagających zaangażowania profesjonalisty.
          </Typography>
        </Container>
      </Box>

      {/* ── MODEL WSPÓŁPRACY ── */}
      <Box sx={{ backgroundColor: "#ffffff", py: { xs: 7, md: 9 }, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg" sx={{ px: { xs: 3, md: 6 } }}>
          <Grid container spacing={{ xs: 4, md: 8 }} alignItems="flex-start">

            <Grid size={{ xs: 12, md: 5 }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2.5 }}>
                <Box sx={{ width: 24, height: "1.5px", backgroundColor: GOLD }} />
                <Typography sx={{
                  color: GOLD, fontSize: "0.68rem", fontWeight: 600,
                  letterSpacing: "0.22em", textTransform: "uppercase",
                }}>
                  Model pracy
                </Typography>
              </Box>
              <Typography variant="h2" sx={{
                color: NAVY,
                fontSize: { xs: "1.5rem", md: "1.9rem" },
                lineHeight: 1.25, letterSpacing: "-0.01em", mb: 2,
              }}>
                Zewnętrzny radca prawny zamiast stałych zobowiązań.
              </Typography>
              <Typography sx={{
                fontSize: "0.9rem", color: "#5A5A5A", lineHeight: 1.85, mb: 3,
              }}>
                Duże firmy dysponują własnymi działami prawnymi. Średnie i mniejsze firmy najczęściej nie i korzystają z pomocy prawnej doraźnie, gdy problem już istnieje.
              </Typography>
              <Typography sx={{
                fontSize: "0.9rem", color: "#5A5A5A", lineHeight: 1.85, mb: 3,
              }}>
                Model, który proponuję, to dostęp do radcy prawnego wbudowanego w Twój biznes, bez konieczności utrzymywania stałego działu prawnego kiedy nie ma takiej potrzeby.
              </Typography>
              <Typography sx={{
                fontSize: "0.9rem", color: "#5A5A5A", lineHeight: 1.85,
              }}>
                Współpracuję również z klientami posiadającymi wewnętrzne działy prawne — jako zewnętrzny counsel wspieram zespoły in-house w sprawach wymagających pogłębionej wiedzy branżowej lub większego wsparcia operacyjnego.
              </Typography>
            </Grid>

            <Grid size={{ xs: 12, md: 7 }}>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 0 }}>
                {modelPoints.map((point, i) => (
                  <Box
                    key={i}
                    sx={{
                      display: "flex",
                      gap: 2.5,
                      py: 2.5,
                      borderBottom: i < modelPoints.length - 1 ? `1px solid ${BORDER}` : "none",
                    }}
                  >
                    <Box sx={{
                      color: GOLD,
                      mt: "2px",
                      flexShrink: 0,
                      "& svg": { fontSize: "1rem" },
                    }}>
                      <CheckOutlinedIcon />
                    </Box>
                    <Box>
                      <Typography sx={{
                        fontSize: "0.875rem", fontWeight: 700,
                        color: NAVY, mb: 0.5,
                      }}>
                        {point.label}
                      </Typography>
                      <Typography sx={{
                        fontSize: "0.85rem", color: "#5A5A5A", lineHeight: 1.7,
                      }}>
                        {point.desc}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Grid>

          </Grid>
        </Container>
      </Box>


      {/* ── LINK DO PRAKTYKI ── */}
      <Box sx={{ backgroundColor: "#ffffff", py: { xs: 5, md: 6 }, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg" sx={{ px: { xs: 3, md: 6 } }}>
          <Box sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "flex-start", md: "center" },
            justifyContent: "space-between",
            gap: 3,
            backgroundColor: LIGHT,
            border: `1px solid ${BORDER}`,
            p: { xs: 3, md: 4 },
          }}>
            <Box>
              <Typography sx={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontWeight: 700,
                fontSize: { xs: "1rem", md: "1.15rem" },
                color: NAVY, mb: 0.75,
              }}>
                Szukasz konkretnego zakresu obsługi?
              </Typography>
            </Box>
            <Link href="/praktyka" style={{ textDecoration: "none", flexShrink: 0 }}>
              <Box sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                color: NAVY,
                fontWeight: 700,
                fontSize: "0.875rem",
                whiteSpace: "nowrap",
                "&:hover": { color: GOLD },
                transition: "color 0.2s",
              }}>
                Zakres praktyki
                <ArrowForwardIcon sx={{ fontSize: "0.95rem" }} />
              </Box>
            </Link>
          </Box>
        </Container>
      </Box>

      {/* ── CTA ── */}
      <Box sx={{
        backgroundColor: NAVY,
        py: { xs: 6, md: 7 },
        borderTop: `3px solid rgba(255,255,255,0.15)`,
        borderBottom: `1px solid rgba(255,255,255,0.08)`,
      }}>
        <Container maxWidth="lg" sx={{ px: { xs: 3, md: 6 } }}>
          <Grid container spacing={4} alignItems="center">
            <Grid size={{ xs: 12, md: 8 }}>
              <Typography variant="h2" sx={{
                color: "#ffffff",
                fontSize: { xs: "1.5rem", md: "2rem" },
                lineHeight: 1.25, mb: 1.5, letterSpacing: "-0.01em",
              }}>
                Porozmawiajmy o Twojej{" "}
                <Box component="span" sx={{ color: "#EDF3F6", fontStyle: "italic" }}>
                  firmie.
                </Box>
              </Typography>
              <Typography sx={{
                color: "rgba(255,255,255,0.6)",
                fontSize: "0.925rem", lineHeight: 1.75, maxWidth: 500,
              }}>
                Krótka rozmowa rozpoznawcza — bez zobowiązań. Powiedz,
                na jakim etapie jest firma i z czym potrzebujesz wsparcia.
                Powiem wprost, czy mogę pomóc i jak wyglądałaby współpraca.
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <DlaPrzedsiebiorcowCTA />
            </Grid>
          </Grid>
        </Container>
      </Box>

    </Box>
  );
}
