# Golden Ratio Design System

The Awareness Network app is built on a comprehensive design system based on the **golden ratio** (φ = 1.618033988749895), creating harmonious proportions throughout the user interface.

## What is the Golden Ratio?

The golden ratio, also known as phi (φ), is a mathematical constant approximately equal to 1.618. It has been used in art, architecture, and design for thousands of years to create aesthetically pleasing proportions. When a line is divided into two parts such that the ratio of the whole line to the longer part equals the ratio of the longer part to the shorter part, that ratio is the golden ratio.

**Formula**: a/b = (a+b)/a = φ ≈ 1.618

The golden ratio appears naturally in many forms, from the spiral of a nautilus shell to the proportions of the Parthenon. In modern design, companies like Apple have famously used golden ratio proportions in their product designs.

## Design Philosophy

Our design system applies the golden ratio to create a visual hierarchy that feels natural and balanced. Every spacing value, font size, and layout proportion is derived from φ, ensuring mathematical harmony throughout the interface.

### Core Principles

**Harmony**: All elements are proportionally related through φ, creating visual coherence.

**Hierarchy**: The golden ratio naturally creates clear visual hierarchy, guiding the user's eye through the interface.

**Balance**: Proportions based on φ feel balanced and aesthetically pleasing without being overly symmetrical.

**Timelessness**: The golden ratio has been proven over millennia to create enduring, beautiful designs.

## Implementation

### Spacing System

Our spacing scale is built on a base unit of 8px, with each step multiplied by powers of the golden ratio:

| Name | Formula | Value | Usage |
|------|---------|-------|-------|
| xs | 8 × φ⁻² | 3px | Minimal spacing between tightly grouped elements |
| sm | 8 × φ⁻¹ | 5px | Tight spacing within components |
| base | 8 × φ⁰ | 8px | Standard spacing (base unit) |
| md | 8 × φ¹ | 13px | Comfortable spacing between related elements |
| lg | 8 × φ² | 21px | Generous spacing between sections |
| xl | 8 × φ³ | 34px | Large spacing for major sections |
| 2xl | 8 × φ⁴ | 55px | Extra large spacing |
| 3xl | 8 × φ⁵ | 89px | Massive spacing for distinct sections |

This creates a natural progression where each spacing value relates harmoniously to the others.

### Typography Scale

Font sizes follow the same golden ratio progression, starting from a base of 16px:

| Name | Formula | Value | Usage |
|------|---------|-------|-------|
| xs | 16 × φ⁻² | 10px | Tiny labels, captions |
| sm | 16 × φ⁻¹ | 10px | Small text, footnotes |
| base | 16 × φ⁰ | 16px | Body text (optimal reading size) |
| lg | 16 × φ¹ | 26px | Emphasized text, subheadings |
| xl | 16 × φ² | 42px | Section headings |
| 2xl | 16 × φ³ | 68px | Page titles |
| 3xl | 16 × φ⁴ | 110px | Hero text |
| 4xl | 16 × φ⁵ | 178px | Display text |

**Line Height**: Optimal line height is calculated as font size × φ, creating comfortable reading rhythm.

### Layout Proportions

The golden ratio divides space into two sections: 38.2% and 61.8%.

**Golden Section Points**: On a screen, content is positioned at these natural focal points:
- Primary section: 38.2% from the top (where the eye naturally rests)
- Secondary section: 61.8% from the top

**Content Width**: 
- Narrow content uses 61.8% of screen width for optimal readability
- Wide content uses full width for immersive experiences

**Split Layouts**:
- Sidebar: 38.2% width
- Main content: 61.8% width

This creates natural, balanced layouts that guide the user's attention.

### Border Radius

Rounded corners follow the golden ratio progression:

| Name | Formula | Value | Usage |
|------|---------|-------|-------|
| sm | 8 × φ⁻¹ | 5px | Small elements, badges |
| base | 8 × φ⁰ | 8px | Standard buttons, inputs |
| md | 8 × φ¹ | 13px | Cards, containers |
| lg | 8 × φ² | 21px | Large cards, modals |
| xl | 8 × φ³ | 34px | Prominent elements |
| full | ∞ | 9999px | Pills, circular elements |

### Animation Timing

Even animations follow the golden ratio for natural, pleasing motion:

| Name | Formula | Value | Usage |
|------|---------|-------|-------|
| instant | 100 × φ⁻¹ | 62ms | Immediate feedback |
| fast | 100 × φ⁰ | 100ms | Quick transitions |
| normal | 100 × φ¹ | 162ms | Standard animations |
| slow | 100 × φ² | 262ms | Deliberate transitions |
| slower | 100 × φ³ | 424ms | Dramatic effects |

