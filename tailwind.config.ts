import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        muted: 'var(--muted)',
        'muted-foreground': 'var(--muted-foreground)',
        border: 'var(--border)',
        primary: 'var(--primary)',
        'primary-foreground': 'var(--primary-foreground)',
        ring: 'var(--ring)',
        card: 'var(--card)',
        'card-foreground': 'var(--card-foreground)',
        accent: 'var(--accent)',
      },
      fontFamily: {
        sans: ['var(--font-orbitron)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config

