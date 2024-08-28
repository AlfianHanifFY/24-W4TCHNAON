import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans], ysabeau: ["Ysabeau SC","sans-serif"], ysabeaup:["Ysabeau Office", "sans-serif"]
      },
    },
  },
  plugins: [],
} satisfies Config;
