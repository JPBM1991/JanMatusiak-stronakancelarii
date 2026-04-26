"use client";

import Link from "next/link";
import { Box, Button } from "@mui/material";

const NAVY = "#2B3A4A";

export function PraktykaCTA() {
  return (
    <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, gap: 1.5 }}>
      <Button
        component={Link}
        href="/kontakt"
        variant="contained"
        sx={{
          backgroundColor: "#ffffff",
          color: NAVY,
          fontWeight: 700,
          fontSize: "0.85rem",
          px: 3.5,
          py: 1.5,
          borderRadius: 0,
          textTransform: "none",
          letterSpacing: "0.02em",
          "&:hover": { backgroundColor: "rgba(255,255,255,0.88)" },
        }}
      >
        Umów rozmowę
      </Button>
      <Button
        component={Link}
        href="/kancelaria"
        variant="outlined"
        sx={{
          borderColor: "rgba(255,255,255,0.2)",
          color: "rgba(255,255,255,0.7)",
          fontWeight: 600,
          fontSize: "0.85rem",
          px: 3.5,
          py: 1.5,
          borderRadius: 0,
          textTransform: "none",
          "&:hover": {
            borderColor: "rgba(255,255,255,0.45)",
            color: "#ffffff",
            backgroundColor: "rgba(255,255,255,0.06)",
          },
        }}
      >
        O kancelarii
      </Button>
    </Box>
  );
}
