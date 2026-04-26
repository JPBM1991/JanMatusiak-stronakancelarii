import type { Metadata } from "next";
import { Box, Container, Grid, Typography } from "@mui/material";
import ContactFormEN from "@/components/ContactFormEN";

export const metadata: Metadata = {
  title: "Contact | Jan Matusiak — Attorney at Law",
  description:
    "Get in touch with the firm. Describe your matter — we will arrange an initial conversation.",
};

const NAVY = "#2B3A4A";
const GOLD = "#2B3A4A";
const BORDER = "#D4E2EA";
const LIGHT = "#EDF3F6";

const contactDetails = [
  {
    label: "E-mail",
    value: "jan.matusiak@matusiak.legal",
    href: "mailto:jan.matusiak@matusiak.legal",
  },
  {
    label: "Phone",
    value: "+48 500 255 293",
    href: "tel:+48500255293",
  },
];

const infoItems = [
  {
    title: "How I work",
    text: "I serve clients primarily remotely. In-person meetings are arranged whenever the matter requires it.",
  },
  {
    title: "Response time",
    text: "I respond to emails and form submissions within 1–2 business days. For urgent matters — please call directly.",
  },
  {
    title: "Working together",
    text: "Collaboration starts with an email exchange or a brief phone call, so I can assess whether I can help with your matter.",
  },
];