### Color Opacity

Transparency levels are based on powers of φ⁻¹ (0.618):

| Name | Formula | Value | Usage |
|------|---------|-------|-------|
| subtle | (φ⁻¹)³ | 24% | Barely visible overlays |
| light | (φ⁻¹)² | 38% | Light backgrounds |
| medium | φ⁻¹ | 62% | Semi-transparent elements |
| strong | 1 - (φ⁻¹)² | 62% | Prominent overlays |
| opaque | 1 | 100% | Solid colors |

## UI Components

### Logo

The optimized logo uses a **frosted glass circle** with a minimalist "A" shape (two diagonal lines without a crossbar). The design follows these golden ratio principles:

- Circle diameter positioned at the golden section point (38.2% from top)
- Logo symbol sized at φ⁻¹ (61.8%) of the circle diameter
- Glow radius at φ times the circle radius

### Login Screen

The login screen demonstrates golden ratio layout:

- Logo positioned at 38.2% from the top (primary golden section)
- Form fields start at 61.8% from the top (secondary golden section)
- Input field height: 55px (8 × φ⁴)
- Spacing between inputs: 21px (8 × φ²)
- Button height: 55px with 34px border radius

### Home Screen

The home screen uses golden proportions for card layouts:

- Heading positioned at top with 89px (φ⁵) margin
- Three stat cards with width ratio of 1:φ (portrait golden rectangle)
- Card spacing: 13px (φ¹)
- Action buttons use full width with 21px spacing between

### Scan Screen

The camera scan interface:

- Viewfinder positioned at golden section (38.2% from top)
- Viewfinder dimensions follow golden rectangle (width:height = φ:1)
- Instruction text at 61.8% from top
- Button positioned at bottom with 55px margin

## Benefits of Golden Ratio Design

**Visual Harmony**: Elements feel naturally balanced and proportioned, creating a cohesive aesthetic that is pleasing to the eye.

**Improved Readability**: Typography and spacing based on φ create optimal reading experiences with comfortable line lengths and spacing.

**Clear Hierarchy**: The natural progression of sizes creates intuitive visual hierarchy, guiding users through the interface.

**Professional Polish**: The mathematical precision of golden ratio design conveys quality and attention to detail.

**Timeless Appeal**: Designs based on φ have endured for millennia and continue to feel modern and elegant.

**Reduced Decision Fatigue**: Designers can rely on the golden ratio system rather than arbitrary spacing choices.

## Comparison to Standard Design Systems

| Aspect | Standard 8pt Grid | Golden Ratio System |
|--------|------------------|---------------------|
| Spacing | 8, 16, 24, 32, 40 | 8, 13, 21, 34, 55 |
| Progression | Linear (+8) | Exponential (×1.618) |
| Typography | Arbitrary or linear | Mathematical harmony |
| Layout | Grid-based | Proportionally balanced |
| Feel | Uniform, predictable | Natural, organic |

While standard systems use linear progressions (8, 16, 24...), the golden ratio creates exponential growth that mirrors patterns found in nature, resulting in more dynamic and interesting designs.

## Implementation in Code

The design system is implemented in `mobile-app/src/theme/golden-ratio.ts`:

```typescript
export const PHI = 1.618033988749895;
export const spacing = {
  base: 8,
  md: Math.round(8 * PHI), // 13px
  lg: Math.round(8 * Math.pow(PHI, 2)), // 21px
  // ...
};
```

Components can easily access these values:

```typescript
import { spacing, typography } from '@/theme/golden-ratio';

const styles = StyleSheet.create({
  container: {
    padding: spacing.lg, // 21px
    marginBottom: spacing.xl, // 34px
  },
  title: {
    fontSize: typography.sizes.xl, // 42px
  },
});
```

## Future Enhancements

**Responsive Breakpoints**: Apply golden ratio to screen size breakpoints for consistent proportions across devices.

**Component Sizing**: Use golden rectangles for all card and container dimensions.

**Icon Sizing**: Create icon size scale based on φ progression.

**Grid System**: Implement a grid system where column widths follow golden ratio proportions.

**Animation Curves**: Custom easing functions based on φ for more natural motion.

## References

- "The Golden Ratio: The Story of Phi" by Mario Livio
- "The Elements of Typographic Style" by Robert Bringhurst
- Apple's use of golden ratio in product design
- Le Corbusier's Modulor system
- Classical architecture and the Parthenon

---

**Design System Version**: 1.0  
**Last Updated**: October 30, 2025  
**φ (Phi)**: 1.618033988749895
