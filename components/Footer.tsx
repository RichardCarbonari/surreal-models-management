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
            <li><Link href="/">Home</Link></li>
            <li><Link href="/portfolio">Models</Link></li>
            <li><Link href="/casting">Be Surreal</Link></li>
            <li><Link href="/sobre">About</Link></li>
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
          <a href="mailto:info@surrealmgmt.com.br" className={styles.igLink}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="2" y="4" width="20" height="16" rx="2"/>
              <path d="M2 7l10 7 10-7"/>
            </svg>
            info@surrealmgmt.com.br
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
