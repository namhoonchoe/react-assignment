import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      daisyui: {
        themes: ["light", "dark", "cupcake"],
      },
      gridTemplateColumns: {
        'auto-fill-card': 'repeat(auto-fill, minmax(384px, 1fr))',
        
      },
    },
  },
  plugins: [daisyui],
};
