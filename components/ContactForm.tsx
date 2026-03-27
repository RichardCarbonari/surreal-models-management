"use client";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  return (
    <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Nome</label>
          <input type="text" className={styles.formInput} placeholder="Seu nome" />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Email</label>
          <input type="email" className={styles.formInput} placeholder="seu@email.com" />
        </div>
      </div>
      <div className={styles.formGroup}>
        <label className={styles.formLabel}>Assunto</label>
        <input type="text" className={styles.formInput} placeholder="Como podemos ajudar?" />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.formLabel}>Mensagem</label>
        <textarea className={styles.formTextarea} placeholder="Sua mensagem..." rows={5} />
      </div>
      <button type="submit" className={styles.formSubmit}>Enviar mensagem</button>
    </form>
  );
}
