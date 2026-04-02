"use client";

import Link from "next/link";
import { Box, Button } from "@mui/material";

const GOLD = "#2B3A4A";

export function DlaPrzedsiebiorcowCTA() {
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
        href="/praktyka"
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
        Zakres praktyki
      </Button>
    </Box>
  );
}
