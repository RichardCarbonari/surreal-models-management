export const dynamic = "force-dynamic";

import Link from "next/link";
import { models } from "@/data/models";
import styles from "./page.module.css";

export default function HomePage() {
  const allImages = [...models, ...models, ...models];

  return (
    <div className={styles.wrapper}>
      {/* Scrollable masonry wall */}
      <div className={styles.scrollable} id="homeScroll">
        <div className={styles.masonry}>
          {allImages.map((model, i) => (
            <Link
              key={i}
              href={`/portfolio/${model.slug}`}
              className={`${styles.cell} ${i % 4 === 0 ? styles.cellLandscape : styles.cellPortrait}`}
            >
              <img
                src={model.coverImage}
                alt={model.name}
                draggable={false}
              />
            </Link>
          ))}
        </div>
      </div>

      {/* Overlay — logo + button */}
      <div className={styles.overlay}>
        <div className={styles.overlayInner}>
          <h1 className={styles.logo}>Surreal</h1>
          <span className={styles.logoSub}>Models Management</span>
          <Link href="/portfolio" className={styles.btn}>
            Models
          </Link>
        </div>
      </div>

      {/* Scroll hint */}
      <div className={styles.scrollHint}>
        <span>drag to explore</span>
        <svg width="40" height="8" viewBox="0 0 40 8" fill="none">
          <path d="M0 4h38M35 1l3 3-3 3" stroke="currentColor" strokeWidth="1"/>
        </svg>
      </div>

      {/* Script for drag-to-scroll */}
      <script dangerouslySetInnerHTML={{ __html: `
        document.addEventListener('DOMContentLoaded', function() {
          var el = document.getElementById('homeScroll');
          if (!el) return;
          var isDown = false, startX, scrollLeft;
          el.addEventListener('mousedown', function(e) {
            isDown = true;
            el.classList.add('active');
            startX = e.pageX - el.offsetLeft;
            scrollLeft = el.scrollLeft;
          });
          el.addEventListener('mouseleave', function() { isDown = false; });
          el.addEventListener('mouseup', function() { isDown = false; });
          el.addEventListener('mousemove', function(e) {
            if (!isDown) return;
            e.preventDefault();
            var x = e.pageX - el.offsetLeft;
            var walk = (x - startX) * 1.5;
            el.scrollLeft = scrollLeft - walk;
          });
          // Touch support
          el.addEventListener('touchstart', function(e) {
            startX = e.touches[0].pageX - el.offsetLeft;
            scrollLeft = el.scrollLeft;
          });
          el.addEventListener('touchmove', function(e) {
            var x = e.touches[0].pageX - el.offsetLeft;
            var walk = (x - startX) * 1.5;
            el.scrollLeft = scrollLeft - walk;
          });
        });
      `}} />
    </div>
  );
}
