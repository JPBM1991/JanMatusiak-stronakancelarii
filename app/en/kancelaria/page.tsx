import type { Metadata } from "next";
import { Box, Container, Grid, Typography, Button } from "@mui/material";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import WorkHistoryOutlinedIcon from "@mui/icons-material/WorkHistoryOutlined";
import ScheduleOutlinedIcon from "@mui/icons-material/ScheduleOutlined";
import InsightsOutlinedIcon from "@mui/icons-material/InsightsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

export const metadata: Metadata = {
  title: "The Firm | Jan Matusiak — Attorney at Law",
  description:
    "A law office personally run by attorney Jan Matusiak. Strategic legal advisory for businesses — corporate law, contracts, dispute resolution.",
  alternates: {
    canonical: "https://matusiak.legal/en/kancelaria",
    languages: {
      pl: "https://matusiak.legal/kancelaria",
      en: "https://matusiak.legal/en/kancelaria",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://matusiak.legal/en/kancelaria",
    siteName: "Jan Matusiak Law Office",
    title: "The Firm | Jan Matusiak — Attorney at Law",
    description:
      "A law office personally run by attorney Jan Matusiak. Strategic legal advisory for businesses — corporate law, contracts, dispute resolution.",
    images: [{ url: "/jan-matusiak.jpg", width: 800, height: 800, alt: "Jan Matusiak — Attorney at Law" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Firm | Jan Matusiak — Attorney at Law",
    description: "A law office personally run by attorney Jan Matusiak. Strategic legal advisory for businesses.",
    images: ["/jan-matusiak.jpg"],
  },
};

const NAVY = "#2B3A4A";
const GOLD = "#2B3A4A";
const BORDER = "#D4E2EA";
const LIGHT = "#EDF3F6";

const differentiators = [
  {
    icon: <PsychologyOutlinedIcon />,
    title: "Commitment",
    desc: "Every matter is handled personally. I do not pass clients to trainees or associates — contact and responsibility remain with me from start to finish.",
  },
  {
    icon: <WorkHistoryOutlinedIcon />,
    title: "Experience",
    desc: "Years of practice in corporate law, contracts, litigation and business legal services. Including for companies in FMCG, IT, medical, construction and technology sectors.",
  },
  {
    icon: <ScheduleOutlinedIcon />,
    title: "Punctuality",
    desc: "I meet deadlines. If something takes longer, I say so in advance — not after the fact. Efficiency is part of the service, not an option.",
  },
  {
    icon: <InsightsOutlinedIcon />,
    title: "Business understanding",
    desc: "Law is a tool, not an end in itself. I focus on how a legal decision will affect your business operations, operational risk and client relationships.",
  },
  {
    icon: <PersonOutlinedIcon />,
    title: "Boutique working model",
    desc: "I believe in a direct relationship with the client. Every matter is handled by me personally — not passed on. Every client has direct contact with me.",
  },
  {
    icon: <CheckCircleOutlineIcon />,
    title: "Real utility",
    desc: "Legal support should reduce your burden, not add to it. I ensure clients understand what is happening — and can focus on running their business.",
  },
];

export default function KancelariaENPage() {
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
              color: GOLD, fontSize: "0.68rem", fontWeight: 600,
              letterSpacing: "0.22em", textTransform: "uppercase",
            }}>
              About the firm
            </Typography>
          </Box>
          <Typography variant="h1" sx={{
            color: "#ffffff",
            fontSize: { xs: "2rem", md: "3rem" },
            lineHeight: 1.15, letterSpacing: "-0.015em", mb: 2, maxWidth: 680,
          }}>
            A firm for{" "}
            <Box component="span" sx={{ color: "#EDF3F6", fontStyle: "italic" }}>
              business.
            </Box>
          </Typography>
          <Typography sx={{
            color: "rgba(255,255,255,0.62)",
            fontSize: { xs: "0.9rem", md: "1rem" },
            lineHeight: 1.75, maxWidth: 560,
          }}>
            A practice focused on strategic legal advisory for business.
          </Typography>
        </Container>
      </Box>

      {/* ── WHAT THE FIRM IS ── */}
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
                  About the firm
                </Typography>
              </Box>
              <Typography variant="h2" sx={{
                color: NAVY,
                fontSize: { xs: "1.6rem", md: "2.1rem" },
                lineHeight: 1.25, letterSpacing: "-0.01em",
              }}>
                Strategic legal support.
              </Typography>
            </Grid>

            <Grid size={{ xs: 12, md: 7 }}>
              {[
                {
                  lead: "The firm specialises primarily in legal services for entrepreneurs and individual clients across five practice areas.",
                  body: "",
                },
                {
                  lead: "I believe in a direct relationship with the client.",
                  body: "Every matter is handled by me personally — not passed on. Every client has direct contact with me.",
                },
                {
                  lead: "I work nationwide and remotely.",
                  body: "Work is carried out primarily remotely — by phone, email and video conference. In-person meetings are arranged when genuinely needed and justified. I also handle matters with an international element — in English.",
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

      {/* ── DIFFERENTIATORS ── */}
      <Box sx={{ backgroundColor: LIGHT, py: { xs: 7, md: 9 }, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg" sx={{ px: { xs: 3, md: 6 } }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2 }}>
            <Box sx={{ width: 24, height: "1.5px", backgroundColor: GOLD }} />
            <Typography sx={{
              color: GOLD, fontSize: "0.68rem", fontWeight: 600,
              letterSpacing: "0.22em", textTransform: "uppercase",
            }}>
              What sets the firm apart
            </Typography>
          </Box>
          <Typography variant="h2" sx={{
            color: NAVY,
            fontSize: { xs: "1.5rem", md: "1.9rem" },
            letterSpacing: "-0.01em", mb: 5, lineHeight: 1.25, maxWidth: 520,
          }}>
            Six things that matter to me.
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

      {/* ── FEES ── */}
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
              Fees
            </Typography>
            <Typography sx={{ fontSize: "0.875rem", color: "#4A4A4A", lineHeight: 1.75 }}>
              Fees are agreed individually — at the initial consultation stage, following assessment of the matter.
              The primary billing model is an hourly rate; other arrangements agreed with the client are also possible.
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
                Does your matter fit{" "}
                <Box component="span" sx={{ color: "#EDF3F6", fontStyle: "italic" }}>
                  this profile?
                </Box>
              </Typography>
              <Typography sx={{
                color: "rgba(255,255,255,0.6)",
                fontSize: "0.925rem", lineHeight: 1.75, maxWidth: 500,
              }}>
                Let&apos;s start with a brief conversation — no commitment. Tell me what brings you here.
                I will assess whether the firm can help and what a potential engagement would look like.
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
                  href="/en/praktyka"
                  variant="outlined"
                  size="large"
                  fullWidth
                  sx={{
                    color: "rgba(255,255,255,0.7)",
                    borderColor: "rgba(255,255,255,0.2)",
                    fontWeight: 500,
                    fontSize: "0.9rem",
                    py: 1.75,
                    "&:hover": {
                      borderColor: "rgba(255,255,255,0.45)",
                      backgroundColor: "rgba(255,255,255,0.06)",
                      color: "#ffffff",
                    },
                  }}
                >
                  Areas of practice
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

    </Box>
  );
}
