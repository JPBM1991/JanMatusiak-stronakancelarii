"use client";

import Link from "next/link";
import { Box, Button } from "@mui/material";

const NAVY = "#0B1829";
const NAVY_MID = "#1A2B45";
const GOLD = "#B8924A";

export function KancelariaCTA() {
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
        Umów wstępną rozmowę
      </Button>
      <Button
        component={Link}
        href="/praktyka"
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
        Zakres praktyki
      </Button>
    </Box>
  );
}
