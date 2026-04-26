"use client";

import Link from "next/link";
import { Box, Button } from "@mui/material";

const NAVY = "#2B3A4A";

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
          backgroundColor: "#ffffff",
          color: NAVY,
          fontWeight: 700,
          fontSize: "0.9rem",
          py: 1.75,
          "&:hover": { backgroundColor: "rgba(255,255,255,0.88)" },
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
          color: "rgba(255,255,255,0.7)",
          borderColor: "rgba(255,255,255,0.2)",
          fontWeight: 500,
          fontSize: "0.9rem",
          py: 1.75,
          "&:hover": {
            borderColor: "rgba(255,255,255,0.45)",
            backgroundColor: "rgba(255,255,255,0.06)",
            color: "#ffffff",
          },
        }}
      >
        Zakres praktyki
      </Button>
    </Box>
  );
}
