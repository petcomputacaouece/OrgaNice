/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./public/**/*.html",
        "./src/js/**/*.js"
    ],
    theme: {
        extend: {
            colors: {
                text: "#1B1B21",
                "text-secondary": "#AEAEAE",
                primary: "#2C3C7A",
                secondary: "#FBBF24",
                bg: "#F6F6F6",
                "bg-secondary": "#EFEDF4",
            },
            backgroundImage: {
                gradient:
                    "linear-gradient(90deg, #4C64CE -11.02%, #2B3A75 100%)",
            },
        },
    },
    plugins: [],
};
