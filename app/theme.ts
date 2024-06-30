"use client";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#bfbebd",
    },
    secondary: {
      main: "#dc004e",
      dark: "#1e1e1e"
    },
    error: {
      main: "#f44336",
      dark: "#d32f2f",
      light: "#e57373"
    },
    background: {
      default: "#f5f5f5",
    },
    warning: {
      main: "#ffa726",
      dark: "#f57c00",
      light: "#ffb74d"
    },
    success: {
      main: "#66bb6a",
      dark: "#388e3c",
      light: "#81c784",
    },
  },
  typography: {
    fontFamily: 'Satoshi-Regular, Satoshi-Medium, sans-serif',
    h1: {
      fontSize: "2rem",
      fontWeight: 700,
    },
    h2: {
      fontSize: "1.75rem",
      fontWeight: 700,
    },
    h3: {
      fontSize: "1.5rem",
      fontWeight: 700,
    },
    body1: {
      fontSize: "1rem",
    },
    body2: {
      fontSize: "0.875rem",
    },
  },
  spacing: 8,
});

export default theme;
