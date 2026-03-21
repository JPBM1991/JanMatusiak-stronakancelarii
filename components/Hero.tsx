"use client";

import Link from "next/link";
import { Box, Button, Container, Typography, Grid } from "@mui/material";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import GavelOutlinedIcon from "@mui/icons-material/GavelOutlined";
import CheckIcon from "@mui/icons-material/Check";
import DynamicStatement from "./DynamicStatement";

const NAVY = "#0B1829";
const NAVY_MID = "#1A2B45";
const GOLD = "#B8924A";
const BORDER = "#E8E4DC";
const LIGHT = "#F6F4F0";

const pillars = [
  {
    icon: <AccountBalanceOutlinedIcon />,
    title: "Prawo spółek\ni korporacyjne",
    desc: "Zakładanie, przekształcenia, reorganizacja, obsługa organów.",
  },
  {
    icon: <HandshakeOutlinedIcon />,
    title: "Umowy\ni negocjacje",
    desc: "Kontrakty B2B, współprace długoterminowe, kontrahenci zagraniczni.",
  },
  {
    icon: <BusinessCenterOutlinedIcon />,
    title: "Bieżąca obsługa\nprzedsiębiorcy",
    desc: "Zewnętrzny partner prawny dla firm potrzebujących stałego wsparcia.",
  },
  {
    icon: <GavelOutlinedIcon />,
    title: "Sprawy sporne\ni reprezentacja",
    desc: "Postępowania sądowe i negocjacje, gdy dochodzenie roszczeń jest konieczne.",
  },
];

const tags = [
  "Przedsiębiorcy MSP",
  "Firmy z potrzebami B2B",
  "Spółki i ich wspólnicy",
  "Kontrakty z zagranicą",
  "Wybrani klienci indywidualni",
];

