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
  title: "Jan Matusiak — Attorney at Law",
  description:
    "Jan Matusiak — attorney at law, graduate of Jagiellonian University, member of the Kraków Bar of Attorneys at Law. Years of experience advising entrepreneurs, corporate law, dispute resolution and contract work.",
};

const NAVY = "#2B3A4A";
const GOLD = "#2B3A4A";
const BORDER = "#D4E2EA";
const LIGHT = "#EDF3F6";

const credentials = [
  { label: "Title", value: "Attorney at Law" },
  { label: "Education", value: "Faculty of Law and Administration, Jagiellonian University" },
  { label: "Languages", value: "Polish · English (legal)" },
  { label: "Coverage", value: "Nationwide · International matters" },
];

const expertiseAreas = [
  {
    area: "Corporate and commercial law",
    detail:
      "Incorporation, transformation, reorganisation, corporate governance. Experience in: medical, IT, construction sectors.",
    href: "/en/praktyka#prawo-korporacyjne",
  },
  {
    area: "Business legal services",
    detail:
      "Ongoing legal advisory, monitoring of legal changes, debt recovery, employment matters support, CRBR filings.",
    href: "/en/praktyka#obsluga-przedsiebiorcow",
  },
  {
    area: "Contracts and negotiations",
    detail:
      "Commercial agreements, B2B, long-term partnerships, contracts with foreign counterparties in English.",
    href: "/en/praktyka#kontrakty",
  },
  {
    area: "Dispute resolution",
    detail:
      "Representation before courts and authorities. Experience in corporate disputes and shareholder conflicts.",
    href: "/en/praktyka#postepowania-sporne",
  },
  {
    area: "Asset protection and planning",
    detail:
      "Advisory on structuring, protection and succession of assets — for business owners and individual clients. Matrimonial property agreements, asset transfer planning, family and property settlements.",
    href: "/en/praktyka#majatek",
  },
];

const bioParas = [
  "I assist clients in both business and corporate matters and in selected private issues. My experience, primarily in civil and commercial law, allows me to conduct an in-depth analysis of a situation and assess its legal consequences and risks on multiple levels. I particularly value working on complex projects that require coordinating action across several areas of law simultaneously.",
  "My services are primarily directed at entrepreneurs. I believe that the external counsel model delivers the results clients expect. A lawyer who knows an organisation and its processes from the inside enables effective action and the implementation of appropriate solutions when they become necessary. I advise entities in sectors including FMCG, retail, e-commerce, investment, IT, medical, architecture and construction, and image management services, in domestic and international matters.",
  "For individual clients I assist primarily in matters relating to their assets. I advise from the initial stages of asset planning and protection, through succession proceedings and inheritance, to resolving property matters in family cases, including family foundations.",
  "I represent clients before courts and administrative authorities, as well as in negotiations and corporate disputes. I negotiate and prepare commercial contracts and other documents, including with foreign counterparties in English.",
];

