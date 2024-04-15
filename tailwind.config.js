import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
                poppins: ["Poppins", "sans-serif"],
            },
            colors: {
                primary: {
                    100: "#2C6490",
                    200: "#4F92BA",
                    300: "#7CB6D0",
                    400: "#628BAC",
                    500: "#D9D9D9",
                    600: "#EFEFEF",
                },
                secondary: {
                    100: "#0404FC",
                    200: "#6F71F9",
                    300: "#010183",
                    400: "#7C7C84",
                    500: "#BCBCC4",
                    600: "#575762",
                },
                background: "#DDDDDD",
            },
        },
    },

    plugins: [forms],
};
