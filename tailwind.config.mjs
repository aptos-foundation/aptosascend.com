import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx}"],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      spacing: {
        // 'r' prefix means 'responsive'. It will be different based on the current breakpoint.
        r3xs: "var(--spacing-r3xs)",
        r2xs: "var(--spacing-r2xs)",
        rxs: "var(--spacing-rxs)",
        rsm: "var(--spacing-rsm)",
        rmd: "var(--spacing-rmd)",
        rlg: "var(--spacing-rlg)",
        rxl: "var(--spacing-rxl)",
        r2xl: "var(--spacing-r2xl)",
        r3xl: "var(--spacing-r3xl)",
        r4xl: "var(--spacing-r4xl)",
        r5xl: "var(--spacing-r5xl)",
      },
      fontFamily: {
        sans: ["Atkinson", "sans-serif"],
      },
      colors: {
        // Functional colors
        primary: "#ffffff",
        "primary-inverted": "#000000",
        secondary: "#dedede",
        muted: "#82959B",
        border: "rgba(255, 255, 255, 0.15)",
        canvas: "#051419",
        "canvas-hover": "rgba(91, 255, 252, 0.04)",
        "elevation-1": "#091A1F",
        active: "#00D2CE",
        hover: "#5BFFFC",
        disabled: "rgba(255, 255, 255, 0.2)",
      },
      typography: {
        DEFAULT: {
          css: {
            a: {
              color: "#00D2CE",
              "&:hover": {
                color: "#5BFFFC",
              },
            },
            strong: {
              color: "inherit",
            },
          },
        },
      },
    },
  },
  plugins: [typography],
};
