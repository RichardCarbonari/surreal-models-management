export const dynamic = "force-dynamic";

import Link from "next/link";
import { models } from "@/data/models";
import styles from "./page.module.css";
import ContactForm from "@/components/ContactForm";

export default function HomePage() {
  // All model cover images for the masonry wall
  const allImages = models.map(m => ({ src: m.coverImage, name: m.name, slug: m.slug }));
  // Duplicate for infinite loop
  const images = [...allImages, ...allImages, ...allImages];

  return (
    <>
      {/* HERO — Infinite scrolling masonry */}
      <section className={styles.hero}>
        <div className={styles.masonryWall}>
          <div className={styles.column} style={{ animationDuration: "35s" }}>
            {images.filter((_, i) => i % 3 === 0).map((img, i) => (
              <Link key={i} href={`/portfolio/${img.slug}`} className={styles.masonryCard}>
                <img src={img.src} alt={img.name} />
              </Link>
            ))}
          </div>
          <div className={styles.column} style={{ animationDuration: "50s", animationDelay: "-15s" }}>
            {images.filter((_, i) => i % 3 === 1).map((img, i) => (
              <Link key={i} href={`/portfolio/${img.slug}`} className={styles.masonryCard}>
                <img src={img.src} alt={img.name} />
              </Link>
            ))}
          </div>
          <div className={styles.column} style={{ animationDuration: "40s", animationDelay: "-8s" }}>
            {images.filter((_, i) => i % 3 === 2).map((img, i) => (
              <Link key={i} href={`/portfolio/${img.slug}`} className={styles.masonryCard}>
                <img src={img.src} alt={img.name} />
              </Link>
            ))}
          </div>
        </div>

        {/* Overlay with logo + button */}
        <div className={styles.heroOverlay}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroLogo}>Surreal</h1>
            <p className={styles.heroTagline}>Models Management</p>
            <Link href="/portfolio" className={styles.heroBtn}>
              Models
            </Link>
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className={styles.about}>
        <div className={styles.aboutInner}>
          <span className={styles.aboutEyebrow}>Sobre nós</span>
          <h2 className={styles.aboutTitle}>
            Conectando talentos<br />
            <em>extraordinários</em>
          </h2>
          <p className={styles.aboutText}>
            A Surreal Models Management é uma agência premium dedicada a conectar talentos únicos às maiores oportunidades do mundo da moda e publicidade. Fundada com a visão de transformar carreiras, representamos modelos que definem tendências e inspiram gerações.
          </p>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className={styles.contact}>
        <div className={styles.contactInner}>
          <div className={styles.contactLeft}>
            <span className={styles.aboutEyebrow}>Contato</span>
            <h2 className={styles.contactTitle}>Vamos<br /><em>conversar</em></h2>
            <p className={styles.contactSub}>surrealmodelsmanagment@gmail.com</p>
            <p className={styles.contactSub}>@surrealmgmt</p>
          </div>
          <div className={styles.contactRight}>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
