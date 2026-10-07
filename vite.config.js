import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base "./" makes the build work on any host or sub-folder (Netlify, GitHub Pages, S3, ...)
export default defineConfig({ base: "./", plugins: [react()] });
