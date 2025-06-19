module.exports = {
  content: ["./pages/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#F7F3F0",
          100: "#EDE4DC",
          200: "#D9C4B0",
          300: "#C5A484",
          400: "#A77A5C",
          500: "#8B4513", // sandalwood brown
          600: "#7A3D11",
          700: "#68350F",
          800: "#562D0D",
          900: "#44250B",
          DEFAULT: "#8B4513", // sandalwood brown
        },
        secondary: {
          50: "#FAF8F4",
          100: "#F4F0E8",
          200: "#E8DDD1",
          300: "#DCCABA",
          400: "#D2B48C", // soft tan
          500: "#C8A882",
          600: "#B89C78",
          700: "#A8906E",
          800: "#988464",
          900: "#88785A",
          DEFAULT: "#D2B48C", // soft tan
        },
        accent: {
          50: "#FBF7F1",
          100: "#F6EEE2",
          200: "#EDDCC5",
          300: "#E4CAA8",
          400: "#D6A773",
          500: "#CD853F", // rich amber
          600: "#B87739",
          700: "#A36933",
          800: "#8E5B2D",
          900: "#794D27",
          DEFAULT: "#CD853F", // rich amber
        },
        background: "#FEFCF8", // warm off-white
        surface: "#F5F2ED", // subtle cream
        "text-primary": "#2C1810", // deep brown
        "text-secondary": "#6B4E3D", // medium brown
        success: {
          50: "#F0F8F0",
          100: "#E1F1E1",
          200: "#C3E3C3",
          300: "#A5D5A5",
          400: "#67B967",
          500: "#228B22", // forest green
          600: "#1F7D1F",
          700: "#1C6F1C",
          800: "#196119",
          900: "#165316",
          DEFAULT: "#228B22", // forest green
        },
        warning: {
          50: "#FDF9F0",
          100: "#FBF3E1",
          200: "#F7E7C3",
          300: "#F3DBA5",
          400: "#EBC369",
          500: "#DAA520", // golden amber
          600: "#C4951D",
          700: "#AE851A",
          800: "#987517",
          900: "#826514",
          DEFAULT: "#DAA520", // golden amber
        },
        error: {
          50: "#F8F3F0",
          100: "#F1E7E1",
          200: "#E3CFC3",
          300: "#D5B7A5",
          400: "#B98769",
          500: "#A0522D", // sienna red-brown
          600: "#904A29",
          700: "#804225",
          800: "#703A21",
          900: "#60321D",
          DEFAULT: "#A0522D", // sienna red-brown
        },
      },
      fontFamily: {
        sans: ['Source Sans Pro', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        caption: ['Lato', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
      boxShadow: {
        'sm': '0 1px 3px rgba(44, 24, 16, 0.1)',
        'md': '0 4px 12px rgba(44, 24, 16, 0.15)',
        'lg': '0 10px 25px rgba(44, 24, 16, 0.2)',
        'xl': '0 20px 40px rgba(44, 24, 16, 0.25)',
      },
      borderRadius: {
        'sm': '0.125rem',
        DEFAULT: '0.25rem',
        'md': '0.375rem',
        'lg': '0.5rem',
        'xl': '0.75rem',
        '2xl': '1rem',
      },
      transitionDuration: {
        '200': '200ms',
        '300': '300ms',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'ease-out': 'ease-out',
      },
      animation: {
        'fade-in': 'fadeIn 300ms cubic-bezier(0.4, 0, 0.2, 1)',
        'slide-up': 'slideUp 300ms cubic-bezier(0.4, 0, 0.2, 1)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}