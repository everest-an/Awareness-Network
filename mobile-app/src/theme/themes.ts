/**
 * Awareness Network Themes
 * Support for light and dark themes with golden ratio proportions
 */

import { spacing, typography, borderRadius, opacity, animation } from './golden-ratio';

export type ThemeMode = 'light' | 'dark';

const darkTheme = {
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

const lightTheme = {
  colors: {
    // Background colors
    background: {
      primary: '#ffffff',
      secondary: '#f8f9fa',
      tertiary: '#e9ecef',
      card: 'rgba(0, 0, 0, 0.02)',
      elevated: 'rgba(0, 0, 0, 0.04)',
    },
    
    // Text colors
    text: {
      primary: '#1a1a1a',
      secondary: '#6c757d',
      tertiary: '#adb5bd',
      disabled: '#ced4da',
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
      subtle: 'rgba(0, 0, 0, 0.06)',
      default: 'rgba(0, 0, 0, 0.1)',
      strong: 'rgba(0, 0, 0, 0.15)',
    },
    
    // Overlay colors
    overlay: {
      light: 'rgba(255, 255, 255, 0.4)',
      medium: 'rgba(255, 255, 255, 0.6)',
      heavy: 'rgba(255, 255, 255, 0.8)',
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
      shadowOpacity: 0.05,
      shadowRadius: 4,
      elevation: 2,
    },
    md: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.08,
      shadowRadius: 8,
      elevation: 4,
    },
    lg: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 8 },
      shadowOpacity: 0.12,
      shadowRadius: 16,
      elevation: 8,
    },
    xl: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 12 },
      shadowOpacity: 0.15,
      shadowRadius: 24,
      elevation: 12,
    },
  },
  
  // Glassmorphism effect
  glass: {
    light: {
      backgroundColor: 'rgba(255, 255, 255, 0.6)',
      borderColor: 'rgba(0, 0, 0, 0.08)',
      borderWidth: 1,
    },
    medium: {
      backgroundColor: 'rgba(255, 255, 255, 0.75)',
      borderColor: 'rgba(0, 0, 0, 0.12)',
      borderWidth: 1,
    },
    strong: {
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      borderColor: 'rgba(0, 0, 0, 0.15)',
      borderWidth: 1,
    },
  },
};

export const themes = {
  light: lightTheme,
  dark: darkTheme,
};

export type Theme = typeof darkTheme;

export default themes;
