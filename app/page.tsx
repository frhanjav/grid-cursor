'use client';
import styles from './page.module.scss';
import { motion } from 'motion/react';
import useMousePosition from './utils/useMousePosition';

export default function Home() {

  const { x, y } = useMousePosition();

  return (
    <main className={styles.hero}>
      {/* Grid that gets revealed by cursor */}
      <div
        className={styles.grid}
        style={{
          maskImage: `radial-gradient(circle 150px at ${x}px ${y}px, black 0%, black 100px, transparent 150px)`,
          WebkitMaskImage: `radial-gradient(circle 150px at ${x}px ${y}px, black 0%, black 100px, transparent 150px)`,
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
