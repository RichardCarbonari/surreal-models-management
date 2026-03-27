"use client";
import { useState } from "react";
import Image from "next/image";
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

  const handleTabSwitch = (tab: "book" | "polaroids") => {
    setActiveTab(tab);
    setActiveImg(0);
  };

  return (
    <article className={styles.article}>
      <div className={styles.layout}>

        {/* ─── Gallery ─── */}
        <div className={styles.galleryCol}>

          {/* Tabs */}
          <div className={styles.tabs}>
            <button
              className={`${styles.tab} ${activeTab === "book" ? styles.tabActive : ""}`}
              onClick={() => handleTabSwitch("book")}
            >
              Book
            </button>
            {model.polaroids && model.polaroids.length > 0 && (
              <button
                className={`${styles.tab} ${activeTab === "polaroids" ? styles.tabActive : ""}`}
                onClick={() => handleTabSwitch("polaroids")}
              >
                Polaroids
              </button>
            )}
          </div>

          {/* Main image */}
          <div className={`${styles.mainImage} ${activeTab === "polaroids" ? styles.polaroidMode : ""}`}>
            {currentImages && currentImages.length > 0 ? (
              <Image
                src={currentImages[activeImg]}
                alt={`${model.name} ${activeImg + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 55vw"
                className={styles.mainImg}
                priority
              />
            ) : (
              <div className={styles.noImage}>Sem imagens</div>
            )}
            {activeTab === "polaroids" && (
              <div className={styles.polaroidCorner}>Polaroid</div>
            )}
          </div>

          {/* Thumbnails */}
          {currentImages && currentImages.length > 1 && (
            <div className={styles.thumbs}>
              {currentImages.map((img, i) => (
                <button
                  key={i}
                  className={`${styles.thumb} ${i === activeImg ? styles.thumbActive : ""}`}
                  onClick={() => setActiveImg(i)}
                >
                  <Image
                    src={img}
                    alt={`${model.name} ${i + 1}`}
                    fill
                    sizes="70px"
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
            <span className={styles.category}>{CATEGORY_LABEL[model.category]}</span>
            <h1 className={styles.name}>{model.name}</h1>
            {model.nationality && <p className={styles.nationality}>{model.nationality}</p>}
          </div>

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
              {model.age && <MeasureItem label="Idade" value={`${model.age} anos`} />}
            </div>
          </div>

          <div className={styles.actions}>
            <a
              href={`mailto:surrealmodelsmanagment@gmail.com?subject=Interesse em ${model.name}`}
              className={styles.btnPrimary}
            >
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
