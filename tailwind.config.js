/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0B1F20",
        teal: {
          DEFAULT: "#0E6E6B",
          50: "#EAF6F5",
          100: "#D2ECE9",
          400: "#1C9C96",
          500: "#0E6E6B",
          600: "#0A5654",
          700: "#083F3E",
          900: "#0B1F20",
        },
        amber: {
          DEFAULT: "#E8873A",
          400: "#F0A25F",
          500: "#E8873A",
          600: "#C86D26",
        },
        paper: "#F6F4EE",
        card: "#FFFFFF",
        trace: "#CBDBD8",
        solder: "#9AA8A6",
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      boxShadow: {
        chip: "0 1px 0 rgba(11,31,32,0.04), 0 8px 24px -8px rgba(11,31,32,0.18)",
      },
    },
  },
  plugins: [],
}