export default function JanMatusiakENPage() {
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
              The Firm · About
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
            Attorney at Law
          </Typography>
        </Container>
      </Box>

      {/* ── MAIN CONTENT ── */}
      <Box sx={{ backgroundColor: LIGHT, py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg" sx={{ px: { xs: 3, md: 6 } }}>
          <Grid container spacing={{ xs: 4, md: 7 }} alignItems="flex-start">

            {/* LEFT — photo + credentials + contact */}
            <Grid size={{ xs: 12, md: 4 }}>
              <Box sx={{ width: "100%", mb: 3, position: "relative" }}>
                <Image
                  src="/jan-matusiak.jpg"
                  alt="Jan Matusiak — Attorney at Law"
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

              <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                <Button
                  component="a"
                  href="tel:+48500255293"
                  variant="contained"
                  fullWidth
                  sx={{
                    backgroundColor: NAVY,
                    color: "#fff",
                    fontWeight: 600,
                    fontSize: "0.875rem",
                    py: 1.5,
                    "&:hover": { backgroundColor: "#425A6F" },
                  }}
                >
                  +48 500 255 293
                </Button>
                <Button
                  component="a"
                  href="mailto:jan.matusiak@matusiak.legal"
                  variant="outlined"
                  fullWidth
                  sx={{
                    color: NAVY,
                    borderColor: BORDER,
                    fontWeight: 500,
                    fontSize: "0.875rem",
                    py: 1.5,
                    "&:hover": { borderColor: NAVY, backgroundColor: "transparent" },
                  }}
                >
                  jan.matusiak@matusiak.legal
                </Button>
                <Button
                  component="a"
                  href="https://www.linkedin.com/in/jan-matusiak-000842183/"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outlined"
                  fullWidth
                  sx={{
                    color: "#0A66C2",
                    borderColor: BORDER,
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
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2 }}>
                  <Box sx={{ width: 24, height: "1.5px", backgroundColor: GOLD, flexShrink: 0 }} />
                  <Typography sx={{
                    fontSize: "0.68rem", fontWeight: 600,
                    letterSpacing: "0.22em", textTransform: "uppercase", color: GOLD,
                  }}>
                    Jan Matusiak · Attorney at Law
                  </Typography>
                </Box>

                <Divider sx={{ borderColor: BORDER, mb: 3 }} />

                {bioParas.map((text, i) => (
                  <Typography
                    key={i}
                    sx={{
                      fontSize: { xs: "0.875rem", md: "0.925rem" },
                      color: "#3A3A3A",
                      lineHeight: 1.85,
                      textAlign: "justify",
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
                    Education and membership
                  </Typography>
                </Box>
                <Box sx={{ pl: "32px" }}>
                  <Typography sx={{ fontSize: "0.9rem", color: NAVY, fontWeight: 500, mb: 0.5 }}>
                    Faculty of Law and Administration — Jagiellonian University, Kraków
                  </Typography>
                  <Typography sx={{ fontSize: "0.9rem", color: NAVY, fontWeight: 500, mb: 2.5 }}>
                    Kraków Bar of Attorneys at Law (OIRP)
                  </Typography>
                </Box>
              </Box>
            </Grid>

          </Grid>
        </Container>
      </Box>

      {/* ── AREAS OF PRACTICE ── */}
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
              Areas of practice
            </Typography>
          </Box>

          <Grid container spacing={{ xs: 2, md: 3 }}>
            {expertiseAreas.map((item, i) => (
              <Grid key={i} size={{ xs: 12, sm: 6, md: 4 }}>
                <Link href={item.href} style={{ textDecoration: "none", display: "block", height: "100%" }}>
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
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
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
                </Link>
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
          borderTop: `3px solid rgba(255,255,255,0.15)`,
          borderBottom: `1px solid rgba(255,255,255,0.08)`,
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
                Do you have a matter that{" "}
                <Box component="span" sx={{ color: "#EDF3F6", fontStyle: "italic" }}>
                  fits this practice?
                </Box>
              </Typography>
              <Typography sx={{
                color: "rgba(255,255,255,0.6)",
                fontSize: "0.925rem",
                lineHeight: 1.7,
                maxWidth: 520,
              }}>
                Let&apos;s start with a brief conversation. Tell me what brings you here —
                I will assess whether I can help and what engagement would look like.
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                <Button
                  href="/en/kontakt"
                  variant="contained"
                  size="large"
                  fullWidth
                  sx={{
                    backgroundColor: "#ffffff",
                    color: NAVY,
                    fontWeight: 700,
                    fontSize: "0.9rem",
                    py: 1.75,
                    "&:hover": { backgroundColor: "rgba(255,255,255,0.88)" },
                  }}
                >
                  Schedule a call
                </Button>
                <Button
                  component="a"
                  href="tel:+48500255293"
                  variant="outlined"
                  size="large"
                  fullWidth
                  sx={{
                    color: "rgba(255,255,255,0.8)",
                    borderColor: "rgba(255,255,255,0.25)",
                    fontWeight: 500,
                    fontSize: "0.9rem",
                    py: 1.75,
                    "&:hover": {
                      borderColor: "rgba(255,255,255,0.5)",
                      backgroundColor: "rgba(255,255,255,0.05)",
                    },
                  }}
                >
                  +48 500 255 293
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

    </Box>
  );
}
