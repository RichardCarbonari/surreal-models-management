import Link from "next/link";
import CoverflowCarousel from "@/components/CoverflowCarousel";
import { getFeaturedModels } from "@/data/models";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      {/* ─────────── HERO — Split Layout ─────────── */}
      <section className={styles.hero}>
        <div className={styles.heroLeft}>
          <div className={styles.heroContent}>
            <span className={styles.heroEyebrow}>São Paulo · Brasil · Mundo</span>
            <h1 className={styles.heroTitle}>
              <span>Surreal</span>
              <em>Models</em>
            </h1>
            <p className={styles.heroSub}>Management</p>
            <div className={styles.heroStats}>
              <Stat value="+20" label="Modelos" />
              <Stat value="8" label="Anos de mercado" />
              <Stat value="+12" label="Países" />
            </div>
            <Link href="/portfolio" className={styles.heroCta}>
              Ver portfólio
            </Link>
          </div>
        </div>

        <div className={styles.heroRight}>
          {/* Large editorial image */}
          <div className={styles.heroImage}>
            {/* Replace with Next/Image when you have a real photo */}
            <div className={styles.heroImagePlaceholder} aria-hidden="true" />
          </div>
          <div className={styles.heroImageOverlay} />
        </div>

        {/* Scroll indicator */}
        <div className={styles.scrollIndicator}>
          <span>Scroll</span>
          <div className={styles.scrollLine} />
        </div>
      </section>

      {/* ─────────── COVERFLOW CAROUSEL ─────────── */}
      <CoverflowCarousel />

      {/* ─────────── SOBRE NÓS ─────────── */}
      <section className={styles.sobre} id="sobre">
        <div className={styles.sobreInner}>
          <div className={styles.sobreMeta}>
            <span className={styles.sobreTag}>Sobre nós</span>
          </div>
          <div className={styles.sobreContent}>
            <h2 className={styles.sobreTitle}>
              Talentos extraordinários.<br />
              <em>Resultados reais.</em>
            </h2>
            <p className={styles.sobreText}>
              A Surreal Models Management é uma agência boutique especializada em identificar
              e desenvolver talentos excepcionais para o universo da moda e publicidade.
              Com mais de 8 anos de atuação e presença em mais de 12 países, conectamos
              rostos únicos às maiores marcas, editoriais e campanhas do mundo.
            </p>
            <p className={styles.sobreText}>
              Nossa curadoria rigorosa e relacionamento próximo com cada modelo são a
              base de tudo que fazemos — porque acreditamos que talento verdadeiro
              merece uma representação à altura.
            </p>
          </div>
        </div>

        <div className={styles.sobreNumbers}>
          <NumberItem value="+20" label="Modelos representados" />
          <NumberItem value="8" label="Anos de mercado" />
          <NumberItem value="+12" label="Países de atuação" />
          <NumberItem value="100+" label="Campanhas realizadas" />
        </div>
      </section>

      {/* ─────────── CONTATO ─────────── */}
      <section className={styles.contato} id="contato">
        <div className={styles.contatoInner}>
          <div className={styles.contatoLeft}>
            <span className={styles.contatoTag}>Contato</span>
            <h2 className={styles.contatoTitle}>Vamos trabalhar juntos</h2>
          </div>

          <div className={styles.contatoRight}>
            <div className={styles.contatoGroup}>
              <span className={styles.contatoLabel}>Email</span>
              <a href="mailto:surrealmodelsmanagment@gmail.com" className={styles.contatoLink}>
                surrealmodelsmanagment@gmail.com
              </a>
            </div>

            <div className={styles.contatoGroup}>
              <span className={styles.contatoLabel}>Telefone</span>
              <a href="tel:+5511979621962" className={styles.contatoLink}>
                +55 11 97962-1962
              </a>
              <a href="tel:+5511913075068" className={styles.contatoLink}>
                +55 11 91307-5068
              </a>
            </div>

            <div className={styles.contatoGroup}>
              <span className={styles.contatoLabel}>Endereço</span>
              <p className={styles.contatoText}>
                São Paulo, SP<br />
                Brasil
              </p>
            </div>

            <div className={styles.contatoGroup}>
              <span className={styles.contatoLabel}>Instagram</span>
              <a
                href="https://www.instagram.com/surrealmgmt/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contatoLink}
              >
                @surrealmgmt
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className={styles.stat}>
      <span className={styles.statValue}>{value}</span>
      <span className={styles.statLabel}>{label}</span>
    </div>
  );
}

function NumberItem({ value, label }: { value: string; label: string }) {
  return (
    <div className={styles.numberItem}>
      <span className={styles.numberValue}>{value}</span>
      <span className={styles.numberLabel}>{label}</span>
    </div>
  );
}
