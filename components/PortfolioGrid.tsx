"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Model, ModelCategory } from "@/data/models";
import styles from "./PortfolioGrid.module.css";

interface Props { models: Model[]; }

const CATEGORIES = [
  { value: "feminino" as ModelCategory, label: "Feminino" },
  { value: "masculino" as ModelCategory, label: "Masculino" },
];

export default function PortfolioGrid({ models }: Props) {
  const [active, setActive] = useState<ModelCategory>("feminino");
  const filtered = models
    .filter(m => m && m.category === active)
    .sort((a, b) => a.name.localeCompare(b.name));
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
          <Link key={model.slug} href={`/portfolio/${model.slug}`} className={styles.card}>
            <div className={styles.imgWrap}>
              <Image
                src={model.coverImage}
                alt={model.name}
                fill
                sizes="(max-width: 1024px) 50vw, 33vw"
                className={styles.img}
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
