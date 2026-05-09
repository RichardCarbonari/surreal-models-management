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
            A agência que gostaríamos de ter tido.
          </p>
        </div>

        <div className={styles.content}>
          <div>
            <p className={styles.body}>
              A Surreal nasceu em 2022 com um propósito claro: ser a agência que gostaríamos de ter tido.
            </p>
            <p className={styles.body}>
              Construída por pessoas que viveram o mercado dos dois lados — como modelos, entendendo de perto os desafios, as inseguranças e as demandas dessa carreira, e como agência, com conexões sólidas com o mercado nacional e internacional — a Surreal existe para fazer diferente.
            </p>
            <p className={styles.body}>
              Aqui, cada talento é tratado como único. Nosso foco não é apenas abrir portas, mas caminhar junto, desenvolvendo cada modelo com atenção, respeito e estratégia. Sabemos o que é começar, e por isso nos dedicamos a tornar essa jornada mais humana e mais justa.
            </p>
            <p className={styles.body}>
              Com uma rede de contatos que se estende a agências parceiras ao redor do mundo, oferecemos oportunidades reais para quem está pronto para crescer — sem abrir mão do cuidado que cada pessoa merece.
            </p>
            <p className={styles.bodyHighlight}>
              Surreal. Porque talento precisa de suporte para brilhar.
            </p>
          </div>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statNum}>28</span>
              <span className={styles.statLabel}>Modelos</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNum}>2022</span>
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
              <a href="https://wa.me/5511979621962" className={styles.bookerContact}>+55 11 97962-1962</a>
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
              <a href="https://wa.me/5511913075068" className={styles.bookerContact}>+55 11 91307-5068</a>
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
              <a href="https://www.instagram.com/surrealmgmt/" target="_blank" rel="noopener noreferrer" className={styles.contactIgLink}>@surrealmgmt</a>
              <p className={styles.contactIg}>São Paulo · Brasil</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
