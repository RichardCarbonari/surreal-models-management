import { notFound } from "next/navigation";
import Link from "next/link";
import ModelBanner from "@/components/ModelBanner";
import { models, getModelBySlug } from "@/data/models";
import styles from "./page.module.css";
import type { Metadata } from "next";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return models.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const model = getModelBySlug(params.slug);
  if (!model) return { title: "Modelo não encontrado" };
  return {
    title: `${model.name} | Surreal Models Management`,
    description: `Conheça ${model.name} — ${model.measurements.altura}, ${model.nationality}.`,
  };
}

export default function ModelPage({ params }: Props) {
  const model = getModelBySlug(params.slug);
  if (!model) notFound();

  return (
    <div className={styles.page}>
      {/* Back navigation */}
      <div className={styles.breadcrumb}>
        <Link href="/portfolio" className={styles.backLink}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Portfólio
        </Link>
        <span className={styles.breadcrumbSep}>/</span>
        <span className={styles.breadcrumbCurrent}>{model.name}</span>
      </div>

      {/* Main banner */}
      <ModelBanner model={model} />
    </div>
  );
}
