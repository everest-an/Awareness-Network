/**
 * Luma-inspired Design System
 * Minimalist, dark theme with clean typography
 */

export const theme = {
  colors: {
    // Backgrounds
    background: {
      primary: '#000000',
      secondary: '#1a1a1a',
      tertiary: '#2a2a2a',
      card: 'rgba(255, 255, 255, 0.05)',
      elevated: 'rgba(255, 255, 255, 0.08)',
    },
    
    // Text
    text: {
      primary: '#ffffff',
      secondary: '#a0a0a0',
      tertiary: '#666666',
      disabled: '#4a4a4a',
    },
    
    // Accents
    accent: {
      primary: '#6366f1',
      secondary: '#8b5cf6',
      gradient: ['#6366f1', '#8b5cf6'],
    },
    
    // Semantic
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
    info: '#3b82f6',
    
    // Borders
    border: {
      subtle: '#333333',
      medium: '#444444',
      strong: '#555555',
    },
    
    // Overlays
    overlay: 'rgba(0, 0, 0, 0.8)',
    scrim: 'rgba(0, 0, 0, 0.6)',
  },
  
  typography: {
    // Font families
    fonts: {
      regular: 'System',
      medium: 'System',
      bold: 'System',
    },
    
    // Font sizes
    sizes: {
      xs: 12,
      sm: 14,
      base: 16,
      lg: 18,
      xl: 20,
      '2xl': 24,
      '3xl': 30,
      '4xl': 36,
      '5xl': 48,
    },
    
    // Line heights
    lineHeights: {
      tight: 1.2,
      normal: 1.5,
      relaxed: 1.75,
    },
    
    // Font weights
    weights: {
      regular: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    },
  },
  
  spacing: {
    xs: 4,
    sm: 8,
    md: 12,
    base: 16,
    lg: 20,
    xl: 24,
    '2xl': 32,
    '3xl': 40,
    '4xl': 48,
    '5xl': 64,
  },
  
  borderRadius: {
    sm: 8,
    md: 12,
    lg: 16,
    xl: 20,
    '2xl': 24,
    full: 9999,
  },
  
  shadows: {
    sm: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 2,
    },
    md: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.15,
      shadowRadius: 8,
      elevation: 4,
    },
    lg: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 8 },
      shadowOpacity: 0.2,
      shadowRadius: 16,
      elevation: 8,
    },
  },
  
  animation: {
    duration: {
      fast: 150,
      normal: 250,
      slow: 350,
    },
    easing: {
      default: 'ease-in-out',
      in: 'ease-in',
      out: 'ease-out',
    },
  },
};

export type Theme = typeof theme;
