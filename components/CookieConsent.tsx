"use client";

import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "next/link";

const NAVY = "#0B1829";
const GOLD = "#B8924A";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem("jm-consent");
      if (!consent) setVisible(true);
    } catch {
      // ignore
    }
  }, []);

  function accept(type: "all" | "essential") {
    try {
      localStorage.setItem("jm-consent", type);
    } catch {
      // ignore
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        bgcolor: NAVY,
        borderTop: `3px solid ${GOLD}`,
        px: { xs: 2, md: 4 },
        py: { xs: 1.5, md: 1.25 },
        display: "flex",
        alignItems: "center",
        gap: { xs: 2, md: 3 },
        flexWrap: "wrap",
        boxShadow: "0 -4px 24px rgba(0,0,0,0.2)",
        animation: "slideUp 0.3s ease",
        "@keyframes slideUp": {
          from: { transform: "translateY(100%)" },
          to: { transform: "translateY(0)" },
        },
      }}
    >
      <Typography
        sx={{
          fontSize: "0.85rem",
          color: "rgba(255,255,255,0.7)",
          flex: 1,
          minWidth: 200,
          lineHeight: 1.5,
        }}
      >
        Używamy plików cookies. Szczegóły znajdziesz w naszej{" "}
        <Box
          component={Link}
          href="/polityka-cookies"
          sx={{
            color: GOLD,
            textDecoration: "none",
            "&:hover": { textDecoration: "underline" },
          }}
        >
          Polityce Cookies
        </Box>
        .
      </Typography>

      <Box sx={{ display: "flex", gap: 1.5, flexShrink: 0 }}>
        <Button
          size="small"
          onClick={() => accept("essential")}
          sx={{
            fontSize: "0.8rem",
            px: 2,
            py: 0.75,
            color: "rgba(255,255,255,0.6)",
            bgcolor: "transparent",
            border: "1px solid rgba(255,255,255,0.2)",
            borderRadius: 0,
            textTransform: "none",
            "&:hover": { borderColor: "rgba(255,255,255,0.5)", bgcolor: "transparent" },
          }}
        >
          Tylko niezbędne
        </Button>
        <Button
          size="small"
          onClick={() => accept("all")}
          sx={{
            fontSize: "0.8rem",
            px: 2,
            py: 0.75,
            color: "#ffffff",
            bgcolor: GOLD,
            borderRadius: 0,
            textTransform: "none",
            "&:hover": { bgcolor: "#A07D3E" },
          }}
        >
          Akceptuj wszystkie
        </Button>
      </Box>
    </Box>
  );
}
