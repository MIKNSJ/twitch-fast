/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
            "color-hinted-grey-1": "var(--color-hinted-grey-1)",
            "color-hinted-grey-2": "var(--color-hinted-grey-2)",
            "color-hinted-grey-3": "var(--color-hinted-grey-3)",
            "color-opac-gd-1": "var(--color-opac-gd-1)",
            "color-twitch-purple-9": "var(--color-twitch-purple-9)",
            "color-twitch-purple-10": "var(--color-twitch-purple-10)",
            "test-color": "var(--test-color)",
        },
    },
  },
  plugins: [],
}

