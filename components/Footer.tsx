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
  const showDisclaimer = pathname.includes("/aktualnosci");
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

          {/* Zastrzeżenie — tylko w zakładce Aktualności */}
          {showDisclaimer && (
            <Box sx={{ maxWidth: { xs: "100%", md: 480 } }}>
              <Typography sx={{ fontSize: "0.68rem", color: "rgba(255,255,255,0.3)", lineHeight: 1.8 }}>
                {isEn
                  ? "The author accepts no liability for the content of this blog or individual posts to the extent that third parties may suffer harm by taking or refraining from any action based on the content published on this website. The content does not constitute legal advice and may not serve as the basis for any decision. The content reflects solely the views of the Author and does not constitute the Author's official position in any particular matter."
                  : "Autor nie odpowiada za treść niniejszego bloga ani poszczególnych wpisów w zakresie, w jakim podmioty trzecie mogłyby doznać szkody, podejmując (lub nie podejmując) jakiekolwiek czynności na podstawie treści zamieszczonych na stronie. Treść wpisów nie stanowi opinii prawnej ani porady prawnej. Treść wpisów stanowi wyłącznie odzwierciedlenie poglądów Autora i nie stanowi jego oficjalnego stanowiska w jakiejkolwiek konkretnej sprawie."
                }
              </Typography>
            </Box>
          )}

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
