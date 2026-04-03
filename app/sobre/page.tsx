export const dynamic = "force-dynamic";

import Footer from "@/components/Footer";
import styles from "./page.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre | Surreal Models Management",
  description: "Conheça a Surreal Models Management.",
};

export default function SobrePage() {
  return (
    <>
      <div className={styles.page}>
        <div className={styles.hero}>
          <span className={styles.eyebrow}>Surreal — Sobre nós</span>
          <h1 className={styles.title}>
            Uma agência<br />
            <em>diferente</em>
          </h1>
        </div>

        <div className={styles.content}>
          <div className={styles.textBlock}>
            <p className={styles.lead}>
              A Surreal Models Management nasceu da crença de que moda e arte são inseparáveis. Fundada em São Paulo, representamos talentos que definem tendências e transformam campanhas em obras.
            </p>
            <p className={styles.body}>
              Trabalhamos com marcas nacionais e internacionais, conectando nossos modelos às maiores oportunidades do mundo da moda e publicidade. Cada contrato é pensado para construir carreiras duradouras.
            </p>
            <p className={styles.body}>
              Nossa abordagem é direta, transparente e focada no desenvolvimento humano de cada talento. Acreditamos que por trás de cada rosto há uma história única — e é essa história que nos inspira.
            </p>
          </div>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statNum}>17+</span>
              <span className={styles.statLabel}>Modelos</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNum}>2016</span>
              <span className={styles.statLabel}>Fundação</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNum}>SP</span>
              <span className={styles.statLabel}>São Paulo</span>
            </div>
          </div>
        </div>

        <div className={styles.contact}>
          <span className={styles.eyebrow}>Contato</span>
          <p className={styles.contactEmail}>surrealmodelsmanagment@gmail.com</p>
          <p className={styles.contactIg}>@surrealmgmt</p>
        </div>
      </div>
      <Footer />
    </>
  );
}
