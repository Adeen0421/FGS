export const theme = {
  colors: {
    background: '#E6F0FF',
    primary: '#00235B',
    secondary: '#E4A853',
    accent: '#0B4F6C',
    success: '#059669',
    warning: '#F59E0B',
    text: {
      DEFAULT: '#00112D',
      light: '#4B5563',
      dark: '#000816',
    },
    blue: {
      light: '#338CFF',
      DEFAULT: '#00235B',
      dark: '#001A44',
    },
    gold: {
      light: '#EED08A',
      DEFAULT: '#E4A853',
      dark: '#B37D2F',
    },
    ocean: {
      light: '#66B7CF',
      DEFAULT: '#0B4F6C',
      dark: '#073542',
    },
    gradients: {
      primary: 'linear-gradient(135deg, #00235B 0%, #001A44 100%)',
      secondary: 'linear-gradient(135deg, #E4A853 0%, #B37D2F 100%)',
      accent: 'linear-gradient(135deg, #0B4F6C 0%, #073542 100%)',
      blueGold: 'linear-gradient(135deg, #00235B 0%, #E4A853 100%)',
      goldBlue: 'linear-gradient(135deg, #E4A853 0%, #00235B 100%)',
      ocean: 'linear-gradient(135deg, #0B4F6C 0%, #021B18 100%)',
      shine: 'linear-gradient(45deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)',
    },
    shadows: {
      soft: '0 4px 6px -1px rgba(0, 35, 91, 0.1), 0 2px 4px -1px rgba(0, 35, 91, 0.06)',
      medium: '0 10px 15px -3px rgba(0, 35, 91, 0.1), 0 4px 6px -2px rgba(0, 35, 91, 0.05)',
      large: '0 20px 25px -5px rgba(0, 35, 91, 0.1), 0 10px 10px -5px rgba(0, 35, 91, 0.04)',
      glow: '0 0 20px rgba(0, 35, 91, 0.2)',
      goldGlow: '0 0 20px rgba(228, 168, 83, 0.2)',
    },
  },
} as const

export type Theme = typeof theme 