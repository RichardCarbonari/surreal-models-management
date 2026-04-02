"use client";
import { useEffect } from "react";
import Link from "next/link";
import styles from "@/app/page.module.css";

interface Model {
  slug: string;
  coverImage: string;
  name: string;
}

export default function HomeClient({ images }: { images: Model[] }) {
  useEffect(() => {
    const init = async () => {
      const { gsap } = await import("gsap");

      gsap.set(['#heroEyebrow','#heroLogo','#heroSub','#heroBtn','#dragHint'], { opacity: 0, y: 30 });

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.to('#heroEyebrow', { opacity: 1, y: 0, duration: 0.8 }, 0.5);
      tl.to('#heroLogo',    { opacity: 1, y: 0, duration: 1.1 }, 0.75);
      tl.to('#heroSub',     { opacity: 1, y: 0, duration: 0.8 }, 1.1);
      tl.to('#heroBtn',     { opacity: 1, y: 0, duration: 0.7 }, 1.4);
      tl.to('#dragHint',    { opacity: 1, y: 0, duration: 0.6 }, 1.9);

      const el = document.getElementById('homeScroll');
      if (!el) return;
      let isDown = false, startX = 0, scrollLeft = 0;
      el.addEventListener('mousedown', (e) => {
        isDown = true; startX = e.pageX - el.offsetLeft; scrollLeft = el.scrollLeft; el.style.cursor='grabbing';
      });
      document.addEventListener('mouseup', () => { isDown = false; el.style.cursor='grab'; });
      el.addEventListener('mousemove', (e) => {
        if (!isDown) return; e.preventDefault();
        el.scrollLeft = scrollLeft - (e.pageX - el.offsetLeft - startX) * 1.8;
      });
      el.addEventListener('touchstart', (e) => {
        startX = e.touches[0].pageX - el.offsetLeft; scrollLeft = el.scrollLeft;
      }, {passive:true});
      el.addEventListener('touchmove', (e) => {
        el.scrollLeft = scrollLeft - (e.touches[0].pageX - el.offsetLeft - startX) * 1.8;
      }, {passive:true});
    };
    init();
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.scrollable} id="homeScroll">
        <div className={styles.masonry}>
          {images.map((model, i) => (
            <Link
              key={i}
              href={`/portfolio/${model.slug}`}
              className={`${styles.cell} ${i % 5 === 0 ? styles.cellLandscape : styles.cellPortrait}`}
              draggable={false}
            >
              <img src={model.coverImage} alt={model.name} draggable={false} className={styles.cellImg} />
            </Link>
          ))}
        </div>
      </div>

      <div className={styles.overlay} />

      <div className={styles.heroContent}>
        <div className={styles.heroInner}>
          <p className={styles.heroEyebrow} id="heroEyebrow">São Paulo · Brasil</p>
          <h1 className={styles.heroLogo} id="heroLogo">Surreal</h1>
          <p className={styles.heroSub} id="heroSub">Models Management</p>
          <Link href="/portfolio" className={styles.heroBtn} id="heroBtn">Models</Link>
        </div>
      </div>

      <div className={styles.dragHint} id="dragHint">
        <span>drag to explore</span>
        <svg width="36" height="8" viewBox="0 0 36 8" fill="none">
          <path d="M0 4h34M31 1l3 3-3 3" stroke="currentColor" strokeWidth="1.2"/>
        </svg>
      </div>
    </div>
  );
}
