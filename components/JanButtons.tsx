"use client";

import Link from "next/link";
import { Box, Button } from "@mui/material";

const NAVY = "#2B3A4A";
const NAVY_MID = "#425A6F";
const GOLD = "#2B3A4A";
const BORDER = "#D4E2EA";

export function ContactButtons() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
      <Button
        component="a"
        href="tel:+48500255293"
        variant="contained"
        fullWidth
        sx={{
          backgroundColor: NAVY,
          color: "#fff",
          fontWeight: 600,
          fontSize: "0.875rem",
          py: 1.5,
          "&:hover": { backgroundColor: NAVY_MID },
        }}
      >
        +48 500 255 293
      </Button>
      <Button
        component="a"
        href="mailto:j.matusiak@kmtlegal.pl"
        variant="outlined"
        fullWidth
        sx={{
          color: NAVY,
          borderColor: BORDER,
          fontWeight: 500,
          fontSize: "0.875rem",
          py: 1.5,
          "&:hover": { borderColor: NAVY, backgroundColor: "transparent" },
        }}
      >
        j.matusiak@kmtlegal.pl
      </Button>
      <Button
        component="a"
        href="https://www.linkedin.com/in/jan-matusiak-000842183/"
        target="_blank"
        rel="noopener noreferrer"
        variant="outlined"
        fullWidth
        sx={{
          color: "#0A66C2",
          borderColor: BORDER,
          fontWeight: 500,
          fontSize: "0.875rem",
          py: 1.5,
          "&:hover": { borderColor: "#0A66C2", backgroundColor: "transparent" },
        }}
      >
        LinkedIn
      </Button>
    </Box>
  );
}

export function CtaButtons() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
      <Button
        component={Link}
        href="/kontakt"
        variant="contained"
        size="large"
        fullWidth
        sx={{
          backgroundColor: GOLD,
          color: "#ffffff",
          fontWeight: 700,
          fontSize: "0.9rem",
          py: 1.75,
          "&:hover": { backgroundColor: "#A07D3E" },
        }}
      >
        Umów rozmowę
      </Button>
      <Button
        component="a"
        href="tel:+48500255293"
        variant="outlined"
        size="large"
        fullWidth
        sx={{
          color: "rgba(255,255,255,0.8)",
          borderColor: "rgba(255,255,255,0.25)",
          fontWeight: 500,
          fontSize: "0.9rem",
          py: 1.75,
          "&:hover": {
            borderColor: "rgba(255,255,255,0.5)",
            backgroundColor: "rgba(255,255,255,0.05)",
          },
        }}
      >
        +48 500 255 293
      </Button>
    </Box>
  );
}
