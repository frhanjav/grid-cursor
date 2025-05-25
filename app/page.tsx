'use client';
import styles from './page.module.scss';
import useSmoothMousePosition from './utils/useSmoothMousePosition';

export default function Home() {

  const { x, y } = useSmoothMousePosition(0.15);

  return (
    <main className={styles.hero}>

      <div
        className={styles.grid}
        style={{
          maskImage: `radial-gradient(circle at ${x}px ${y}px, 
          black 0%, 
          black 60px, 
          rgba(0,0,0,0.8) 100px,
          rgba(0,0,0,0.3) 140px,
          transparent 200px
        )`,
        WebkitMaskImage: `radial-gradient(circle at ${x}px ${y}px, 
          black 0%, 
          black 60px, 
          rgba(0,0,0,0.8) 100px,
          rgba(0,0,0,0.3) 140px,
          transparent 200px
        )`,
        }}
      />

      <div className={styles.heroText}>
        <h1>less is less.</h1>
        <h2>MORE IS MORE.</h2>
      </div>
    </main>
  );
}
