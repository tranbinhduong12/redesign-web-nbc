/** @type {import('tailwindcss').Config} */
const rgbVar = (variable) => `rgb(var(${variable}) / <alpha-value>)`;

const ramp = (name) =>
  Object.fromEntries(
    [50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((shade) => [
      shade,
      rgbVar(`--color-${name}-${shade}`),
    ]),
  );

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: ramp('primary'),
        navy: ramp('navy'),
        secondary: ramp('secondary'),
        accent: ramp('accent'),
        success: ramp('success'),
        warning: ramp('warning'),
        error: ramp('error'),
        neutral: { ...ramp('neutral'), 0: rgbVar('--color-neutral-0') },
        brand: {
          primary: rgbVar('--color-brand-primary'),
          navy: rgbVar('--color-brand-navy'),
        },
        'text-body': rgbVar('--color-text-body'),
        surface: rgbVar('--color-surface'),
      },
      fontFamily: {
        sans: ['"Be Vietnam Pro"', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 200ms ease-out',
        'slide-down': 'slideDown 200ms ease-out',
      },
    },
  },
  plugins: [],
};
