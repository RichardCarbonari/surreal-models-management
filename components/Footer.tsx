import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <span className={styles.logoMain}>Surreal</span>
          <span className={styles.logoSub}>Models Management</span>
          <p className={styles.tagline}>
            Conectando talentos extraordinários às maiores<br />
            oportunidades do mundo da moda e publicidade<br />
            <span className={styles.year}>desde 2016.</span>
          </p>
        </div>
        <nav className={styles.nav}>
          <span className={styles.navTitle}>Navegação</span>
          <ul>
            <li><Link href="/#sobre">Sobre nós</Link></li>
            <li><Link href="/portfolio">Portfólio</Link></li>
            <li><Link href="/#contato">Contato</Link></li>
          </ul>
        </nav>
        <div className={styles.social}>
          <span className={styles.navTitle}>Social</span>
          <a href="https://www.instagram.com/surrealmgmt/" target="_blank" rel="noopener noreferrer" className={styles.igLink}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="2" y="2" width="20" height="20" rx="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
            </svg>
            @surrealmgmt
          </a>
        </div>
      </div>
      <div className={styles.bottom}>
        <span className={styles.copy}>© 2026 Surreal MTMG. Todos os direitos reservados.</span>
        <span className={styles.loc}>São Paulo, Brasil</span>
      </div>
    </footer>
  );
}
