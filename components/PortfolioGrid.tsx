"use client";
import { useState } from "react";
import Link from "next/link";
import { Model, ModelCategory } from "@/data/models";
import styles from "./PortfolioGrid.module.css";

interface Props { models: Model[]; }

const CATEGORIES: { value: ModelCategory; label: string }[] = [
  { value: "feminino", label: "Feminino" },
  { value: "masculino", label: "Masculino" },
];

const FEMININO = ["clara-albuquerque","fernanda-faleiro","florencia","giovana-peixoto","helena-weber","iza-mazotti","jullie-rocha","nanda-feitosa","preta-guimaraes","renata-miller","samira-leopoldino","sofia","yasmim-matos"];

export default function PortfolioGrid({ models }: Props) {
  const [active, setActive] = useState<ModelCategory>("feminino");
  const filtered = models
    .filter(m => {
      if (!m) return false;
      if (active === "feminino") return FEMININO.includes(m.slug);
      return !FEMININO.includes(m.slug);
    })
    .sort((a,b) => a.name.localeCompare(b.name));
  return (
    <div className={styles.wrapper}>
      <div className={styles.filters}>
        {CATEGORIES.map(cat => (
          <button key={cat.value} className={`${styles.filterBtn} ${active === cat.value ? styles.filterActive : ""}`} onClick={() => setActive(cat.value)}>
            {cat.label}
          </button>
        ))}
      </div>
      <div className={styles.grid}>
        {filtered.map((model) => (
          <Link key={model.id} href={`/portfolio/${model.slug}`} className={styles.card}>
            <div className={styles.imgWrap}>
              <img src={model.coverImage} alt={model.name} className={styles.img} loading="lazy" />
              <div className={styles.overlay}>
                <span className={styles.name}>{model.name}</span>
                <span className={styles.height}>{model.height}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
