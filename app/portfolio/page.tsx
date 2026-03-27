export const dynamic = "force-dynamic";
import PortfolioGrid from "@/components/PortfolioGrid";
import styles from "./page.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfólio | Surreal Models Management",
  description: "Conheça nosso portfólio de talentos — feminino, masculino e em desenvolvimento.",
};

export default function PortfolioPage() {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div className={styles.headerInner}>
          <span className={styles.eyebrow}>Surreal — Portfólio</span>
          <h1 className={styles.title}>
            Nossos<br />
            <em>Talentos</em>
          </h1>
          <p className={styles.subtitle}>
            Cada modelo, uma história. Cada campanha, uma obra.
          </p>
        </div>
        <div className={styles.headerLine} />
      </div>
      <div className={styles.content}>
        <PortfolioGrid />
      </div>
    </div>
  );
}
