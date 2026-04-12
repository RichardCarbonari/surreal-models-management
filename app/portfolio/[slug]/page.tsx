export const dynamic = "force-dynamic";

import { notFound } from "next/navigation";
import ModelBanner from "@/components/ModelBanner";
import Footer from "@/components/Footer";
import { getModelBySlug } from "@/data/models";
import styles from "./page.module.css";

interface Props {
  params: { slug: string };
}

export default function ModelPage({ params }: Props) {
  const model = getModelBySlug(params.slug);
  if (!model) return notFound();
  return (
    <>
      <div className={styles.page}>
        <ModelBanner model={model} />
      </div>
      <Footer />
    </>
  );
}
