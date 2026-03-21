"use client";

import { useState, useEffect } from "react";
import { Box, Container, Typography } from "@mui/material";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";

const NAVY = "#0B1829";
const GOLD = "#B8924A";
const BORDER = "#E8E4DC";

const statements = [
  {
    situation: "Masz umowę do podpisania.",
    question: "Czy wiesz, co ryzykujesz?",
  },
  {
    situation: "Spółka rośnie.",
    question: "Struktura prawna musi za nią nadążyć.",
  },
  {
    situation: "Kontrahent z zagranicy.",
    question: "Kontrakt po angielsku. Wiem, jak go czytać.",
  },
  {
    situation: "Spór z kontrahentem.",
    question: "Potrzebujesz kogoś, kto myśli jak biznes.",
  },
  {
    situation: "Przekształcenie firmy.",
    question: "Każdy krok ma konsekwencje prawne.",
  },
  {
    situation: "Nowy wspólnik, nowa umowa.",
    question: "Zadbaj o swoje interesy na starcie.",
  },
];

export default function DynamicStatement() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % statements.length);
        setVisible(true);
      }, 400);
    }, 3800);
    return () => clearInterval(interval);
  }, []);

  const current = statements[index];

  return (
    <Box
      sx={{
        borderBottom: `1px solid ${BORDER}`,
        backgroundColor: "#ffffff",
        py: { xs: 4.5, md: 5.5 },
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 3, md: 6 } }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "flex-start", md: "center" },
            gap: { xs: 1, md: 3 },
          }}
        >
          {/* Etykieta */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.75, flexShrink: 0 }}>
            <AutoAwesomeOutlinedIcon sx={{ fontSize: "0.9rem", color: GOLD }} />
            <Typography
              sx={{
                fontSize: "0.68rem",
                fontWeight: 600,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: GOLD,
              }}
            >
              Typowa sprawa
            </Typography>
          </Box>

          {/* Separator — tylko desktop */}
          <Box
            sx={{
              display: { xs: "none", md: "block" },
              width: "1px",
              height: 36,
              backgroundColor: BORDER,
              flexShrink: 0,
            }}
          />

          {/* Rotujący tekst */}
          <Box
            sx={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(6px)",
              transition: "opacity 0.35s ease, transform 0.35s ease",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "baseline",
              gap: { xs: 0.5, md: 1.5 },
            }}
          >
            <Typography
              sx={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontWeight: 600,
                fontSize: { xs: "1.2rem", md: "1.5rem" },
                color: NAVY,
                lineHeight: 1.25,
              }}
            >
              {current.situation}
            </Typography>
            <Typography
              sx={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontWeight: 600,
                fontStyle: "italic",
                fontSize: { xs: "1.2rem", md: "1.5rem" },
                color: GOLD,
                lineHeight: 1.25,
              }}
            >
              {current.question}
            </Typography>
          </Box>

          {/* Dot indicators */}
          <Box
            sx={{
              display: "flex",
              gap: 0.75,
              ml: { xs: 0, md: "auto" },
              mt: { xs: 1.5, md: 0 },
              flexShrink: 0,
            }}
          >
            {statements.map((_, i) => (
              <Box
                key={i}
                onClick={() => {
                  setVisible(false);
                  setTimeout(() => {
                    setIndex(i);
                    setVisible(true);
                  }, 300);
                }}
                sx={{
                  width: i === index ? 18 : 6,
                  height: 6,
                  borderRadius: 3,
                  backgroundColor: i === index ? GOLD : BORDER,
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  "&:hover": { backgroundColor: i === index ? GOLD : "#C9A96E" },
                }}
              />
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
