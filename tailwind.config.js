import { fontFamily } from "tailwindcss/defaultTheme";
import { addDynamicIconSelectors } from "@iconify/tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class", `[data-mode="dark"]`],
  content: ["./src/**/*.{html,svelte,ts}"],
  theme: {
    extend: {
      colors: () => ({
        background: "hsl(var(--background) / <alpha-value>)",
        foreground: "hsl(var(--foreground) / <alpha-value>)",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))"
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))"
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)"
        },
        success: {
          DEFAULT: "hsl(var(--success) / <alpha-value>)",
          foreground: "hsl(var(--success-foreground) / <alpha-value>)"
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))"
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))"
        }
      }),
      borderColor: (theme) => ({
        ...theme("colors"),
        DEFAULT: "hsl(var(--border-color))"
      }),
      borderRadius: () => ({
        xl: `calc(var(--border-radius) + 4px)`,
        lg: `var(--border-radius)`,
        md: `calc(var(--border-radius) - 2px)`,
        sm: "calc(var(--border-radius) - 4px)"
      }),
      fontFamily: () => ({
        sans: ["var(--font-sans,'')", ...fontFamily.sans]
        // serif: ["var(--font-serif)", ...fontFamily.serif],
        // heading: ["var(--font-heading)", ...fontFamily.sans]
      })
    }
  },
  plugins: [addDynamicIconSelectors({ scale: 0 })]
};
