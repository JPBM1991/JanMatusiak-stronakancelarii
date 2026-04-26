import type { Metadata } from "next";
import { Box, Container, Grid, Typography, Button } from "@mui/material";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/link";

export const metadata: Metadata = {
  title: "For Business | Jan Matusiak — Attorney at Law",
  description:
    "Legal services for SME entrepreneurs and business owners. External attorney without employment commitments — ongoing support, flexible model, direct access.",
};

const NAVY = "#2B3A4A";
const GOLD = "#2B3A4A";
const BORDER = "#D4E2EA";
const LIGHT = "#EDF3F6";

const modelPoints = [
  {
    label: "Direct access",
    desc: "You contact me directly — not an assistant or a receptionist.",
  },
  {
    label: "Ongoing support without employment costs",
    desc: "Retainer (monthly fee) or ad hoc instructions. You gain access to a lawyer without the costs and obligations of employment.",
  },
  {
    label: "Understanding the business context",
    desc: "I focus on how a legal decision will affect your business — not just what the regulation says.",
  },
  {
    label: "Punctuality and clear terms of engagement",
    desc: "I meet deadlines. If a matter requires more time or additional experts — I communicate this in advance, not after the fact.",
  },
  {
    label: "Remote and efficient",
    desc: "I operate nationwide, primarily remotely — phone, email, video conference. If needed, I am happy to meet in person.",
  },
  {
    label: "Transparency as a quality guarantee",
    desc: "I believe in a direct relationship with the client. I take on matters where I can genuinely help, and if a topic falls outside my competence, I will say so directly.",
  },
];

