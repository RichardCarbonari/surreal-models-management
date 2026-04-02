"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import styles from "@/app/page.module.css";

interface Model { slug: string; coverImage: string; name: string; }

// Aspect ratios like primemgmt
const RATIOS = [
  { w: 9, h: 13 }, // portrait tall
  { w: 3, h: 4  }, // portrait
  { w: 3, h: 5  }, // portrait taller
  { w: 7, h: 10 }, // portrait
  { w: 9, h: 16 }, // portrait tallest
  { w: 10, h: 7 }, // landscape
  { w: 7, h: 5  }, // landscape
];

const CELL_W = 320;
const GAP = 36;
const COLS = 8;
const TOP_OFFSET = 40;

function buildLayout(count: number) {
  const cols: number[] = new Array(COLS).fill(TOP_OFFSET);
  const cells: { top: number; left: number; w: number; h: number; ratio: typeof RATIOS[0] }[] = [];

  for (let i = 0; i < count; i++) {
    const col = i % COLS;
    const ratio = RATIOS[i % RATIOS.length];
    const h = Math.round((CELL_W * ratio.h) / ratio.w);
    cells.push({ top: cols[col], left: col * (CELL_W + GAP) + GAP, w: CELL_W, h, ratio });
    cols[col] += h + GAP;
  }

  const totalW = COLS * (CELL_W + GAP) + GAP;
  const totalH = Math.max(...cols) + TOP_OFFSET;
  return { cells, totalW, totalH };
}

export default function HomeClient({ images }: { images: Model[] }) {
  const masonryRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const { cells, totalW, totalH } = buildLayout(images.length);

  useEffect(() => {
    const el = wrapperRef.current;
    const masonry = masonryRef.current;
    if (!el || !masonry) return;

    // Start centered
    const startX = -(totalW / 2 - window.innerWidth / 2);
    const startY = -(totalH / 2 - window.innerHeight / 2);
    let curX = startX, curY = startY;
    let targetX = startX, targetY = startY;
    masonry.style.transform = `translate(${curX}px, ${curY}px)`;

    // Smooth lerp animation
    let raf: number;
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
    const tick = () => {
      curX = lerp(curX, targetX, 0.08);
      curY = lerp(curY, targetY, 0.08);
      masonry.style.transform = `translate(${curX.toFixed(2)}px, ${curY.toFixed(2)}px)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    // Drag
    let isDown = false, startDX = 0, startDY = 0, startTX = 0, startTY = 0;
    const onDown = (e: MouseEvent) => {
      isDown = true;
      startDX = e.clientX; startDY = e.clientY;
      startTX = targetX; startTY = targetY;
      el.style.cursor = 'grabbing';
    };
    const onUp = () => { isDown = false; el.style.cursor = 'grab'; };
    const onMove = (e: MouseEvent) => {
      if (!isDown) return;
      targetX = startTX + (e.clientX - startDX);
      targetY = startTY + (e.clientY - startDY);
    };
    const onTouchStart = (e: TouchEvent) => {
      startDX = e.touches[0].clientX; startDY = e.touches[0].clientY;
      startTX = targetX; startTY = targetY;
    };
    const onTouchMove = (e: TouchEvent) => {
      targetX = startTX + (e.touches[0].clientX - startDX);
      targetY = startTY + (e.touches[0].clientY - startDY);
    };

    el.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);
    window.addEventListener('mousemove', onMove);
    el.addEventListener('touchstart', onTouchStart, { passive: true });
    el.addEventListener('touchmove', onTouchMove, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
      window.removeEventListener('mousemove', onMove);
      el.removeEventListener('touchstart', onTouchStart);
      el.removeEventListener('touchmove', onTouchMove);
    };
  }, [totalW, totalH]);

  return (
    <div className={styles.wrapper} ref={wrapperRef}>
      {/* Masonry with absolute positioned cells */}
      <div
        className={styles.masonry}
        ref={masonryRef}
        style={{ width: totalW, height: totalH }}
      >
        {images.map((model, i) => {
          const cell = cells[i];
          if (!cell) return null;
          return (
            <Link
              key={i}
              href={`/portfolio/${model.slug}`}
              className={styles.cell}
              draggable={false}
              style={{
                position: 'absolute',
                top: cell.top,
                left: cell.left,
                width: cell.w,
                height: cell.h,
              }}
            >
              <img
                src={model.coverImage}
                alt={model.name}
                draggable={false}
                className={styles.cellImg}
              />
              <span className={styles.cellTitle}>{model.name}</span>
            </Link>
          );
        })}
      </div>

      {/* Overlay */}
      <div className={styles.overlay} />

      {/* Hero content */}
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
  );
}
