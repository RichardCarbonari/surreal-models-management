export const dynamic = "force-dynamic";
import Link from "next/link";
import CoverflowCarousel from "@/components/CoverflowCarousel";
import styles from "./page.module.css";
import ContactForm from "@/components/ContactForm";

export default function HomePage() {

  return (
    <>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroLeft}>
          <div className={styles.heroContent}>
            <span className={styles.heroEyebrow}>São Paulo · Worldwide</span>
            <h1 className={styles.heroTitle}>
              <span className={styles.heroTitleLine}>Surreal</span>
              <span className={styles.heroTitleItalic}>Models</span>
            </h1>
            <p className={styles.heroSub}>Management</p>
            <div className={styles.heroDivider} />
            <p className={styles.heroLead}>Talentos extraordinários. Histórias que transcendem.</p>
            <div className={styles.heroActions}>
              <Link href="/portfolio" className={styles.heroCta}>Ver Portfólio</Link>
              <Link href="/#contato" className={styles.heroSecondary}>Entre em contato</Link>
            </div>
          </div>
        </div>
        <div className={styles.heroRight}>
          <div className={styles.heroImageGrid}>
            <div className={styles.heroImg1}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://lh3.googleusercontent.com/d/1iYJOaGJxV2o8tWFH6tIGmMyrWHvkR0BN" alt="Model" />
            </div>
            <div className={styles.heroImg2}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://lh3.googleusercontent.com/d/128REp4tgzfvybAtAszt9dQpunGKTZvEx" alt="Model" />
            </div>
          </div>
          <div className={styles.heroStats}>
            <div className={styles.stat}>
              <span className={styles.statNum}>+20</span>
              <span className={styles.statLabel}>Modelos</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statNum}>8</span>
              <span className={styles.statLabel}>Anos no mercado</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statNum}>+12</span>
              <span className={styles.statLabel}>Países</span>
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className={styles.portfolioSection}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionLine} />
          <span className={styles.sectionEyebrow}>Portfólio</span>
        </div>
        <h2 className={styles.sectionTitle}>Nossos Talentos</h2>
        <CoverflowCarousel />
        <div className={styles.sectionFooter}>
          <Link href="/portfolio" className={styles.verMaisBtn}>
            <span>Ver todos os modelos</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
        </div>
      </section>

      {/* SOBRE */}
      <section className={styles.sobreSection} id="sobre">
        <div className={styles.sobreInner}>
          <div>
            <div className={styles.sectionHeader}>
              <div className={styles.sectionLine} />
              <span className={styles.sectionEyebrow}>Sobre nós</span>
            </div>
            <h2 className={styles.sobreTitle}>
              Onde talento<br /><em>encontra oportunidade</em>
            </h2>
          </div>
          <div>
            <p className={styles.sobreText}>A Surreal Models Management é uma agência de referência no mercado brasileiro de moda e publicidade. Com oito anos de trajetória construída sobre excelência e resultados, conectamos talentos excepcionais às maiores marcas nacionais e internacionais.</p>
            <p className={styles.sobreText}>Nossa atuação vai além da representação — somos parceiros estratégicos no desenvolvimento de carreira, oferecendo suporte, direcionamento e presença em mais de 12 países ao redor do mundo.</p>
            <div className={styles.sobreValues}>
              <div className={styles.value}><span className={styles.valueDot} /><span>Excelência editorial</span></div>
              <div className={styles.value}><span className={styles.valueDot} /><span>Alcance internacional</span></div>
              <div className={styles.value}><span className={styles.valueDot} /><span>Desenvolvimento de carreira</span></div>
            </div>
          </div>
        </div>
        <div className={styles.sobreDecor} aria-hidden="true">SURREAL</div>
      </section>

      {/* CONTATO */}
      <section className={styles.contatoSection} id="contato">
        <div className={styles.contatoInner}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionLine} />
            <span className={styles.sectionEyebrow}>Contato</span>
          </div>
          <h2 className={styles.contatoTitle}>Vamos trabalhar juntos</h2>
          <div className={styles.contatoGrid}>
            <div className={styles.contatoInfo}>
              <div className={styles.contatoItem}>
                <span className={styles.contatoLabel}>Email</span>
                <a href="mailto:surrealmodelsmanagment@gmail.com" className={styles.contatoLink}>surrealmodelsmanagment@gmail.com</a>
              </div>
              <div className={styles.contatoItem}>
                <span className={styles.contatoLabel}>Telefone</span>
                <a href="tel:+5511979621962" className={styles.contatoLink}>+55 11 97962-1962</a>
                <a href="tel:+5511913075068" className={styles.contatoLink}>+55 11 91307-5068</a>
              </div>
              <div className={styles.contatoItem}>
                <span className={styles.contatoLabel}>Endereço</span>
                <span className={styles.contatoValue}>São Paulo, SP — Brasil</span>
              </div>
              <div className={styles.contatoItem}>
                <span className={styles.contatoLabel}>Instagram</span>
                <a href="https://www.instagram.com/surrealmgmt/" target="_blank" rel="noopener noreferrer" className={styles.contatoLink}>@surrealmgmt</a>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
