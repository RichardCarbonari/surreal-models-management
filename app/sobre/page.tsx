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

        <div className={styles.bookers}>
          <h2 className={styles.bookersTitle}>Bookers</h2>
          <div className={styles.bookerGrid}>
            <div className={styles.bookerCard}>
              <h3 className={styles.bookerName}>Jones</h3>
              <a href="https://www.instagram.com/itsjonessantana/" target="_blank" rel="noopener noreferrer" className={styles.bookerIg}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                </svg>
                <span>Instagram</span>
              </a>
              <a href="mailto:jones@surrealmgmt.com.br" className={styles.bookerContact}>jones@surrealmgmt.com.br</a>
              <a href="tel:+5511979621962" className={styles.bookerContact}>+55 11 97962-1962</a>
            </div>
            <div className={styles.bookerCard}>
              <h3 className={styles.bookerName}>João Pedro</h3>
              <a href="https://www.instagram.com/joaobooker/" target="_blank" rel="noopener noreferrer" className={styles.bookerIg}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                </svg>
                <span>Instagram</span>
              </a>
              <a href="mailto:joao@surrealmgmt.com.br" className={styles.bookerContact}>joao@surrealmgmt.com.br</a>
              <a href="tel:+5511913075068" className={styles.bookerContact}>+55 11 91307-5068</a>
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
