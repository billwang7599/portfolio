/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Manrope", "sans-serif"],
            },
            colors: {
                primary: "rgba(var(--primary))",
                secondary: "rgba(var(--secondary))",
                accent: {
                    light: "rgba(var(--accent-light))",
                    dark: "rgba(var(--accent-dark))",
                },
                text: "rgba(var(--text))",
                bg: "rgba(var(--bg))",
            },
        },
    },
    plugins: [require("@designbycode/tailwindcss-text-stroke")],
};
