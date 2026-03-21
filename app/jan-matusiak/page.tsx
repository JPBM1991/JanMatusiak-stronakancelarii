import type { Metadata } from "next";
import {
  Box,
  Container,
  Grid,
  Typography,
  Divider,
} from "@mui/material";
import { ContactButtons, CtaButtons } from "@/components/JanButtons";

export const metadata: Metadata = {
  title: "Jan Matusiak — Radca Prawny",
  description:
    "Jan Matusiak — radca prawny, absolwent UJ, członek OIRP Kraków. Wieloletnie doświadczenie w obsłudze przedsiębiorców, prawie spółek, postępowaniach spornych i kontraktowaniu.",
};

const NAVY = "#0B1829";
const GOLD = "#B8924A";
const BORDER = "#E8E4DC";
const LIGHT = "#F6F4F0";
const NAVY_MID = "#1A2B45";

const credentials = [
  { label: "Tytuł", value: "Radca prawny" },
  { label: "Izba", value: "OIRP Kraków" },
  { label: "Wykształcenie", value: "Wydział Prawa i Administracji UJ" },
  { label: "Języki", value: "Polski · Angielski (prawniczy)" },
  { label: "Zasięg", value: "Ogólnopolski · Sprawy zagraniczne" },
];

const expertiseAreas = [
  {
    area: "Prawo spółek i korporacyjne",
    detail:
      "Zakładanie, przekształcenia, reorganizacje, obsługa organów spółek, uchwały, zmiany kapitałowe. Doświadczenie w branżach: medycznej, IT, budowlanej.",
  },
  {
    area: "Obsługa przedsiębiorców",
    detail:
      "Bieżące doradztwo prawne, monitoring zmian w prawie, windykacja należności, nadzór nad sprawami pracowniczymi, rejestracja zmian w CRBR.",
  },
  {
    area: "Kontrakty i negocjacje",
    detail:
      "Umowy handlowe, B2B, współprace długoterminowe, kontrakty z kontrahentami zagranicznymi w języku angielskim.",
  },
  {
    area: "Postępowania sporne",
    detail:
      "Reprezentacja przed sądami i organami. Doświadczenie m.in. w sprawach frankowych, sporach korporacyjnych i sporach między wspólnikami.",
  },
  {
    area: "Upadłość i restrukturyzacja",
    detail:
      "Postępowania upadłościowe o skomplikowanym charakterze — po stronie podmiotów niewypłacalnych i wierzycieli.",
  },
  {
    area: "Nowe technologie i własność intelektualna",
    detail:
      "Obsługa podmiotów z branży IT, nowych technologii i blockchain. Ochrona własności intelektualnej i wizerunku.",
  },
];

const bioParas = [
  "Wieloletnie doświadczenie zawodowe zdobywałem w krakowskich kancelariach prawnych, zanim założyłem własną praktykę. Przez ten czas prowadziłem sprawy z zakresu prawa bankowego — w tym reprezentację kredytobiorców w postępowaniach frankowych — oraz postępowania upadłościowe i restrukturyzacyjne o skomplikowanym charakterze, zarówno po stronie podmiotów niewypłacalnych, jak i wierzycieli.",
  "Istotną część mojej praktyki stanowi obsługa korporacyjna i organizacyjna przedsiębiorców: zakładanie, przekształcenia i reorganizacje spółek, obsługa organów, zmiany struktury właścicielskiej. Pracowałem m.in. dla podmiotów z branży medycznej, IT i budowlanej. Reprezentowałem również krajowe i zagraniczne podmioty z sektora nowych technologii, w tym zajmujące się dostawą technologii blockchain.",
  "Jestem autorem analiz i opinii prawnych dotyczących m.in. stanu prawnego nieruchomości — w tym na gruncie postanowień międzynarodowych układów indemnizacyjnych — a także podziałów i przekształceń podmiotów gospodarczych oraz skutków podatkowych zmian wynikających z tzw. Nowego Ładu.",
  "Biegle posługuję się prawniczym językiem angielskim, co pozwala mi skutecznie reprezentować klientów zagranicznych i obsługiwać sprawy z elementem transgranicznym — w tym kontrakty i negocjacje z kontrahentami spoza Polski.",
];

