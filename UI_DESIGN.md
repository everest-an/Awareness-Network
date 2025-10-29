# UI Design - Luma-Inspired Minimalism

The Awareness Network mobile app features a **Luma-inspired minimalist design** that emphasizes clarity, simplicity, and elegance.

## Design Philosophy

The UI design is inspired by Luma AI's approach to creating clean, focused user experiences. The design prioritizes content over chrome, uses generous whitespace, and employs subtle gradients to create visual interest without overwhelming the user.

## Key Design Elements

### Color Palette

The app uses a **dark theme** as the foundation, creating a sophisticated and modern aesthetic.

#### Background Colors
- **Primary Background**: Pure black (#000000) - Creates maximum contrast and elegance
- **Secondary Background**: Dark gray (#1a1a1a) - For elevated surfaces
- **Tertiary Background**: Medium gray (#2a2a2a) - For cards and containers
- **Card Background**: Translucent white (rgba(255, 255, 255, 0.05)) - Subtle glassmorphism effect

#### Text Colors
- **Primary Text**: White (#ffffff) - Maximum readability
- **Secondary Text**: Light gray (#a0a0a0) - For supporting information
- **Tertiary Text**: Medium gray (#666666) - For disabled or less important text

#### Accent Colors
- **Primary Accent**: Indigo (#6366f1) - Main brand color
- **Secondary Accent**: Purple (#8b5cf6) - Complementary accent
- **Gradient**: Indigo to Purple - Used for CTAs and highlights

### Typography

The app uses the **system font** (SF Pro on iOS, Roboto on Android) for optimal readability and native feel.

#### Font Sizes
- **Headings**: 36-48px (bold)
- **Titles**: 24-30px (semibold)
- **Body**: 16-18px (regular)
- **Captions**: 12-14px (regular)

#### Font Weights
- **Bold (700)**: For primary headings
- **Semibold (600)**: For section titles and buttons
- **Medium (500)**: For emphasized body text
- **Regular (400)**: For body text

### Spacing

The app uses a **consistent 8px spacing scale** for predictable and harmonious layouts:

- 4px (xs) - Minimal spacing
- 8px (sm) - Tight spacing
- 12px (md) - Compact spacing
- 16px (base) - Standard spacing
- 20px (lg) - Comfortable spacing
- 24px (xl) - Generous spacing
- 32px (2xl) - Section spacing
- 40-64px (3xl-5xl) - Large section spacing

### Border Radius

Rounded corners create a friendly, modern feel:

- **Small (8px)**: For small elements
- **Medium (12px)**: For inputs and small cards
- **Large (16px)**: For cards and containers
- **Extra Large (20-24px)**: For prominent elements
- **Full (9999px)**: For pills and circular elements

### Components

#### Button
- **Primary**: Gradient background (indigo to purple)
- **Secondary**: Elevated background with subtle border
- **Ghost**: Transparent background with accent text
- **Pill-shaped**: Fully rounded corners for modern look

#### Input
- **Dark background** with subtle border
- **Focused state**: Accent border color
- **Rounded corners** (12px)
- **Generous padding** for comfortable touch targets

#### Card
- **Translucent background** with glassmorphism effect
- **Subtle border** for definition
- **Rounded corners** (16px)
- **Optional elevation** with soft shadows

### Gradients

Gradients are used sparingly for emphasis and visual interest:

- **Primary Gradient**: Indigo (#6366f1) to Purple (#8b5cf6)
- **Direction**: Left to right or top-left to bottom-right
- **Usage**: CTAs, action cards, logo

### Shadows

Subtle shadows create depth without overwhelming the dark theme:

- **Small**: For slight elevation (buttons, inputs)
- **Medium**: For cards and containers
- **Large**: For modals and overlays

## Screen Designs

### Login Screen
- **Centered layout** with logo and brand name
- **Gradient logo** icon
- **Minimalist form** with clean inputs
- **Single primary CTA** (Sign In button)
- **Subtle footer** with sign-up link

### Home Screen
- **Large, bold heading** ("Awareness")
- **Stats cards** with key metrics
- **Gradient action cards** for quick actions
- **Section-based layout** with clear hierarchy
- **Generous whitespace** for breathing room

### Memories Screen
- **Grid layout** for photo memories
- **Card-based design** for list items
- **Floating action button** for adding memories

### Contacts Screen
- **List layout** with avatar and details
- **Search bar** at the top
- **Scan button** prominently displayed

## Comparison to Luma

| Aspect | Luma AI | Awareness Network |
|--------|---------|-------------------|
| Background | Dark (black) | Dark (black) ✓ |
| Typography | Large, bold headings | Large, bold headings ✓ |
| Spacing | Generous whitespace | Generous whitespace ✓ |
| Colors | Subtle gradients | Indigo-purple gradients ✓ |
| Components | Rounded, minimal | Rounded, minimal ✓ |
| Layout | Center-aligned | Center-aligned ✓ |
| Interactions | Smooth, subtle | Smooth, subtle ✓ |

## Implementation

The design is implemented using:

- **React Native** for cross-platform compatibility
- **Expo** for rapid development
- **expo-linear-gradient** for gradient effects
- **react-native-safe-area-context** for safe area handling
- **Custom theme system** (`src/theme/index.ts`)
- **Reusable components** (`src/components/`)

## Design System Files

- `mobile-app/src/theme/index.ts` - Theme configuration
- `mobile-app/src/components/Button.tsx` - Button component
- `mobile-app/src/components/Input.tsx` - Input component
- `mobile-app/src/components/Card.tsx` - Card component

## Future Enhancements

- **Animations**: Smooth transitions and micro-interactions
- **Dark/Light mode toggle**: User preference support
- **Custom illustrations**: Branded empty states and onboarding
- **Haptic feedback**: Enhanced touch interactions
- **Accessibility**: WCAG AA compliance

---

**Design Inspiration**: Luma AI (lumalabs.ai)  
**Design System**: Custom, built for Awareness Network  
**Last Updated**: October 30, 2025
