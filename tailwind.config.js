/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Hapus "vue" jika tidak pakai Vue
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")], // <- gunakan require di sini!
}
