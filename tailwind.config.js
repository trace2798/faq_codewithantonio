/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        ranadeThin: "Ranade-Thin",
        ranadeThinItalic: "Ranade-ThinItalic",
        ranadeLight: "Ranade-Light",
        ranadeLightItalic: "Ranade-LightItalic",
        ranadeRegular: "Ranade-Regular",
        ranadeItalic: "Ranade-Italic",
        ranadeMedium: "Ranade-Medium",
        ranadeMediumItalic: "Ranade-MediumItalic",
        ranadeBold: "Ranade-Bold",
        ranadeBoldItalic: "Ranade-BoldItalic",
        satoshiThin: "Satoshi-Thin",
        satoshiThinItalic: "Satoshi-ThinItalic",
        satoshiLight: "Satoshi-Light",
        satoshiLightItalic: "Satoshi-LightItalic",
        satoshiRegular: "Satoshi-Regular",
        satoshiItalic: "Satoshi-Italic",
        satoshiMedium: "Satoshi-Medium",
        satoshiMediumItalic: "Satoshi-MediumItalic",
        satoshiBold: "Satoshi-Bold",
        satoshiBoldItalic: "Satoshi-BoldItalic",
        satoshiBlack: "Satoshi-Black",
        satoshiBlackItalic: "Satoshi-BlackItalic",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
