export const dynamic = "force-dynamic";
import Footer from "@/components/Footer";
import styles from "./page.module.css";

export default function CastingPage() {
  return (
    <>
      <div className={styles.page}>
        <div className={styles.hero}>
          <span className={styles.eyebrow}>Surreal — Casting</span>
          <h1 className={styles.title}>Faça parte do <em>nosso casting</em></h1>
        </div>

        <div className={styles.content}>
          {/* Instruções */}
          <div className={styles.instructions}>
            <h2 className={styles.sectionTitle}>Como enviar suas fotos</h2>
            <p className={styles.instructionText}>
              Faça upload de 4 fotos nas poses indicadas, seguindo estas orientações:
            </p>
            <ul className={styles.tips}>
              <li>Parede neutra como fundo</li>
              <li>Dia e/ou luz natural</li>
              <li>Sem filtro, sem edição e sem maquiagem</li>
              <li>Look básico: camiseta branca ou preta sem estampas, calça jeans ou preta</li>
              <li>Meninas: de salto</li>
            </ul>
          </div>

          {/* 4 poses */}
          <div className={styles.poses}>
            <h2 className={styles.sectionTitle}>Poses necessárias</h2>
            <div className={styles.poseGrid}>
              {/* Close no rosto */}
              <div className={styles.poseCard}>
                <div className={styles.poseImg}>
                  <svg viewBox="0 0 200 260" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="200" height="260" fill="#f0eeeb"/>
                    <ellipse cx="100" cy="90" rx="42" ry="50" fill="#d4cfc9"/>
                    <ellipse cx="100" cy="85" rx="30" ry="36" fill="#c8c2bb"/>
                    <path d="M58 160 Q100 140 142 160 L148 260 H52 Z" fill="#d4cfc9"/>
                  </svg>
                </div>
                <div className={styles.poseLabel}>1. Close no rosto</div>
              </div>

              {/* Perfil */}
              <div className={styles.poseCard}>
                <div className={styles.poseImg}>
                  <svg viewBox="0 0 200 260" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="200" height="260" fill="#f0eeeb"/>
                    <ellipse cx="105" cy="88" rx="38" ry="48" fill="#d4cfc9"/>
                    <path d="M105 88 Q130 80 135 95 Q138 108 125 115" fill="#c8c2bb"/>
                    <path d="M67 155 Q105 135 143 158 L150 260 H60 Z" fill="#d4cfc9"/>
                  </svg>
                </div>
                <div className={styles.poseLabel}>2. Perfil</div>
              </div>

              {/* Meio corpo */}
              <div className={styles.poseCard}>
                <div className={styles.poseImg}>
                  <svg viewBox="0 0 200 260" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="200" height="260" fill="#f0eeeb"/>
                    <ellipse cx="100" cy="52" rx="28" ry="32" fill="#d4cfc9"/>
                    <path d="M72 82 Q100 70 128 82 L138 180 H62 Z" fill="#d4cfc9"/>
                    <path d="M75 130 L62 190 H82 L88 145Z" fill="#c8c2bb"/>
                    <path d="M125 130 L138 190 H118 L112 145Z" fill="#c8c2bb"/>
                  </svg>
                </div>
                <div className={styles.poseLabel}>3. Meio corpo</div>
              </div>

              {/* Corpo inteiro */}
              <div className={styles.poseCard}>
                <div className={styles.poseImg}>
                  <svg viewBox="0 0 200 260" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="200" height="260" fill="#f0eeeb"/>
                    <ellipse cx="100" cy="38" rx="22" ry="26" fill="#d4cfc9"/>
                    <path d="M78 62 Q100 54 122 62 L130 145 H70 Z" fill="#d4cfc9"/>
                    <path d="M80 118 L68 200 H85 L92 140Z" fill="#c8c2bb"/>
                    <path d="M120 118 L132 200 H115 L108 140Z" fill="#c8c2bb"/>
                    <ellipse cx="70" cy="202" rx="10" ry="6" fill="#c8c2bb"/>
                    <ellipse cx="130" cy="202" rx="10" ry="6" fill="#c8c2bb"/>
                  </svg>
                </div>
                <div className={styles.poseLabel}>4. Corpo inteiro</div>
              </div>
            </div>
          </div>

          {/* Requisitos */}
          <div className={styles.requirements}>
            <h2 className={styles.sectionTitle}>Requisitos</h2>
            <div className={styles.reqGrid}>
              <div className={styles.reqItem}><span className={styles.reqLabel}>Altura Feminino</span><span className={styles.reqValue}>1,70m+</span></div>
              <div className={styles.reqItem}><span className={styles.reqLabel}>Altura Masculino</span><span className={styles.reqValue}>1,82m+</span></div>
              <div className={styles.reqItem}><span className={styles.reqLabel}>Idade</span><span className={styles.reqValue}>16 — 30 anos</span></div>
              <div className={styles.reqItem}><span className={styles.reqLabel}>Disponibilidade</span><span className={styles.reqValue}>Integral</span></div>
            </div>
          </div>

          {/* Formulário */}
          <div className={styles.formWrap}>
            <h2 className={styles.sectionTitle}>Envie sua candidatura</h2>
            <p className={styles.formSubtitle}>Nossa equipe entra em contato em até 5 dias úteis.</p>
            <div className={styles.form}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}><label className={styles.label}>Nome completo</label><input type="text" className={styles.input} placeholder="Seu nome" /></div>
                <div className={styles.formGroup}><label className={styles.label}>Email</label><input type="email" className={styles.input} placeholder="seu@email.com" /></div>
              </div>
              <div className={styles.formRow}>
                <div className={styles.formGroup}><label className={styles.label}>Telefone</label><input type="tel" className={styles.input} placeholder="(11) 99999-9999" /></div>
                <div className={styles.formGroup}><label className={styles.label}>Instagram</label><input type="text" className={styles.input} placeholder="@seuuser" /></div>
              </div>
              <div className={styles.formRow}>
                <div className={styles.formGroup}><label className={styles.label}>Altura</label><input type="text" className={styles.input} placeholder="Ex: 1,80m" /></div>
                <div className={styles.formGroup}><label className={styles.label}>Sapato</label><input type="text" className={styles.input} placeholder="Ex: 40" /></div>
              </div>
              <div className={styles.formRow}>
                <div className={styles.formGroup}><label className={styles.label}>Cidade</label><input type="text" className={styles.input} placeholder="Ex: São Paulo" /></div>
                <div className={styles.formGroup}><label className={styles.label}>Gênero</label><input type="text" className={styles.input} placeholder="Ex: Feminino" /></div>
              </div>
              <div className={styles.formGroup}><label className={styles.label}>Sobre você</label><textarea className={styles.textarea} placeholder="Conte um pouco sobre você e sua experiência..." rows={4}></textarea></div>
              <a href="mailto:surrealmodelsmanagment@gmail.com?subject=Casting — Surreal Models" className={styles.submitBtn}>Enviar candidatura</a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
