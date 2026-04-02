import type { Metadata } from "next";
import { Box, Container, Grid, Typography, Divider } from "@mui/material";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import WorkHistoryOutlinedIcon from "@mui/icons-material/WorkHistoryOutlined";
import ScheduleOutlinedIcon from "@mui/icons-material/ScheduleOutlined";
import InsightsOutlinedIcon from "@mui/icons-material/InsightsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import { KancelariaCTA } from "@/components/KanalariaClient";

export const metadata: Metadata = {
  title: "Kancelaria | Jan Matusiak — Radca Prawny",
  description:
    "Jednoosobowa kancelaria radcy prawnego Jana Matusiaka. Strategiczne doradztwo prawne dla przedsiębiorców. Model pracy, wartości i zasady współpracy.",
};

const NAVY = "#2B3A4A";
const NAVY_MID = "#425A6F";
const GOLD = "#2B3A4A";
const BORDER = "#D4E2EA";
const LIGHT = "#EDF3F6";

const differentiators = [
  {
    icon: <PsychologyOutlinedIcon />,
    title: "Zaangażowanie",
    desc: "Każda sprawa jest prowadzona osobiście. Nie przekazuję klientów aplikantom ani współpracownikom — kontakt i odpowiedzialność są po mojej stronie od początku do końca.",
  },
  {
    icon: <WorkHistoryOutlinedIcon />,
    title: "Doświadczenie",
    desc: "Wieloletnia praktyka w zakresie prawa spółek, umów, postępowań spornych i obsługi przedsiębiorców. W tym dla podmiotów z branży FMCG, IT, medycznej, budowlanej i nowych technologii.",
  },
  {
    icon: <ScheduleOutlinedIcon />,
    title: "Terminowość",
    desc: "Dotrzymuję terminów. Jeśli coś wymaga więcej czasu, informuję o tym wcześniej — nie po fakcie. Sprawność w obsłudze jest częścią usługi, nie opcją.",
  },
  {
    icon: <InsightsOutlinedIcon />,
    title: "Rozumienie biznesu",
    desc: "Prawo jest narzędziem, nie celem. Interesuje mnie, jak dane rozwiązanie wpłynie na funkcjonowanie firmy, ryzyko operacyjne i relacje biznesowe klienta.",
  },
  {
    icon: <PersonOutlinedIcon />,
    title: "Butikowy model pracy",
    desc: "Obsługuję ograniczoną liczbę klientów w danym czasie. Nie buduję portfela masowego — buduję relacje z klientami, których sprawy mieszczą się w moim profilu praktyki.",
  },
  {
    icon: <CheckCircleOutlineIcon />,
    title: "Realna użyteczność",
    desc: "Obsługa prawna ma odciążać, nie dokładać pracy. Dbam o to, żeby klient rozumiał, co się dzieje — i mógł skupić się na prowadzeniu biznesu.",
  },
];

const steps = [
  {
    number: "01",
    icon: <MailOutlineIcon />,
    title: "Pierwszy kontakt",
    desc: "Napisz wiadomość e-mail z krótkim opisem sprawy — czym się zajmujesz, z czym przychodzisz i czego szukasz. To wystarczy, żebym mógł wstępnie ocenić, czy mogę pomóc. Preferuję tę formę kontaktu: pozwala obu stronom dobrze przygotować się do rozmowy. Możliwy jest też kontakt telefoniczny.",
  },
  {
    number: "02",
    icon: <SearchOutlinedIcon />,
    title: "Ocena sprawy",
    desc: "Po wstępnym kontakcie oceniam, czy kancelaria może realnie pomóc. Nie przyjmuję spraw, które wykraczają poza mój profil praktyki czy dotychczasowe doświadczenie. To uczciwe wobec obu stron.",
  },
  {
    number: "03",
    icon: <HandshakeOutlinedIcon />,
    title: "Ustalenie warunków",
    desc: "Omówienie zakresu pomocy i modelu wynagrodzenia. Nie ma cennika ani stawek orientacyjnych — warunki są ustalane indywidualnie, po ocenie sprawy.",
  },
  {
    number: "04",
    icon: <AssignmentOutlinedIcon />,
    title: "Umowa i formalizacja",
    desc: "Zawarcie umowy o świadczenie pomocy prawnej. Jasno określony zakres, obowiązki i zasady współpracy — po obu stronach.",
  },
  {
    number: "05",
    icon: <SupportAgentOutlinedIcon />,
    title: "Obsługa sprawy",
    desc: "Praca merytoryczna, kontakt mailowy i telefoniczny, raportowanie postępów. Zdalnie lub stacjonarnie — zależnie od potrzeb.",
  },
];

