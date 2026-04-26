import type { Metadata } from "next";
import { Box, Container, Grid, Typography } from "@mui/material";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import WorkHistoryOutlinedIcon from "@mui/icons-material/WorkHistoryOutlined";
import ScheduleOutlinedIcon from "@mui/icons-material/ScheduleOutlined";
import InsightsOutlinedIcon from "@mui/icons-material/InsightsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { KancelariaCTA } from "@/components/KanalariaClient";

export const metadata: Metadata = {
  title: "Kancelaria | Jan Matusiak — Radca Prawny",
  description:
    "Jednoosobowa kancelaria radcy prawnego Jana Matusiaka. Strategiczne doradztwo prawne dla przedsiębiorców. Model pracy, wartości i zasady współpracy.",
};

const NAVY = "#2B3A4A";
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
    desc: "Stawiam na bezpośrednią relację z klientem. Każda sprawa jest prowadzona przeze mnie osobiście — nie przekazywana dalej. Każdy klient ma ze mną bezpośredni kontakt.",
  },
  {
    icon: <CheckCircleOutlineIcon />,
    title: "Realna użyteczność",
    desc: "Obsługa prawna ma odciążać, nie dokładać pracy. Dbam o to, żeby klient rozumiał, co się dzieje — i mógł skupić się na prowadzeniu biznesu.",
  },
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
            <Box component="span" sx={{ color: "#EDF3F6", fontStyle: "italic" }}>
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
                  lead: "Stawiam na bezpośrednią relację z klientem.",
                  body: "Każda sprawa jest prowadzona przeze mnie osobiście — nie przekazywana dalej. Każdy klient ma ze mną bezpośredni kontakt.",
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

      {/* ── WYNAGRODZENIE ── */}
      <Box sx={{ backgroundColor: "#ffffff", py: { xs: 6, md: 7 }, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg" sx={{ px: { xs: 3, md: 6 } }}>
          <Box sx={{
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
                Twoja sprawa pasuje do{" "}
                <Box component="span" sx={{ color: "#EDF3F6", fontStyle: "italic" }}>
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
