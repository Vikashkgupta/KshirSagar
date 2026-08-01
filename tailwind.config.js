/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                gold: '#d4af37',
                saffron: '#f97316',
                peacock: '#0d7c6e',
                bgDark: '#080808',
                bgPrimary: '#FDFBF5',
            },
            fontFamily: {
                playfair: ['"Playfair Display"', 'Georgia', 'serif'],
                inter: ['"Inter"', 'system-ui', 'sans-serif'],
            },
            boxShadow: {
                'gold-glow': '0 0 25px rgba(212, 175, 55, 0.25)',
                'gold-glow-hover': '0 0 35px rgba(212, 175, 55, 0.45)',
            }
        },
    },
    plugins: [],
}