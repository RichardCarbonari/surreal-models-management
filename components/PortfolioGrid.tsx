"use client";
import { useState } from "react";
import Link from "next/link";
import { models, ModelCategory } from "@/data/models";
import styles from "./PortfolioGrid.module.css";

const CATEGORIES: { value: ModelCategory | "todos"; label: string }[] = [
  { value: "todos", label: "Todos" },
  { value: "feminino", label: "Feminino" },
  { value: "masculino", label: "Masculino" },
  { value: "desenvolvimento", label: "Em Desenvolvimento" },
];

export default function PortfolioGrid() {
  const [active, setActive] = useState<ModelCategory | "todos">("todos");
  const filtered = active === "todos" ? models : models.filter(m => m.category === active);

  return (
    <div className={styles.wrapper}>
      <div className={styles.filters}>
        {CATEGORIES.map(cat => (
          <button
            key={cat.value}
            className={`${styles.filterBtn} ${active === cat.value ? styles.filterActive : ""}`}
            onClick={() => setActive(cat.value)}
          >
            {cat.label}
          </button>
        ))}
      </div>
      <div className={styles.grid}>
        {filtered.map((model) => (
          <Link key={model.id} href={`/portfolio/${model.slug}`} className={styles.card}>
            <div className={styles.imgWrap}>
              <img
                src={model.coverImage}
                alt={model.name}
                className={styles.img}
                loading="lazy"
              />
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