const notForUs = [
  "Sprawy karne i wykroczeniowe",
  "Masowe sprawy konsumenckie",
  "Klienci nastawieni wyłącznie na najniższą cenę",
  "Sprawy poza ustalonym profilem praktyki",
  "Klienci szukający \"prawnika od wszystkiego\"",
];

export default function KancelariaPage() {
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
            <Box sx={{ width: 24, height: "1.5px", backgroundColor: GOLD }} />
            <Typography sx={{
              color: GOLD, fontSize: "0.68rem", fontWeight: 600,
              letterSpacing: "0.22em", textTransform: "uppercase",
            }}>
              O kancelarii
            </Typography>
          </Box>
          <Typography variant="h1" sx={{
            color: "#ffffff",
            fontSize: { xs: "2rem", md: "3rem" },
            lineHeight: 1.15, letterSpacing: "-0.015em", mb: 2, maxWidth: 680,
          }}>
            Kancelaria dla{" "}
            <Box component="span" sx={{ color: GOLD, fontStyle: "italic" }}>
              przedsiębiorców.
            </Box>
          </Typography>
          <Typography sx={{
            color: "rgba(255,255,255,0.62)",
            fontSize: { xs: "0.9rem", md: "1rem" },
            lineHeight: 1.75, maxWidth: 560,
          }}>
            Praktyka nastawiona na strategiczne doradztwo prawne dla biznesu.
          </Typography>
        </Container>
      </Box>

      {/* ── CZYM JEST KANCELARIA ── */}
      <Box sx={{ backgroundColor: "#ffffff", py: { xs: 7, md: 9 }, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg" sx={{ px: { xs: 3, md: 6 } }}>
          <Grid container spacing={{ xs: 5, md: 10 }} alignItems="flex-start">

            <Grid size={{ xs: 12, md: 5 }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 3 }}>
                <Box sx={{ width: 24, height: "1.5px", backgroundColor: GOLD }} />
                <Typography sx={{
                  color: GOLD, fontSize: "0.68rem", fontWeight: 600,
                  letterSpacing: "0.22em", textTransform: "uppercase",
                }}>
                  Czym jest kancelaria
                </Typography>
              </Box>
              <Typography variant="h2" sx={{
                color: NAVY,
                fontSize: { xs: "1.6rem", md: "2.1rem" },
                lineHeight: 1.25, letterSpacing: "-0.01em",
              }}>
                Strategiczne wsparcie prawne.
              </Typography>
            </Grid>

            <Grid size={{ xs: 12, md: 7 }}>
              {[
                {
                  lead: "Kancelaria specjalizuje się przede wszystkim w obsłudze prawnej przedsiębiorców oraz klientów indywidualnych w pięciu obszarach.",
                  body: "",
                },
                {
                  lead: "Obsługuję ograniczoną liczbę klientów.",
                  body: "To świadomy wybór. Każda sprawa jest prowadzona przeze mnie — nie przekazywana dalej. Każdy klient kontaktuje się bezpośrednio ze mną.",
                },
                {
                  lead: "Działam ogólnopolsko i zdalnie.",
                  body: "Praca odbywa się głównie zdalnie — telefonicznie, mailowo i przez wideokonferencje. Spotkania stacjonarne organizuję wtedy, gdy są rzeczywiście potrzebne i uzasadnione. Obsługuję również sprawy z elementem zagranicznym — w języku angielskim.",
                },
              ].map((item, i) => (
                <Box key={i} sx={{ mb: i < 2 ? 3.5 : 0 }}>
                  <Typography sx={{
                    fontSize: { xs: "0.9rem", md: "0.95rem" },
                    color: NAVY, fontWeight: 600, lineHeight: 1.6, mb: 0.75,
                  }}>
                    {item.lead}
                  </Typography>
                  <Typography sx={{
                    fontSize: { xs: "0.875rem", md: "0.9rem" },
                    color: "#4A4A4A", lineHeight: 1.85,
                  }}>
                    {item.body}
                  </Typography>
                </Box>
              ))}
            </Grid>

          </Grid>
        </Container>
      </Box>

      {/* ── WYRÓŻNIKI ── */}
      <Box sx={{ backgroundColor: LIGHT, py: { xs: 7, md: 9 }, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg" sx={{ px: { xs: 3, md: 6 } }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2 }}>
            <Box sx={{ width: 24, height: "1.5px", backgroundColor: GOLD }} />
            <Typography sx={{
              color: GOLD, fontSize: "0.68rem", fontWeight: 600,
              letterSpacing: "0.22em", textTransform: "uppercase",
            }}>
              Co wyróżnia kancelarię
            </Typography>
          </Box>
          <Typography variant="h2" sx={{
            color: NAVY,
            fontSize: { xs: "1.5rem", md: "1.9rem" },
            letterSpacing: "-0.01em", mb: 5, lineHeight: 1.25, maxWidth: 520,
          }}>
            Sześć rzeczy, na których mi zależy.
          </Typography>

          <Grid container spacing={{ xs: 2, md: 3 }}>
            {differentiators.map((d, i) => (
              <Grid key={i} size={{ xs: 12, sm: 6, md: 4 }}>
                <Box sx={{
                  backgroundColor: "#ffffff",
                  border: `1px solid ${BORDER}`,
                  borderTop: `3px solid ${BORDER}`,
                  p: { xs: 3, md: 3.5 },
                  height: "100%",
                  transition: "border-top-color 0.2s",
                  "&:hover": { borderTopColor: GOLD },
                }}>
                  <Box sx={{ color: GOLD, mb: 2, "& svg": { fontSize: "1.5rem" } }}>
                    {d.icon}
                  </Box>
                  <Typography sx={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontWeight: 700, fontSize: "0.95rem",
                    color: NAVY, mb: 1.25, lineHeight: 1.3,
                  }}>
                    {d.title}
                  </Typography>
                  <Typography sx={{
                    fontSize: "0.8rem", color: "#5A5A5A", lineHeight: 1.75,
                  }}>
                    {d.desc}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ── JAK WYGLĄDA WSPÓŁPRACA ── */}
      <Box sx={{ backgroundColor: "#ffffff", py: { xs: 7, md: 9 }, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg" sx={{ px: { xs: 3, md: 6 } }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2 }}>
            <Box sx={{ width: 24, height: "1.5px", backgroundColor: GOLD }} />
            <Typography sx={{
              color: GOLD, fontSize: "0.68rem", fontWeight: 600,
              letterSpacing: "0.22em", textTransform: "uppercase",
            }}>
              Model współpracy
            </Typography>
          </Box>
          <Typography variant="h2" sx={{
            color: NAVY,
            fontSize: { xs: "1.5rem", md: "1.9rem" },
            letterSpacing: "-0.01em", mb: 6, lineHeight: 1.25, maxWidth: 480,
          }}>
            Jak wygląda współpraca krok po kroku.
          </Typography>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {steps.map((step, i) => (
              <Box
                key={i}
                sx={{
                  display: "flex",
                  gap: { xs: 3, md: 5 },
                  pb: i < steps.length - 1 ? 4 : 0,
                  mb: i < steps.length - 1 ? 0 : 0,
                  position: "relative",
                }}
              >
                {/* Linia pionowa */}
                {i < steps.length - 1 && (
                  <Box sx={{
                    position: "absolute",
                    left: { xs: "19px", md: "27px" },
                    top: "44px",
                    bottom: 0,
                    width: "1px",
                    backgroundColor: BORDER,
                  }} />
                )}

                {/* Numer / ikona */}
                <Box sx={{
                  width: { xs: 40, md: 56 },
                  height: { xs: 40, md: 56 },
                  borderRadius: "50%",
                  border: `2px solid ${GOLD}`,
                  backgroundColor: "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  color: GOLD,
                  "& svg": { fontSize: { xs: "1.1rem", md: "1.3rem" } },
                  zIndex: 1,
                }}>
                  {step.icon}
                </Box>

                {/* Treść */}
                <Box sx={{ pt: { xs: 0.75, md: 1 }, pb: 1 }}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 0.75 }}>
                    <Typography sx={{
                      fontSize: "0.65rem", fontWeight: 700,
                      color: GOLD, letterSpacing: "0.12em",
                    }}>
                      {step.number}
                    </Typography>
                    <Typography sx={{
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      fontWeight: 700, fontSize: { xs: "0.95rem", md: "1.05rem" },
                      color: NAVY,
                    }}>
                      {step.title}
                    </Typography>
                  </Box>
                  <Typography sx={{
                    fontSize: "0.85rem", color: "#5A5A5A", lineHeight: 1.75,
                    maxWidth: 560,
                  }}>
                    {step.desc}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>

          {/* Uwaga o wynagrodzeniu */}
          <Box sx={{
            mt: 6,
            backgroundColor: LIGHT,
            border: `1px solid ${BORDER}`,
            borderLeft: `3px solid ${GOLD}`,
            p: { xs: 2.5, md: 3 },
          }}>
            <Typography sx={{
              fontSize: "0.68rem", fontWeight: 600,
              letterSpacing: "0.18em", textTransform: "uppercase",
              color: GOLD, mb: 1,
            }}>
              Wynagrodzenie
            </Typography>
            <Typography sx={{ fontSize: "0.875rem", color: "#4A4A4A", lineHeight: 1.75 }}>
              Wynagrodzenie jest ustalane indywidualnie — na etapie wstępnej rozmowy,
              po ocenie sprawy. Podstawowym modelem rozliczeń jest stawka godzinowa;
              możliwe są też inne formy uzgodnione z klientem.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* ── DLA KOGO NIE ── */}
      <Box sx={{ backgroundColor: LIGHT, py: { xs: 6, md: 7 }, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg" sx={{ px: { xs: 3, md: 6 } }}>
          <Grid container spacing={{ xs: 4, md: 8 }} alignItems="flex-start">
            <Grid size={{ xs: 12, md: 5 }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2.5 }}>
                <Box sx={{ width: 24, height: "1.5px", backgroundColor: GOLD }} />
                <Typography sx={{
                  color: GOLD, fontSize: "0.68rem", fontWeight: 600,
                  letterSpacing: "0.22em", textTransform: "uppercase",
                }}>
                  Selektywność
                </Typography>
              </Box>
              <Typography variant="h2" sx={{
                color: NAVY,
                fontSize: { xs: "1.4rem", md: "1.75rem" },
                lineHeight: 1.3, letterSpacing: "-0.01em", mb: 2,
              }}>
                Z czym kancelaria nie pracuje.
              </Typography>
              <Typography sx={{
                fontSize: "0.875rem", color: "#5A5A5A", lineHeight: 1.8,
              }}>
                Selektywność nie jest pozą — to uczciwa informacja. Jeśli
                sprawa nie pasuje do profilu praktyki, powiem o tym wprost
                na etapie wstępnej rozmowy. To oszczędza czas obu stron.
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <Box sx={{
                backgroundColor: "#ffffff",
                border: `1px solid ${BORDER}`,
                borderTop: `3px solid ${NAVY}`,
                p: { xs: 3, md: 4 },
              }}>
                <Typography sx={{
                  fontSize: "0.68rem", fontWeight: 600,
                  letterSpacing: "0.18em", textTransform: "uppercase",
                  color: "#9CA3AF", mb: 2.5,
                }}>
                  Sprawy i klienci spoza profilu kancelarii
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  {notForUs.map((item, i) => (
                    <Box key={i} sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                      <Box sx={{
                        width: 20, height: 20, borderRadius: "50%",
                        border: `1.5px solid ${BORDER}`,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        flexShrink: 0,
                      }}>
                        <Box sx={{ width: 8, height: 1.5, backgroundColor: "#D1D5DB", borderRadius: 1 }} />
                      </Box>
                      <Typography sx={{ fontSize: "0.875rem", color: "#6B7280" }}>
                        {item}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Grid>
          </Grid>
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
                Twoja sprawa pasuje do{" "}
                <Box component="span" sx={{ color: GOLD, fontStyle: "italic" }}>
                  tego profilu?
                </Box>
              </Typography>
              <Typography sx={{
                color: "rgba(255,255,255,0.6)",
                fontSize: "0.925rem", lineHeight: 1.75, maxWidth: 500,
              }}>
                Zacznijmy od krótkiej rozmowy — bez zobowiązań. Opowiedz,
                z czym przychodzisz. Ocenię, czy kancelaria może pomóc
                i jak wyglądałaby ewentualna współpraca.
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <KancelariaCTA />
            </Grid>
          </Grid>
        </Container>
      </Box>

    </Box>
  );
}
