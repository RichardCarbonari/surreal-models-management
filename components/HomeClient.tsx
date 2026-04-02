"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import SplashScreen from "./SplashScreen";
import styles from "@/app/page.module.css";

interface Model { slug: string; coverImage: string; name: string; }

const CELL_W = 320;
const GAP = 36;
const TOP_PAD = 40;

const RATIOS = [
  { w: 9,  h: 13 },
  { w: 3,  h: 4  },
  { w: 3,  h: 5  },
  { w: 7,  h: 10 },
  { w: 9,  h: 16 },
  { w: 10, h: 7  },
  { w: 5,  h: 7  },
];

function buildCols(images: Model[], numCols: number) {
  const colHeights = new Array(numCols).fill(TOP_PAD);
  const cells: { model: Model; top: number; left: number; w: number; h: number; i: number }[] = [];
  images.forEach((model, i) => {
    const col = i % numCols;
    const ratio = RATIOS[i % RATIOS.length];
    const h = Math.round((CELL_W * ratio.h) / ratio.w);
    cells.push({ model, top: colHeights[col], left: col * (CELL_W + GAP) + GAP, w: CELL_W, h, i });
    colHeights[col] += h + GAP;
  });
  const totalW = numCols * (CELL_W + GAP) + GAP;
  const totalH = Math.max(...colHeights) + TOP_PAD;
  return { cells, totalW, totalH };
}

// Staggered delays so flips happen at different times
const DELAYS = [0, 3.2, 6.5, 1.8, 8.1, 4.4, 11.2, 2.7, 7.3, 5.6, 9.8, 0.9, 13.1, 3.8, 6.2, 10.5, 1.4];

export default function HomeClient({ images }: { images: Model[] }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const masonryRef = useRef<HTMLDivElement>(null);
  const [splashDone, setSplashDone] = useState(false);
  const [slideIn, setSlideIn] = useState(false);

  const NUM_COLS = 8;
  const allImages = [...images, ...images, ...images];
  const { cells, totalW, totalH } = buildCols(allImages, NUM_COLS);

  const handleSplashComplete = () => {
    setSplashDone(true);
    requestAnimationFrame(() => requestAnimationFrame(() => setSlideIn(true)));
  };

  useEffect(() => {
    const el = wrapperRef.current;
    const masonry = masonryRef.current;
    if (!el || !masonry) return;

    let curX = 0, curY = 0, targetX = 0, targetY = 0;
    masonry.style.transform = `translate(0px, 0px)`;

    let raf: number;
    const tick = () => {
      curX += (targetX - curX) * 0.075;
      curY += (targetY - curY) * 0.075;
      masonry.style.transform = `translate(${curX.toFixed(2)}px, ${curY.toFixed(2)}px)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    let dragging = false, ox = 0, oy = 0, tx0 = 0, ty0 = 0;
    const down = (e: MouseEvent) => { dragging = true; ox = e.clientX; oy = e.clientY; tx0 = targetX; ty0 = targetY; el.style.cursor = 'grabbing'; };
    const up = () => { dragging = false; el.style.cursor = 'grab'; };
    const move = (e: MouseEvent) => { if (!dragging) return; targetX = tx0 + (e.clientX - ox); targetY = ty0 + (e.clientY - oy); };
    const tstart = (e: TouchEvent) => { ox = e.touches[0].clientX; oy = e.touches[0].clientY; tx0 = targetX; ty0 = targetY; };
    const tmove = (e: TouchEvent) => { targetX = tx0 + (e.touches[0].clientX - ox); targetY = ty0 + (e.touches[0].clientY - oy); };

    el.addEventListener('mousedown', down);
    window.addEventListener('mouseup', up);
    window.addEventListener('mousemove', move);
    el.addEventListener('touchstart', tstart, { passive: true });
    el.addEventListener('touchmove', tmove, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener('mousedown', down);
      window.removeEventListener('mouseup', up);
      window.removeEventListener('mousemove', move);
    };
  }, []);

  return (
    <>
      <SplashScreen onComplete={handleSplashComplete} />

      <div
        ref={wrapperRef}
        className={styles.wrapper}
        style={{
          transform: splashDone ? (slideIn ? 'translateY(0)' : 'translateY(100vh)') : 'translateY(100vh)',
          transition: slideIn ? 'transform 0.8s cubic-bezier(0.76, 0, 0.24, 1)' : 'none',
          opacity: splashDone ? 1 : 0,
        }}
      >
        <div ref={masonryRef} className={styles.masonry} style={{ width: totalW, height: totalH }}>
          {cells.map(({ model, top, left, w, h, i }) => {
            const delay = DELAYS[i % DELAYS.length];
            const duration = 1.4 + (i % 5) * 0.2;
            const interval = 8 + (i % 7) * 2.5;
            return (
              <div
                key={i}
                className={styles.flipWrap}
                style={{
                  position: 'absolute',
                  top, left, width: w, height: h,
                  ['--del' as string]: `${delay}s`,
                  ['--dur' as string]: `${interval}s`,
                } as React.CSSProperties}
              >
                <Link href={`/portfolio/${model.slug}`} className={styles.cell} draggable={false}>
                  <img src={model.coverImage} alt={model.name} draggable={false} className={styles.cellImg} />
                  <span className={styles.cellTitle}>{model.name}</span>
                </Link>
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

        <div className={styles.dragHint}>
          <span>drag to explore</span>
          <svg width="36" height="8" viewBox="0 0 36 8" fill="none">
            <path d="M0 4h34M31 1l3 3-3 3" stroke="currentColor" strokeWidth="1.2"/>
          </svg>
        </div>
      </div>
    </>
  );
}
