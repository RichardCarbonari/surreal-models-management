"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import SplashScreen from "./SplashScreen";
import { models as allModels } from "@/data/models";
import styles from "@/app/page.module.css";

interface Model { slug: string; coverImage: string; name: string; }

const HOME_IMAGES: Model[] = allModels.flatMap((m) => {
  const photos = [m.coverImage, ...m.images.filter((u) => u !== m.coverImage).slice(0, 2)];
  return photos.map((coverImage) => ({ coverImage, name: m.name, slug: m.slug }));
});

const shuffle = (arr: Model[], seed: number) => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = (seed * (i + 7) * 2654435761) % (i + 1);
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

// Build col images — each col gets unique shuffle + different starting offset
// so when animation pauses, all 7 cols show different photos
const makeCol = (seed: number, offset: number) => {
  const shuffled = shuffle([...HOME_IMAGES,...HOME_IMAGES,...HOME_IMAGES,...HOME_IMAGES], seed);
  // rotate array by offset so visible area starts at different image
  return [...shuffled.slice(offset), ...shuffled.slice(0, offset)];
};

const COLS = [
  { dir: 'up',   imgs: makeCol(1,  0)  },
  { dir: 'down', imgs: makeCol(7,  4)  },
  { dir: 'up',   imgs: makeCol(13, 8)  },
  { dir: 'down', imgs: makeCol(3,  12) },
  { dir: 'up',   imgs: makeCol(17, 16) },
  { dir: 'down', imgs: makeCol(5,  20) },
  { dir: 'up',   imgs: makeCol(11, 2)  },
];

// Duration scales with image count so the scroll speed (px/s) stays the same as the
// original 23-image marquee, regardless of how many photos end up in HOME_IMAGES.
const SCROLL_DURATION_S = Math.round(200 * (HOME_IMAGES.length / 23));

export default function HomeClient({ images }: { images: Model[] }) {
  const [splashDone, setSplashDone] = useState(false);
  const [slideIn, setSlideIn] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem('splashSeen') === '1') {
      setSplashDone(true);
      setSlideIn(true);
    }
  }, []);

  const handleSplashComplete = () => {
    sessionStorage.setItem('splashSeen', '1');
    setSplashDone(true);
    requestAnimationFrame(() => requestAnimationFrame(() => setSlideIn(true)));
  };

  return (
    <>
      {!splashDone && <SplashScreen onComplete={handleSplashComplete} />}

      <div
        className={styles.wrapper}
        style={{
          transform: splashDone ? (slideIn ? 'translateY(0)' : 'translateY(100vh)') : 'translateY(100vh)',
          transition: slideIn ? 'transform 1.2s cubic-bezier(0.76, 0, 0.24, 1)' : 'none',
          opacity: splashDone ? 1 : 0,
        }}
      >
        <div className={styles.colsWrap}>
          {COLS.map((col, colIdx) => (
            <div key={colIdx} className={styles.col}>
              <div
                className={`${styles.track} ${col.dir === 'up' ? styles.up : styles.down}`}
                style={{ animationDuration: `${SCROLL_DURATION_S}s` }}
              >
                {[...col.imgs, ...col.imgs].map((m, i) => (
                  <div key={i} className={styles.card}>
                    <Image src={m.coverImage} alt="" fill sizes="200px" className={styles.cardImg} draggable={false} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
