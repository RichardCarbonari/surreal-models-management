import Link from "next/link";
import Image from "next/image";
import { Model } from "@/data/models";
import styles from "./ModelCard.module.css";

interface Props {
  model: Model;
  priority?: boolean;
}

export default function ModelCard({ model, priority = false }: Props) {
  return (
    <Link href={`/portfolio/${model.slug}`} className={styles.card}>
      <div className={styles.imageWrap}>
        <Image
          src={model.coverImage}
          alt={model.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className={styles.image}
          priority={priority}
        />
        <div className={styles.overlay} />
        <div className={styles.meta}>
          <span className={styles.name}>{model.name}</span>
          <span className={styles.height}>{model.height}</span>
        </div>
      </div>
    </Link>
  );
}
