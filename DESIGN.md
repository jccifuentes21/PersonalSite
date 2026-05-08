<!-- SEED: re-run /impeccable document once there's code to capture the actual tokens and components. -->

---
name: Juan Cifuentes Portfolio
description: Personal portfolio for a full-stack developer — ambitious, technical, modern.
colors:
  ink: "#0d0d16"
  ink-raised: "#121220"
  ink-border: "#1e1e30"
  ink-dim: "#3a3a52"
  ink-muted: "#6b6b80"
  parchment: "#f7f7fb"
  parchment-raised: "#ffffff"
  parchment-border: "#e2e2ec"
  parchment-muted: "#71717a"
  type-primary-dark: "#ededf4"
  type-primary-light: "#09090f"
  signal: "#818cf8"
  signal-deep: "#4f46e5"
  signal-dim-dark: "#818cf814"
  signal-dim-light: "#4f46e50d"
typography:
  display:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "clamp(3rem, 7vw, 5.5rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 3vw, 2.25rem)"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "normal"
  label:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.02em"
  mono:
    fontFamily: "ui-monospace, 'JetBrains Mono', Consolas, monospace"
    fontSize: "0.8125rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0em"
rounded:
  xs: "4px"
  sm: "8px"
  md: "12px"
  lg: "16px"
  pill: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "40px"
  "2xl": "64px"
  "3xl": "96px"
components:
  button-primary:
    backgroundColor: "{colors.signal}"
    textColor: "#ffffff"
    rounded: "{rounded.sm}"
    padding: "10px 20px"
  button-primary-hover:
    backgroundColor: "{colors.signal-deep}"
    textColor: "#ffffff"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.type-primary-dark}"
    rounded: "{rounded.sm}"
    padding: "10px 20px"
  button-ghost-hover:
    backgroundColor: "{colors.ink-raised}"
    textColor: "{colors.type-primary-dark}"
  tech-chip:
    backgroundColor: "{colors.ink-border}"
    textColor: "{colors.ink-muted}"
    rounded: "{rounded.xs}"
    padding: "3px 8px"
---

# Design System: Juan Cifuentes Portfolio

## 1. Overview

**Creative North Star: "The Precision Signal"**

This is a portfolio that looks like it was *built*, not assembled. The aesthetic lives between the engineered restraint of Linear's dark interface and the deliberate visual identity of Basement Studio — precise enough to signal deep craft, opinionated enough to be remembered. Every spacing decision, transition curve, and typographic choice carries the same message: this person sweats details in code, and the portfolio is no exception.

The surface is mostly dark, deep blue-tinted black that reads as "work environment" rather than "dark for dark's sake." The primary accent — an indigo-violet — appears rarely and deliberately, always signaling something interactive or exceptional. Most of the hierarchy is built from weight, scale, and opacity alone. The site does not decorate; it demonstrates.

Motion is choreographed but principled. The hero entrance is the one place where a longer sequence is earned (the user sees it once per visit). Scroll-triggered reveals are fast, simple, and directional — they reveal content, they don't entertain it. On-screen interactions (buttons, cards, links) respond immediately and return quickly. Nothing bounces. Nothing slides in from unexpected directions.

**Key Characteristics:**
- Deep, blue-tinted dark surfaces as the primary environment; clean off-white for light mode
- Indigo-violet accent used sparingly — interactive elements and rare highlights only
- Strong typographic hierarchy driven by weight and scale contrast, not decoration
- Choreographed hero entrance; fast, directional scroll reveals for all other sections
- Flat-by-default surfaces; shadows appear only as hover state feedback
- No gradient text, no side-stripe borders, no glassmorphism as decoration

## 2. Colors

The palette is built on near-black blue-tinted backgrounds with a single indigo accent. Restraint is the rule — the accent earns its appearances.

