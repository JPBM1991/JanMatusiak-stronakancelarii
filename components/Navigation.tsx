"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  AppBar,
  Box,
  Toolbar,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const NAVY = "#2B3A4A";
const NAVY_MID = "#425A6F";
const GOLD = "#2B3A4A";
const BORDER = "#D4E2EA";

const plLinks = [
  { label: "Prawnicy", href: "/prawnicy" },
  { label: "Kancelaria", href: "/kancelaria" },
  { label: "Praktyka", href: "/praktyka" },
  { label: "Dla przedsiębiorców", href: "/dla-przedsiebiorcow" },
  { label: "Aktualności", href: "/aktualnosci" },
];

const enLinks = [
  { label: "Lawyers", href: "/en/prawnicy" },
  { label: "The Firm", href: "/en/kancelaria" },
  { label: "Practice", href: "/en/praktyka" },
  { label: "For Business", href: "/en/dla-przedsiebiorcow" },
  { label: "News", href: "/en/aktualnosci" },
];

const noEnVersion = ["/aml-rodo", "/polityka-cookies"];

function getLangSwitchHref(pathname: string, isEn: boolean): string {
  if (isEn) {
    if (pathname === "/en" || pathname === "/en/") return "/";
    if (pathname.startsWith("/en/aktualnosci")) return "/aktualnosci";
    if (pathname.startsWith("/en/")) return pathname.slice(3);
    return "/";
  } else {
    if (noEnVersion.some((p) => pathname.startsWith(p))) return "/en";
    if (pathname.startsWith("/aktualnosci")) return "/en/aktualnosci";
    if (pathname === "/") return "/en";
    return "/en" + pathname;
  }
}

export default function Navigation() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const pathname = usePathname();
  const isEn = pathname.startsWith("/en");
  const links = isEn ? enLinks : plLinks;
  const contactHref = isEn ? "/en/kontakt" : "/kontakt";
  const contactLabel = isEn ? "Contact" : "Kontakt";
  const logoHref = isEn ? "/en" : "/";
  const langSwitchHref = getLangSwitchHref(pathname, isEn);

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: "#ffffff",
          borderBottom: `1px solid ${BORDER}`,
        }}
      >
        <Toolbar
          sx={{
            maxWidth: "1200px",
            width: "100%",
            mx: "auto",
            px: { xs: 2.5, md: 6 },
            minHeight: { xs: 60, md: 72 },
          }}
        >
          {/* Logo */}
          <Box
            component={Link}
            href={logoHref}
            sx={{
              textDecoration: "none",
              display: "flex",
              flexDirection: "column",
              lineHeight: 1.2,
              flexGrow: { xs: 1, md: 0 },
            }}
          >
            <Typography
              sx={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontWeight: 700,
                fontSize: { xs: "1rem", md: "1.05rem" },
                color: NAVY,
                letterSpacing: "-0.01em",
              }}
            >
              Jan Matusiak
            </Typography>
            <Typography
              sx={{
                fontSize: "0.6rem",
                fontWeight: 600,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: GOLD,
              }}
            >
              Radca prawny
            </Typography>
          </Box>

          {/* Desktop links */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 0,
              ml: "auto",
            }}
          >
            {links.map((link) => (
              <Button
                key={link.href}
                component={Link}
                href={link.href}
                sx={{
                  color: "#3A3A3A",
                  fontSize: "0.82rem",
                  fontWeight: 500,
                  px: 1.75,
                  py: 1,
                  "&:hover": {
                    color: NAVY,
                    backgroundColor: "transparent",
                  },
                }}
              >
                {link.label}
              </Button>
            ))}
            <Button
              component={Link}
              href={contactHref}
              variant="contained"
              sx={{
                ml: 2.5,
                backgroundColor: NAVY,
                color: "#fff",
                fontSize: "0.82rem",
                fontWeight: 600,
                px: 2.5,
                py: 1,
                "&:hover": { backgroundColor: NAVY_MID },
              }}
            >
              {contactLabel}
            </Button>

            {/* Language switcher */}
            <Box
              component={Link}
              href={langSwitchHref}
              sx={{
                ml: 1.5,
                display: "flex",
                alignItems: "center",
                gap: 0.5,
                border: `1px solid ${BORDER}`,
                px: 1.5,
                py: 0.75,
                fontSize: "0.72rem",
                fontWeight: 700,
                color: NAVY,
                textDecoration: "none",
                letterSpacing: "0.06em",
                lineHeight: 1,
                transition: "border-color 0.2s",
                "&:hover": { borderColor: NAVY },
                userSelect: "none",
              }}
            >
              <Box component="span" sx={{ fontSize: "1rem", lineHeight: 1 }}>
                {isEn ? "🇵🇱" : "🇬🇧"}
              </Box>
              {isEn ? "PL" : "EN"}
            </Box>
          </Box>

          {/* Mobile hamburger */}
          <IconButton
            sx={{ display: { xs: "flex", md: "none" }, color: NAVY, ml: 1 }}
            onClick={() => setDrawerOpen(true)}
            aria-label="Otwórz menu"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{ sx: { width: 280 } }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            px: 3,
            py: 2.5,
            borderBottom: `1px solid ${BORDER}`,
          }}
        >
          <Box>
            <Typography
              sx={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontWeight: 700,
                color: NAVY,
                fontSize: "1rem",
              }}
            >
              Jan Matusiak
            </Typography>
            <Typography
              sx={{
                fontSize: "0.6rem",
                fontWeight: 600,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: GOLD,
              }}
            >
              Radca prawny
            </Typography>
          </Box>
          <IconButton onClick={() => setDrawerOpen(false)} size="small" sx={{ color: NAVY }}>
            <CloseIcon fontSize="small" />
          </IconButton>
        </Box>

        <List sx={{ pt: 1 }}>
          {[...links, { label: contactLabel, href: contactHref }].map((link) => (
            <ListItem key={link.href} disablePadding>
              <ListItemButton
                component={Link}
                href={link.href}
                onClick={() => setDrawerOpen(false)}
                sx={{ px: 3, py: 1.5, "&:hover": { backgroundColor: "#EDF3F6" } }}
              >
                <ListItemText
                  primary={link.label}
                  primaryTypographyProps={{
                    fontSize: "0.9rem",
                    fontWeight: 500,
                    color: NAVY,
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Box sx={{ px: 3, mt: "auto", pb: 4 }}>
          <Divider sx={{ mb: 3, borderColor: BORDER }} />
          <Box
            component={Link}
            href={langSwitchHref}
            onClick={() => setDrawerOpen(false)}
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 0.75,
              border: `1px solid ${BORDER}`,
              px: 2,
              py: 1,
              fontSize: "0.78rem",
              fontWeight: 700,
              color: NAVY,
              textDecoration: "none",
              letterSpacing: "0.06em",
              mb: 2.5,
              "&:hover": { borderColor: NAVY },
            }}
          >
            <Box component="span" sx={{ fontSize: "1.1rem", lineHeight: 1 }}>
              {isEn ? "🇵🇱" : "🇬🇧"}
            </Box>
            {isEn ? "Przełącz na polski" : "Switch to English"}
          </Box>
          <Typography sx={{ fontSize: "0.75rem", color: "#9CA3AF", lineHeight: 1.65 }}>
            {isEn ? "Nationwide practice.\nServices in Polish and English." : "Kancelaria działa ogólnopolsko.\nObsługa w języku polskim i angielskim."}
          </Typography>
        </Box>
      </Drawer>
    </>
  );
}
