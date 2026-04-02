"use client";

import { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Alert,
  CircularProgress,
} from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const NAVY = "#2B3A4A";
const NAVY_MID = "#425A6F";
const GOLD = "#2B3A4A";
const BORDER = "#D4E2EA";

type Status = "idle" | "loading" | "success" | "error";

const inputSx = {
  "& .MuiOutlinedInput-root": {
    borderRadius: 1,
    fontSize: "0.9rem",
    backgroundColor: "#FAFAF8",
    "& fieldset": { borderColor: BORDER },
    "&:hover fieldset": { borderColor: "#C9B89A" },
    "&.Mui-focused fieldset": { borderColor: NAVY, borderWidth: 1.5 },
  },
  "& .MuiInputLabel-root": {
    fontSize: "0.875rem",
    color: "#6B7280",
    "&.Mui-focused": { color: NAVY },
  },
};

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error || "Coś poszło nie tak.");
        setStatus("error");
        return;
      }

      setStatus("success");
    } catch {
      setErrorMsg("Błąd połączenia. Spróbuj ponownie.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          py: 8,
          px: 4,
          border: `1px solid ${BORDER}`,
          borderTop: `3px solid ${GOLD}`,
          backgroundColor: "#ffffff",
        }}
      >
        <CheckCircleOutlineIcon sx={{ fontSize: 48, color: GOLD, mb: 2 }} />
        <Typography
          sx={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontWeight: 700,
            fontSize: "1.4rem",
            color: NAVY,
            mb: 1.5,
          }}
        >
          Wiadomość wysłana.
        </Typography>
        <Typography sx={{ color: "#5A5A5A", fontSize: "0.9rem", lineHeight: 1.7, maxWidth: 340 }}>
          Dziękuję za kontakt. Odpiszę w ciągu 1–2 dni roboczych.
          Jeśli sprawa jest pilna — zadzwoń bezpośrednio.
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      noValidate
      sx={{
        border: `1px solid ${BORDER}`,
        borderTop: `3px solid ${NAVY}`,
        backgroundColor: "#ffffff",
        p: { xs: 3, md: 4 },
      }}
    >
      <Typography
        sx={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontWeight: 700,
          fontSize: "1.2rem",
          color: NAVY,
          mb: 0.75,
        }}
      >
        Opisz sprawę
      </Typography>
      <Typography sx={{ fontSize: "0.82rem", color: "#6B7280", mb: 3.5, lineHeight: 1.6 }}>
        Powiedz w kilku zdaniach, z czym przychodzisz.
      </Typography>

      {status === "error" && (
        <Alert
          severity="error"
          sx={{ mb: 3, fontSize: "0.82rem", borderRadius: 1 }}
          onClose={() => setStatus("idle")}
        >
          {errorMsg}
        </Alert>
      )}

      {/* Wiersz 1: imię + firma */}
      <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
        <TextField
          required
          fullWidth
          label="Imię"
          name="name"
          value={form.name}
          onChange={handleChange}
          autoComplete="name"
          sx={inputSx}
        />
        <TextField
          fullWidth
          label="Firma (opcjonalnie)"
          name="company"
          value={form.company}
          onChange={handleChange}
          autoComplete="organization"
          sx={inputSx}
        />
      </Box>

      {/* Wiersz 2: email + telefon */}
      <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
        <TextField
          required
          fullWidth
          label="Adres e-mail"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          autoComplete="email"
          sx={inputSx}
        />
        <TextField
          fullWidth
          label="Telefon (opcjonalnie)"
          name="phone"
          type="tel"
          value={form.phone}
          onChange={handleChange}
          autoComplete="tel"
          sx={inputSx}
        />
      </Box>

      {/* Opis */}
      <TextField
        required
        fullWidth
        multiline
        rows={5}
        label="Czego dotyczy sprawa?"
        name="message"
        value={form.message}
        onChange={handleChange}
        sx={{ ...inputSx, mb: 3.5 }}
        placeholder="Napisz krótko: czego potrzebujesz, na jakim jesteś etapie, co jest dla Ciebie ważne."
      />

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 2,
        }}
      >
        <Typography sx={{ fontSize: "0.75rem", color: "#9CA3AF", lineHeight: 1.6 }}>
          Pola oznaczone * są wymagane.<br />
          Dane są używane wyłącznie w celu odpowiedzi na wiadomość.
        </Typography>

        <Button
          type="submit"
          variant="contained"
          disabled={status === "loading"}
          sx={{
            backgroundColor: NAVY,
            color: "#fff",
            fontWeight: 700,
            fontSize: "0.875rem",
            px: 4,
            py: 1.5,
            minWidth: 160,
            "&:hover": { backgroundColor: NAVY_MID },
            "&.Mui-disabled": { backgroundColor: "#C5C5C5", color: "#fff" },
          }}
        >
          {status === "loading" ? (
            <CircularProgress size={20} sx={{ color: "#fff" }} />
          ) : (
            "Wyślij wiadomość"
          )}
        </Button>
      </Box>
    </Box>
  );
}
