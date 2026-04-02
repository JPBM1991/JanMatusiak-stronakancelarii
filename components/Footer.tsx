"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

const NAVY = "#2B3A4A";
const NAVY_DARK = "#1A1C1E";
const GOLD = "#2B3A4A";
const BORDER = "rgba(255,255,255,0.08)";

const navLinks = [
  { label: "Jan Matusiak", href: "/jan-matusiak" },
  { label: "Kancelaria", href: "/kancelaria" },
  { label: "Zakres praktyki", href: "/praktyka" },
  { label: "Dla przedsiębiorców", href: "/dla-przedsiebiorcow" },
  { label: "Aktualności", href: "/aktualnosci" },
  { label: "Kontakt", href: "/kontakt" },
];

const legalLinks = [
  { label: "Polityka Prywatności i Cookies", href: "/polityka-cookies" },
  { label: "AML / RODO", href: "/aml-rodo" },
];

export default function Footer() {
  return (
    <Box component="footer" sx={{ backgroundColor: NAVY, borderTop: `3px solid ${GOLD}` }}>

      {/* ── MAPA ── */}
      <Box sx={{ display: { xs: "none", md: "block" }, width: "100%", height: 380, overflow: "hidden" }}>
        <iframe
          src="https://maps.google.com/maps?q=ul.+Sta%C5%84czyka+22%2F54%2C+30-126+Krak%C3%B3w&output=embed"
          width="100%"
          height="380"
          style={{ border: 0, display: "block", filter: "grayscale(0.3) contrast(1.05)" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Lokalizacja kancelarii"
        />
      </Box>

      {/* ── GŁÓWNA TREŚĆ ── */}
      <Container maxWidth="lg" sx={{ px: { xs: 3, md: 6 }, py: { xs: 6, md: 7 } }}>
        <Grid container spacing={{ xs: 5, md: 6 }}>

          {/* Kolumna 1 — logo + dane kontaktowe */}
          <Grid size={{ xs: 12, md: 4 }}>
            {/* Logo / nazwa */}
            <Box sx={{ mb: 3.5 }}>
              <Typography sx={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontWeight: 700,
                fontSize: "1.2rem",
                color: "#ffffff",
                letterSpacing: "-0.01em",
                lineHeight: 1.2,
                mb: 0.5,
              }}>
                Jan Matusiak
              </Typography>
              <Typography sx={{
                fontSize: "0.68rem",
                fontWeight: 600,
                color: GOLD,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
              }}>
                Radca prawny
              </Typography>
            </Box>

            {/* Dane */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1.5 }}>
                <LocationOnOutlinedIcon sx={{ fontSize: "1rem", color: GOLD, mt: "2px", flexShrink: 0 }} />
                <Box>
                  <Typography sx={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.75)", lineHeight: 1.6 }}>
                    ul. Stańczyka 22/54
                  </Typography>
                  <Typography sx={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.75)", lineHeight: 1.6 }}>
                    30-126 Kraków
                  </Typography>
                  <Box
                    component="a"
                    href="https://www.google.com/maps/search/?api=1&query=ul.+Sta%C5%84czyka+22%2F54%2C+30-126+Krak%C3%B3w"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      fontSize: "0.75rem",
                      color: GOLD,
                      textDecoration: "none",
                      "&:hover": { textDecoration: "underline" },
                    }}
                  >
                    Zobacz na mapie →
                  </Box>
                </Box>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                <PhoneOutlinedIcon sx={{ fontSize: "1rem", color: GOLD, flexShrink: 0 }} />
                <Box
                  component="a"
                  href="tel:+48500255293"
                  sx={{
                    fontSize: "0.85rem",
                    color: "rgba(255,255,255,0.75)",
                    textDecoration: "none",
                    "&:hover": { color: GOLD },
                  }}
                >
                  +48 500 255 293
                </Box>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                <EmailOutlinedIcon sx={{ fontSize: "1rem", color: GOLD, flexShrink: 0 }} />
                <Box
                  component="a"
                  href="mailto:j.matusiak@kmtlegal.pl"
                  sx={{
                    fontSize: "0.85rem",
                    color: "rgba(255,255,255,0.75)",
                    textDecoration: "none",
                    "&:hover": { color: GOLD },
                  }}
                >
                  j.matusiak@kmtlegal.pl
                </Box>
              </Box>
            </Box>
          </Grid>

          {/* Kolumna 2 — nawigacja */}
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Typography sx={{
              fontSize: "0.68rem",
              fontWeight: 600,
              color: GOLD,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              mb: 2.5,
            }}>
              Nawigacja
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
              {navLinks.map((link) => (
                <Box
                  key={link.href}
                  component={Link}
                  href={link.href}
                  sx={{
                    fontSize: "0.875rem",
                    color: "rgba(255,255,255,0.65)",
                    textDecoration: "none",
                    "&:hover": { color: GOLD },
                    transition: "color 0.15s",
                  }}
                >
                  {link.label}
                </Box>
              ))}
            </Box>
          </Grid>

          {/* Kolumna 3 — info prawne */}
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Typography sx={{
              fontSize: "0.68rem",
              fontWeight: 600,
              color: GOLD,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              mb: 2.5,
            }}>
              Informacje
            </Typography>
            <Typography sx={{
              fontSize: "0.8rem",
              color: "rgba(255,255,255,0.45)",
              lineHeight: 1.75,
              mb: 2.5,
            }}>
              Strona wykorzystuje pliki cookies w celu świadczenia usług na
              najwyższym poziomie. Korzystanie z witryny bez zmiany ustawień
              dotyczących cookies oznacza, że będą one zamieszczane w urządzeniu
              końcowym.
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.25 }}>
              {legalLinks.map((link) => (
                <Box
                  key={link.href}
                  component={Link}
                  href={link.href}
                  sx={{
                    fontSize: "0.8rem",
                    color: "rgba(255,255,255,0.5)",
                    textDecoration: "none",
                    "&:hover": { color: GOLD },
                    transition: "color 0.15s",
                  }}
                >
                  {link.label} →
                </Box>
              ))}
            </Box>
          </Grid>

        </Grid>
      </Container>

      {/* ── COPYRIGHT ── */}
      <Box sx={{ backgroundColor: NAVY_DARK, borderTop: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg" sx={{ px: { xs: 3, md: 6 }, py: 2.5 }}>
          <Box sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: { xs: "flex-start", sm: "center" },
            justifyContent: "space-between",
            gap: 1,
          }}>
            <Typography sx={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.3)" }}>
              © {new Date().getFullYear()} Jan Matusiak — Radca Prawny. Wszelkie prawa zastrzeżone.
            </Typography>
            <Typography sx={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.2)" }}>
              Wykonanie:{" "}
              <Box
                component="a"
                href="https://cholujdesign.com/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: "rgba(255,255,255,0.3)",
                  textDecoration: "none",
                  "&:hover": { color: GOLD },
                }}
              >
                CholujDesign
              </Box>
            </Typography>
          </Box>
        </Container>
      </Box>

    </Box>
  );
}
