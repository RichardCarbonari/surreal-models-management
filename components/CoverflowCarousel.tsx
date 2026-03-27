"use client";
import { useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { getFeaturedModels } from "@/data/models";
import styles from "./CoverflowCarousel.module.css";

export default function CoverflowCarousel() {
  const models = getFeaturedModels();
  const [center, setCenter] = useState(0);

  const prev = useCallback(() => setCenter((c) => Math.max(0, c - 1)), []);
  const next = useCallback(() => setCenter((c) => Math.min(models.length - 1, c + 1)), [models.length]);

  return (
    <div className={styles.carousel}>
      <div className={styles.track}>
        {models.map((model, i) => {
          const offset = i - center;
          const abs = Math.abs(offset);
          if (abs > 2) return null;

          return (
            <div
              key={model.id}
              className={styles.slide}
              style={{
                transform: `translateX(calc(${offset * 72}%)) rotateY(${offset * -18}deg) scale(${offset === 0 ? 1 : 0.78 - abs * 0.06})`,
                zIndex: offset === 0 ? 10 : 10 - abs,
                opacity: offset === 0 ? 1 : 0.5 - abs * 0.08,
                filter: offset === 0 ? "none" : `brightness(0.45)`,
                pointerEvents: offset === 0 ? "auto" : "none",
                cursor: offset !== 0 ? "pointer" : "default",
              }}
              onClick={() => offset !== 0 && setCenter(i)}
            >
              <Link href={`/portfolio/${model.slug}`} tabIndex={offset === 0 ? 0 : -1}>
                <div className={styles.slideImage}>
                  <Image
                    src={model.coverImage}
                    alt={model.name}
                    fill
                    sizes="340px"
                    className={styles.img}
                    priority={offset === 0}
                  />
                </div>
                {offset === 0 && (
                  <div className={styles.slideMeta}>
                    <span className={styles.slideName}>{model.name}</span>
                    <span className={styles.slideInfo}>
                      {model.height} · {model.nationality}
                    </span>
                  </div>
                )}
              </Link>
            </div>
          );
        })}
      </div>

      <div className={styles.controls}>
        <button className={`${styles.btn} ${center === 0 ? styles.btnDisabled : ""}`} onClick={prev} disabled={center === 0} aria-label="Anterior">←</button>
        <div className={styles.dots}>
          {models.map((_, i) => (
            <button key={i} className={`${styles.dot} ${i === center ? styles.dotActive : ""}`} onClick={() => setCenter(i)} aria-label={`Modelo ${i + 1}`} />
          ))}
        </div>
        <button className={`${styles.btn} ${center === models.length - 1 ? styles.btnDisabled : ""}`} onClick={next} disabled={center === models.length - 1} aria-label="Próximo">→</button>
      </div>
    </div>
  );
}
