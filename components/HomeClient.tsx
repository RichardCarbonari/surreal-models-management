"use client";
import { useState } from "react";
import Link from "next/link";
import SplashScreen from "./SplashScreen";
import styles from "@/app/page.module.css";

interface Model { slug: string; coverImage: string; name: string; }

export default function HomeClient({ images }: { images: Model[] }) {
  const alreadySeen = typeof window !== 'undefined' && sessionStorage.getItem('splashSeen') === '1';
  const [splashDone, setSplashDone] = useState(alreadySeen);
  const [slideIn, setSlideIn] = useState(alreadySeen);

  const handleSplashComplete = () => {
    sessionStorage.setItem('splashSeen', '1');
    setSplashDone(true);
    requestAnimationFrame(() => requestAnimationFrame(() => setSlideIn(true)));
  };

  // Imagens repetidas para loop infinito
  const imgs = [...images, ...images, ...images, ...images];

  // 7 colunas — as 2 extras (1 cada lado) ficam fora da tela criando efeito infinito
  const cols = [
    { dir: 'up',   delay: '0s'   },
    { dir: 'down', delay: '0s'   },
    { dir: 'up',   delay: '0s'   },
    { dir: 'down', delay: '0s'   },
    { dir: 'up',   delay: '0s'   },
    { dir: 'down', delay: '0s'   },
    { dir: 'up',   delay: '0s'   },
  ];

  return (
    <>
      {!alreadySeen && <SplashScreen onComplete={handleSplashComplete} />}

      <div
        className={styles.wrapper}
        style={{
          transform: splashDone ? (slideIn ? 'translateY(0)' : 'translateY(100vh)') : 'translateY(100vh)',
          transition: slideIn ? 'transform 1.2s cubic-bezier(0.76, 0, 0.24, 1)' : 'none',
          opacity: splashDone ? 1 : 0,
        }}
      >
        <div className={styles.colsWrap}>
          {cols.map((col, colIdx) => (
            <div key={colIdx} className={styles.col}>
              <div
                className={`${styles.track} ${col.dir === 'up' ? styles.up : styles.down}`}
                style={{ animationDuration: '200s', animationDelay: col.delay }}
              >
                {[...imgs, ...imgs].map((m, i) => (
                  <div key={i} className={styles.card}>
                    <img
                      src={m.coverImage}
                      alt={m.name}
                      className={styles.cardImg}
                      draggable={false}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
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
