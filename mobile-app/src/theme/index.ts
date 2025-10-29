/**
 * Awareness Network Theme
 * Luma-inspired minimalist design with golden ratio proportions
 */

import { spacing, typography, borderRadius, opacity, animation } from './golden-ratio';

export const theme = {
  colors: {
    // Background colors
    background: {
      primary: '#000000',
      secondary: '#0a0a0a',
      tertiary: '#1a1a1a',
      card: 'rgba(255, 255, 255, 0.05)',
      elevated: 'rgba(255, 255, 255, 0.08)',
    },
    
    // Text colors
    text: {
      primary: '#ffffff',
      secondary: '#a0a0a0',
      tertiary: '#666666',
      disabled: '#404040',
    },
    
    // Accent colors (indigo to purple gradient)
    accent: {
      primary: '#6366f1',
      secondary: '#8b5cf6',
      tertiary: '#a78bfa',
      gradient: ['#6366f1', '#8b5cf6'],
    },
    
    // Functional colors
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
    info: '#3b82f6',
    
    // Border colors
    border: {
      subtle: 'rgba(255, 255, 255, 0.08)',
      default: 'rgba(255, 255, 255, 0.12)',
      strong: 'rgba(255, 255, 255, 0.18)',
    },
    
    // Overlay colors
    overlay: {
      light: 'rgba(0, 0, 0, 0.4)',
      medium: 'rgba(0, 0, 0, 0.6)',
      heavy: 'rgba(0, 0, 0, 0.8)',
    },
  },
  
  // Spacing based on golden ratio
  spacing,
  
  // Typography based on golden ratio
  typography,
  
  // Border radius based on golden ratio
  borderRadius,
  
  // Opacity levels based on golden ratio
  opacity,
  
  // Animation timing based on golden ratio
  animation,
  
  // Shadows
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
    xl: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 12 },
      shadowOpacity: 0.25,
      shadowRadius: 24,
      elevation: 12,
    },
  },
  
  // Glassmorphism effect
  glass: {
    light: {
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
      borderColor: 'rgba(255, 255, 255, 0.1)',
      borderWidth: 1,
    },
    medium: {
      backgroundColor: 'rgba(255, 255, 255, 0.08)',
      borderColor: 'rgba(255, 255, 255, 0.15)',
      borderWidth: 1,
    },
    strong: {
      backgroundColor: 'rgba(255, 255, 255, 0.12)',
      borderColor: 'rgba(255, 255, 255, 0.2)',
      borderWidth: 1,
    },
  },
};

export type Theme = typeof theme;

export default theme;
