/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#437EF7',
        light: '#EAEBF0',
        red: '#F04438',
        success: '#0f766e',
        herbal: '#15803d'
      },
      backgroundImage: {
        logout: "url('/logout.svg')",
        'logout-hover': "url('/logout-hover.svg')",
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    keyframes: {
      fade_in: {
        '0%': { opacity: '0' },
        '100%': { opacity: '1' }
      },
      fade_out: {
        '0%': { opacity: '1' },
        '100%': { opacity: '0' }
      },
      flicker: {
        '0%': { opacity: '1' },
        '50%': { opacity: '0.5' },
        '100%': { opacity: '1' }
      }
    },
    animation: {
      'appear': 'fade_in 0.3s linear',
      'disappear': 'fade_out 0.3s linear forwards',
      'flickering': 'flicker 1s linear infinite'
    },

  },
  plugins: [require('@tailwindcss/forms')],
}