export default function DlaPrzedsiebiorcowENPage() {
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
              For Business
            </Typography>
          </Box>
          <Typography variant="h1" sx={{
            color: "#ffffff",
            fontSize: { xs: "2rem", md: "3rem" },
            lineHeight: 1.15, letterSpacing: "-0.015em", mb: 2, maxWidth: 680,
          }}>
            Legal counsel for{" "}
            <Box component="span" sx={{ color: "#EDF3F6", fontStyle: "italic" }}>
              business owners.
            </Box>
          </Typography>
          <Typography sx={{
            color: "rgba(255,255,255,0.6)",
            fontSize: { xs: "0.9rem", md: "1rem" },
            lineHeight: 1.75, maxWidth: 580,
          }}>
            Not every company needs its own legal department. However, every company,
            particularly in a growth phase, should know who to turn to for support
            in situations requiring a professional.
          </Typography>
        </Container>
      </Box>

      {/* ── WORKING MODEL ── */}
      <Box sx={{ backgroundColor: "#ffffff", py: { xs: 7, md: 9 }, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg" sx={{ px: { xs: 3, md: 6 } }}>
          <Grid container spacing={{ xs: 4, md: 8 }} alignItems="flex-start">

            <Grid size={{ xs: 12, md: 5 }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2.5 }}>
                <Box sx={{ width: 24, height: "1.5px", backgroundColor: GOLD }} />
                <Typography sx={{
                  color: GOLD, fontSize: "0.68rem", fontWeight: 600,
                  letterSpacing: "0.22em", textTransform: "uppercase",
                }}>
                  Working model
                </Typography>
              </Box>
              <Typography variant="h2" sx={{
                color: NAVY,
                fontSize: { xs: "1.5rem", md: "1.9rem" },
                lineHeight: 1.25, letterSpacing: "-0.01em", mb: 2,
              }}>
                External attorney without the commitment of employment.
              </Typography>
              <Typography sx={{
                fontSize: "0.9rem", color: "#5A5A5A", lineHeight: 1.85, mb: 3,
              }}>
                Large companies have their own legal departments. Small and medium-sized businesses typically do not, and resort to legal assistance on an ad hoc basis, when a problem already exists.
              </Typography>
              <Typography sx={{
                fontSize: "0.9rem", color: "#5A5A5A", lineHeight: 1.85, mb: 3,
              }}>
                The model I propose is access to an attorney embedded in your business, without the need to maintain a permanent legal department when that is not necessary.
              </Typography>
              <Typography sx={{
                fontSize: "0.9rem", color: "#5A5A5A", lineHeight: 1.85,
              }}>
                I also work with clients who have internal legal teams — as external counsel I support in-house teams in matters requiring specialist knowledge or greater operational support.
              </Typography>
            </Grid>

            <Grid size={{ xs: 12, md: 7 }}>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 0 }}>
                {modelPoints.map((point, i) => (
                  <Box
                    key={i}
                    sx={{
                      display: "flex",
                      gap: 2.5,
                      py: 2.5,
                      borderBottom: i < modelPoints.length - 1 ? `1px solid ${BORDER}` : "none",
                    }}
                  >
                    <Box sx={{
                      color: GOLD,
                      mt: "2px",
                      flexShrink: 0,
                      "& svg": { fontSize: "1rem" },
                    }}>
                      <CheckOutlinedIcon />
                    </Box>
                    <Box>
                      <Typography sx={{
                        fontSize: "0.875rem", fontWeight: 700,
                        color: NAVY, mb: 0.5,
                      }}>
                        {point.label}
                      </Typography>
                      <Typography sx={{
                        fontSize: "0.85rem", color: "#5A5A5A", lineHeight: 1.7,
                      }}>
                        {point.desc}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Grid>

          </Grid>
        </Container>
      </Box>

      {/* ── LINK TO PRACTICE ── */}
      <Box sx={{ backgroundColor: "#ffffff", py: { xs: 5, md: 6 }, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg" sx={{ px: { xs: 3, md: 6 } }}>
          <Box sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "flex-start", md: "center" },
            justifyContent: "space-between",
            gap: 3,
            backgroundColor: LIGHT,
            border: `1px solid ${BORDER}`,
            p: { xs: 3, md: 4 },
          }}>
            <Box>
              <Typography sx={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontWeight: 700,
                fontSize: { xs: "1rem", md: "1.15rem" },
                color: NAVY, mb: 0.75,
              }}>
                Looking for a specific scope of services?
              </Typography>
            </Box>
            <Link href="/en/praktyka" style={{ textDecoration: "none", flexShrink: 0 }}>
              <Box sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                color: NAVY,
                fontWeight: 700,
                fontSize: "0.875rem",
                whiteSpace: "nowrap",
                "&:hover": { color: GOLD },
                transition: "color 0.2s",
              }}>
                Areas of practice
                <ArrowForwardIcon sx={{ fontSize: "0.95rem" }} />
              </Box>
            </Link>
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
                Let&apos;s talk about your{" "}
                <Box component="span" sx={{ color: "#EDF3F6", fontStyle: "italic" }}>
                  business.
                </Box>
              </Typography>
              <Typography sx={{
                color: "rgba(255,255,255,0.6)",
                fontSize: "0.925rem", lineHeight: 1.75, maxWidth: 500,
              }}>
                A brief introductory conversation — no commitment. Tell me where your company
                is and what support you need. I will be direct about whether I can help
                and what engagement would look like.
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, gap: 1.5 }}>
                <Button
                  href="/en/kontakt"
                  variant="contained"
                  sx={{
                    backgroundColor: GOLD,
                    color: "#ffffff",
                    fontWeight: 700,
                    fontSize: "0.85rem",
                    px: 3.5,
                    py: 1.5,
                    borderRadius: 0,
                    textTransform: "none",
                    letterSpacing: "0.02em",
                    "&:hover": { backgroundColor: "#A07D3E" },
                  }}
                >
                  Schedule a call
                </Button>
                <Button
                  href="/en/praktyka"
                  variant="outlined"
                  sx={{
                    borderColor: "rgba(255,255,255,0.3)",
                    color: "rgba(255,255,255,0.75)",
                    fontWeight: 600,
                    fontSize: "0.85rem",
                    px: 3.5,
                    py: 1.5,
                    borderRadius: 0,
                    textTransform: "none",
                    "&:hover": {
                      borderColor: GOLD,
                      color: GOLD,
                      backgroundColor: "transparent",
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
