import type { Config } from "tailwindcss";

const config: Config = { content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"], theme: { extend: { colors: { ink: "#22201d", ivory: "#f4f0e9", gold: "#b49a68", line: "#d8d0c4" }, fontFamily: { display: ["Georgia", "serif"], sans: ["Arial", "sans-serif"] } } }, plugins: [] };
export default config;
