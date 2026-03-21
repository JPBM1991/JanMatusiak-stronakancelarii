import type { Metadata } from "next";
import { Box, Container, Grid, Typography } from "@mui/material";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import DevicesOutlinedIcon from "@mui/icons-material/DevicesOutlined";
import SwapHorizOutlinedIcon from "@mui/icons-material/SwapHorizOutlined";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/link";
import { DlaPrzedsiebiorcowCTA } from "@/components/DlaPrzedsiebiorcowClient";

export const metadata: Metadata = {
  title: "Dla przedsiębiorców | Jan Matusiak — Radca Prawny",
  description:
    "Obsługa prawna dla przedsiębiorców MSP i właścicieli firm. Zewnętrzny radca prawny zamiast etatu — stałe wsparcie, elastyczny model, bezpośredni kontakt.",
};

const NAVY = "#0B1829";
const GOLD = "#B8924A";
const BORDER = "#E8E4DC";
const LIGHT = "#F6F4F0";

const scenarios = [
  {
    icon: <TrendingUpOutlinedIcon />,
    title: "Firma, która rośnie",
    desc: "Zwiększa się liczba kontrahentów, pojawiają się nowi wspólnicy lub inwestorzy, firma wchodzi na nowe rynki. Na tym etapie ryzyka prawne rosną szybciej niż zwykle się zakłada.",
    needs: [
      "Rewizja umów z kontrahentami",
      "Umowa wspólników lub aktualizacja dotychczasowej",
      "Wejście inwestora — term sheet, due diligence",
      "Restrukturyzacja formy prawnej",
    ],
  },
  {
    icon: <GroupsOutlinedIcon />,
    title: "Spółka ze wspólnikami",
    desc: "Prowadzisz biznes z partnerami. Brak dobrej umowy wspólników to jedno z najczęstszych źródeł sporów — które kosztują nieproporcjonalnie dużo w stosunku do kosztu zapobiegania im.",
    needs: [
      "Umowa lub statut spółki dopasowany do realiów",
      "Udziały, dywidenda, decyzje — kto co może",
      "Mechanizmy wyjścia wspólnika (drag along, tag along)",
      "Planowanie sukcesji i sprzedaży udziałów",
    ],
  },
  {
    icon: <DevicesOutlinedIcon />,
    title: "Firma technologiczna",
    desc: "Tworzysz oprogramowanie, produkt SaaS, usługi IT lub cyfrowe. Prawo autorskie, licencje, warunki świadczenia usług i kontrakty z klientami B2B mają tu szczególne znaczenie.",
    needs: [
      "Umowy z klientami B2B (w tym w j. angielskim)",
      "Regulaminy SaaS, ToS, polityki prywatności",
      "Przeniesienie praw autorskich i licencje",
      "Kontrakty z freelancerami i podwykonawcami",
    ],
  },
  {
    icon: <PublicOutlinedIcon />,
    title: "Działalność z elementem zagranicznym",
    desc: "Twoi klienci lub kontrahenci są za granicą, zawierasz umowy po angielsku, planujesz ekspansję. Kontrakty wymagają analizy pod kątem prawa właściwego i ryzyk jurysdykcyjnych.",
    needs: [
      "Kontrakty w języku angielskim",
      "Klauzule wyboru prawa i jurysdykcji",
      "Spory z kontrahentami zagranicznymi",
      "Struktury holdingowe i transgraniczne",
    ],
  },
  {
    icon: <SwapHorizOutlinedIcon />,
    title: "Planowana transakcja",
    desc: "Rozważasz sprzedaż firmy, zakup udziałów w innej spółce, fuzję lub wydzielenie części działalności. Każda transakcja wymaga prawnego przygotowania, żeby nie zaskoczyła po podpisaniu.",
    needs: [
      "Due diligence — prawna ocena ryzyka",
      "Umowa sprzedaży udziałów (SPA)",
      "Negocjowanie warunków transakcji",
      "Zamknięcie transakcji i rejestracja zmian",
    ],
  },
];

