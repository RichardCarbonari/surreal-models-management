export const dynamic = "force-dynamic";
import { models } from "@/data/models";
import PortfolioGrid from "@/components/PortfolioGrid";
import Footer from "@/components/Footer";
import styles from "./page.module.css";

export default function PortfolioPage() {
  return (
    <>
      <div className={styles.page}>
        <div className={styles.header}>
          <h1 className={styles.title}>Models</h1>
        </div>
        <PortfolioGrid models={models} />
      </div>
      <Footer />
    </>
  );
}