export default function Hero() {
  return (
    <Box component="section" sx={{ backgroundColor: "#ffffff" }}>

      {/* ── HERO GŁÓWNY ── */}
      <Box
        sx={{
          pt: { xs: "88px", md: "108px" },
          pb: { xs: 7, md: 8 },
          borderBottom: `1px solid ${BORDER}`,
        }}
      >
        <Container maxWidth="lg" sx={{ px: { xs: 3, md: 6 } }}>
          <Grid container spacing={{ xs: 0, md: 8 }} alignItems="flex-start">

            {/* LEWA — główna treść */}
            <Grid size={{ xs: 12, md: 7 }}>

              {/* Eyebrow */}
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 3 }}>
                <Box sx={{ width: 28, height: "1.5px", backgroundColor: GOLD, flexShrink: 0 }} />
                <Typography sx={{
                  color: GOLD,
                  fontSize: "0.68rem",
                  fontWeight: 600,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                }}>
                  Kancelaria radcy prawnego
                </Typography>
              </Box>

              {/* H1 — duże, serif, navy */}
              <Typography
                variant="h1"
                sx={{
                  color: NAVY,
                  fontSize: { xs: "2rem", sm: "2.6rem", md: "3.1rem" },
                  lineHeight: 1.15,
                  letterSpacing: "-0.02em",
                  mb: 1.5,
                }}
              >
                Strategiczne
              </Typography>
              <Typography
                variant="h1"
                sx={{
                  color: GOLD,
                  fontSize: { xs: "2rem", sm: "2.6rem", md: "3.1rem" },
                  lineHeight: 1.15,
                  letterSpacing: "-0.02em",
                  mb: 1.5,
                  fontStyle: "italic",
                }}
              >
                wsparcie prawne
              </Typography>
              <Typography
                variant="h1"
                sx={{
                  color: NAVY,
                  fontSize: { xs: "2rem", sm: "2.6rem", md: "3.1rem" },
                  lineHeight: 1.15,
                  letterSpacing: "-0.02em",
                  mb: 3.5,
                }}
              >
                dla przedsiębiorców.
              </Typography>

              {/* Lead */}
              <Typography sx={{
                color: "#4A4A4A",
                fontSize: { xs: "0.95rem", md: "1rem" },
                lineHeight: 1.8,
                maxWidth: 500,
                mb: 4,
              }}>
                Butikowa kancelaria prowadzona osobiście przez radcę prawnego
                Jana Matusiaka. Obsługuję firmy i przedsiębiorców, którym
                zależy na świadomym partnerze prawnym — nie na najtańszej
                usłudze. Działam ogólnopolsko, zdalnie.
              </Typography>

              {/* CTAs */}
              <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                <Button
                  component={Link}
                  href="/kontakt"
                  variant="contained"
                  size="large"
                  sx={{
                    backgroundColor: NAVY,
                    color: "#fff",
                    fontWeight: 600,
                    fontSize: "0.875rem",
                    px: 4,
                    py: 1.5,
                    "&:hover": { backgroundColor: NAVY_MID },
                  }}
                >
                  Umów rozmowę
                </Button>
                <Button
                  component={Link}
                  href="/praktyka"
                  variant="outlined"
                  size="large"
                  sx={{
                    color: NAVY,
                    borderColor: NAVY,
                    fontWeight: 500,
                    fontSize: "0.875rem",
                    px: 4,
                    py: 1.5,
                    "&:hover": {
                      backgroundColor: NAVY,
                      color: "#fff",
                    },
                  }}
                >
                  Zakres obsługi
                </Button>
              </Box>
            </Grid>

            {/* PRAWA — deskop: sygnatura + komunikat */}
            <Grid size={{ xs: 12, md: 5 }} sx={{ display: { xs: "none", md: "block" } }}>
              <Box
                sx={{
                  mt: 1,
                  pl: 5,
                  borderLeft: `3px solid ${GOLD}`,
                }}
              >
                <Typography sx={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: "1.05rem",
                  fontWeight: 700,
                  color: NAVY,
                  mb: 0.5,
                }}>
                  Jan Matusiak
                </Typography>
                <Typography sx={{
                  fontSize: "0.72rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: GOLD,
                  fontWeight: 600,
                  mb: 3,
                }}>
                  Radca prawny · OIRP Kraków
                </Typography>

                <Typography sx={{
                  fontSize: "0.85rem",
                  color: "#5A5A5A",
                  lineHeight: 1.75,
                  mb: 2.5,
                }}>
                  Absolwent Wydziału Prawa i Administracji Uniwersytetu
                  Jagiellońskiego. Wieloletnie doświadczenie w obsłudze
                  przedsiębiorców, prawie spółek i postępowaniach spornych.
                </Typography>

                <Typography sx={{
                  fontSize: "0.85rem",
                  color: "#5A5A5A",
                  lineHeight: 1.75,
                }}>
                  Obsługa w języku{" "}
                  <Box component="span" sx={{ color: NAVY, fontWeight: 600 }}>
                    polskim i angielskim
                  </Box>
                  . Sprawy z elementem zagranicznym — bez bariery językowej.
                </Typography>
              </Box>
            </Grid>

          </Grid>
        </Container>
      </Box>

      <DynamicStatement />

      {/* ── FILARY ── */}
      <Box sx={{ backgroundColor: LIGHT, py: { xs: 5, md: 6 } }}>
        <Container maxWidth="lg" sx={{ px: { xs: 3, md: 6 } }}>

          <Typography sx={{
            color: GOLD,
            fontSize: "0.68rem",
            fontWeight: 600,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            mb: 3.5,
          }}>
            Czym się zajmuję
          </Typography>

          <Grid container spacing={{ xs: 2, md: 3 }}>
            {pillars.map((p, i) => (
              <Grid key={i} size={{ xs: 12, sm: 6, md: 3 }}>
                <Box
                  sx={{
                    backgroundColor: "#ffffff",
                    border: `1px solid ${BORDER}`,
                    borderTop: `3px solid ${i === 0 ? NAVY : BORDER}`,
                    p: { xs: 2.5, md: 3 },
                    height: "100%",
                    transition: "border-top-color 0.2s",
                    "&:hover": {
                      borderTopColor: GOLD,
                    },
                  }}
                >
                  <Box sx={{
                    color: GOLD,
                    mb: 1.75,
                    display: "flex",
                    "& svg": { fontSize: "1.4rem" },
                  }}>
                    {p.icon}
                  </Box>
                  <Typography sx={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontWeight: 700,
                    fontSize: "0.95rem",
                    color: NAVY,
                    mb: 1,
                    lineHeight: 1.35,
                    whiteSpace: "pre-line",
                  }}>
                    {p.title}
                  </Typography>
                  <Typography sx={{
                    fontSize: "0.8rem",
                    color: "#5A5A5A",
                    lineHeight: 1.65,
                  }}>
                    {p.desc}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>

          {/* Dla kogo */}
          <Box sx={{
            mt: { xs: 4, md: 5 },
            pt: { xs: 3.5, md: 4 },
            borderTop: `1px solid ${BORDER}`,
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: { xs: "flex-start", sm: "center" },
            gap: { xs: 1.5, sm: 3 },
          }}>
            <Typography sx={{
              fontSize: "0.72rem",
              fontWeight: 700,
              color: NAVY,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              flexShrink: 0,
            }}>
              Dla kogo:
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
              {tags.map((tag) => (
                <Box key={tag} sx={{
                  px: 1.5,
                  py: 0.5,
                  border: `1px solid ${BORDER}`,
                  borderRadius: 0.5,
                  display: "flex",
                  alignItems: "center",
                  gap: 0.6,
                  backgroundColor: "#ffffff",
                  whiteSpace: "nowrap",
                }}>
                  <CheckIcon sx={{ fontSize: "0.75rem", color: GOLD }} />
                  <Typography sx={{ fontSize: "0.775rem", color: NAVY_MID, fontWeight: 500 }}>
                    {tag}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>

        </Container>
      </Box>

    </Box>
  );
}
