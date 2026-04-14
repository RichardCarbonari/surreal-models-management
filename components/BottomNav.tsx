"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./BottomNav.module.css";

const items = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Models" },
  { href: "/casting", label: "Be Surreal" },
  { href: "/sobre", label: "About" },
];

export default function BottomNav() {
  const pathname = usePathname();
  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`${styles.item} ${pathname === item.href ? styles.active : ""}`}
          >
            <span className={styles.label}>{item.label}</span>
            {pathname === item.href && <span className={styles.dot} />}
          </Link>
        ))}
      </div>
    </nav>
  );
}
