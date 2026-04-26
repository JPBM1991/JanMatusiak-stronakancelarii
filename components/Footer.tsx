"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { usePathname } from "next/navigation";

const NAVY = "#2B3A4A";
const NAVY_DARK = "#1A1C1E";
const GOLD = "#2B3A4A";
const BORDER = "rgba(255,255,255,0.08)";

export default function Footer() {
  const pathname = usePathname();
  const isEn = pathname.startsWith("/en");
  return (
    <Box component="footer" sx={{ backgroundColor: NAVY, borderTop: `3px solid ${GOLD}` }}>

      {/* ── GŁÓWNA TREŚĆ ── */}
      <Container maxWidth="lg" sx={{ px: { xs: 3, md: 6 }, py: { xs: 5, md: 6 } }}>
        <Box sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { xs: "flex-start", md: "center" },
          justifyContent: "space-between",
          gap: { xs: 4, md: 6 },
        }}>

          {/* Nazwa */}
          <Box>
          </Box>

          {/* Dane kontaktowe */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1.25 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.25 }}>
              <PhoneOutlinedIcon sx={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.4)", flexShrink: 0 }} />
              <Box component="a" href="tel:+48500255293" sx={{
                fontSize: "0.83rem", color: "rgba(255,255,255,0.6)",
                textDecoration: "none", "&:hover": { color: "#fff" },
              }}>
                +48 500 255 293
              </Box>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.25 }}>
              <EmailOutlinedIcon sx={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.4)", flexShrink: 0 }} />
              <Box component="a" href="mailto:jan.matusiak@matusiak.legal" sx={{
                fontSize: "0.83rem", color: "rgba(255,255,255,0.6)",
                textDecoration: "none", "&:hover": { color: "#fff" },
              }}>
                jan.matusiak@matusiak.legal
              </Box>
            </Box>
          </Box>

        </Box>
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
            <Box sx={{ display: "flex", alignItems: "center", gap: 2.5, flexWrap: "wrap" }}>
              <Typography sx={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.3)" }}>
                © {new Date().getFullYear()}{" "}
                {isEn ? "Jan Matusiak Law Office." : "Jan Matusiak Kancelaria Radcy Prawnego."}{" "}
                {isEn ? "All rights reserved." : "Wszelkie prawa zastrzeżone."}
              </Typography>
              <Box
                component={Link}
                href={isEn ? "/en/polityka-cookies" : "/polityka-cookies"}
                sx={{
                  fontSize: "0.75rem",
                  color: "rgba(255,255,255,0.3)",
                  textDecoration: "none",
                  "&:hover": { color: "rgba(255,255,255,0.6)" },
                }}
              >
                {isEn ? "Privacy & Cookies Policy" : "Polityka prywatności i cookies"}
              </Box>
              <Box
                component={Link}
                href={isEn ? "/en/aml-rodo" : "/aml-rodo"}
                sx={{
                  fontSize: "0.75rem",
                  color: "rgba(255,255,255,0.3)",
                  textDecoration: "none",
                  "&:hover": { color: "rgba(255,255,255,0.6)" },
                }}
              >
                AML-RODO
              </Box>
            </Box>
            <Typography sx={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.2)" }}>
              {isEn ? "Design:" : "Wykonanie:"}{" "}
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
