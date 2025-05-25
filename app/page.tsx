'use client';
import React from 'react';
import styles from './page.module.scss';
import { motion, useMotionValue, useSpring, useMotionTemplate } from 'motion/react';
import useMousePosition from './utils/useMousePosition';

export default function Home() {
  const { x: mouseX, y: mouseY } = useMousePosition();
  
  // Create motion values for smooth spring animation
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // Apply spring physics to create elastic rubber band effect
  const springX = useSpring(x, {
    stiffness: 60,      // Spring strength (lower = more elastic)
    damping: 25,        // Bounce control (lower = more bouncy)
    mass: 1.5,          // Inertia (higher = more momentum)
    restDelta: 0.001    // Animation precision
  });
  
  const springY = useSpring(y, {
    stiffness: 60,
    damping: 25,
    mass: 1.5,
    restDelta: 0.001
  });

  // Create animated CSS gradient using motion template
  const maskImage = useMotionTemplate`radial-gradient(circle at ${springX}px ${springY}px, 
    black 0%, 
    black 60px, 
    rgba(0,0,0,0.9) 105px,
    rgba(0,0,0,0.6) 165px,
    rgba(0,0,0,0.3) 225px,
    rgba(0,0,0,0.1) 270px,
    transparent 330px
  )`;

  // Update spring targets when mouse moves
  React.useEffect(() => {
    x.set(mouseX);
    y.set(mouseY);
  }, [mouseX, mouseY, x, y]);

  return (
    <main className={styles.hero}>
      {/* Grid with Motion's spring physics */}
      <motion.div
        className={styles.grid}
        style={{
          maskImage,
          WebkitMaskImage: maskImage,
        }}
      />

      {/* Text that's always visible */}
      <div className={styles.heroText}>
        <h1>less is less.</h1>
        <h2>MORE IS MORE.</h2>
      </div>
    </main>
  );
}