### Primary
- **Signal Indigo** (#818cf8, dark / #4f46e5, light): The only true color on the surface. Used on interactive elements, active states, and inline emphasis. Changes value between themes to maintain contrast. Never used as a background fill except at very low opacity.

### Neutral — Dark Theme
- **Deep Ink** (#0d0d16): Page background. Not pure black — the blue tint (hue ~265) ties it to the accent without announcing it.
- **Raised Ink** (#121220): Elevated surfaces — cards, navbar on scroll. 1 step lighter than background.
- **Ink Border** (#1e1e30): All borders and dividers. Subtle enough not to create visual noise.
- **Dim Ink** (#3a3a52): Disabled text, faint UI elements.
- **Muted Ink** (#6b6b80): Secondary text, captions, metadata.
- **Primary Text Dark** (#ededf4): Headings and primary body text on dark.

### Neutral — Light Theme
- **Parchment** (#f7f7fb): Page background. Off-white with a trace of blue; not pure white.
- **Raised Parchment** (#ffffff): Cards and elevated surfaces.
- **Parchment Border** (#e2e2ec): Borders and dividers.
- **Parchment Muted** (#71717a): Secondary text, captions, metadata.
- **Primary Text Light** (#09090f): Headings and primary body text on light.

### Named Rules
**The One Voice Rule.** The signal indigo appears on ≤10% of any given screen. It is used on CTAs, active nav states, links on hover, and tag highlights — and nowhere else. Its rarity is the point. A second accent would dilute it.

**The Tinted Neutrals Rule.** Every neutral — background, surface, border, text — carries a trace of the blue-indigo hue (chroma 0.005–0.012 in OKLCH terms). Pure gray reads as uncurated. The tint is felt, not seen.

## 3. Typography

**Display / Body Font:** Inter (variable, weights 300–700, with system-ui fallback)

**Label / Code Font:** ui-monospace, JetBrains Mono, Consolas (for tech tags and inline code)

**Character:** A single-font system where hierarchy is built entirely from weight and scale contrast. Inter's geometric-humanist balance gives it a technical character that still feels warm enough to read. The display size at 700 weight with aggressive negative tracking (-0.04em) creates authority without aggression. No decorative serifs, no editorial whimsy — just precision at every size.

### Hierarchy
- **Display** (700, clamp(3rem, 7vw, 5.5rem), 1.05): Hero name only. Tight letter-spacing (-0.04em). This size appears once per page.
- **Headline** (600, clamp(1.5rem, 3vw, 2.25rem), 1.15): Section titles (Experience, Projects, Skills, Contact). Letter-spacing -0.02em.
- **Title** (600, 1.125rem, 1.3): Role names, card titles, company names. Letter-spacing -0.01em.
- **Body** (400, 1rem, 1.65): Experience descriptions, bio text. Max line length 68ch to prevent fatigue.
- **Label** (500, 0.8125rem, 1.4): Navigation links, metadata, dates, location. Letter-spacing +0.02em for air.
- **Mono** (500, 0.8125rem, 1.4): Tech stack chips and any inline code references. Monospace only.

### Named Rules
**The Weight Contract Rule.** Hierarchy is established through weight-and-scale pairs, not color. A heading is large and heavy (700). Body is normal-weight (400) at reading size. Labels are medium-weight (500) at small size. Never bold body text for emphasis — use opacity or a heavier type size instead.

**The Single Family Rule.** Inter only. No display typeface, no serif accent. The portfolio is a developer's work — it earns its sophistication through precision, not typographic variety.

## 4. Elevation

This system is flat-by-default. Surfaces do not have resting shadows — depth is implied by layered backgrounds (ink → raised ink → parchment). Shadows appear only as a response to hover state, communicating interactivity without cluttering the resting state.

### Shadow Vocabulary
- **Ambient Hover** (`0 8px 32px rgba(0,0,0,0.4)` dark / `0 8px 32px rgba(0,0,0,0.1)` light): Appears beneath project cards and interactive containers on hover. Reinforces the lift effect. Should feel like the element moved toward the user, not like a drop shadow was applied.
- **Navbar Scroll** (`0 1px 0 {ink-border}` as a border): When the navbar gains backdrop blur on scroll, it gains a bottom border — not a shadow. The blur already implies elevation; the border sharpens the separation.

### Named Rules
**The Flat-By-Default Rule.** Surfaces have no shadow at rest. The shadow budget is reserved for hover states. One level of shadow, one context.

## 5. Components

### Buttons
- **Shape:** Gently rounded corners (8px radius). Not pill, not sharp — functional geometry.
- **Primary (Signal Indigo):** Background `#818cf8` dark / `#4f46e5` light; white text; padding 10px 20px. Hover: darken background 8%. Active: `scale(0.97)` with `transition: transform 160ms cubic-bezier(0.23, 1, 0.32, 1)`.
- **Ghost:** Transparent background; border `1px solid {ink-border}`; primary text color. Hover: background raises to `{ink-raised}`. Active: same `scale(0.97)` rule as primary.
- **States:** Both variants use `transition: background 150ms ease-out, border-color 150ms ease-out, transform 160ms cubic-bezier(0.23, 1, 0.32, 1)`. No `transition: all`.

### Tech Chips / Tags
- **Style:** Dark mode: `{ink-border}` background; `{ink-muted}` text. Light mode: `{parchment-border}` background; `{parchment-muted}` text. 4px radius. Monospace font at 0.8125rem. Padding 3px 8px.
- **No hover state.** Tags are labels, not interactive. Making them hoverable would imply clickability.

### Cards (Project Cards)
- **Corner Style:** 12px radius.
- **Background:** `{ink-raised}` at rest in dark mode; `{parchment-raised}` in light mode.
- **Shadow Strategy:** No shadow at rest. On hover: `0 8px 32px rgba(0,0,0,0.4)` + `translateY(-4px)` with `transition: transform 200ms cubic-bezier(0.23, 1, 0.32, 1), box-shadow 200ms ease-out`.
- **Border:** `1px solid {ink-border}` at rest. On hover: `1px solid {ink-dim}` (subtle brightening).
- **Internal Padding:** 24px.
- **Never:** Left-border accent stripes. Never nested cards.

### Navigation
- **Default:** Transparent background; label-weight text in `{ink-muted}`. No underlines.
- **Hover:** Text transitions to `{type-primary-dark}` with `transition: color 150ms ease-out`.
- **Scroll active state:** Gains `backdrop-filter: blur(12px)` and `background: {ink-raised}` at ~80% opacity, plus `1px solid {ink-border}` bottom border.
- **Theme toggle:** 36×36px square button; `{ink-raised}` background, `{ink-border}` border. Houses Sun/Moon icon. Active: `scale(0.94)` feedback.
- **Mobile:** Below 768px, nav links collapse. Logo and theme toggle remain visible.

### Experience Timeline
- **Layout:** Left-aligned single column. No vertical line with dots — the dates and roles create natural rhythm through type hierarchy alone.
- **Company block:** Company name in Title weight; a parenthetical "formerly X" note in muted. Dates and location in Label weight, muted.
- **Role entries:** Role title in Title weight (primary text). Bullet descriptions in Body weight (muted text). Tech tags below each role.
- **Separation:** 40px between role entries; 64px between company blocks if multiple companies exist.
- **Never:** Left-border accent stripes on any experience card or list item.

### Hero Background (Signature Component)
- **What it is:** Two or three large radial gradient orbs — blurred circles in indigo and violet at very low opacity (0.12–0.18) — positioned in the top-right and bottom-left of the hero section. They drift slowly using CSS keyframe animations (off the main thread, GPU-composited).
- **Animation:** Two keyframe sequences at 8s and 12s respectively, alternating between 0% and 50% keyframes with `ease-in-out`. `will-change: transform`. Movement is ±40–60px translate + subtle scale (0.95–1.05). The motion is decorative; reduced-motion turns it off entirely.
- **Constraint:** No canvas, no JS particles, no cursor tracking. CSS only. The orbs are `pointer-events: none`, `user-select: none`.

## 6. Do's and Don'ts

### Do:
- **Do** tint every neutral (background, surface, border, text) toward the blue-indigo hue — chroma 0.005–0.012 in OKLCH.
- **Do** use `scale(0.97)` on `:active` for every button and pressable element, with `transition: transform 160ms cubic-bezier(0.23, 1, 0.32, 1)`.
- **Do** name `transition` properties explicitly: `transition: transform 200ms ease-out, box-shadow 200ms ease-out`. Never `transition: all`.
- **Do** start appearing elements from `opacity: 0, translateY(16px)` — never from `scale(0)` or `translateY(100%)`.
- **Do** use CSS keyframe animations for the hero orbs (off main thread). Use Framer Motion only for scroll-triggered reveals and interactive animations.
- **Do** guard hover animations behind `@media (hover: hover) and (pointer: fine)`.
- **Do** stagger list animations at 50–80ms between items. Keep the total stagger sequence under 400ms.
- **Do** test all animations against `prefers-reduced-motion: reduce`. Remove translate/scale animations; keep opacity transitions.
- **Do** keep body text to a maximum of 68ch line length.
- **Do** use monospace font (ui-monospace / JetBrains Mono) exclusively for tech chips and inline code.

### Don't:
- **Don't** use `background-clip: text` with a gradient for the name or any heading. Text is a solid color, always.
- **Don't** use `border-left` or `border-right` greater than 1px as a colored accent on cards, experience items, or callouts. Full borders or background tints only.
- **Don't** use glassmorphism decoratively. Backdrop blur is reserved for the navbar scroll state — one place, one purpose.
- **Don't** create an identical card grid: same-sized cards with icon + heading + text repeated across the skills section. Vary the treatment.
- **Don't** make the site look like a Bootstrap template, a WordPress portfolio theme, or a filled-in resume. Every layout choice should have a reason behind it.
- **Don't** use dark neon or cyberpunk aesthetics — aggressive neon on black is the crypto visual language, not the developer craft language.
- **Don't** let the site read as corporate or stiff. It should feel like a person made it, not like a hiring document.
- **Don't** add cursor trails, floating particle canvases, or JS-driven mouse-tracking decorations. The hero orbs are the ceiling for ambient decoration.
- **Don't** use `ease-in` timing for any UI animation. Use `ease-out` (cubic-bezier(0.23, 1, 0.32, 1)) for entrances and exits.
- **Don't** animate CSS layout properties (height, width, padding, margin). Only `transform` and `opacity`.
- **Don't** put a big hero stat block ("400,000+ users · $200M+ volume · 3 years") as a metrics display. That content belongs in the experience description prose.
