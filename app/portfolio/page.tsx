export const dynamic = "force-dynamic";

import PortfolioGrid from "@/components/PortfolioGrid";
import styles from "./page.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfólio | Surreal Models Management",
  description: "Conheça nosso portfólio de talentos.",
};

export default function PortfolioPage() {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>Talentos</h1>
      </div>
      <div className={styles.content}>
        <PortfolioGrid />
      </div>
    </div>
  );
}
