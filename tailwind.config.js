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
            boxShadow: {
                sombra:
                    "0px 11px 7px rgba(0,0,0,0.02), \
         0px 7px 7px rgba(0,0,0,0.03), \
         0px 4px 6px rgba(0,0,0,0.06), \
         0px 2px 4px rgba(0,0,0,0.10), \
         0px 0px 2px rgba(0,0,0,0.12), \
         inset 0px 2px 3px rgba(255,255,255,0.10)"
            },
            backgroundImage: {
                gradient:
                    "linear-gradient(90deg, #4C64CE -11.02%, #2B3A75 100%)",
            },
            fontFamily: {
                primary: ["Inter", "sans-serif"],
                secondary: ["Hind Madurai", "sans-serif"],
            },
        },
    },
    plugins: [],
};
