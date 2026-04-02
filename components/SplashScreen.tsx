"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./SplashScreen.module.css";

interface Props {
  onComplete: () => void;
  images: string[];
}

export default function SplashScreen({ onComplete, images }: Props) {
  const [phase, setPhase] = useState<"idle" | "falling" | "done">("idle");
  const [triggered, setTriggered] = useState(false);
  const splashRef = useRef<HTMLDivElement>(null);

  const trigger = () => {
    if (triggered) return;
    setTriggered(true);
    setPhase("falling");
    setTimeout(() => {
      setPhase("done");
      onComplete();
    }, 1800);
  };

  useEffect(() => {
    const el = splashRef.current;
    if (!el) return;
    el.addEventListener("click", trigger);
    el.addEventListener("mousemove", trigger, { once: true });
    return () => {
      el.removeEventListener("click", trigger);
      el.removeEventListener("mousemove", trigger);
    };
  }, [triggered]);

  if (phase === "done") return null;

  return (
    <div
      ref={splashRef}
      className={`${styles.splash} ${phase === "falling" ? styles.falling : ""}`}
    >
      {/* Falling photos */}
      {phase === "falling" && images.slice(0, 12).map((src, i) => (
        <div
          key={i}
          className={styles.fallingPhoto}
          style={{
            left: `${(i % 6) * 17 + Math.random() * 4}%`,
            animationDelay: `${i * 0.08}s`,
            animationDuration: `${0.9 + Math.random() * 0.4}s`,
            width: i % 3 === 0 ? "180px" : i % 3 === 1 ? "220px" : "160px",
            aspectRatio: i % 2 === 0 ? "2/3" : "3/4",
          }}
        >
          <img src={src} alt="" draggable={false} />
        </div>
      ))}

      {/* Logo */}
      <div className={`${styles.logoWrap} ${phase === "falling" ? styles.logoFade : ""}`}>
        <h1 className={styles.logo}>Surreal</h1>
        <p className={styles.hint}>click or move to enter</p>
      </div>

      {/* White overlay that fades out */}
      <div className={`${styles.whiteOverlay} ${phase === "falling" ? styles.overlayFade : ""}`} />
    </div>
  );
}
