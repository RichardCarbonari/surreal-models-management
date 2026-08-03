import { notFound } from "next/navigation";
import ModelBanner from "@/components/ModelBanner";
import Footer from "@/components/Footer";
import { models, getModelBySlug } from "@/data/models";
import styles from "./page.module.css";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return models.map((m) => ({ slug: m.slug }));
}

export default async function ModelPage({ params }: Props) {
  const { slug } = await params;
  const model = getModelBySlug(slug);
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
