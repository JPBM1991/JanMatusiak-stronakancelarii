import type { Metadata } from "next";
import { Box, Container, Grid, Typography } from "@mui/material";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import BalanceOutlinedIcon from "@mui/icons-material/BalanceOutlined";
import CompareArrowsOutlinedIcon from "@mui/icons-material/CompareArrowsOutlined";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import { PraktykaCTA } from "@/components/PraktykaClient";

export const metadata: Metadata = {
  title: "Zakres praktyki | Jan Matusiak — Radca Prawny",
  description:
    "Prawo spółek, kontraktowanie, obsługa bieżąca przedsiębiorców, spory gospodarcze i transakcje. Zakres praktyki kancelarii Jana Matusiaka.",
};

const NAVY = "#2B3A4A";
const GOLD = "#2B3A4A";
const BORDER = "#D4E2EA";
const LIGHT = "#EDF3F6";

const areas = [
  {
    id: "prawo-korporacyjne",
    icon: <BusinessOutlinedIcon />,
    title: "Prawo korporacyjne i handlowe",
    lead: "Zakładanie, przekształcanie i bieżąca obsługa spółek.",
    items: [
      "Zakładanie spółek (sp. z o.o., S.A., spółki osobowe)",
      "Umowy i statuty spółek — projektowanie i negocjowanie",
      "Umowy wspólników (shareholders agreements)",
      "Zmiany w strukturze udziałowej — wejście inwestora, wyjście wspólnika",
      "Przekształcenia i reorganizacje (JDG → sp. z o.o., spółka cywilna → handlowa)",
      "Obsługa zgromadzeń wspólników i walnych zgromadzeń",
      "Prawa i obowiązki zarządu, odpowiedzialność członków zarządu",
    ],
  },
  {
    id: "kontrakty",
    icon: <DescriptionOutlinedIcon />,
    title: "Kontrakty i negocjacje",
    lead: "Projektowanie, analiza i negocjowanie umów handlowych.",
    items: [
      "Umowy B2B — przegląd, sporządzanie, negocjowanie",
      "Umowy o współpracy, agencyjne, dystrybucyjne, franczyzowe",
      "Umowy o świadczenie usług IT, SaaS, licencje oprogramowania",
      "Kontrakty z elementem zagranicznym (w języku angielskim)",
      "Klauzule ograniczenia odpowiedzialności, kary umowne, SLA",
      "Analiza ryzyka kontraktowego i rekomendacje",
    ],
  },
  {
    id: "obsluga-przedsiebiorcow",
    icon: <SupportAgentOutlinedIcon />,
    title: "Obsługa przedsiębiorców",
    lead: "Model zewnętrznego counsel — stałe wsparcie prawne bez etatu.",
    items: [
      "Stała obsługa prawna w modelu retainer (ryczałt miesięczny)",
      "Opiniowanie umów i dokumentów korporacyjnych na bieżąco",
      "Wsparcie w decyzjach zarządczych i operacyjnych",
      "Konsultacje ad hoc — telefonicznie i mailowo",
      "Obsługa relacji z kontrahentami, podwykonawcami, klientami",
      "Monitoring zmian prawnych istotnych dla działalności klienta",
    ],
  },
  {
    id: "postepowania-sporne",
    icon: <BalanceOutlinedIcon />,
    title: "Postępowania sporne",
    lead: "Reprezentacja przed sądami w sprawach gospodarczych i cywilnych.",
    items: [
      "Spory kontraktowe — roszczenia z umów B2B",
      "Dochodzenie wierzytelności i obrona przed roszczeniami",
      "Postępowania sądowe przed sądami powszechnymi",
      "Sprawy frankowe — reprezentacja kredytobiorców",
      "Negocjacje i ugody pozasądowe",
      "Spory wspólnicze i korporacyjne",
    ],
  },
  {
    id: "majatek",
    icon: <CompareArrowsOutlinedIcon />,
    title: "Ochrona i planowanie majątku",
    lead: "Strukturyzacja, zabezpieczenie i sukcesja majątku — dla firm i klientów indywidualnych.",
    items: [
      "Planowanie i zabezpieczenie majątku osobistego i firmowego",
      "Intercyzy i umowy majątkowe małżeńskie",
      "Sukcesja i przekazanie majątku na kolejne pokolenia",
      "Działy i rozliczenia majątkowe w sprawach rodzinnych",
      "Darowizny i przeniesienie własności",
      "Strukturyzacja majątku przez spółki",
    ],
  },
];

