/**
 * Golden Ratio Design System
 * Based on φ (phi) = 1.618033988749895
 * 
 * This design system uses the golden ratio to create harmonious
 * proportions throughout the UI, following principles used in
 * classical architecture and modern design.
 */

export const PHI = 1.618033988749895;
export const PHI_INVERSE = 1 / PHI; // ≈ 0.618

/**
 * Base unit: 8px
 * All spacing and sizing derives from this base unit
 * multiplied by powers of the golden ratio
 */
const BASE_UNIT = 8;

/**
 * Golden Ratio Spacing Scale
 * Each step is the previous step multiplied by φ
 */
export const spacing = {
  // φ^-2 = 0.382
  xs: Math.round(BASE_UNIT * Math.pow(PHI, -2)), // 3px
  
  // φ^-1 = 0.618
  sm: Math.round(BASE_UNIT * PHI_INVERSE), // 5px
  
  // φ^0 = 1
  base: BASE_UNIT, // 8px
  
  // φ^1 = 1.618
  md: Math.round(BASE_UNIT * PHI), // 13px
  
  // φ^2 = 2.618
  lg: Math.round(BASE_UNIT * Math.pow(PHI, 2)), // 21px
  
  // φ^3 = 4.236
  xl: Math.round(BASE_UNIT * Math.pow(PHI, 3)), // 34px
  
  // φ^4 = 6.854
  '2xl': Math.round(BASE_UNIT * Math.pow(PHI, 4)), // 55px
  
  // φ^5 = 11.09
  '3xl': Math.round(BASE_UNIT * Math.pow(PHI, 5)), // 89px
  
  // φ^6 = 17.944
  '4xl': Math.round(BASE_UNIT * Math.pow(PHI, 6)), // 144px
  
  // φ^7 = 29.034
  '5xl': Math.round(BASE_UNIT * Math.pow(PHI, 7)), // 232px
};

/**
 * Golden Ratio Typography Scale
 * Font sizes based on golden ratio progression
 */
export const typography = {
  sizes: {
    // φ^-2 = 10px
    xs: Math.round(16 * Math.pow(PHI, -2)),
    
    // φ^-1 = 10px
    sm: Math.round(16 * PHI_INVERSE),
    
    // Base = 16px
    base: 16,
    
    // φ^1 = 26px
    lg: Math.round(16 * PHI),
    
    // φ^2 = 42px
    xl: Math.round(16 * Math.pow(PHI, 2)),
    
    // φ^3 = 68px
    '2xl': Math.round(16 * Math.pow(PHI, 3)),
    
    // φ^4 = 110px
    '3xl': Math.round(16 * Math.pow(PHI, 4)),
    
    // φ^5 = 178px
    '4xl': Math.round(16 * Math.pow(PHI, 5)),
  },
  
  /**
   * Line height based on golden ratio
   * Optimal line height = font size × φ
   */
  lineHeight: {
    tight: PHI_INVERSE, // 0.618
    normal: 1, // 1
    relaxed: PHI, // 1.618
  },
  
  weights: {
    light: '300',
    regular: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
};

/**
 * Golden Rectangle Dimensions
 * Width:Height ratio of 1:φ or φ:1
 */
export const dimensions = {
  // Portrait golden rectangle (1:φ)
  portrait: {
    width: 1,
    height: PHI,
  },
  
  // Landscape golden rectangle (φ:1)
  landscape: {
    width: PHI,
    height: 1,
  },
  
  /**
   * Card dimensions based on golden ratio
   * For a card width of 320px:
   */
  card: {
    small: {
      width: 233, // 377 / φ
      height: 144, // 233 / φ
    },
    medium: {
      width: 320,
      height: 198, // 320 / φ
    },
    large: {
      width: 518, // 320 × φ
      height: 320,
    },
  },
};

/**
 * Border Radius based on golden ratio
 */
export const borderRadius = {
  sm: Math.round(BASE_UNIT * PHI_INVERSE), // 5px
  base: BASE_UNIT, // 8px
  md: Math.round(BASE_UNIT * PHI), // 13px
  lg: Math.round(BASE_UNIT * Math.pow(PHI, 2)), // 21px
  xl: Math.round(BASE_UNIT * Math.pow(PHI, 3)), // 34px
  full: 9999,
};

/**
 * Layout Grid based on golden ratio
 * Screen divided into golden sections
 */
export const layout = {
  /**
   * Golden section points on a screen
   * For a screen height of 812px (iPhone X):
   */
  sections: {
    // First golden section (38.2% from top)
    primary: 0.382,
    
    // Second golden section (61.8% from top)
    secondary: 0.618,
  },
  
  /**
   * Content width ratios
   */
  contentWidth: {
    // Narrow content (61.8% of screen width)
    narrow: PHI_INVERSE,
    
    // Wide content (100% of screen width)
    wide: 1,
  },
  
  /**
   * Sidebar/Main content split
   */
  split: {
    // Sidebar: 38.2%, Main: 61.8%
    sidebar: 0.382,
    main: 0.618,
  },
};

/**
 * Animation timing based on golden ratio
 * Durations in milliseconds
 */
export const animation = {
  duration: {
    instant: Math.round(100 * PHI_INVERSE), // 62ms
    fast: 100, // 100ms
    normal: Math.round(100 * PHI), // 162ms
    slow: Math.round(100 * Math.pow(PHI, 2)), // 262ms
    slower: Math.round(100 * Math.pow(PHI, 3)), // 424ms
  },
  
  /**
   * Easing curves
   */
  easing: {
    // Standard easing
    standard: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
    
    // Golden ratio easing (custom)
    golden: `cubic-bezier(${PHI_INVERSE}, 0, ${PHI_INVERSE}, 1)`,
  },
};

/**
 * Color opacity levels based on golden ratio
 */
export const opacity = {
  subtle: Math.pow(PHI_INVERSE, 3), // 0.236 ≈ 24%
  light: Math.pow(PHI_INVERSE, 2), // 0.382 ≈ 38%
  medium: PHI_INVERSE, // 0.618 ≈ 62%
  strong: 1 - Math.pow(PHI_INVERSE, 2), // 0.618 ≈ 62%
  opaque: 1,
};

/**
 * Helper function to calculate golden ratio
 */
export const calculateGoldenRatio = (value: number, power: number = 1): number => {
  return Math.round(value * Math.pow(PHI, power));
};

/**
 * Helper function to get golden section point
 */
export const getGoldenSection = (total: number, section: 'primary' | 'secondary'): number => {
  return section === 'primary' 
    ? Math.round(total * 0.382)
    : Math.round(total * 0.618);
};

export default {
  PHI,
  PHI_INVERSE,
  spacing,
  typography,
  dimensions,
  borderRadius,
  layout,
  animation,
  opacity,
  calculateGoldenRatio,
  getGoldenSection,
};
