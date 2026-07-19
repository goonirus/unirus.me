/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#08070C',
        card: '#14101D',
        primary: '#FF3EA5',
        secondary: '#7C5CFF',
        cyan: '#00F0FF',
        badge: '#FFD166',
        text: '#F7F3FF',
        muted: '#9B91AA',
      },
      fontFamily: {
        heading: ['Sora', 'Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        pixel: ['"Press Start 2P"', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 20px rgba(255, 62, 165, 0.35)',
        'glow-cyan': '0 0 20px rgba(0, 240, 255, 0.3)',
        'glow-purple': '0 0 20px rgba(124, 92, 255, 0.35)',
        card: '0 0 0 1px rgba(255, 62, 165, 0.15), 0 8px 32px rgba(0, 0, 0, 0.4)',
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        scanline: 'scanline 6s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
      },
    },
  },
  plugins: [],
};
