/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
      outfit: ["Outfit", "sans-serif"],
       pixel: ["'Press Start 2P'", "cursive"],
       poppins: ["Poppins", "sans-serif"],
       bungee: ["Bungee", "cursive"],
       luckiest: ["Luckiest Guy", "cursive"],
    },
    },
  },
  plugins: [
    require('daisyui'),
  ],

  // --- TAMBAHKAN BLOK INI ---
  // Konfigurasi daisyUI ditaruh di sini
  daisyui: {
    themes: ["dark", "light", "cupcake", "valentine"], // Tulis semua tema yang ingin Anda pakai
    darkTheme: "dark", // Ini adalah tema yang akan aktif saat mode gelap
  },
}