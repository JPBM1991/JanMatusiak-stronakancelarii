"use client";

import Link from "next/link";
import { Box, Button } from "@mui/material";

const GOLD = "#B8924A";
const NAVY = "#0B1829";

export function PraktykaCTA() {
  return (
    <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, gap: 1.5 }}>
      <Button
        component={Link}
        href="/kontakt"
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
        Umów rozmowę
      </Button>
      <Button
        component={Link}
        href="/kancelaria"
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
        O kancelarii
      </Button>
    </Box>
  );
}
