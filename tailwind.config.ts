import type { Config } from 'tailwindcss'
const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        box: '#EDF1F2', // light-box page
        paper: '#F8FAFA',
        film: '#0F1518', // radiograph frame
        ink: '#15262D',
        mute: '#566A72',
        line: '#CBD6DA',
        teal: { DEFAULT: '#0E6577', dark: '#0A4B59', soft: '#D8EAEE' },
        marker: '#D99A00',
        ok: '#1F7A4D',
        bad: '#B3372E',
      },
      fontFamily: {
        sans: ['"Schibsted Grotesk"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['"Source Serif 4"', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
export default config
