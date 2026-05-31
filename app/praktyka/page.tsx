import type { Metadata } from "next";
import { Box, Container, Grid, Typography } from "@mui/material";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import GavelOutlinedIcon from "@mui/icons-material/GavelOutlined";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import WorkOutlinedIcon from "@mui/icons-material/WorkOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import BrushOutlinedIcon from "@mui/icons-material/BrushOutlined";
import LocalHospitalOutlinedIcon from "@mui/icons-material/LocalHospitalOutlined";
import { PraktykaCTA } from "@/components/PraktykaClient";

export const metadata: Metadata = {
  title: "Zakres praktyki | Jan Matusiak — Radca Prawny",
  description:
    "Prawo spółek, kontraktowanie, obsługa bieżąca przedsiębiorców, spory gospodarcze i transakcje. Zakres praktyki kancelarii Jana Matusiaka.",
  alternates: {
    canonical: "https://matusiak.legal/praktyka",
    languages: {
      pl: "https://matusiak.legal/praktyka",
      en: "https://matusiak.legal/en/praktyka",
    },
  },
};

const NAVY = "#2B3A4A";
const GOLD = "#2B3A4A";
const BORDER = "#D4E2EA";
const LIGHT = "#EDF3F6";

const areas = [
  {
    id: "prawo-korporacyjne",
    icon: <AccountBalanceOutlinedIcon />,
    title: "Prawo korporacyjne i handlowe",
    lead: "Zakładanie, przekształcanie i bieżąca obsługa spółek.",
    items: [
      "Zakładanie spółek",
      "Umowy wspólników (shareholders agreements)",
      "Przekształcenia, reorganizacje, likwidacje spółek",
      "Prawa i obowiązki zarządu, odpowiedzialność członków zarządu, doradztwo dla członków organów spółek",
      "Umowy i statuty spółek — projektowanie i negocjowanie",
      "Zmiany w strukturze udziałowej spółek",
      "Obsługa zgromadzeń wspólników i walnych zgromadzeń",
      "Transakcje na udziałach i akcjach (M&A)",
    ],
  },
  {
    id: "kontrakty",
    icon: <HandshakeOutlinedIcon />,
    title: "Kontrakty i negocjacje",
    lead: "Projektowanie, analiza i negocjowanie umów handlowych.",
    items: [
      "Umowy B2B, B2C — przegląd, weryfikacja, sporządzanie, negocjowanie",
      "Umowy o współpracy, agencyjne, dystrybucyjne, franczyzowe, dostawy",
      "Umowy z elementem zagranicznym",
      "Umowy dla branży FMCG",
    ],
  },
  {
    id: "obsluga-przedsiebiorcow",
    icon: <BusinessCenterOutlinedIcon />,
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
    icon: <GavelOutlinedIcon />,
    title: "Postępowania sporne",
    lead: "Reprezentacja przed sądami w sprawach gospodarczych, cywilnych, rodzinnych oraz administracyjnych.",
    items: [
      "Spory kontraktowe — roszczenia z umów B2B",
      "Dochodzenie wierzytelności i obrona przed roszczeniami",
      "Odzyskiwanie należności i reprezentacja przed komornikiem",
      "Postępowania sądowe przed sądami powszechnymi",
      "Negocjacje i ugody pozasądowe",
      "Spory wspólnicze i korporacyjne",
    ],
  },
  {
    id: "majatek",
    icon: <ShieldOutlinedIcon />,
    title: "Ochrona i planowanie majątku",
    lead: "Kompleksowe podejście do majątku prywatnego i firmowego — od strukturyzacji i zabezpieczenia, przez sukcesję i dziedziczenie, po rozliczenia w sytuacjach życiowych i biznesowych.",
    items: [
      "Strukturyzacja majątku (spółki, nieruchomości, aktywa)",
      "Zabezpieczenie majątku przed ryzykiem gospodarczym i osobistym",
      "Sukcesja, dziedziczenie i przekazanie majątku na kolejne pokolenia",
      "Realizacja i ochrona praw majątkowych w sprawach spadkowych",
      "Umowy majątkowe małżeńskie",
      "Rozliczenia majątkowe przy zmianach w życiu i biznesie",
      "Darowizny i przeniesienie własności",
      "Fundacje rodzinne",
    ],
  },
];

const industries = [
  { name: "Usługi profesjonalne", icon: <WorkOutlinedIcon /> },
  { name: "FMCG & Retail", icon: <StorefrontOutlinedIcon /> },
  { name: "E-commerce", icon: <LanguageOutlinedIcon /> },
  { name: "Inwestycje", icon: <TrendingUpOutlinedIcon /> },
  { name: "Branża kreatywna, IP & wizerunek", icon: <BrushOutlinedIcon /> },
  { name: "Branża medyczna", icon: <LocalHospitalOutlinedIcon /> },
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
            <Box component="span" sx={{ color: "#EDF3F6", fontStyle: "italic" }}>
              obsługi.
            </Box>
          </Typography>
          <Typography sx={{
            color: "rgba(255,255,255,0.6)",
            fontSize: { xs: "0.9rem", md: "1rem" },
            lineHeight: 1.75, maxWidth: 560,
          }}>
            Kancelaria specjalizuje się w obsłudze prawnej Klientów w pięciu obszarach. Poniżej znajdziesz szczegółowy zakres z przykładowymi zagadnieniami, w których doradzam Klientom.
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
                fontSize: "0.875rem", color: "#5A5A5A", lineHeight: 1.8, textAlign: "justify",
              }}>
                Kancelaria nie jest sprofilowana branżowo — decydujący jest charakter sprawy. Dotychczasowe doświadczenie zdobyłem przede wszystkim obsługując klientów biznesowych z następujących obszarów:
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <Box sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr 1fr", sm: "1fr 1fr 1fr" },
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
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    <Box sx={{ color: NAVY, opacity: 0.5, "& svg": { fontSize: "1.3rem" } }}>
                      {industry.icon}
                    </Box>
                    <Typography sx={{
                      fontSize: { xs: "0.75rem", md: "0.8rem" },
                      color: NAVY,
                      fontWeight: 600,
                      lineHeight: 1.4,
                    }}>
                      {industry.name}
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
                Masz sprawę z tego{" "}
                <Box component="span" sx={{ color: "#EDF3F6", fontStyle: "italic" }}>
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
