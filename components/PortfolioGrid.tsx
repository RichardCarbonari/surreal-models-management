"use client";
import { useState } from "react";
import { models, ModelCategory } from "@/data/models";
import ModelCard from "./ModelCard";
import styles from "./PortfolioGrid.module.css";

const CATEGORIES: { value: ModelCategory | "todos"; label: string }[] = [
  { value: "todos", label: "Todos" },
  { value: "feminino", label: "Feminino" },
  { value: "masculino", label: "Masculino" },
  { value: "desenvolvimento", label: "Em Desenvolvimento" },
];

export default function PortfolioGrid() {
  const [active, setActive] = useState<ModelCategory | "todos">("todos");

  const filtered =
    active === "todos" ? models : models.filter((m) => m.category === active);

  return (
    <section className={styles.section}>
      {/* Category filter */}
      <div className={styles.filters}>
        {CATEGORIES.map((cat) => (
          <button
            key={cat.value}
            className={`${styles.filterBtn} ${active === cat.value ? styles.filterActive : ""}`}
            onClick={() => setActive(cat.value)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className={styles.grid}>
        {filtered.map((model, i) => (
          <div
            key={model.id}
            className={styles.item}
            style={{ animationDelay: `${i * 0.06}s` }}
          >
            <ModelCard model={model} priority={i < 3} />
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className={styles.empty}>Nenhum modelo encontrado.</p>
      )}
    </section>
  );
}
