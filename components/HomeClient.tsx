"use client";
import { useState } from "react";
import Link from "next/link";
import SplashScreen from "./SplashScreen";
import styles from "@/app/page.module.css";

interface Model { slug: string; coverImage: string; name: string; }

export default function HomeClient({ images }: { images: Model[] }) {
  const [splashDone, setSplashDone] = useState(false);
  const [slideIn, setSlideIn] = useState(false);

  const handleSplashComplete = () => {
    setSplashDone(true);
    requestAnimationFrame(() => requestAnimationFrame(() => setSlideIn(true)));
  };

  // 4 colunas com imagens repetidas para loop infinito
  const col1 = [...images, ...images, ...images];
  const col2 = [...images, ...images, ...images];
  const col3 = [...images, ...images, ...images];
  const col4 = [...images, ...images, ...images];

  return (
    <>
      <SplashScreen onComplete={handleSplashComplete} />

      <div
        className={styles.wrapper}
        style={{
          transform: splashDone ? (slideIn ? 'translateY(0)' : 'translateY(100vh)') : 'translateY(100vh)',
          transition: slideIn ? 'transform 1.2s cubic-bezier(0.76, 0, 0.24, 1)' : 'none',
          opacity: splashDone ? 1 : 0,
        }}
      >
        <div className={styles.colsWrap}>
          {/* Col 1 — sobe */}
          <div className={styles.col}>
            <div className={`${styles.track} ${styles.up}`} style={{ animationDuration: '115s' }}>
              {[...col1, ...col1].map((m, i) => (
                <div key={i} className={styles.card}>
                  <img src={m.coverImage} alt={m.name} className={styles.cardImg} draggable={false} />
                </div>
              ))}
            </div>
          </div>

          {/* Col 2 — desce */}
          <div className={styles.col}>
            <div className={`${styles.track} ${styles.down}`} style={{ animationDuration: '115s' }}>
              {[...col2, ...col2].map((m, i) => (
                <div key={i} className={styles.card}>
                  <img src={m.coverImage} alt={m.name} className={styles.cardImg} draggable={false} />
                </div>
              ))}
            </div>
          </div>

          {/* Col 3 — sobe mais devagar */}
          <div className={styles.col}>
            <div className={`${styles.track} ${styles.up}`} style={{ animationDuration: '115s' }}>
              {[...col3, ...col3].map((m, i) => (
                <div key={i} className={styles.card}>
                  <img src={m.coverImage} alt={m.name} className={styles.cardImg} draggable={false} />
                </div>
              ))}
            </div>
          </div>

          {/* Col 4 — desce mais devagar */}
          <div className={styles.col}>
            <div className={`${styles.track} ${styles.down}`} style={{ animationDuration: '115s' }}>
              {[...col4, ...col4].map((m, i) => (
                <div key={i} className={styles.card}>
                  <img src={m.coverImage} alt={m.name} className={styles.cardImg} draggable={false} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.overlay} />

        <div className={styles.heroContent}>
          <div className={styles.heroInner}>
            <p className={styles.heroEyebrow}>São Paulo · Brasil</p>
            <h1 className={styles.heroLogo}>Surreal</h1>
            <p className={styles.heroSub}>Models Management</p>
            <Link href="/portfolio" className={styles.heroBtn}>Models</Link>
          </div>
        </div>
      </div>
    </>
  );
}
