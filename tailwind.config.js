/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#080c18',
          secondary: '#0f1629',
          card: '#131d35',
          elevated: '#1a2540',
        },
        brand: {
          primary: '#6b8cff',
          hover: '#5a7aee',
          glow: 'rgba(107, 140, 255, 0.3)',
        },
        accent: {
          green: '#00e5a0',
          red: '#ff4444',
          orange: '#ff8c42',
        },
        text: {
          primary: '#ffffff',
          secondary: '#8892b0',
          muted: '#4a5568',
          accent: '#6b8cff',
        },
        border: {
          default: 'rgba(107, 140, 255, 0.15)',
          focus: 'rgba(107, 140, 255, 0.6)',
          card: 'rgba(255, 255, 255, 0.06)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'brand': '0 0 20px rgba(107, 140, 255, 0.25)',
        'brand-lg': '0 0 40px rgba(107, 140, 255, 0.35)',
        'sos': '0 0 60px rgba(255, 68, 68, 0.4)',
        'card': '0 4px 24px rgba(0, 0, 0, 0.4)',
        'inner-glow': 'inset 0 1px 0 rgba(255, 255, 255, 0.05)',
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #6b8cff, #a78bfa)',
        'danger-gradient': 'linear-gradient(135deg, #ff4444, #ff6b6b)',
        'card-gradient': 'linear-gradient(135deg, #131d35, #0f1629)',
        'sos-ring': 'conic-gradient(from 0deg, #ff4444, #ffaa00, #00e5a0, #6b8cff, #ff4444)',
        'map-bg': 'radial-gradient(ellipse at center, #0d1f3c 0%, #080c18 70%)',
        'hero-gradient': 'radial-gradient(ellipse at 50% 0%, rgba(107, 140, 255, 0.15) 0%, transparent 70%)',
      },
      animation: {
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        'slide-up': 'slideUp 0.3s ease-out',
        'fade-in': 'fadeIn 0.4s ease-out',
        'scan': 'scan 2s linear infinite',
      },
      keyframes: {
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(107, 140, 255, 0.2)' },
          '50%': { boxShadow: '0 0 40px rgba(107, 140, 255, 0.5)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
}
