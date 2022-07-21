/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],

    theme: {
        extend: {
            colors: {
                primary: {
                    50: "#ff6bba",
                    100: "#ff61b0",
                    200: "#ff57a6",
                    300: "#ff4d9c",
                    400: "#ff4392",
                    500: "#ff3988",
                    600: "#f52f7e",
                    700: "#eb2574",
                    800: "#e11b6a",
                    900: "#d71160",
                },
            },
        },
    },
    plugins: [],
};
