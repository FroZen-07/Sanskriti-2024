module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            backgroundColor: ['even']
        },
    },
    plugins: [require('tailwind-scrollbar')({ nocompatible: true }),],
};
