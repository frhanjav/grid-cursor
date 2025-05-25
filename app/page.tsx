'use client';
import styles from './page.module.scss';
import useSmoothMousePosition from './utils/useSmoothMousePosition';

export default function Home() {

  const { x, y } = useSmoothMousePosition();

  return (
    <main className={styles.hero}>

      <div
        className={styles.grid}
        style={{
          maskImage: `radial-gradient(circle at ${x}px ${y}px, 
            black 0%, 
            black 60px, 
            rgba(0,0,0,0.9) 105px,
            rgba(0,0,0,0.6) 165px,
            rgba(0,0,0,0.3) 225px,
            rgba(0,0,0,0.1) 270px,
            transparent 330px
          )`,
          WebkitMaskImage: `radial-gradient(circle at ${x}px ${y}px, 
            black 0%, 
            black 60px, 
            rgba(0,0,0,0.9) 105px,
            rgba(0,0,0,0.6) 165px,
            rgba(0,0,0,0.3) 225px,
            rgba(0,0,0,0.1) 270px,
            transparent 330px
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
