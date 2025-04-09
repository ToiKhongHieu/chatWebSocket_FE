import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html"], // Bao gồm tất cả file JSX/TSX
  theme: {
    extend: {},
  },
  plugins: [tailwindcss()],
};
