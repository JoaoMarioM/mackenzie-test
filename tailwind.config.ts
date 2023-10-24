import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    screens: {
      sm: '426px',
      md: '769px',
      xl: '1440px',
    },
    colors: {
      white: "#FFF",
      text: "#171824",
      gray: "#708195",
      primary: "#E92A2C",
      background: "#EDF2F6",
    }
  },
  plugins: [],
}
export default config
