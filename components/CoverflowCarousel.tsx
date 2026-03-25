"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { getFeaturedModels } from "../../data/models";
import styles from "./CoverflowCarousel.module.css";

export default function CoverflowCarousel() {
  const featured = getFeaturedModels();
  const [active, setActive] = useState(1);
  const autoRef = useRef<NodeJS.Timeout>();

  const goNext = () => setActive((i) => (i + 1) % featured.length);
  const goPrev = () => setActive((i) => (i - 1 + featured.length) % featured.length);

  useEffect(() => {
    autoRef.current = setInterval(goNext, 4000);
    return () => clearInterval(autoRef.current);
  }, []);

  const resetAuto = () => {
    clearInterval(autoRef.current);
    autoRef.current = setInterval(goNext, 4000);
  };

  const getPosition = (i: number): "prev" | "active" | "next" | "hidden" => {
    const len = featured.length;
    if (i === active) return "active";
    if (i === (active - 1 + len) % len) return "prev";
    if (i === (active + 1) % len) return "next";
    return "hidden";
  };

  return (
    <section className={styles.section}>
      <div className={styles.label}>
        <span>Portfólio em destaque</span>
        <span className={styles.counter}>{String(active + 1).padStart(2, "0")} / {String(featured.length).padStart(2, "0")}</span>
      </div>

      <div className={styles.stage}>
        {featured.map((model, i) => {
          const pos = getPosition(i);
          return (
            <Link
              key={model.id}
              href={`/portfolio/${model.slug}`}
              className={`${styles.card} ${styles[pos]}`}
              onClick={(e) => {
                if (pos !== "active") {
                  e.preventDefault();
                  setActive(i);
                  resetAuto();
                }
              }}
            >
              <div className={styles.imageWrap}>
                <Image
                  src={model.coverImage}
                  alt={model.name}
                  fill
                  sizes="(max-width: 640px) 90vw, 40vw"
                  className={styles.image}
                />
                <div className={styles.overlay} />
              </div>
              <div className={styles.info}>
                <span className={styles.modelName}>{model.name}</span>
                <span className={styles.modelHeight}>{model.height}</span>
              </div>
            </Link>
          );
        })}
      </div>

      <div className={styles.controls}>
        <button
          className={styles.arrow}
          onClick={() => { goPrev(); resetAuto(); }}
          aria-label="Anterior"
        >
          ←
        </button>
        <div className={styles.dots}>
          {featured.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === active ? styles.dotActive : ""}`}
              onClick={() => { setActive(i); resetAuto(); }}
              aria-label={`Modelo ${i + 1}`}
            />
          ))}
        </div>
        <button
          className={styles.arrow}
          onClick={() => { goNext(); resetAuto(); }}
          aria-label="Próximo"
        >
          →
        </button>
      </div>

      <div className={styles.cta}>
        <Link href="/portfolio" className={styles.ctaBtn}>
          Ver portfólio completo
        </Link>
      </div>
    </section>
  );
}
