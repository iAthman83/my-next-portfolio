/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        redPrimary: "#FF5252",
        blueSecondary: "#1A237E",
        yellowAccent: "#FFAB40",
        grayBg: "#2A303C",
        blackBg: "#212121",
        sideBarBg: "#1A1D1F",
        sideBarText: "#FCFCFC",
        sideBarHighlight: "#272A30",
        youtubeRed: "#FF0000",
        // youtubeRed: "#FF0101",
        linkedinBlue: "#0B66C3",
        twitterBlue: "#1C9BF1",
        siteBg: "#2A303C",
        mailBlue: "#219ebc",
        textGray: "#9EADBB",
        projectCardBg: "#0E0E0E",
        firebaseBg: "#FCCA3F",
        javascriptBg: "#F7DF1E",
        vueBg: "#41B883",
        reactBg: "#00CCFF",
        wordpressBg: "#2C99C6",
        elementorBg: "#D63362",
      },
    },
  },
  daisyui: {
    themes: false,
  },
  plugins: [require("daisyui")],
};