const industries = [
  "Technologia i IT",
  "SaaS i produkty cyfrowe",
  "E-commerce",
  "Budownictwo i nieruchomości",
  "Usługi profesjonalne",
  "Branża medyczna i medtech",
  "Agencje i media",
  "Startupy i scale-upy",
];

export default function PraktykaPage() {
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
              Zakres praktyki
            </Typography>
          </Box>
          <Typography variant="h1" sx={{
            color: "#ffffff",
            fontSize: { xs: "2rem", md: "3rem" },
            lineHeight: 1.15, letterSpacing: "-0.015em", mb: 2, maxWidth: 660,
          }}>
            Co wchodzi w zakres{" "}
            <Box component="span" sx={{ color: GOLD, fontStyle: "italic" }}>
              obsługi.
            </Box>
          </Typography>
          <Typography sx={{
            color: "rgba(255,255,255,0.6)",
            fontSize: { xs: "0.9rem", md: "1rem" },
            lineHeight: 1.75, maxWidth: 560,
          }}>
            Kancelaria specjalizuje się w obsłudze prawnej przedsiębiorców
            w pięciu obszarach. Poniżej znajdziesz szczegółowy zakres —
            z konkretnymi typami spraw, nie ogólnymi hasłami.
          </Typography>
        </Container>
      </Box>

      {/* ── OBSZARY PRAKTYKI ── */}
      <Box sx={{ backgroundColor: LIGHT, py: { xs: 7, md: 9 } }}>
        <Container maxWidth="lg" sx={{ px: { xs: 3, md: 6 } }}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: { xs: 3, md: 4 } }}>
            {areas.map((area, i) => (
              <Box
                key={i}
                id={area.id}
                sx={{
                  backgroundColor: "#ffffff",
                  border: `1px solid ${BORDER}`,
                  borderLeft: `3px solid ${i % 2 === 0 ? GOLD : NAVY}`,
                  p: { xs: 3, md: 5 },
                  scrollMarginTop: "100px",
                }}
              >
                <Grid container spacing={{ xs: 3, md: 6 }} alignItems="flex-start">

                  {/* Lewa — tytuł */}
                  <Grid size={{ xs: 12, md: 4 }}>
                    <Box sx={{ color: GOLD, mb: 2, "& svg": { fontSize: "1.75rem" } }}>
                      {area.icon}
                    </Box>
                    <Typography sx={{
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      fontWeight: 700,
                      fontSize: { xs: "1.15rem", md: "1.35rem" },
                      color: NAVY,
                      lineHeight: 1.25,
                      mb: 1.25,
                      letterSpacing: "-0.01em",
                    }}>
                      {area.title}
                    </Typography>
                    <Typography sx={{
                      fontSize: "0.875rem",
                      color: "#5A5A5A",
                      lineHeight: 1.7,
                      fontStyle: "italic",
                    }}>
                      {area.lead}
                    </Typography>
                  </Grid>

                  {/* Prawa — lista */}
                  <Grid size={{ xs: 12, md: 8 }}>
                    <Box
                      component="ul"
                      sx={{
                        m: 0, p: 0, listStyle: "none",
                        display: "grid",
                        gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
                        gap: { xs: 1.5, md: 2 },
                      }}
                    >
                      {area.items.map((item, j) => (
                        <Box
                          key={j}
                          component="li"
                          sx={{ display: "flex", alignItems: "flex-start", gap: 1.25 }}
                        >
                          <Box sx={{
                            color: GOLD,
                            mt: "2px",
                            flexShrink: 0,
                            "& svg": { fontSize: "0.9rem" },
                          }}>
                            <CheckOutlinedIcon />
                          </Box>
                          <Typography sx={{
                            fontSize: "0.85rem",
                            color: "#3A3A3A",
                            lineHeight: 1.6,
                          }}>
                            {item}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </Grid>

                </Grid>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ── BRANŻE ── */}
      <Box sx={{ backgroundColor: "#ffffff", py: { xs: 7, md: 8 }, borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg" sx={{ px: { xs: 3, md: 6 } }}>
          <Grid container spacing={{ xs: 4, md: 8 }} alignItems="center">
            <Grid size={{ xs: 12, md: 5 }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2.5 }}>
                <Box sx={{ width: 24, height: "1.5px", backgroundColor: GOLD }} />
                <Typography sx={{
                  color: GOLD, fontSize: "0.68rem", fontWeight: 600,
                  letterSpacing: "0.22em", textTransform: "uppercase",
                }}>
                  Branże
                </Typography>
              </Box>
              <Typography variant="h2" sx={{
                color: NAVY,
                fontSize: { xs: "1.4rem", md: "1.8rem" },
                lineHeight: 1.25, letterSpacing: "-0.01em", mb: 2,
              }}>
                Sektory, z którymi pracuję najczęściej.
              </Typography>
              <Typography sx={{
                fontSize: "0.875rem", color: "#5A5A5A", lineHeight: 1.8,
              }}>
                Kancelaria nie jest sprofilowana wyłącznie branżowo —
                kluczowy jest charakter prawny sprawy, nie sektor.
                W praktyce jednak obsługuję przede wszystkim przedsiębiorców
                z tych obszarów:
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <Box sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr 1fr", sm: "1fr 1fr 1fr 1fr" },
                gap: { xs: 1.5, md: 2 },
              }}>
                {industries.map((industry, i) => (
                  <Box
                    key={i}
                    sx={{
                      backgroundColor: LIGHT,
                      border: `1px solid ${BORDER}`,
                      p: { xs: 2, md: 2.5 },
                      textAlign: "center",
                    }}
                  >
                    <Typography sx={{
                      fontSize: { xs: "0.75rem", md: "0.8rem" },
                      color: NAVY,
                      fontWeight: 600,
                      lineHeight: 1.4,
                    }}>
                      {industry}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ── NOTA O JEZYKU ── */}
      <Box sx={{ backgroundColor: LIGHT, py: { xs: 5, md: 6 }, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg" sx={{ px: { xs: 3, md: 6 } }}>
          <Box sx={{
            backgroundColor: "#ffffff",
            border: `1px solid ${BORDER}`,
            borderLeft: `3px solid ${GOLD}`,
            p: { xs: 3, md: 4 },
            maxWidth: 700,
          }}>
            <Typography sx={{
              fontSize: "0.68rem", fontWeight: 600,
              letterSpacing: "0.18em", textTransform: "uppercase",
              color: GOLD, mb: 1.25,
            }}>
              Obsługa w języku angielskim
            </Typography>
            <Typography sx={{ fontSize: "0.875rem", color: "#4A4A4A", lineHeight: 1.8 }}>
              Obsługuję sprawy z elementem zagranicznym — w tym kontrakty, negocjacje
              i korespondencję w języku angielskim. Jeśli Twój biznes działa
              międzynarodowo lub kontrahent jest zagraniczny, to nie stanowi przeszkody.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* ── CTA ── */}
      <Box sx={{
        backgroundColor: NAVY,
        py: { xs: 6, md: 7 },
        borderTop: `3px solid ${GOLD}`,
      }}>
        <Container maxWidth="lg" sx={{ px: { xs: 3, md: 6 } }}>
          <Grid container spacing={4} alignItems="center">
            <Grid size={{ xs: 12, md: 8 }}>
              <Typography variant="h2" sx={{
                color: "#ffffff",
                fontSize: { xs: "1.5rem", md: "2rem" },
                lineHeight: 1.25, mb: 1.5, letterSpacing: "-0.01em",
              }}>
                Masz sprawę z tego{" "}
                <Box component="span" sx={{ color: GOLD, fontStyle: "italic" }}>
                  zakresu?
                </Box>
              </Typography>
              <Typography sx={{
                color: "rgba(255,255,255,0.6)",
                fontSize: "0.925rem", lineHeight: 1.75, maxWidth: 500,
              }}>
                Zacznijmy od krótkiej rozmowy rozpoznawczej — bez zobowiązań.
                Opowiedz, z czym przychodzisz. Powiem wprost, czy kancelaria
                może realnie pomóc.
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <PraktykaCTA />
            </Grid>
          </Grid>
        </Container>
      </Box>

    </Box>
  );
}
