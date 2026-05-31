import type { Metadata } from "next";
import Link from "next/link";
import { Box, Button, Container, Typography } from "@mui/material";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import GavelOutlinedIcon from "@mui/icons-material/GavelOutlined";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import DynamicStatementEN from "@/components/DynamicStatementEN";

export const metadata: Metadata = {
  title: "Jan Matusiak | Attorney at Law",
  description:
    "A law office personally run by attorney Jan Matusiak. Strategic legal support for entrepreneurs and individual clients — corporate law, contracts, dispute resolution, asset planning. Nationwide.",
  alternates: {
    canonical: "https://matusiak.legal/en",
    languages: {
      pl: "https://matusiak.legal",
      en: "https://matusiak.legal/en",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://matusiak.legal/en",
    siteName: "Jan Matusiak Law Office",
    title: "Jan Matusiak | Attorney at Law",
    description:
      "A law office personally run by attorney Jan Matusiak. Strategic legal support for entrepreneurs and individual clients — corporate law, contracts, dispute resolution, asset planning. Nationwide.",
    images: [{ url: "/jan-matusiak.jpg", width: 800, height: 800, alt: "Jan Matusiak — Attorney at Law" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jan Matusiak | Attorney at Law",
    description:
      "A law office personally run by attorney Jan Matusiak. Strategic legal support for entrepreneurs and individual clients.",
    images: ["/jan-matusiak.jpg"],
  },
};

const NAVY = "#2B3A4A";
const NAVY_MID = "#425A6F";
const GOLD = "#2B3A4A";
const BORDER = "#D4E2EA";
const LIGHT = "#EDF3F6";

const pillars = [
  {
    icon: <AccountBalanceOutlinedIcon />,
    title: "Corporate &\ncompany law",
    desc: "Incorporation, restructuring, reorganisation, corporate governance.",
    href: "/en/praktyka#prawo-korporacyjne",
  },
  {
    icon: <HandshakeOutlinedIcon />,
    title: "Contracts &\nnegotiations",
    desc: "B2B agreements, long-term partnerships, international counterparties.",
    href: "/en/praktyka#kontrakty",
  },
  {
    icon: <BusinessCenterOutlinedIcon />,
    title: "Ongoing business\nsupport",
    desc: "External legal partner for companies requiring continuous support.",
    href: "/en/praktyka#obsluga-przedsiebiorcow",
  },
  {
    icon: <GavelOutlinedIcon />,
    title: "Disputes &\nrepresentation",
    desc: "Court proceedings and negotiations when claims need to be pursued.",
    href: "/en/praktyka#postepowania-sporne",
  },
  {
    icon: <ShieldOutlinedIcon />,
    title: "Asset protection\n& planning",
    desc: "Structuring, safeguarding and succession of assets — for business owners and individuals.",
    href: "/en/praktyka#majatek",
  },
];


export default function HomeEN() {
  return (
    <Box component="section" sx={{ backgroundColor: "#ffffff" }}>

      {/* ── HERO ── */}
      <Box
        sx={{
          pt: { xs: "88px", md: "120px" },
          pb: { xs: 8, md: 10 },
          borderBottom: `1px solid ${BORDER}`,
          textAlign: "center",
        }}
      >
        <Container maxWidth="md" sx={{ px: { xs: 3, md: 6 } }}>

          {/* Eyebrow */}
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 1.5, mb: 4 }}>
            <Box sx={{ width: 28, height: "1.5px", backgroundColor: GOLD, flexShrink: 0 }} />
            <Typography sx={{
              color: GOLD,
              fontSize: "0.68rem",
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
            }}>
              Attorney at Law · Law Office
            </Typography>
            <Box sx={{ width: 28, height: "1.5px", backgroundColor: GOLD, flexShrink: 0 }} />
          </Box>

          {/* H1 */}
          <Typography variant="h1" sx={{
            color: NAVY,
            fontSize: { xs: "2.4rem", sm: "3.2rem", md: "4rem" },
            lineHeight: 1.1,
            letterSpacing: "-0.025em",
          }}>
            Strategic
          </Typography>
          <Typography variant="h1" sx={{
            color: NAVY,
            fontSize: { xs: "2.4rem", sm: "3.2rem", md: "4rem" },
            lineHeight: 1.1,
            letterSpacing: "-0.025em",
            fontStyle: "italic",
            mb: 1,
          }}>
            legal support
          </Typography>
          <Typography variant="h1" sx={{
            color: NAVY,
            fontSize: { xs: "2.4rem", sm: "3.2rem", md: "4rem" },
            lineHeight: 1.1,
            letterSpacing: "-0.025em",
            mb: 4,
          }}>
            for entrepreneurs and individual clients.
          </Typography>

          {/* Lead */}
          <Typography sx={{
            color: "#4A4A4A",
            fontSize: { xs: "0.95rem", md: "1.05rem" },
            lineHeight: 1.8,
            maxWidth: 540,
            mx: "auto",
            mb: 5,
          }}>
            I support clients in both business and private matters. My services are for those who value a reliable legal partner they can count on.
          </Typography>

          {/* CTAs */}
          <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", justifyContent: "center", mb: 6 }}>
            <Button
              href="/en/kontakt"
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
              Schedule a call
            </Button>
            <Button
              href="/en/praktyka"
              variant="outlined"
              size="large"
              sx={{
                color: NAVY,
                borderColor: NAVY,
                fontWeight: 500,
                fontSize: "0.875rem",
                px: 4,
                py: 1.5,
                "&:hover": { backgroundColor: NAVY, color: "#fff" },
              }}
            >
              Areas of practice
            </Button>
          </Box>

          {/* Signature */}
          <Box sx={{
            display: "inline-block",
            borderTop: `1px solid ${BORDER}`,
            pt: 3,
            px: { xs: 0, md: 4 },
          }}>
            <Typography sx={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "1.1rem",
              fontWeight: 700,
              color: NAVY,
              mb: 0.4,
            }}>
              Jan Matusiak
            </Typography>
            <Typography sx={{
              fontSize: "0.68rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: GOLD,
              fontWeight: 600,
              mb: 1.75,
            }}>
              Attorney at Law
            </Typography>
            <Typography sx={{
              fontSize: "0.85rem",
              color: "#5A5A5A",
              lineHeight: 1.75,
              mb: 1,
              maxWidth: 440,
            }}>
              Graduate of the Faculty of Law and Administration, Jagiellonian University.
              Years of experience in business law, corporate matters and litigation.
            </Typography>
            <Typography sx={{ fontSize: "0.85rem", color: "#5A5A5A", lineHeight: 1.75 }}>
              Services in{" "}
              <Box component="span" sx={{ color: NAVY, fontWeight: 600 }}>Polish and English</Box>.
            </Typography>
          </Box>

        </Container>
      </Box>

      <DynamicStatementEN />

      {/* ── PILLARS ── */}
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
            Areas of work
          </Typography>

          <Box sx={{ display: "flex", flexWrap: "wrap", gap: { xs: 2, md: 1.5 } }}>
            {pillars.map((p, i) => (
              <Box key={i} sx={{ flex: { xs: "1 1 calc(50% - 8px)", md: "1 1 0" }, minWidth: 0 }}>
                <Link href={p.href} style={{ textDecoration: "none", display: "block", height: "100%" }}>
                  <Box sx={{
                    backgroundColor: "#ffffff",
                    border: `1px solid ${BORDER}`,
                    borderTop: `3px solid ${BORDER}`,
                    p: { xs: 2.5, md: 2.5 },
                    height: "100%",
                    transition: "border-top-color 0.2s",
                    "&:hover": { borderTopColor: GOLD },
                  }}>
                    <Box sx={{ color: GOLD, mb: 1.75, display: "flex", "& svg": { fontSize: "1.4rem" } }}>
                      {p.icon}
                    </Box>
                    <Typography sx={{
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      fontWeight: 700,
                      fontSize: "0.95rem",
                      color: NAVY,
                      mb: 1,
                      lineHeight: 1.35,
                      whiteSpace: "pre-line",
                    }}>
                      {p.title}
                    </Typography>
                    <Typography sx={{ fontSize: "0.8rem", color: "#5A5A5A", lineHeight: 1.65 }}>
                      {p.desc}
                    </Typography>
                  </Box>
                </Link>
              </Box>
            ))}
          </Box>


        </Container>
      </Box>

    </Box>
  );
}
