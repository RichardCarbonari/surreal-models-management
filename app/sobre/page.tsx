export const dynamic = "force-dynamic";
import Footer from "@/components/Footer";
import styles from "./page.module.css";

export default function SobrePage() {
  return (
    <>
      <div className={styles.page}>
        <div className={styles.hero}>
          <span className={styles.label}>Surreal Models Management</span>
          <h1 className={styles.title}>About</h1>
          <p className={styles.heroText}>
            Uma agência fundada na crença de que moda e arte são inseparáveis.
          </p>
        </div>

        <div className={styles.content}>
          <div>
            <p className={styles.body}>
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
          <div className={styles.contactInner}>
            <div>
              <span className={styles.contactLabel}>Email</span>
              <p className={styles.contactEmail}>info@surrealmgmt.com.br</p>
            </div>
            <div>
              <span className={styles.contactLabel}>Instagram</span>
              <p className={styles.contactEmail}>@surrealmgmt</p>
              <p className={styles.contactIg}>São Paulo · Brasil</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
