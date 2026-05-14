import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Box,
  Container,
  Grid,
  Typography,
  Divider,
  Button,
} from "@mui/material";

export const metadata: Metadata = {
  title: "Daria Meysztowicz-Matusiak — Attorney at Law",
  description:
    "Daria Meysztowicz-Matusiak — attorney at law, specialist in investment transactions and venture capital. Of Counsel at Jan Matusiak Law Office in Kraków.",
};

const NAVY = "#2B3A4A";
const GOLD = "#2B3A4A";
const BORDER = "#D4E2EA";
const LIGHT = "#EDF3F6";

export default function OfCounselENPage() {
  return (
    <Box sx={{ backgroundColor: "#ffffff", minHeight: "100vh" }}>

      {/* ── HEADER ── */}
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
              The Firm · Collaboration
            </Typography>
          </Box>
          <Typography
            variant="h1"
            sx={{
              color: "#ffffff",
              fontSize: { xs: "2.2rem", md: "3rem" },
              lineHeight: 1.15,
              letterSpacing: "-0.015em",
              mb: 2,
            }}
          >
            Of Counsel
          </Typography>
          <Typography sx={{
            color: "rgba(255,255,255,0.6)",
            fontSize: { xs: "0.9rem", md: "1rem" },
            lineHeight: 1.75,
            maxWidth: 580,
          }}>
            The firm collaborates with experienced lawyers and advisors
            in selected fields, enabling legal support in areas requiring
            narrow specialisation.
          </Typography>
        </Container>
      </Box>

      {/* ── PROFILE ── */}
      <Box sx={{ backgroundColor: LIGHT, py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg" sx={{ px: { xs: 3, md: 6 } }}>
          <Grid container spacing={{ xs: 4, md: 7 }} alignItems="flex-start">

            {/* LEFT — photo + data */}
            <Grid size={{ xs: 12, md: 4 }}>
              <Box sx={{ width: "100%", mb: 3, position: "relative" }}>
                <Image
                  src="/daria-meysztowicz-matusiak.jpg"
                  alt="Daria Meysztowicz–Matusiak — Attorney at Law"
                  width={600}
                  height={800}
                  style={{ width: "100%", height: "auto", display: "block", objectFit: "cover", objectPosition: "center top" }}
                  priority
                />
                <Box sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: "3px",
                  backgroundColor: GOLD,
                }} />
              </Box>

              <Box
                sx={{
                  backgroundColor: "#ffffff",
                  border: `1px solid ${BORDER}`,
                  borderTop: `3px solid ${GOLD}`,
                  p: 3,
                  mb: 2.5,
                }}
              >
                {[
                  { label: "Title", value: "Attorney at Law" },
                  { label: "Specialisation", value: "Investment transactions · Venture Capital" },
                  { label: "Languages", value: "Polish · English · French · Spanish" },
                ].map((c, i) => (
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

              <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                <Button
                  component="a"
                  href="https://www.linkedin.com/in/daria-Meysztowicz-Matusiak-a15215173/"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outlined"
                  fullWidth
                  sx={{
                    color: "#0A66C2",
                    borderColor: "#D4E2EA",
                    fontWeight: 500,
                    fontSize: "0.875rem",
                    py: 1.5,
                    "&:hover": { borderColor: "#0A66C2", backgroundColor: "transparent" },
                  }}
                >
                  LinkedIn
                </Button>
              </Box>
            </Grid>

            {/* RIGHT — bio */}
            <Grid size={{ xs: 12, md: 8 }}>
              <Box
                sx={{
                  backgroundColor: "#ffffff",
                  border: `1px solid ${BORDER}`,
                  borderTop: `3px solid ${NAVY}`,
                  p: { xs: 3, md: 4.5 },
                }}
              >
                <Typography sx={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontWeight: 700,
                  fontSize: { xs: "1.5rem", md: "1.8rem" },
                  color: NAVY,
                  lineHeight: 1.2,
                  letterSpacing: "0em",
                  mb: 0.5,
                }}>
                  Daria Meysztowicz–Matusiak
                </Typography>
                <Typography sx={{
                  color: GOLD,
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  mb: 3,
                }}>
                  Attorney at Law · Of Counsel
                </Typography>

                <Divider sx={{ borderColor: BORDER, mb: 3 }} />

                {[
                  "Daria concentrates her practice on investment transactions, particularly in the venture capital space, and on ongoing legal services for business entities.",
                  "She has participated in transactions involving international investment funds and private investors at various funding stages, from Pre-seed to Series A. She has conducted numerous due diligence processes and negotiations of investment agreements.",
                  "This enables her to advise clients not only on legal matters, but also on transaction strategy and the structuring of the entire process.",
                  "A graduate of law and Romance philology at the Jagiellonian University in Kraków. She is fluent in English, French and Spanish.",
                ].map((text, i, arr) => (
                  <Typography
                    key={i}
                    sx={{
                      fontSize: { xs: "0.875rem", md: "0.925rem" },
                      color: "#3A3A3A",
                      lineHeight: 1.85,
                      textAlign: "justify",
                      mb: i < arr.length - 1 ? 2.5 : 0,
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
                    Education & membership
                  </Typography>
                </Box>
                <Box sx={{ pl: "32px" }}>
                  <Typography sx={{ fontSize: "0.9rem", color: NAVY, fontWeight: 500, mb: 0.5 }}>
                    Faculty of Law and Administration & Institute of Romance Philology — Jagiellonian University in Kraków
                  </Typography>
                  <Typography sx={{ fontSize: "0.9rem", color: NAVY, fontWeight: 500, mb: 2.5 }}>
                    Cracow Bar Association of Attorneys-at-Law (OIRP Kraków)
                  </Typography>
                </Box>
              </Box>
            </Grid>

          </Grid>
        </Container>
      </Box>

      {/* ── PRACTICE AREAS ── */}
      <Box sx={{ backgroundColor: "#ffffff", py: { xs: 6, md: 8 }, borderTop: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg" sx={{ px: { xs: 3, md: 6 } }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 5 }}>
            <Box sx={{ width: 24, height: "1.5px", backgroundColor: GOLD }} />
            <Typography sx={{ color: GOLD, fontSize: "0.68rem", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase" }}>
              Areas of practice
            </Typography>
          </Box>
          <Grid container spacing={{ xs: 2, md: 3 }}>
            {[
              {
                area: "Corporate and commercial law",
                detail: "Incorporation, transformation, reorganisation, changes in ownership structure.",
                href: "/en/praktyka#prawo-korporacyjne",
              },
              {
                area: "Contracts and negotiations",
                detail: "Negotiating and preparing investment agreements, term sheets, SPA, NDA, shareholders agreements.",
                href: "/en/praktyka#kontrakty",
              },
              {
                area: "Business legal services",
                detail: "Ongoing legal advisory for companies — including startups and entities in VC fund portfolios.",
                href: "/en/praktyka#obsluga-przedsiebiorcow",
              },
            ].map((item, i) => (
              <Grid key={i} size={{ xs: 12, sm: 4 }}>
                <Link href={item.href} style={{ textDecoration: "none", display: "block", height: "100%" }}>
                  <Box sx={{
                    backgroundColor: "#EDF3F6",
                    border: `1px solid ${BORDER}`,
                    borderTop: `3px solid ${BORDER}`,
                    p: { xs: 2.5, md: 3 },
                    height: "100%",
                    transition: "border-top-color 0.2s",
                    "&:hover": { borderTopColor: GOLD },
                  }}>
                    <Typography sx={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 700, fontSize: "0.95rem", color: NAVY, mb: 1.25, lineHeight: 1.35 }}>
                      {item.area}
                    </Typography>
                    <Typography sx={{ fontSize: "0.8rem", color: "#5A5A5A", lineHeight: 1.7 }}>
                      {item.detail}
                    </Typography>
                  </Box>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

    </Box>
  );
}
