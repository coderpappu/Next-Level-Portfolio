/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      animation: {
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        russo: ["Russo One", "sans-serif"],
        sora: ["Sora", "sans-serif"],
        // White edition
        jet: ['"JetBrains Mono"', "ui-monospace", "Menlo", "monospace"],
        plex: [
          '"IBM Plex Mono"',
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "monospace",
        ],
      },
      colors: {
        // White edition palette — mirrors the CSS custom properties in
        // src/white/white.css so utilities and vars stay in sync.
        w: {
          bg: "#ffffff",
          border: "#e5e7eb",
          hover: "#f9fafb",
          badge: "#f3f4f6",
          sep: "#d1d5dc",
          heading: "#020919",
          text: "#6c727e",
          muted: "#6a7282",
          tertiary: "#4a5565",
          strong: "#101828",
          icon: "#364153",
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".wrapper-container": {
          width: "1280px",
          margin: "auto",
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
