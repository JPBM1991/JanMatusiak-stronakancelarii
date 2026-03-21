"use client";

import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import EmotionRegistry from "./EmotionRegistry";
import { Playfair_Display, Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
});
const playfair = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  weight: ["600", "700"],
});

const NAVY = "#0B1829";
const NAVY_MID = "#1A2B45";
const GOLD = "#C9A96E";
const GOLD_LIGHT = "#DFC08E";
const OFFWHITE = "#F8F7F5";
const MUTED = "#6B7280";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: NAVY,
      light: NAVY_MID,
      contrastText: "#ffffff",
    },
    secondary: {
      main: GOLD,
      light: GOLD_LIGHT,
      contrastText: NAVY,
    },
    background: {
      default: OFFWHITE,
      paper: "#ffffff",
    },
    text: {
      primary: "#1C1C1E",
      secondary: MUTED,
    },
  },
  typography: {
    fontFamily: inter.style.fontFamily,
    h1: {
      fontFamily: playfair.style.fontFamily,
      fontWeight: 700,
    },
    h2: {
      fontFamily: playfair.style.fontFamily,
      fontWeight: 700,
    },
    h3: {
      fontFamily: playfair.style.fontFamily,
      fontWeight: 600,
    },
    h4: {
      fontFamily: playfair.style.fontFamily,
      fontWeight: 600,
    },
    button: {
      textTransform: "none",
      fontWeight: 600,
      letterSpacing: "0.02em",
    },
  },
  shape: {
    borderRadius: 2,
  },
  shadows: [
    "none",
    "0 1px 3px rgba(0,0,0,0.08)",
    "0 2px 8px rgba(0,0,0,0.10)",
    "0 4px 16px rgba(0,0,0,0.12)",
    "0 6px 24px rgba(0,0,0,0.14)",
    ...Array(20).fill("none"),
  ] as any,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 2,
          padding: "10px 28px",
          fontSize: "0.875rem",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "none",
        },
      },
    },
  },
});

export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <EmotionRegistry>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </EmotionRegistry>
  );
}
