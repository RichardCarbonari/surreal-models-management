"use client";
import Link from "next/link";
import { Model } from "@/data/models";
import styles from "./ModelCard.module.css";

interface Props {
  model: Model;
  priority?: boolean;
}

export default function ModelCard({ model }: Props) {
  return (
    <Link href={`/portfolio/${model.slug}`} className={styles.card}>
      <div className={styles.imageWrapper}>
        <div style={{position:"relative",width:"100%",paddingTop:"133%"}}>
          <img
            src={model.coverImage}
            alt={model.name}
            className={styles.image}
            loading="lazy"
            style={{position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"top center"}}
          />
          <div className={styles.overlay} />
          <div className={styles.info}>
            <span className={styles.name}>{model.name}</span>
            <span className={styles.nationality}>{model.nationality}</span>
          </div>
        </div>
      </div>
      <div className={styles.meta}>
        <span className={styles.metaHeight}>{model.height}</span>
        <span className={styles.metaArrow}>→</span>
      </div>
    </Link>
  );
}
