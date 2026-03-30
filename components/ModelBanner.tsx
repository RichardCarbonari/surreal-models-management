"use client";
import { useState } from "react";
import Link from "next/link";
import { Model } from "@/data/models";
import styles from "./ModelBanner.module.css";

interface Props { model: Model; }

const CATEGORY_LABEL: Record<string, string> = {
  feminino: "Feminino",
  masculino: "Masculino",
  desenvolvimento: "Em Desenvolvimento",
};

export default function ModelBanner({ model }: Props) {
  const [activeTab, setActiveTab] = useState<"book" | "polaroids">("book");
  const [activeImg, setActiveImg] = useState(0);
  const currentImages = activeTab === "book" ? model.images : model.polaroids;

  return (
    <article className={styles.article}>
      <div className={styles.layout}>
        <div className={styles.galleryCol}>
          <div className={styles.tabs}>
            <button className={`${styles.tab} ${activeTab === "book" ? styles.tabActive : ""}`} onClick={() => { setActiveTab("book"); setActiveImg(0); }}>Book</button>
            {model.polaroids && model.polaroids.length > 0 && (
              <button className={`${styles.tab} ${activeTab === "polaroids" ? styles.tabActive : ""}`} onClick={() => { setActiveTab("polaroids"); setActiveImg(0); }}>Polaroids</button>
            )}
          </div>
          <div className={styles.mainImage}>
            {currentImages && currentImages.length > 0 ? (
              <img src={currentImages[activeImg]} alt={model.name} className={styles.mainImg} />
            ) : (
              <div className={styles.noImage}>Sem imagens</div>
            )}
          </div>
          {currentImages && currentImages.length > 1 && (
            <div className={styles.thumbs}>
              {currentImages.map((img, i) => (
                <button key={i} className={`${styles.thumb} ${i === activeImg ? styles.thumbActive : ""}`} onClick={() => setActiveImg(i)}>
                  <img src={img} alt={`${model.name} ${i + 1}`} className={styles.thumbImg} />
                </button>
              ))}
            </div>
          )}
        </div>

        <div className={styles.info}>
          <div className={styles.infoTop}>
            <span className={styles.category}>{CATEGORY_LABEL[model.category]}</span>
            <h1 className={styles.name}>{model.name}</h1>
            {model.nationality && <p className={styles.nationality}>{model.nationality}</p>}
          </div>

          <div className={styles.measurements}>
            <h2 className={styles.measureTitle}>Medidas</h2>
            <div className={styles.measureGrid}>
              {model.height && <MeasureItem label="Altura" value={model.height} />}
              {model.bust && <MeasureItem label="Busto" value={model.bust} />}
              {model.waist && <MeasureItem label="Cintura" value={model.waist} />}
              {model.hips && <MeasureItem label="Quadril" value={model.hips} />}
            </div>
          </div>

          <div className={styles.actions}>
            {model.instagram && (
              <a href={model.instagram} target="_blank" rel="noopener noreferrer" className={styles.btnInstagram}>
                Instagram
              </a>
            )}
            <a href={`mailto:surrealmodelsmanagment@gmail.com?subject=Interesse em ${model.name}`} className={styles.btnPrimary}>
              Solicitar Modelo
            </a>
            <Link href="/portfolio" className={styles.btnSecondary}>
              ← Voltar ao Portfólio
            </Link>
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
