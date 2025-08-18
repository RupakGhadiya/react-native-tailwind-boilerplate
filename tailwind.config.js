/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        secondary: "#D9A441",
        background: "#FAF8F5",
        textPrimary: "#1C1C1C",
        textSecondary: "#6B7280",

        // Dark mode colors
        darkBackground: "#121212",
        darkSurface: "#1E1E1E",
        darkTextPrimary: "#F3F4F6",
        darkTextSecondary: "#9CA3AF",

        bg: "#080f19",
        surface: "#0d1420",
        primary: "#1f4c5b",
        primarylight: "#0f4d5c7e",
        gold: "#c9b037",
        goldlight: "#f2ecdd",
        text1: "#f5f5f5",
        text2: "#b0bec5",
        border: "#2c2c2c",
        pgreen: "#4caf50",
        pred: "#ef4444",
        errorRed: "#9d0d11",
        errorRedBg: "#f5e7e7",
        errorRedBorder: "#e2b6b8",
      },
    },
  },
  plugins: [],
}