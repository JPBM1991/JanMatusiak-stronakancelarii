import type { Metadata } from "next";
import { Box, Container, Grid, Typography, Button } from "@mui/material";
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

export const metadata: Metadata = {
  title: "Practice Areas | Jan Matusiak — Attorney at Law",
  description:
    "Corporate law, contracts, ongoing business support, dispute resolution, asset protection and planning. Practice scope of Jan Matusiak's law office.",
  alternates: {
    canonical: "https://matusiak.legal/en/praktyka",
    languages: {
      pl: "https://matusiak.legal/praktyka",
      en: "https://matusiak.legal/en/praktyka",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://matusiak.legal/en/praktyka",
    siteName: "Jan Matusiak Law Office",
    title: "Practice Areas | Jan Matusiak — Attorney at Law",
    description:
      "Corporate law, contracts, ongoing business support, dispute resolution, asset protection and planning. Practice scope of Jan Matusiak's law office.",
    images: [{ url: "/jan-matusiak.jpg", width: 800, height: 800, alt: "Jan Matusiak — Attorney at Law" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Practice Areas | Jan Matusiak — Attorney at Law",
    description: "Corporate law, contracts, dispute resolution, asset protection. Practice scope of Jan Matusiak's law office.",
    images: ["/jan-matusiak.jpg"],
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
    title: "Corporate and commercial law",
    lead: "Incorporation, transformation and ongoing company management.",
    items: [
      "Company incorporation",
      "Shareholders agreements",
      "Transformations, reorganisations, liquidations",
      "Rights and obligations of boards, directors' liability, advisory for company bodies",
      "Articles of association and bylaws — drafting and negotiation",
      "Changes in shareholding structure",
      "General meetings and shareholders meetings support",
      "Share and equity transactions (M&A)",
    ],
  },
  {
    id: "kontrakty",
    icon: <HandshakeOutlinedIcon />,
    title: "Contracts and negotiations",
    lead: "Drafting, reviewing and negotiating commercial agreements.",
    items: [
      "B2B, B2C agreements — review, verification, drafting, negotiation",
      "Cooperation, agency, distribution, franchise and supply agreements",
      "Agreements with an international element",
      "Agreements for the FMCG sector",
    ],
  },
  {
    id: "obsluga-przedsiebiorcow",
    icon: <BusinessCenterOutlinedIcon />,
    title: "Business legal services",
    lead: "External counsel model — ongoing legal support without the cost of in-house.",
    items: [
      "Ongoing legal support on a retainer (monthly fee) basis",
      "Review of contracts and corporate documents on an ongoing basis",
      "Support in management and operational decisions",
      "Ad hoc consultations — by phone and email",
      "Managing relations with counterparties, subcontractors, clients",
      "Monitoring of legal changes relevant to the client's business",
    ],
  },
  {
    id: "postepowania-sporne",
    icon: <GavelOutlinedIcon />,
    title: "Dispute resolution",
    lead: "Representation before courts in commercial, civil, family and administrative matters.",
    items: [
      "Contractual disputes — claims under B2B agreements",
      "Debt enforcement and defence against claims",
      "Debt recovery and enforcement proceedings",
      "Court proceedings before common courts",
      "Negotiation and out-of-court settlement",
      "Shareholder and corporate disputes",
    ],
  },
  {
    id: "majatek",
    icon: <ShieldOutlinedIcon />,
    title: "Asset protection and planning",
    lead: "A comprehensive approach to private and business assets — from structuring and protection, through succession and inheritance, to settlement in life and business situations.",
    items: [
      "Asset structuring (companies, real estate, assets)",
      "Asset protection against business and personal risk",
      "Succession, inheritance and transfer of assets to future generations",
      "Realisation and protection of property rights in inheritance matters",
      "Matrimonial property agreements",
      "Property settlements at life and business turning points",
      "Gifts and transfer of ownership",
      "Family foundations",
    ],
  },
];

const industries = [
  { name: "Professional services", icon: <WorkOutlinedIcon /> },
  { name: "FMCG & Retail", icon: <StorefrontOutlinedIcon /> },
  { name: "E-commerce", icon: <LanguageOutlinedIcon /> },
  { name: "Investment", icon: <TrendingUpOutlinedIcon /> },
  { name: "Creative, IP & image management", icon: <BrushOutlinedIcon /> },
  { name: "Medical sector", icon: <LocalHospitalOutlinedIcon /> },
];

export default function PraktykaENPage() {
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
              color: GOLD, fontSize: "0.68rem", fontWeight: 600,
              letterSpacing: "0.22em", textTransform: "uppercase",
            }}>
              Areas of practice
            </Typography>
          </Box>
          <Typography variant="h1" sx={{
            color: "#ffffff",
            fontSize: { xs: "2rem", md: "3rem" },
            lineHeight: 1.15, letterSpacing: "-0.015em", mb: 2, maxWidth: 660,
          }}>
            What falls within the scope of{" "}
            <Box component="span" sx={{ color: "#EDF3F6", fontStyle: "italic" }}>
              our work.
            </Box>
          </Typography>
          <Typography sx={{
            color: "rgba(255,255,255,0.6)",
            fontSize: { xs: "0.9rem", md: "1rem" },
            lineHeight: 1.75, maxWidth: 560,
          }}>
            The firm specialises in legal services for clients across five practice areas. Below you will find a detailed scope with examples of matters I advise on.
          </Typography>
        </Container>
      </Box>

      {/* ── PRACTICE AREAS ── */}
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

      {/* ── SECTORS ── */}
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
                  Sectors
                </Typography>
              </Box>
              <Typography variant="h2" sx={{
                color: NAVY,
                fontSize: { xs: "1.4rem", md: "1.8rem" },
                lineHeight: 1.25, letterSpacing: "-0.01em", mb: 2,
              }}>
                Sectors I work with most frequently.
              </Typography>
              <Typography sx={{
                fontSize: "0.875rem", color: "#5A5A5A", lineHeight: 1.8, textAlign: "justify",
              }}>
                The firm is not sector-specific — what matters is the nature of the case. My experience has been built primarily through serving business clients in the following areas:
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

      {/* ── LANGUAGE NOTE ── */}
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
              Services in English
            </Typography>
            <Typography sx={{ fontSize: "0.875rem", color: "#4A4A4A", lineHeight: 1.8 }}>
              I handle matters with an international element — including contracts, negotiations
              and correspondence in English. If your business operates internationally or your
              counterparty is foreign, this is no obstacle.
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
                Do you have a matter in{" "}
                <Box component="span" sx={{ color: "#EDF3F6", fontStyle: "italic" }}>
                  this scope?
                </Box>
              </Typography>
              <Typography sx={{
                color: "rgba(255,255,255,0.6)",
                fontSize: "0.925rem", lineHeight: 1.75, maxWidth: 500,
              }}>
                Let&apos;s start with a brief exploratory conversation — no commitment.
                Tell me what brings you here. I will be direct about whether the firm
                can genuinely help.
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, gap: 1.5 }}>
                <Button
                  href="/en/kontakt"
                  variant="contained"
                  sx={{
                    backgroundColor: "#ffffff",
                    color: NAVY,
                    fontWeight: 700,
                    fontSize: "0.85rem",
                    px: 3.5,
                    py: 1.5,
                    borderRadius: 0,
                    textTransform: "none",
                    letterSpacing: "0.02em",
                    "&:hover": { backgroundColor: "rgba(255,255,255,0.88)" },
                  }}
                >
                  Schedule a call
                </Button>
                <Button
                  href="/en/kancelaria"
                  variant="outlined"
                  sx={{
                    borderColor: "rgba(255,255,255,0.2)",
                    color: "rgba(255,255,255,0.7)",
                    fontWeight: 600,
                    fontSize: "0.85rem",
                    px: 3.5,
                    py: 1.5,
                    borderRadius: 0,
                    textTransform: "none",
                    "&:hover": {
                      borderColor: "rgba(255,255,255,0.45)",
                      color: "#ffffff",
                      backgroundColor: "rgba(255,255,255,0.06)",
                    },
                  }}
                >
                  About the firm
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

    </Box>
  );
}
