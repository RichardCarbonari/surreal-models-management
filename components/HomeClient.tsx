"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import SplashScreen from "./SplashScreen";
import styles from "@/app/page.module.css";

interface Model { slug: string; coverImage: string; name: string; }

const CELL_W = 260;
const GAP = 8;
const ROW_H = 340;
const NUM_ROWS = 4;

const DELAYS = [0, 3.2, 6.5, 1.8, 8.1, 4.4, 11.2, 2.7, 7.3, 5.6, 9.8, 0.9, 13.1, 3.8, 6.2, 10.5, 1.4];

export default function HomeClient({ images }: { images: Model[] }) {
  const [splashDone, setSplashDone] = useState(false);
  const [slideIn, setSlideIn] = useState(false);

  const handleSplashComplete = () => {
    setSplashDone(true);
    requestAnimationFrame(() => requestAnimationFrame(() => setSlideIn(true)));
  };

  // Build rows — each row gets all images repeated for infinite scroll
  const repeated = [...images, ...images, ...images, ...images];

  return (
    <>
      <SplashScreen onComplete={handleSplashComplete} />

      <div
        className={styles.wrapper}
        style={{
          transform: splashDone ? (slideIn ? 'translateY(0)' : 'translateY(100vh)') : 'translateY(100vh)',
          transition: slideIn ? 'transform 0.8s cubic-bezier(0.76, 0, 0.24, 1)' : 'none',
          opacity: splashDone ? 1 : 0,
        }}
      >
        {/* Scrolling rows */}
        <div className={styles.rowsWrap}>
          {Array.from({ length: NUM_ROWS }).map((_, rowIdx) => {
            const goLeft = rowIdx % 2 === 0;
            const speed = 35 + rowIdx * 5; // different speeds per row
            const offset = rowIdx * 8; // vertical offset for stagger
            return (
              <div
                key={rowIdx}
                className={styles.row}
                style={{ top: `${rowIdx * (ROW_H + GAP) - offset}px` }}
              >
                <div
                  className={`${styles.rowTrack} ${goLeft ? styles.scrollLeft : styles.scrollRight}`}
                  style={{ animationDuration: `${speed}s` }}
                >
                  {/* Double for seamless loop */}
                  {[...repeated, ...repeated].map((model, i) => {
                    const delay = DELAYS[i % DELAYS.length];
                    const flipInterval = 10 + (i % 7) * 2;
                    return (
                      <div
                        key={i}
                        className={styles.flipWrap}
                        style={{
                          ['--del' as string]: `${delay}s`,
                          ['--dur' as string]: `${flipInterval}s`,
                          width: CELL_W,
                          height: ROW_H,
                          flexShrink: 0,
                        }}
                      >
                        {/* No link — just image */}
                        <div className={styles.cell} draggable={false}>
                          <img
                            src={model.coverImage}
                            alt={model.name}
                            draggable={false}
                            className={styles.cellImg}
                          />
                          <span className={styles.cellTitle}>{model.name}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
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
