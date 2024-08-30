import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class', // Use 'media' for automatic dark mode based on user system settings
  theme: {
    extend: {
      colors: {
        lightBackground: '#ffffff',
        darkBackground: '#1b1b1b',
        lightText: '#000000',
        darkText: '#f5f5f5',
        lightBd:'#e3e3e3',
        darkBg:'#363636',
        secondary:'#6b7280',
      },
    },
  },
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Update this path based on where your files are located
    "./public/index.html", // Add this if you have any HTML files in the public folder
  ],
  plugins: [],
};

export default config;
