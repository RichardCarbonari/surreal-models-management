export const dynamic = "force-dynamic";

import Link from "next/link";
import { models } from "@/data/models";
import styles from "./page.module.css";

export default function HomePage() {
  const images = [...models, ...models, ...models];

  return (
    <>
      <div className={styles.wrapper} id="homeWrapper">

        {/* Scrollable masonry */}
        <div className={styles.scrollable} id="homeScroll">
          <div className={styles.masonry}>
            {images.map((model, i) => (
              <Link
                key={i}
                href={`/portfolio/${model.slug}`}
                className={`${styles.cell} ${i % 5 === 0 ? styles.cellLandscape : styles.cellPortrait}`}
                draggable={false}
              >
                <img
                  src={model.coverImage}
                  alt={model.name}
                  draggable={false}
                  className={styles.cellImg}
                />
              </Link>
            ))}
          </div>
        </div>

        {/* Dark overlay */}
        <div className={styles.overlay} />

        {/* Hero content */}
        <div className={styles.heroContent}>
          <div className={styles.heroInner}>
            <p className={styles.heroEyebrow} id="heroEyebrow">São Paulo · Brasil</p>
            <h1 className={styles.heroLogo} id="heroLogo">Surreal</h1>
            <p className={styles.heroSub} id="heroSub">Models Management</p>
            <Link href="/portfolio" className={styles.heroBtn} id="heroBtn">
              Models
            </Link>
          </div>
        </div>

        {/* Drag hint */}
        <div className={styles.dragHint} id="dragHint">
          <span>drag to explore</span>
          <svg width="36" height="8" viewBox="0 0 36 8" fill="none">
            <path d="M0 4h34M31 1l3 3-3 3" stroke="currentColor" strokeWidth="1.2"/>
          </svg>
        </div>

      </div>

      {/* GSAP + drag script */}
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js" />
      <script dangerouslySetInnerHTML={{ __html: `
        window.addEventListener('load', function() {
          // ── GSAP Intro Animation ──
          if (typeof gsap !== 'undefined') {
            var tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

            tl.set(['#heroEyebrow','#heroLogo','#heroSub','#heroBtn','#dragHint'], { opacity: 0 });

            tl.from('.${styles.cellImg.replace(/\s/g,'')}', {
              scale: 1.12,
              duration: 1.8,
              stagger: 0.04,
              ease: 'power2.out'
            }, 0);

            tl.to('#heroEyebrow', { opacity: 1, y: 0, duration: 0.8 }, 0.4);
            tl.fromTo('#heroLogo',
              { opacity: 0, y: 40 },
              { opacity: 1, y: 0, duration: 1.1 },
            0.6);
            tl.to('#heroSub', { opacity: 1, y: 0, duration: 0.8 }, 1.0);
            tl.fromTo('#heroBtn',
              { opacity: 0, y: 20 },
              { opacity: 1, y: 0, duration: 0.7 },
            1.3);
            tl.to('#dragHint', { opacity: 1, duration: 0.6 }, 1.8);
          }

          // ── Drag to scroll ──
          var el = document.getElementById('homeScroll');
          if (!el) return;
          var isDown = false, startX, scrollLeft;

          el.addEventListener('mousedown', function(e) {
            isDown = true;
            startX = e.pageX - el.offsetLeft;
            scrollLeft = el.scrollLeft;
            el.style.cursor = 'grabbing';
          });
          document.addEventListener('mouseup', function() {
            isDown = false;
            el.style.cursor = 'grab';
          });
          el.addEventListener('mousemove', function(e) {
            if (!isDown) return;
            e.preventDefault();
            var x = e.pageX - el.offsetLeft;
            el.scrollLeft = scrollLeft - (x - startX) * 1.8;
          });

          // Touch
          el.addEventListener('touchstart', function(e) {
            startX = e.touches[0].pageX - el.offsetLeft;
            scrollLeft = el.scrollLeft;
          }, { passive: true });
          el.addEventListener('touchmove', function(e) {
            var x = e.touches[0].pageX - el.offsetLeft;
            el.scrollLeft = scrollLeft - (x - startX) * 1.8;
          }, { passive: true });
        });
      `}} />
    </>
  );
}
