# Grid Cursor Project Documentation

![Project Demo](https://media.frhn.me/socialgrid.mp4)

## Overview

This project is a minimal interactive hero section built with Next.js and React that creates a visually engaging "spotlight" effect on a grid background, following the user's mouse cursor. This is the clone of eternal's (which powers blinkit and zomato) [hero section](https://www.eternal.com/) .

- The code is modular, with clear separation of concerns (mouse tracking, animation, styling).
- The effect is achieved entirely with CSS and JavaScript, no external graphics or canvas.

## Features

- **Fullscreen grid background** rendered with CSS gradients.
- **Dynamic spotlight effect**: A circular mask follows the user's mouse, revealing the grid beneath.
- **Smooth, springy animation** for the spotlight using Framer Motion.

## How It Works

### Main Entry (`page.tsx`)

- Uses Next.js dynamic import to load the `GridCursor` component only on the client side (no SSR).
- The `Home` component simply renders `<GridCursor />`.

### GridCursor Component (`GridCursor.tsx`)

- Imports styles from `page.module.scss` for layout and grid appearance.
- Uses Framer Motion for animation primitives:
  - `useMotionValue` and `useSpring` create smoothly animated values for the cursor position.
  - `useMotionTemplate` builds a CSS radial-gradient string that updates as the cursor moves.
- Uses a custom React hook `useMousePosition` to track the mouse’s x/y coordinates.
- The grid is rendered as a `motion.div` with a CSS mask (and `WebkitMaskImage` for Safari) that creates the spotlight effect.
- The mask is a radial gradient centered at the animated cursor position, fading out in concentric circles.
- The text is rendered above the grid, styled for emphasis.

### Mouse Tracking (`useMousePosition.ts`)

- Custom React hook that:
  - Initializes the mouse position to the center of the window.
  - Listens for `mousemove` events and updates the state with the current mouse coordinates.
  - Cleans up the event listener on unmount.
- Returns the current mouse position as `{ x, y }`.

### Styling (`page.module.scss`)

- Uses SCSS for modular, maintainable CSS styling.

## Technologies Used

- **Next.js**: React framework for app structure and dynamic import.
- **React**: For building UI components and managing state.
- **Framer Motion**: For smooth, spring-based animations and dynamic CSS value interpolation.
- **SCSS**: For modular, maintainable CSS styling.
- **Custom React Hooks**: For encapsulating mouse tracking logic.

## Spotlight Effect Details

1. The grid is rendered as a background using CSS gradients.
2. A CSS mask (radial gradient) is applied to the grid, centered at the animated cursor position.
3. The mask is animated using Framer Motion’s spring physics, so the spotlight smoothly follows the mouse with a natural, elastic feel.

---
