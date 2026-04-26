"use client";

import { useState, useRef } from "react";
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

export default function ContactFormEN() {
  const loadedAt = useRef(Date.now());
  const [honey, setHoney] = useState("");
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
        body: JSON.stringify({ ...form, _honey: honey, _loadedAt: loadedAt.current }),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error || "Something went wrong.");
        setStatus("error");
        return;
      }

      setStatus("success");
    } catch {
      setErrorMsg("Connection error. Please try again.");
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
          Message sent.
        </Typography>
        <Typography sx={{ color: "#5A5A5A", fontSize: "0.9rem", lineHeight: 1.7, maxWidth: 340 }}>
          Thank you for getting in touch. I will reply within 1–2 business days.
          For urgent matters, please call directly.
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
        Describe your matter
      </Typography>
      <Typography sx={{ fontSize: "0.82rem", color: "#6B7280", mb: 3.5, lineHeight: 1.6 }}>
        Tell me briefly what brings you here.
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

      {/* Honeypot — invisible to humans, trap for bots */}
      <Box component="div" sx={{ position: "absolute", left: "-9999px", opacity: 0, height: 0, overflow: "hidden" }} aria-hidden="true">
        <input type="text" name="website" value={honey} onChange={(e) => setHoney(e.target.value)} tabIndex={-1} autoComplete="off" />
      </Box>

      <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
        <TextField
          required
          fullWidth
          label="First name"
          name="name"
          value={form.name}
          onChange={handleChange}
          autoComplete="name"
          sx={inputSx}
        />
        <TextField
          fullWidth
          label="Company (optional)"
          name="company"
          value={form.company}
          onChange={handleChange}
          autoComplete="organization"
          sx={inputSx}
        />
      </Box>

      <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
        <TextField
          required
          fullWidth
          label="Email address"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          autoComplete="email"
          sx={inputSx}
        />
        <TextField
          fullWidth
          label="Phone (optional)"
          name="phone"
          type="tel"
          value={form.phone}
          onChange={handleChange}
          autoComplete="tel"
          sx={inputSx}
        />
      </Box>

      <TextField
        required
        fullWidth
        multiline
        rows={5}
        label="What is your matter about?"
        name="message"
        value={form.message}
        onChange={handleChange}
        sx={{ ...inputSx, mb: 3.5 }}
        placeholder="Briefly describe: what you need, where you are in the process, what matters most to you."
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
          Fields marked * are required.<br />
          Your data will be used solely to respond to your enquiry.
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
            "Send message"
          )}
        </Button>
      </Box>
    </Box>
  );
}
