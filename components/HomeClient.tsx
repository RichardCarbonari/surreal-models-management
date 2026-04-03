"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import SplashScreen from "./SplashScreen";
import styles from "@/app/page.module.css";

interface Model { slug: string; coverImage: string; name: string; }

const NUM_COLS = 4;
const CELL_H = 380;
const GAP = 6;

export default function HomeClient({ images }: { images: Model[] }) {
  const [splashDone, setSplashDone] = useState(false);
  const [slideIn, setSlideIn] = useState(false);

  const handleSplashComplete = () => {
    setSplashDone(true);
    requestAnimationFrame(() => requestAnimationFrame(() => setSlideIn(true)));
  };

  // Each column gets all images repeated for infinite scroll
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
        {/* 4 vertical columns */}
        <div className={styles.colsWrap}>
          {Array.from({ length: NUM_COLS }).map((_, colIdx) => {
            const goUp = colIdx % 2 === 0;
            const speed = 25 + colIdx * 5;
            return (
              <div key={colIdx} className={styles.col}>
                <div
                  className={`${styles.colTrack} ${goUp ? styles.scrollUp : styles.scrollDown}`}
                  style={{ animationDuration: `${speed}s` }}
                >
                  {/* Double the images for seamless loop */}
                  {[...repeated, ...repeated].map((model, i) => (
                    <div
                      key={i}
                      className={styles.card}
                      style={{ height: CELL_H }}
                    >
                      <img
                        src={model.coverImage}
                        alt={model.name}
                        draggable={false}
                        className={styles.cardImg}
                      />
                      <span className={styles.cardName}>{model.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Overlay */}
        <div className={styles.overlay} />

        {/* Hero */}
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
