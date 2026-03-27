import { notFound } from "next/navigation";
import Link from "next/link";
import ModelBanner from "@/components/ModelBanner";
import { getModelBySlug } from "@/data/models";
import styles from "./page.module.css";

export const dynamic = "force-dynamic";

interface Props {
  params: { slug: string };
}

export default function ModelPage({ params }: Props) {
  const model = getModelBySlug(params.slug);
  if (!model) notFound();

  return (
    <div className={styles.page}>
      <div className={styles.breadcrumb}>
        <Link href="/portfolio" className={styles.backLink}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          Portfólio
        </Link>
        <span className={styles.breadcrumbSep}>/</span>
        <span className={styles.breadcrumbCurrent}>{model.name}</span>
      </div>
      <ModelBanner model={model} />
    </div>
  );
}
