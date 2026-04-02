"use client";

import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import EmotionRegistry from "./EmotionRegistry";
import { Cormorant_Garamond, Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600"],
});
const cormorant = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const BLUE = "#2B3A4A";
const BLUE_MID = "#425A6F";
const ACCENT = "#425A6F";
const ACCENT_LIGHT = "#6A8BA0";
const OFFWHITE = "#EDF3F6";
const MUTED = "#6B6E73";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: BLUE,
      light: BLUE_MID,
      contrastText: "#ffffff",
    },
    secondary: {
      main: ACCENT,
      light: ACCENT_LIGHT,
      contrastText: BLUE,
    },
    background: {
      default: OFFWHITE,
      paper: "#FAFAFA",
    },
    text: {
      primary: "#1A1C1E",
      secondary: MUTED,
    },
  },
  typography: {
    fontFamily: outfit.style.fontFamily,
    h1: {
      fontFamily: cormorant.style.fontFamily,
      fontWeight: 300,
    },
    h2: {
      fontFamily: cormorant.style.fontFamily,
      fontWeight: 400,
    },
    h3: {
      fontFamily: cormorant.style.fontFamily,
      fontWeight: 400,
    },
    h4: {
      fontFamily: cormorant.style.fontFamily,
      fontWeight: 400,
    },
    button: {
      textTransform: "none",
      fontWeight: 500,
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