const modelPoints = [
  {
    label: "Bezpośredni kontakt",
    desc: "Kontaktujesz się ze mną — nie z asystentem ani sekretariatem. Odpowiadasz na wiadomość, nie czekasz na przekierowanie do właściwej osoby.",
  },
  {
    label: "Stałe wsparcie bez etatu",
    desc: "Model retainer (ryczałt miesięczny) albo zlecenia ad hoc. Dostajesz dostęp do radcy prawnego bez kosztów i zobowiązań etatu.",
  },
  {
    label: "Zrozumienie kontekstu biznesowego",
    desc: "Interesuje mnie, jak decyzja prawna wpłynie na Twój biznes — nie tylko co mówi przepis. Prawo jest narzędziem do osiągnięcia celu, nie przeszkodą.",
  },
  {
    label: "Terminowość i przewidywalność",
    desc: "Dotrzymuję terminów. Jeśli sprawa wymaga więcej czasu, informuję o tym z wyprzedzeniem — nie po fakcie, kiedy jest za późno.",
  },
  {
    label: "Zdalne i sprawnie",
    desc: "Działam ogólnopolsko. Obsługa odbywa się głównie zdalnie — telefonicznie, mailowo i przez wideokonferencje. Spotkania stacjonarne wtedy, gdy są naprawdę potrzebne.",
  },
  {
    label: "Selektywność jako gwarancja jakości",
    desc: "Obsługuję ograniczoną liczbę klientów. Nie buduję portfela masowego — to gwarancja, że Twoja sprawa nie jest jedną z setek.",
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
            <Box component="span" sx={{ color: GOLD, fontStyle: "italic" }}>
              właściciela firmy.
            </Box>
          </Typography>
          <Typography sx={{
            color: "rgba(255,255,255,0.6)",
            fontSize: { xs: "0.9rem", md: "1rem" },
            lineHeight: 1.75, maxWidth: 580,
          }}>
            Nie każda firma potrzebuje prawnika na etacie. Ale każda — szczególnie
            w fazie wzrostu — potrzebuje kogoś, do kogo może zadzwonić, zanim
            problem urośnie do rozmiarów, które trudno opanować.
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
                Zewnętrzny radca prawny zamiast etatu.
              </Typography>
              <Typography sx={{
                fontSize: "0.9rem", color: "#5A5A5A", lineHeight: 1.85, mb: 3,
              }}>
                Duże korporacje mają prawnika na etacie. Średnie i mniejsze firmy
                najczęściej nie — i korzystają z pomocy prawnej doraźnie,
                gdy problem już istnieje.
              </Typography>
              <Typography sx={{
                fontSize: "0.9rem", color: "#5A5A5A", lineHeight: 1.85,
              }}>
                Model, który oferuję, jest czymś pomiędzy: stały dostęp
                do radcy prawnego, który rozumie Twoją firmę, bez kosztów
                i zobowiązań wynikających z etatu.
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

      {/* ── SCENARIUSZE ── */}
      <Box sx={{ backgroundColor: LIGHT, py: { xs: 7, md: 9 }, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg" sx={{ px: { xs: 3, md: 6 } }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2 }}>
            <Box sx={{ width: 24, height: "1.5px", backgroundColor: GOLD }} />
            <Typography sx={{
              color: GOLD, fontSize: "0.68rem", fontWeight: 600,
              letterSpacing: "0.22em", textTransform: "uppercase",
            }}>
              Typowe sytuacje
            </Typography>
          </Box>
          <Typography variant="h2" sx={{
            color: NAVY,
            fontSize: { xs: "1.5rem", md: "1.9rem" },
            letterSpacing: "-0.01em", mb: 1.5, lineHeight: 1.25, maxWidth: 560,
          }}>
            Kiedy przedsiębiorcy najczęściej szukają pomocy.
          </Typography>
          <Typography sx={{
            fontSize: "0.875rem", color: "#5A5A5A",
            lineHeight: 1.75, mb: 6, maxWidth: 580,
          }}>
            Poniżej pięć sytuacji, z którymi najczęściej pracuję.
            Jeśli rozpoznajesz swoją firmę w jednym z nich — wiesz, od czego zacząć.
          </Typography>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
            {scenarios.map((scenario, i) => (
              <Box
                key={i}
                sx={{
                  backgroundColor: "#ffffff",
                  border: `1px solid ${BORDER}`,
                  borderTop: `3px solid ${i % 2 === 0 ? GOLD : NAVY}`,
                  p: { xs: 3, md: 5 },
                }}
              >
                <Grid container spacing={{ xs: 3, md: 6 }} alignItems="flex-start">

                  <Grid size={{ xs: 12, md: 5 }}>
                    <Box sx={{ color: GOLD, mb: 1.75, "& svg": { fontSize: "1.6rem" } }}>
                      {scenario.icon}
                    </Box>
                    <Typography sx={{
                      fontFamily: "'Playfair Display', Georgia, serif",
                      fontWeight: 700,
                      fontSize: { xs: "1.1rem", md: "1.25rem" },
                      color: NAVY,
                      lineHeight: 1.3,
                      mb: 1.25,
                      letterSpacing: "-0.01em",
                    }}>
                      {scenario.title}
                    </Typography>
                    <Typography sx={{
                      fontSize: "0.875rem",
                      color: "#5A5A5A",
                      lineHeight: 1.75,
                    }}>
                      {scenario.desc}
                    </Typography>
                  </Grid>

                  <Grid size={{ xs: 12, md: 7 }}>
                    <Typography sx={{
                      fontSize: "0.68rem", fontWeight: 600,
                      letterSpacing: "0.18em", textTransform: "uppercase",
                      color: "#9CA3AF", mb: 2,
                    }}>
                      W takim przypadku pomagam m.in. z:
                    </Typography>
                    <Box component="ul" sx={{ m: 0, p: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 1.25 }}>
                      {scenario.needs.map((need, j) => (
                        <Box key={j} component="li" sx={{ display: "flex", alignItems: "flex-start", gap: 1.25 }}>
                          <Box sx={{
                            width: 16,
                            height: 16,
                            borderRadius: "50%",
                            backgroundColor: `${GOLD}20`,
                            border: `1.5px solid ${GOLD}`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                            mt: "1px",
                          }}>
                            <Box sx={{ width: 5, height: 5, borderRadius: "50%", backgroundColor: GOLD }} />
                          </Box>
                          <Typography sx={{ fontSize: "0.875rem", color: "#3A3A3A", lineHeight: 1.6 }}>
                            {need}
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
                fontFamily: "'Playfair Display', Georgia, serif",
                fontWeight: 700,
                fontSize: { xs: "1rem", md: "1.15rem" },
                color: NAVY, mb: 0.75,
              }}>
                Szukasz konkretnego zakresu obsługi?
              </Typography>
              <Typography sx={{ fontSize: "0.875rem", color: "#5A5A5A" }}>
                Szczegółowa lista spraw i obszarów prawnych — z podziałem na dziedziny.
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
                Porozmawiajmy o Twojej{" "}
                <Box component="span" sx={{ color: GOLD, fontStyle: "italic" }}>
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
