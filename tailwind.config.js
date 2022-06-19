module.exports = {
    mode: "jit",
    content: [ './dist/**/*.{html,js,css}', './src/**/*.{html,js,css,njk}'],
    theme: {
        extend: {
            fontSize: {
                '3.5xl': '2.1rem',
            },
            screens: {
                '1.5xl': '1455px',
                '3xl': '1600px', 
                '4xl': '1700px', 
                '4.5xl': '2000',
                '5xl': '2300px',
            },
            scale: {
                '102': '1.02',
            },
            colors: {
                primary: "#F18E14",
                black: "#262626",
                seperator: "#E8E8E8",
                border: "#E2E2E2",
                background: "#FCFCFC",
                gray: {
                    100: "#F7FAFC",
                    200: "#EDF2F7",
                    300: "#E2E8F0",
                    400: "#CBD5E0",
                    500: "#A0AEC0",
                    600: "#718096",
                    700: "#4A5568",
                    800: "#2D3748",
                    900: "#1A202C"
                },
                gradient: {
                    primary: "#F28E12",
                    secondary: "#FDB601",
                },
            },
            width: {
                a4: '917px'
            },
            minWidth: {
                a4: '917px'
            },
            height: {
                a4: '1304px'
            },
            minHeight: {
                a4: '1304px'
            }
        },
    },
    plugins: [
        require("@plaiceholder/tailwindcss"),
        require("@tailwindcss/aspect-ratio"),
    ],
  }