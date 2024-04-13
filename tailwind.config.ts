import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  // Pokemon type icons file-name
  safelist: [
    'bg-bug',
    'bg-dark',
    'bg-dragon',
    'bg-electric',
    'bg-fairy',
    'bg-fighting',
    'bg-fire',
    'bg-flying',
    'bg-ghost',
    'bg-grass',
    'bg-ground',
    'bg-ice',
    'bg-normal',
    'bg-poison',
    'bg-psychic',
    'bg-rock',
    'bg-steel',
    'bg-water',
    'bg-gradient-radial',
    'bg-gradient-conic',
  ],

  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Pokemon types colors
        bug: '#8CB230',
        dark: '#58575F',
        dragon: '#0F6AC0',
        electric: '#FDD835',
        fairy: '#ED6EC7',
        fighting: '#D04164',
        fire: '#FD7D24',
        flying: '#748FC9',
        ghost: '#556AAE',
        grass: '#62B957',
        ground: '#DD7748',
        ice: '#61CEC0',
        normal: '#9DA0AA',
        poison: '#A552CC',
        psychic: '#EA5D60',
        rock: '#BAAB82',
        steel: '#417D9A',
        water: '#4A90DA',

        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config