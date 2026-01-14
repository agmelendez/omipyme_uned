/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Colores del sistema de diseño OMiPYME
      colors: {
        // Institucionales UNED
        uned: {
          blue: '#003366',
          green: '#006633',
        },
        // Colores por pilar
        pilar: {
          observatorio: {
            DEFAULT: '#1B4F72',
            light: '#2874A6',
            dark: '#154360',
          },
          herramientas: {
            DEFAULT: '#E67E22',
            light: '#F39C12',
            dark: '#CA6F1E',
          },
          investigacion: {
            DEFAULT: '#27AE60',
            light: '#2ECC71',
            dark: '#1E8449',
          },
          formacion: {
            DEFAULT: '#8E44AD',
            light: '#9B59B6',
            dark: '#7D3C98',
          },
          ecosistema: {
            DEFAULT: '#16A085',
            light: '#1ABC9C',
            dark: '#117A65',
          },
        },
        // Grises personalizados
        gray: {
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#EEEEEE',
          300: '#E0E0E0',
          400: '#BDBDBD',
          500: '#9E9E9E',
          600: '#757575',
          700: '#616161',
          800: '#424242',
          900: '#212121',
        },
      },
      // Tipografía
      fontFamily: {
        display: ['Montserrat', 'system-ui', 'sans-serif'],
        body: ['Open Sans', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Consolas', 'monospace'],
      },
      // Espaciado personalizado
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      // Animaciones
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      // Sombras personalizadas
      boxShadow: {
        'pilar': '0 4px 14px 0 rgba(0, 0, 0, 0.1)',
        'pilar-hover': '0 6px 20px 0 rgba(0, 0, 0, 0.15)',
        'card': '0 2px 8px rgba(0, 0, 0, 0.08)',
        'card-hover': '0 8px 24px rgba(0, 0, 0, 0.12)',
      },
      // Border radius
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      // Breakpoints adicionales
      screens: {
        'xs': '475px',
        '3xl': '1920px',
      },
      // Aspect ratios
      aspectRatio: {
        '4/3': '4 / 3',
        '3/2': '3 / 2',
        '2/3': '2 / 3',
      },
    },
  },
  plugins: [
    // Plugin para formularios
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
    // Plugin para tipografía
    require('@tailwindcss/typography'),
    // Plugin para aspect ratio (fallback para navegadores antiguos)
    require('@tailwindcss/aspect-ratio'),
  ],
};