export default function KontaktENPage() {
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
            <Box sx={{ width: 24, height: "1.5px", backgroundColor: GOLD, flexShrink: 0 }} />
            <Typography sx={{
              color: GOLD,
              fontSize: "0.68rem",
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
            }}>
              Contact
            </Typography>
          </Box>
          <Typography
            variant="h1"
            sx={{
              color: "#ffffff",
              fontSize: { xs: "2rem", md: "2.8rem" },
              lineHeight: 1.15,
              letterSpacing: "-0.015em",
              mb: 1.5,
              maxWidth: 560,
            }}
          >
            Tell us what{" "}
            <Box component="span" sx={{ color: "#EDF3F6", fontStyle: "italic" }}>
              brings you here.
            </Box>
          </Typography>
          <Typography sx={{
            color: "rgba(255,255,255,0.6)",
            fontSize: { xs: "0.9rem", md: "1rem" },
            lineHeight: 1.7,
            maxWidth: 460,
          }}>
            The first step is a brief conversation — to assess whether your matter
            falls within the scope of my practice.
          </Typography>
        </Container>
      </Box>

      {/* ── CONTENT ── */}
      <Box sx={{ backgroundColor: LIGHT, py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg" sx={{ px: { xs: 3, md: 6 } }}>
          <Grid container spacing={{ xs: 4, md: 6 }} alignItems="flex-start">

            {/* LEFT — form */}
            <Grid size={{ xs: 12, md: 7 }}>
              <ContactFormEN />
            </Grid>

            {/* RIGHT — contact details + info */}
            <Grid size={{ xs: 12, md: 5 }}>

              <Box
                sx={{
                  backgroundColor: "#ffffff",
                  border: `1px solid ${BORDER}`,
                  borderTop: `3px solid ${GOLD}`,
                  p: { xs: 3, md: 3.5 },
                  mb: 3,
                }}
              >
                <Typography sx={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontWeight: 700,
                  fontSize: "1.05rem",
                  color: NAVY,
                  mb: 2.5,
                }}>
                  Contact details
                </Typography>

                {contactDetails.map((item) => (
                  <Box key={item.label} sx={{ mb: 2 }}>
                    <Typography sx={{
                      fontSize: "0.68rem",
                      fontWeight: 600,
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: GOLD,
                      mb: 0.4,
                    }}>
                      {item.label}
                    </Typography>
                    <Typography
                      component="a"
                      href={item.href}
                      sx={{
                        fontSize: "0.95rem",
                        fontWeight: 500,
                        color: NAVY,
                        textDecoration: "none",
                        "&:hover": { color: GOLD },
                        transition: "color 0.2s",
                      }}
                    >
                      {item.value}
                    </Typography>
                  </Box>
                ))}

                <Box sx={{ borderTop: `1px solid ${BORDER}`, pt: 2, mt: 2.5 }}>
                  <Typography sx={{ fontSize: "0.68rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: GOLD, mb: 0.4 }}>
                    Coverage
                  </Typography>
                  <Typography sx={{ fontSize: "0.88rem", color: "#4A4A4A", lineHeight: 1.65 }}>
                    Nationwide · International advisory
                    <br />
                    Services in Polish and English
                  </Typography>
                </Box>

                <Box sx={{ borderTop: `1px solid ${BORDER}`, pt: 2, mt: 2.5 }}>
                  <Typography sx={{ fontSize: "0.68rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: GOLD, mb: 0.4 }}>
                    In-person meetings
                  </Typography>
                  <Typography sx={{ fontSize: "0.88rem", color: "#4A4A4A", lineHeight: 1.65 }}>
                    By prior arrangement, at a chosen location in Kraków, at the client&apos;s premises, or online (video conference).
                  </Typography>
                </Box>

                <Box sx={{ borderTop: `1px solid ${BORDER}`, pt: 2, mt: 2.5 }}>
                  <Typography sx={{ fontSize: "0.68rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: GOLD, mb: 0.4 }}>
                    Registered details
                  </Typography>
                  <Typography sx={{ fontSize: "0.88rem", color: "#4A4A4A", lineHeight: 1.65 }}>
                    Jan Matusiak Kancelaria Radcy Prawnego
                    <br />
                    ul. Stańczyka 22/54, 30-126 Kraków, Poland
                    <br />
                    NIP: 6772488832, REGON: 524117386
                  </Typography>
                </Box>

                <Box sx={{ borderTop: `1px solid ${BORDER}`, pt: 2, mt: 2.5 }}>
                  <Typography sx={{ fontSize: "0.68rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: GOLD, mb: 0.4 }}>
                    Bank account
                  </Typography>
                  <Typography sx={{ fontSize: "0.88rem", color: "#4A4A4A", lineHeight: 1.65 }}>
                    mBank
                    <br />
                    94 1140 2004 0000 3402 8323 8184
                  </Typography>
                </Box>
              </Box>


            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ── HOW I WORK ── */}
      <Box sx={{ backgroundColor: "#ffffff", py: { xs: 6, md: 7 }, borderTop: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg" sx={{ px: { xs: 3, md: 6 } }}>
          <Grid container spacing={{ xs: 3, md: 4 }}>
            {infoItems.map((item) => (
              <Grid key={item.title} size={{ xs: 12, md: 4 }}>
                <Box sx={{ textAlign: "center", px: { xs: 0, md: 2 } }}>
                  <Box sx={{ width: 32, height: "2px", backgroundColor: BORDER, mx: "auto", mb: 2.5 }} />
                  <Typography sx={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontWeight: 700,
                    fontSize: "1rem",
                    color: NAVY,
                    mb: 1.25,
                    letterSpacing: "-0.01em",
                  }}>
                    {item.title}
                  </Typography>
                  <Typography sx={{ fontSize: "0.85rem", color: "#5A5A5A", lineHeight: 1.8 }}>
                    {item.text}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ── MAP ── */}
      <Box sx={{ display: { xs: "none", md: "block" }, width: "100%", height: 4, backgroundColor: NAVY }} />
      <Box sx={{ display: { xs: "none", md: "block" }, width: "100%", height: 380, overflow: "hidden" }}>
        <iframe
          src="https://maps.google.com/maps?q=ul.+Sta%C5%84czyka+22%2C+30-126+Krak%C3%B3w&output=embed"
          width="100%"
          height="380"
          style={{ border: 0, display: "block", filter: "grayscale(0.3) contrast(1.05)" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Office location"
        />
      </Box>

    </Box>
  );
}
