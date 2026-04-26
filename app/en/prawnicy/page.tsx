import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Box, Container, Grid, Typography } from "@mui/material";

export const metadata: Metadata = {
  title: "Lawyers | Jan Matusiak — Attorney at Law",
  description:
    "Jan Matusiak — attorney at law, founder of the firm. Daria Meysztowicz–Matusiak — attorney at law, Of Counsel, specialist in investment transactions and venture capital.",
};

const NAVY = "#2B3A4A";
const GOLD = "#2B3A4A";
const BORDER = "#D4E2EA";
const LIGHT = "#EDF3F6";

const lawyers = [
  {
    name: "Jan Matusiak",
    role: "Attorney at Law · Owner",
    photo: "/jan-matusiak.jpg",
    excerpt:
      "I specialise in civil and commercial law. I serve primarily entrepreneurs and individual clients in corporate, asset and dispute matters.",
    href: "/en/jan-matusiak",
  },
  {
    name: "Daria Meysztowicz–Matusiak",
    role: "Attorney at Law · Of Counsel",
    photo: "/daria-meysztowicz-matusiak.jpg",
    excerpt:
      "She concentrates her practice on investment transactions, particularly in the venture capital space, and on ongoing legal services for business entities.",
    href: "/en/of-counsel",
  },
];

export default function PrawnicyENPage() {
  return (
    <Box sx={{ backgroundColor: "#ffffff", minHeight: "100vh" }}>

      {/* ── HEADER ── */}
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
              color: GOLD,
              fontSize: "0.68rem",
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
            }}>
              The Firm
            </Typography>
          </Box>
          <Typography variant="h1" sx={{
            color: "#ffffff",
            fontSize: { xs: "2.2rem", md: "3rem" },
            lineHeight: 1.15,
            letterSpacing: "-0.015em",
            mb: 1.5,
          }}>
            Lawyers
          </Typography>
          <Typography sx={{
            color: "rgba(255,255,255,0.6)",
            fontSize: { xs: "0.9rem", md: "1rem" },
            lineHeight: 1.75,
            maxWidth: 520,
          }}>
            A law office run by attorney Jan Matusiak. In selected matters I collaborate with experienced external lawyers.
          </Typography>
        </Container>
      </Box>

      {/* ── CARDS ── */}
      <Box sx={{ backgroundColor: LIGHT, py: { xs: 7, md: 9 } }}>
        <Container maxWidth="lg" sx={{ px: { xs: 3, md: 6 } }}>
          <Grid container spacing={{ xs: 4, md: 5 }}>
            {lawyers.map((lawyer) => (
              <Grid key={lawyer.href} size={{ xs: 12 }}>
                <Box sx={{
                  backgroundColor: "#ffffff",
                  border: `1px solid ${BORDER}`,
                  borderTop: `3px solid ${GOLD}`,
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                }}>
                  <Link href={lawyer.href} style={{ textDecoration: "none", flexShrink: 0 }}>
                    <Box sx={{
                      position: "relative",
                      width: { xs: "100%", md: 260 },
                      height: { xs: 280, md: "auto" },
                      minHeight: { md: 320 },
                      overflow: "hidden",
                      cursor: "pointer",
                    }}>
                      <Image
                        src={lawyer.photo}
                        alt={lawyer.name}
                        fill
                        style={{ objectFit: "cover", objectPosition: "center top" }}
                      />
                    </Box>
                  </Link>

                  <Box sx={{ p: { xs: 3, md: 4 }, flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <Typography sx={{
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      fontWeight: 700,
                      fontSize: { xs: "1.2rem", md: "1.5rem" },
                      color: NAVY,
                      lineHeight: 1.2,
                      mb: 0.5,
                    }}>
                      {lawyer.name}
                    </Typography>
                    <Typography sx={{
                      fontSize: "0.7rem",
                      fontWeight: 600,
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: GOLD,
                      mb: 2,
                    }}>
                      {lawyer.role}
                    </Typography>
                    <Typography sx={{
                      fontSize: "0.875rem",
                      color: "#5A5A5A",
                      lineHeight: 1.75,
                      mb: 3,
                      maxWidth: 560,
                    }}>
                      {lawyer.excerpt}
                    </Typography>
                    <Link href={lawyer.href} style={{ textDecoration: "none" }}>
                      <Box
                        sx={{
                          display: "inline-block",
                          border: `1px solid ${BORDER}`,
                          color: NAVY,
                          fontWeight: 500,
                          fontSize: "0.8rem",
                          letterSpacing: "0.05em",
                          py: 1.25,
                          px: 3,
                          cursor: "pointer",
                          transition: "border-color 0.2s, color 0.2s",
                          "&:hover": { borderColor: GOLD, color: GOLD },
                        }}
                      >
                        Read more →
                      </Box>
                    </Link>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

    </Box>
  );
}
