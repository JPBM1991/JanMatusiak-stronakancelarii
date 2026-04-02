"use client";

import { useState } from "react";
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

const links = [
  { label: "Prawnicy", href: "/prawnicy" },
  { label: "Kancelaria", href: "/kancelaria" },
  { label: "Praktyka", href: "/praktyka" },
  { label: "Dla przedsiębiorców", href: "/dla-przedsiebiorcow" },
  { label: "Aktualności", href: "/aktualnosci" },
];

export default function Navigation() {
  const [drawerOpen, setDrawerOpen] = useState(false);

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
            href="/"
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
              href="/kontakt"
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
              Kontakt
            </Button>
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
          {[...links, { label: "Kontakt", href: "/kontakt" }].map((link) => (
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
          <Typography sx={{ fontSize: "0.75rem", color: "#9CA3AF", lineHeight: 1.65 }}>
            Kancelaria działa ogólnopolsko.<br />
            Obsługa w języku polskim i angielskim.
          </Typography>
        </Box>
      </Drawer>
    </>
  );
}
