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
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <nav className={styles.nav}>
        {/* Left links — desktop */}
        <ul className={styles.leftLinks}>
          <li><Link href="/" className={`${styles.navLink} ${pathname === "/" ? styles.active : ""}`}>Home</Link></li>
          <li><Link href="/portfolio" className={`${styles.navLink} ${pathname === "/portfolio" ? styles.active : ""}`}>Portfólio</Link></li>
        </ul>

        {/* Center logo */}
        <Link href="/" className={styles.logo} onClick={() => setMenuOpen(false)}>
          <span className={styles.logoMain}>Surreal</span>
        </Link>

        {/* Right links — desktop */}
        <ul className={styles.rightLinks}>
          <li><Link href="/#sobre" className={styles.navLink}>Sobre</Link></li>
          <li><Link href="/#contato" className={styles.navLink}>Contato</Link></li>
        </ul>

        {/* Burger — mobile only */}
        <button
          className={styles.burger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
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
      </nav>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className={styles.overlay} onClick={() => setMenuOpen(false)}>
          <div className={styles.drawer} onClick={e => e.stopPropagation()}>
            <div className={styles.drawerHeader}>
              <span className={styles.drawerLogo}>Surreal</span>
              <button className={styles.closeBtn} onClick={() => setMenuOpen(false)}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M18 6L6 18M6 6l12 12"/>
                </svg>
              </button>
            </div>
            <nav className={styles.drawerNav}>
              {navLinks.map((l) => (
                <Link key={l.href} href={l.href} className={styles.drawerLink} onClick={() => setMenuOpen(false)}>
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
