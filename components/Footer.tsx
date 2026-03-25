import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <span className={styles.logoMain}>Surreal</span>
            <span className={styles.logoSub}>Models Management</span>
            <p className={styles.tagline}>
              Conectando talentos extraordinários às maiores<br />
              oportunidades do mundo da moda e publicidade desde 2016.
            </p>
          </div>

          <nav className={styles.nav}>
            <span className={styles.navTitle}>Menu</span>
            <Link href="/#sobre" className={styles.navLink}>Sobre nós</Link>
            <Link href="/portfolio" className={styles.navLink}>Portfólio</Link>
            <Link href="/#contato" className={styles.navLink}>Contato</Link>
          </nav>

          <div className={styles.contact}>
            <span className={styles.navTitle}>Contato</span>
            <a href="mailto:surrealmodelsmanagment@gmail.com" className={styles.navLink}>
              surrealmodelsmanagment@gmail.com
            </a>
            <a href="tel:+5511979621962" className={styles.navLink}>+55 11 97962-1962</a>
            <a href="tel:+5511913075068" className={styles.navLink}>+55 11 91307-5068</a>
          </div>

          <div className={styles.social}>
            <span className={styles.navTitle}>Social</span>
            <a
              href="https://www.instagram.com/surrealmgmt/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.igLink}
            >
              @surrealmgmt
            </a>
          </div>
        </div>

        <div className={styles.bottom}>
          <span className={styles.copy}>© 2026 Surreal MTMG. Todos os direitos reservados.</span>
          <div className={styles.divider} />
        </div>
      </div>
    </footer>
  );
}
