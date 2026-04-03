export const dynamic = "force-dynamic";

import PortfolioGrid from "@/components/PortfolioGrid";
import Footer from "@/components/Footer";
import styles from "./page.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Models | Surreal Models Management",
  description: "Conheça nosso portfólio de talentos.",
};

export default function PortfolioPage() {
  return (
    <>
      <div className={styles.page}>
        <div className={styles.header}>
          <h1 className={styles.title}>Models</h1>
          <span className={styles.subtitle}>Surreal Management</span>
        </div>
        <div className={styles.content}>
          <PortfolioGrid />
        </div>
      </div>
      <Footer />
    </>
  );
}
