"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfólio" },
  { href: "/#sobre", label: "Sobre" },
  { href: "/#contato", label: "Contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
        <div className={styles.inner}>
          <Link href="/" className={styles.logo} onClick={() => setMenuOpen(false)}>
            <span className={styles.logoMain}>Surreal</span>
            
          </Link>

          <ul className={styles.desktopLinks}>
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className={`${styles.navLink} ${pathname === l.href ? styles.active : ""}`}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <button
            className={styles.burger}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {menuOpen ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 12h18M3 6h18M3 18h18"/>
              </svg>
            )}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className={styles.overlay} onClick={() => setMenuOpen(false)}>
          <div className={styles.drawer} onClick={(e) => e.stopPropagation()}>
            <div className={styles.drawerHeader}>
              <span className={styles.drawerLogo}>Surreal</span>
              <button className={styles.closeBtn} onClick={() => setMenuOpen(false)}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M18 6L6 18M6 6l12 12"/>
                </svg>
              </button>
            </div>
            <nav className={styles.drawerNav}>
              {navLinks.map((l, i) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className={styles.drawerLink}
                  onClick={() => setMenuOpen(false)}
                  style={{ animationDelay: `${i * 0.08}s` }}
                >
                  {l.label}
                </Link>
              ))}
            </nav>
            <div className={styles.drawerFooter}>
              <a href="https://www.instagram.com/surrealmgmt/" target="_blank" rel="noopener noreferrer" className={styles.drawerIg}>
                @surrealmgmt
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
