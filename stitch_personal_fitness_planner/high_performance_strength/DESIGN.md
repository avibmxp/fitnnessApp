---
name: High-Performance Strength
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#c4c9ac'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#8e9379'
  outline-variant: '#444933'
  surface-tint: '#abd600'
  primary: '#ffffff'
  on-primary: '#283500'
  primary-container: '#c3f400'
  on-primary-container: '#556d00'
  inverse-primary: '#506600'
  secondary: '#adc6ff'
  on-secondary: '#002e69'
  secondary-container: '#4b8eff'
  on-secondary-container: '#00285c'
  tertiary: '#ffffff'
  on-tertiary: '#303030'
  tertiary-container: '#e4e2e1'
  on-tertiary-container: '#656464'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#c3f400'
  primary-fixed-dim: '#abd600'
  on-primary-fixed: '#161e00'
  on-primary-fixed-variant: '#3c4d00'
  secondary-fixed: '#d8e2ff'
  secondary-fixed-dim: '#adc6ff'
  on-secondary-fixed: '#001a41'
  on-secondary-fixed-variant: '#004493'
  tertiary-fixed: '#e4e2e1'
  tertiary-fixed-dim: '#c8c6c5'
  on-tertiary-fixed: '#1b1c1c'
  on-tertiary-fixed-variant: '#474746'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  h1:
    fontFamily: Montserrat
    fontSize: 40px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  h2:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  h3:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.2'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.5'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  data-display:
    fontFamily: JetBrains Mono
    fontSize: 28px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: -0.04em
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.1em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  gutter: 16px
  margin: 20px
---

## Brand & Style
The design system is built for elite performance, catering to serious athletes and strength trainers. The brand personality is disciplined, energetic, and precise. It draws from a **High-Contrast / Modern** aesthetic, utilizing deep dark backgrounds to minimize distractions and vibrant accents to trigger psychological "go" signals.

The interface prioritizes information density and clarity without feeling cluttered. It uses a "stealth" aesthetic—matte surfaces, razor-sharp typography, and aggressive accents—to mirror the atmosphere of a premium, high-tech training facility. The emotional response should be one of focus, empowerment, and immediate readiness to perform.

## Colors
The palette is centered on a "True Dark" foundation. The primary background is a deep charcoal (#121212) to ensure maximum contrast with active elements. 

- **Primary (Electric Lime):** Used for primary actions, success states, and progress indicators. It represents peak energy.
- **Secondary (Vibrant Blue):** Reserved for interactive secondary elements, hyperlinks, and informational highlights.
- **Surface Tiers:** Layering is achieved through varying shades of charcoal rather than drop shadows. Surface-1 is for the main cards, Surface-2 for nested elements or inputs.
- **Typography:** Pure white (#FFFFFF) is used only for headings and critical data. Secondary text uses a mid-tone gray to reduce eye strain during long sessions.

## Typography
This design system utilizes a tri-font approach to separate intent:
1. **Montserrat (Headings):** Heavy weights (700-800) create a commanding presence. Used for screen titles and major section headers.
2. **Inter (Interface/Body):** Chosen for its exceptional readability in dark mode. Used for all descriptive text, instructions, and navigation.
3. **JetBrains Mono (Data):** A monospaced font used specifically for weights, reps, and timers. The fixed character width prevents "shimmering" or layout shifts during live data updates (e.g., a stopwatch).

All headings should lean toward tighter letter spacing to feel more compact and athletic.

## Layout & Spacing
The design system employs a **Fluid Grid** with an 8px rhythmic scale. Main content containers should follow a 12-column structure on large screens and a 4-column structure on mobile.

- **Internal Padding:** Cards and containers use a minimum of 20px padding to maintain a premium, spacious feel despite the dark theme.
- **Visual Hierarchy:** Use `lg` (24px) or `xl` (32px) spacing to separate distinct training blocks. Use `xs` (8px) for related data points (e.g., weight and rep count).
- **Safe Areas:** Ensure a 20px horizontal margin on mobile devices to prevent content from touching the screen edges.

## Elevation & Depth
Elevation in this dark-themed system is communicated through **Tonal Layers** and **Subtle Gradients** rather than traditional shadows.

- **Stacking:** The background is the lowest level. Cards are elevated by using the `surface-1` (#1E1E1E) color. 
- **Gradients:** Subtle linear gradients (top-to-bottom) can be applied to cards to give them a slightly metallic, machined feel. Use a 5% opacity shift from the top of the card to the bottom.
- **Accents:** High-priority "Live" elements (like a running timer) may use a soft outer glow (drop shadow with 0px offset, 15px blur) using the primary accent color at 20% opacity.
- **Borders:** Use 1px solid borders using `surface-3` for inactive states, and the primary accent color for active/focused states.

## Shapes
The shape language is **Rounded**, balancing the aggressive high-contrast colors with a professional, modern feel.

- **Standard Elements:** Buttons, input fields, and small cards use a 0.5rem (8px) radius.
- **Main Containers:** Large workout summary cards or dashboard widgets use a 1rem (16px) radius to feel distinct from smaller UI components.
- **Interactive Indicators:** Small status dots or selection markers should be fully pill-shaped (circular) to stand out against the geometric grid.

## Components
- **Buttons:** 
    - *Primary:* Solid Electric Lime background with black text. No shadow, bold Montserrat caps.
    - *Secondary:* Ghost style with 1px Vibrant Blue border and blue text.
- **Cards:** Use `surface-1` background. Headers within cards should be separated by a subtle 1px line of `surface-2`.
- **Inputs:** Darker than the card surface (#121212), with 1px `surface-3` border. Focus state changes border to Primary Accent.
- **Progress Bars:** Thin 4px height. The track is `surface-3`, the fill is a gradient from Secondary (Blue) to Primary (Lime).
- **Training Chips:** Small, low-profile badges for "Set 1", "Warm-up", etc. Use `surface-2` background with `body-sm` typography.
- **Data Trays:** Fixed bottom-sheet components for logging reps, using a tactile numeric keypad designed for thumb-reach.
- **Graphs/Charts:** Use thin lines (2px) for data paths with a subtle vertical gradient fill below the line using the accent color at 10% opacity.