export default function JanMatusiakPage() {
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
              color: GOLD,
              fontSize: "0.68rem",
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
            }}>
              Kancelaria · O mnie
            </Typography>
          </Box>
          <Typography
            variant="h1"
            sx={{
              color: "#ffffff",
              fontSize: { xs: "2.2rem", md: "3rem" },
              lineHeight: 1.15,
              letterSpacing: "-0.015em",
              mb: 1,
            }}
          >
            Jan Matusiak
          </Typography>
          <Typography sx={{
            color: GOLD,
            fontSize: { xs: "0.85rem", md: "0.95rem" },
            fontWeight: 500,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}>
            Radca prawny
          </Typography>
        </Container>
      </Box>

      {/* ── GŁÓWNA TREŚĆ ── */}
      <Box sx={{ backgroundColor: LIGHT, py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg" sx={{ px: { xs: 3, md: 6 } }}>
          <Grid container spacing={{ xs: 4, md: 7 }} alignItems="flex-start">

            {/* LEWA — zdjęcie + dane + kontakt */}
            <Grid size={{ xs: 12, md: 4 }}>

              {/* Placeholder zdjęcia */}
              <Box
                sx={{
                  width: "100%",
                  aspectRatio: "3/4",
                  backgroundColor: NAVY_MID,
                  mb: 3,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                }}
              >
                <Box sx={{ textAlign: "center" }}>
                  <Typography sx={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: "3.5rem",
                    fontWeight: 700,
                    color: "rgba(255,255,255,0.12)",
                  }}>
                    JM
                  </Typography>
                  <Typography sx={{
                    fontSize: "0.65rem",
                    color: "rgba(255,255,255,0.2)",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    mt: 0.5,
                  }}>
                    Zdjęcie
                  </Typography>
                </Box>
                <Box sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: "3px",
                  backgroundColor: GOLD,
                }} />
              </Box>

              {/* Credentials */}
              <Box
                sx={{
                  backgroundColor: "#ffffff",
                  border: `1px solid ${BORDER}`,
                  borderTop: `3px solid ${GOLD}`,
                  p: 3,
                  mb: 2.5,
                }}
              >
                {credentials.map((c, i) => (
                  <Box key={c.label}>
                    {i > 0 && <Divider sx={{ my: 1.75, borderColor: BORDER }} />}
                    <Typography sx={{
                      fontSize: "0.65rem",
                      fontWeight: 600,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: GOLD,
                      mb: 0.35,
                    }}>
                      {c.label}
                    </Typography>
                    <Typography sx={{
                      fontSize: "0.875rem",
                      color: NAVY,
                      fontWeight: 500,
                    }}>
                      {c.value}
                    </Typography>
                  </Box>
                ))}
              </Box>

              {/* Przyciski kontaktowe — client component */}
              <ContactButtons />
            </Grid>

            {/* PRAWA — bio */}
            <Grid size={{ xs: 12, md: 8 }}>
              <Box
                sx={{
                  backgroundColor: "#ffffff",
                  border: `1px solid ${BORDER}`,
                  borderTop: `3px solid ${NAVY}`,
                  p: { xs: 3, md: 4.5 },
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontWeight: 600,
                    fontSize: { xs: "1.05rem", md: "1.2rem" },
                    color: NAVY,
                    lineHeight: 1.55,
                    mb: 3,
                    fontStyle: "italic",
                  }}
                >
                  Radca prawny specjalizujący się w obsłudze przedsiębiorców,
                  prawie spółek i postępowaniach spornych. Prowadzę kancelarię
                  nastawioną na strategiczne, praktyczne doradztwo — nie na
                  masową obsługę.
                </Typography>

                <Divider sx={{ borderColor: BORDER, mb: 3 }} />

                {bioParas.map((text, i) => (
                  <Typography
                    key={i}
                    sx={{
                      fontSize: { xs: "0.875rem", md: "0.925rem" },
                      color: "#3A3A3A",
                      lineHeight: 1.85,
                      mb: i < bioParas.length - 1 ? 2.5 : 0,
                    }}
                  >
                    {text}
                  </Typography>
                ))}

                <Divider sx={{ borderColor: BORDER, my: 3.5 }} />

                <Box sx={{ display: "flex", gap: 1.5, mb: 1 }}>
                  <Box sx={{ width: 20, height: "1.5px", backgroundColor: GOLD, mt: "10px", flexShrink: 0 }} />
                  <Typography sx={{
                    fontSize: "0.68rem",
                    fontWeight: 600,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: GOLD,
                  }}>
                    Wykształcenie i przynależność
                  </Typography>
                </Box>
                <Box sx={{ pl: "32px" }}>
                  <Typography sx={{ fontSize: "0.9rem", color: NAVY, fontWeight: 500, mb: 0.5 }}>
                    Wydział Prawa i Administracji — Uniwersytet Jagielloński w Krakowie
                  </Typography>
                  <Typography sx={{ fontSize: "0.9rem", color: NAVY, fontWeight: 500, mb: 2.5 }}>
                    Okręgowa Izba Radców Prawnych w Krakowie
                  </Typography>
                  <Typography sx={{ fontSize: "0.82rem", color: "#6B7280", fontStyle: "italic" }}>
                    W wolnym czasie — pasjonat literatury historycznej.
                  </Typography>
                </Box>
              </Box>
            </Grid>

          </Grid>
        </Container>
      </Box>

      {/* ── OBSZARY PRAKTYKI ── */}
      <Box
        sx={{
          backgroundColor: "#ffffff",
          py: { xs: 6, md: 8 },
          borderTop: `1px solid ${BORDER}`,
        }}
      >
        <Container maxWidth="lg" sx={{ px: { xs: 3, md: 6 } }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 5 }}>
            <Box sx={{ width: 24, height: "1.5px", backgroundColor: GOLD }} />
            <Typography sx={{
              color: GOLD,
              fontSize: "0.68rem",
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
            }}>
              Obszary praktyki
            </Typography>
          </Box>

          <Grid container spacing={{ xs: 2, md: 3 }}>
            {expertiseAreas.map((item, i) => (
              <Grid key={i} size={{ xs: 12, sm: 6, md: 4 }}>
                <Box
                  sx={{
                    backgroundColor: LIGHT,
                    border: `1px solid ${BORDER}`,
                    borderTop: `3px solid ${BORDER}`,
                    p: { xs: 2.5, md: 3 },
                    height: "100%",
                    transition: "border-top-color 0.2s",
                    "&:hover": { borderTopColor: GOLD },
                  }}
                >
                  <Typography sx={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontWeight: 700,
                    fontSize: "0.95rem",
                    color: NAVY,
                    mb: 1.25,
                    lineHeight: 1.35,
                  }}>
                    {item.area}
                  </Typography>
                  <Typography sx={{
                    fontSize: "0.8rem",
                    color: "#5A5A5A",
                    lineHeight: 1.7,
                  }}>
                    {item.detail}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ── CTA ── */}
      <Box
        sx={{
          backgroundColor: NAVY,
          py: { xs: 6, md: 7 },
          borderTop: `3px solid ${GOLD}`,
        }}
      >
        <Container maxWidth="lg" sx={{ px: { xs: 3, md: 6 } }}>
          <Grid container spacing={4} alignItems="center">
            <Grid size={{ xs: 12, md: 8 }}>
              <Typography
                variant="h2"
                sx={{
                  color: "#ffffff",
                  fontSize: { xs: "1.5rem", md: "2rem" },
                  lineHeight: 1.25,
                  mb: 1.5,
                  letterSpacing: "-0.01em",
                }}
              >
                Masz sprawę, która{" "}
                <Box component="span" sx={{ color: GOLD, fontStyle: "italic" }}>
                  pasuje do tej praktyki?
                </Box>
              </Typography>
              <Typography sx={{
                color: "rgba(255,255,255,0.6)",
                fontSize: "0.925rem",
                lineHeight: 1.7,
                maxWidth: 520,
              }}>
                Zacznijmy od krótkiej rozmowy. Opowiedz, z czym przychodzisz —
                ocenię, czy mogę pomóc i jak wyglądałaby współpraca.
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <CtaButtons />
            </Grid>
          </Grid>
        </Container>
      </Box>

    </Box>
  );
}
