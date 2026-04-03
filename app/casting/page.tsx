export const dynamic = "force-dynamic";
import Footer from "@/components/Footer";
import styles from "./page.module.css";

export default function CastingPage() {
  return (
    <>
      <div className={styles.page}>
        <div className={styles.hero}>
          <span className={styles.eyebrow}>Surreal — Casting</span>
          <h1 className={styles.title}>Quero ser <em>um modelo</em></h1>
          <p className={styles.subtitle}>Acreditamos em talentos únicos. Se você tem o que precisa, queremos te conhecer.</p>
        </div>
        <div className={styles.content}>
          <div className={styles.requirements}>
            <h2 className={styles.sectionTitle}>O que buscamos</h2>
            <div className={styles.reqGrid}>
              <div className={styles.reqItem}><span className={styles.reqLabel}>Altura Feminino</span><span className={styles.reqValue}>1,70m+</span></div>
              <div className={styles.reqItem}><span className={styles.reqLabel}>Altura Masculino</span><span className={styles.reqValue}>1,82m+</span></div>
              <div className={styles.reqItem}><span className={styles.reqLabel}>Idade</span><span className={styles.reqValue}>16 — 30 anos</span></div>
              <div className={styles.reqItem}><span className={styles.reqLabel}>Disponibilidade</span><span className={styles.reqValue}>Integral</span></div>
            </div>
          </div>
          <div className={styles.formWrap}>
            <h2 className={styles.sectionTitle}>Envie seu book</h2>
            <p className={styles.formSubtitle}>Preencha e nossa equipe entra em contato em até 5 dias úteis.</p>
            <div className={styles.form}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}><label className={styles.label}>Nome completo</label><input type="text" className={styles.input} placeholder="Seu nome" /></div>
                <div className={styles.formGroup}><label className={styles.label}>Idade</label><input type="number" className={styles.input} placeholder="Ex: 22" /></div>
              </div>
              <div className={styles.formRow}>
                <div className={styles.formGroup}><label className={styles.label}>Email</label><input type="email" className={styles.input} placeholder="seu@email.com" /></div>
                <div className={styles.formGroup}><label className={styles.label}>Instagram</label><input type="text" className={styles.input} placeholder="@seuuser" /></div>
              </div>
              <div className={styles.formRow}>
                <div className={styles.formGroup}><label className={styles.label}>Altura</label><input type="text" className={styles.input} placeholder="Ex: 1,80m" /></div>
                <div className={styles.formGroup}><label className={styles.label}>Cidade</label><input type="text" className={styles.input} placeholder="Ex: São Paulo" /></div>
              </div>
              <div className={styles.formGroup}><label className={styles.label}>Link do book</label><input type="text" className={styles.input} placeholder="https://..." /></div>
              <div className={styles.formGroup}><label className={styles.label}>Sobre você</label><textarea className={styles.textarea} placeholder="Conte um pouco sobre você..." rows={4}></textarea></div>
              <a href="mailto:surrealmodelsmanagment@gmail.com?subject=Casting" className={styles.submitBtn}>Enviar candidatura</a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
