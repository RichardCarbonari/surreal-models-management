"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Model } from "@/data/models";
import styles from "./ModelBanner.module.css";

interface Props {
  model: Model;
}

const CATEGORY_LABEL: Record<string, string> = {
  feminino: "Feminino",
  masculino: "Masculino",
  desenvolvimento: "Em Desenvolvimento",
};

export default function ModelBanner({ model }: Props) {
  const [activeImg, setActiveImg] = useState(0);

  return (
    <article className={styles.article}>
      {/* ─── Back ─── */}
      <div className={styles.breadcrumb}>
        <Link href="/portfolio" className={styles.back}>
          ← Portfólio
        </Link>
        <span className={styles.breadDivider}>/</span>
        <span className={styles.breadCurrent}>{model.name}</span>
      </div>

      <div className={styles.layout}>
        {/* ─── Gallery ─── */}
        <div className={styles.gallery}>
          <div className={styles.mainImage}>
            <Image
              src={model.images[activeImg]}
              alt={model.name}
              fill
              sizes="(max-width: 768px) 100vw, 60vw"
              className={styles.mainImg}
              priority
            />
          </div>

          {model.images.length > 1 && (
            <div className={styles.thumbs}>
              {model.images.map((img, i) => (
                <button
                  key={i}
                  className={`${styles.thumb} ${i === activeImg ? styles.thumbActive : ""}`}
                  onClick={() => setActiveImg(i)}
                >
                  <Image
                    src={img}
                    alt={`${model.name} ${i + 1}`}
                    fill
                    sizes="80px"
                    className={styles.thumbImg}
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* ─── Info ─── */}
        <div className={styles.info}>
          <div className={styles.infoTop}>
            <span className={styles.category}>
              {CATEGORY_LABEL[model.category]}
            </span>
            <h1 className={styles.name}>{model.name}</h1>
            {model.nationality && (
              <p className={styles.nationality}>{model.nationality}</p>
            )}
          </div>

          {/* Measurements */}
          <div className={styles.measurements}>
            <h2 className={styles.measureTitle}>Medidas</h2>
            <div className={styles.measureGrid}>
              <MeasureItem label="Altura" value={model.height} />
              {model.bust && <MeasureItem label="Busto" value={model.bust} />}
              <MeasureItem label="Cintura" value={model.waist} />
              {model.hips && <MeasureItem label="Quadril" value={model.hips} />}
              <MeasureItem label="Calçado" value={model.shoes} />
              <MeasureItem label="Olhos" value={model.eyes} />
              <MeasureItem label="Cabelo" value={model.hair} />
              {model.age && <MeasureItem label="Idade" value={String(model.age)} />}
            </div>
          </div>

          {/* Actions */}
          <div className={styles.actions}>
            <button className={styles.btnPrimary}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 1v8M3 6l4 4 4-4M1 12h12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Download material
            </button>

            {model.instagram && (
              <a
                href={`https://instagram.com/${model.instagram.replace("@", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btnSecondary}
              >
                {model.instagram}
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

function MeasureItem({ label, value }: { label: string; value: string }) {
  return (
    <div className={styles.measureItem}>
      <span className={styles.measureLabel}>{label}</span>
      <span className={styles.measureValue}>{value}</span>
    </div>
  );
}
