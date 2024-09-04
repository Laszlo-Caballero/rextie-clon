import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/sections/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        Banner: "url('/Images/banner-person.webp')",
      },
      colors: {
        "blue-dark": "#0032ff",
        "gray-custom": "#000f49",
        "gray-custom-2": "#cccfdb",
        "white-custom": "#eff2ff",
        "white-custom-2": "#e5e9f7",
        "gray-custom-3": "#636c90",
        "blue-custom": "#35aac3",
        "blue-custom-2": "#0024b3",
        "gray-custom-4": "#515b83",
        "gray-custom-5": "#6666c1",
        "gray-custom-6": "#5b5d61",
        "gray-custom-7": "#707e9b",
        "gray-custom-8": "#9d9ea1",
        "gray-custom-9": "#f7f8fb",
        "blue-custom-3": "#00c8ff",
        "gray-custom-10": "#7e7f82",
        "blue-custom-4": "#0a3aff",
        "gray-custom-11": "#44464b",
      },
    },
  },
  plugins: [],
};
export default config;
