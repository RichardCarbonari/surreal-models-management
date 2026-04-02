"use client";
import { useEffect } from "react";
import Link from "next/link";
import styles from "@/app/page.module.css";

interface Model { slug: string; coverImage: string; name: string; }

export default function HomeClient({ images }: { images: Model[] }) {
  useEffect(() => {
    const el = document.getElementById('homeScroll');
    if (!el) return;
    let isDown = false, startX = 0, scrollLeft = 0;
    const onDown = (e: MouseEvent) => {
      isDown = true; startX = e.pageX - el.offsetLeft; scrollLeft = el.scrollLeft; el.style.cursor = 'grabbing';
    };
    const onUp = () => { isDown = false; el.style.cursor = 'grab'; };
    const onMove = (e: MouseEvent) => {
      if (!isDown) return; e.preventDefault();
      el.scrollLeft = scrollLeft - (e.pageX - el.offsetLeft - startX) * 1.8;
    };
    const onTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].pageX - el.offsetLeft; scrollLeft = el.scrollLeft;
    };
    const onTouchMove = (e: TouchEvent) => {
      el.scrollLeft = scrollLeft - (e.touches[0].pageX - el.offsetLeft - startX) * 1.8;
    };
    el.addEventListener('mousedown', onDown);
    document.addEventListener('mouseup', onUp);
    el.addEventListener('mousemove', onMove);
    el.addEventListener('touchstart', onTouchStart, { passive: true });
    el.addEventListener('touchmove', onTouchMove, { passive: true });
    return () => {
      el.removeEventListener('mousedown', onDown);
      document.removeEventListener('mouseup', onUp);
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('touchstart', onTouchStart);
      el.removeEventListener('touchmove', onTouchMove);
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.scrollable} id="homeScroll">
        <div className={styles.masonry}>
          {images.map((model, i) => (
            <Link key={i} href={`/portfolio/${model.slug}`}
              className={`${styles.cell} ${i % 5 === 0 ? styles.cellLandscape : styles.cellPortrait}`}
              draggable={false}>
              <img src={model.coverImage} alt={model.name} draggable={false} className={styles.cellImg} />
            </Link>
          ))}
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

      <div className={styles.dragHint}>
        <span>drag to explore</span>
        <svg width="36" height="8" viewBox="0 0 36 8" fill="none">
          <path d="M0 4h34M31 1l3 3-3 3" stroke="currentColor" strokeWidth="1.2"/>
        </svg>
      </div>
    </div>
  );
}
