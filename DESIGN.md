---
name: Obsidian & Gold
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#20201f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353535'
  on-surface: '#e5e2e1'
  on-surface-variant: '#c4c7c7'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#8e9192'
  outline-variant: '#444748'
  surface-tint: '#c9c6c5'
  primary: '#c9c6c5'
  on-primary: '#313030'
  primary-container: '#0a0a0a'
  on-primary-container: '#7b7979'
  inverse-primary: '#5f5e5e'
  secondary: '#e9c349'
  on-secondary: '#3c2f00'
  secondary-container: '#af8d11'
  on-secondary-container: '#342800'
  tertiary: '#c8c8b0'
  on-tertiary: '#303221'
  tertiary-container: '#090b02'
  on-tertiary-container: '#7a7b66'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c9c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474646'
  secondary-fixed: '#ffe088'
  secondary-fixed-dim: '#e9c349'
  on-secondary-fixed: '#241a00'
  on-secondary-fixed-variant: '#574500'
  tertiary-fixed: '#e4e4cc'
  tertiary-fixed-dim: '#c8c8b0'
  on-tertiary-fixed: '#1b1d0e'
  on-tertiary-fixed-variant: '#474836'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353535'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 72px
    fontWeight: '600'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.1'
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '500'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0.01em
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.15em
  button:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.1em
spacing:
  unit: 8px
  container-max: 1440px
  gutter: 24px
  margin-desktop: 80px
  margin-mobile: 24px
  section-gap: 120px
---

## Brand & Style
This design system embodies the meticulous precision of bespoke tailoring. The personality is quiet yet commanding—authoritative through restraint. It targets a discerning clientele who values heritage, craftsmanship, and exclusivity. 

The visual style is **High-Contrast Minimalism** mixed with **Editorial Noir**. It utilizes a dark mode primary aesthetic to evoke the atmosphere of a private atelier at dusk. Layouts are characterized by dramatic photography, generous negative space to let the "fabric" of the digital interface breathe, and sharp, purposeful accents of gold that guide the eye to essential actions.

## Colors
The palette is rooted in a deep, near-black "Obsidian" which serves as the primary canvas. This creates a sense of infinite depth and prestige. 

- **Primary (Obsidian):** Used for all major backgrounds and structural elements.
- **Secondary (Rich Gold):** Reserved exclusively for highlights, call-to-actions, and active states. It represents the "golden thread" of the brand.
- **Tertiary (Cream):** Used for primary typography and delicate borders to provide high legibility without the harshness of pure white.
- **Surface:** A slightly lighter charcoal (#1A1A1A) is used to distinguish cards or elevated sections from the base background.

## Typography
The typographic hierarchy relies on the tension between the romantic, high-contrast strokes of **Playfair Display** and the surgical precision of **Hanken Grotesk**.

Headings should use "display-lg" for hero sections with tight letter spacing to emphasize the editorial feel. Body text is set in Hanken Grotesk with generous line height to ensure effortless readability against the dark background. A specific "label-caps" style is used for eyebrows and small metadata to maintain a structured, organized aesthetic akin to a garment's internal labeling.

## Layout & Spacing
The layout follows a **Fixed Grid** philosophy on desktop to ensure content remains centered and curated, like a framed photograph. 

- **Desktop:** 12-column grid with a 1440px max-width. Use extreme vertical padding (section-gap) to separate distinct stories or product categories.
- **Mobile:** 4-column grid with 24px side margins.
- **Rhythm:** All spacing is derived from an 8px base unit. Negative space is not "empty"—it is a functional tool used to elevate the perceived value of the surrounding content. Elements should never feel crowded; when in doubt, increase the margin.

## Elevation & Depth
In this design system, depth is achieved through **Tonal Layering** and **Subtle Outlines** rather than aggressive shadows. 

1.  **Level 0 (Base):** Deep Obsidian (#0A0A0A).
2.  **Level 1 (Cards/Surface):** Surface charcoal (#1A1A1A) with a ultra-fine 0.5px border in Cream at 10% opacity.
3.  **Level 2 (Interaction):** Gold accents or Cream overlays.

Shadows, when used, are "Ambient Shadows"—extremely diffused, large radius, and low opacity (50% opacity of black), meant only to lift a modal or dropdown slightly off the surface without breaking the flat, editorial aesthetic.

## Shapes
The shape language is **Sharp (0px)**. To reflect the "cut" of a suit, all buttons, input fields, images, and cards use hard 90-degree angles. This conveys discipline, architectural structure, and a modern edge. The only exception to the "square" rule is the use of circular icons for social links or very specific decorative elements to provide a single point of organic contrast.

## Components
- **Buttons:** Primary buttons are solid Gold (#D4AF37) with black text, strictly rectangular. Secondary buttons are "Ghost" style: Cream border (1px) with Cream text and no fill.
- **Inputs:** Underline-only style or fully boxed with a 1px border. Focus states transition the border or underline color to Gold. 
- **Cards:** Product cards use "Ghost Borders"—a 1px border in a dark grey (#2A2A2A) that only reveals its full Cream/Gold detail on hover.
- **Images:** Always high-resolution, high-contrast photography. Use a subtle dark overlay (10-20%) to ensure text overlay remains legible.
- **Navigation:** A minimal, centered top-bar. Desktop navigation uses the "label-caps" typography for a sophisticated, understated feel.
- **Bespoke Detail:** An "Interactive Measure" component for custom tailoring—using fine lines and Gold accents to guide the user through a personal sizing flow.