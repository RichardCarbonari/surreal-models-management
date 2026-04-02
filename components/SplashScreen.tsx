"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./SplashScreen.module.css";

interface Props {
  onComplete: () => void;
}

export default function SplashScreen({ onComplete }: Props) {
  const [phase, setPhase] = useState<"idle" | "shrink" | "reveal" | "done">("idle");
  const triggered = useRef(false);

  const trigger = () => {
    if (triggered.current) return;
    triggered.current = true;

    // Phase 1: logo shrinks to navbar position
    setPhase("shrink");

    // Phase 2: masonry slides up
    setTimeout(() => setPhase("reveal"), 800);

    // Phase 3: done
    setTimeout(() => {
      onComplete();
      setPhase("done");
    }, 1600);
  };

  useEffect(() => {
    window.addEventListener("mousemove", trigger, { once: true });
    window.addEventListener("click", trigger, { once: true });
    window.addEventListener("touchstart", trigger, { once: true });
    return () => {
      window.removeEventListener("mousemove", trigger);
      window.removeEventListener("click", trigger);
      window.removeEventListener("touchstart", trigger);
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div className={`${styles.splash} ${phase === "reveal" ? styles.splashUp : ""}`}>

      {/* White background */}
      <div className={`${styles.bg} ${phase !== "idle" ? styles.bgFade : ""}`} />

      {/* Logo — shrinks to navbar */}
      <h1 className={`${styles.logo} ${phase === "shrink" || phase === "reveal" ? styles.logoShrink : ""}`}>
        Surreal
      </h1>

      {phase === "idle" && (
        <p className={styles.hint}>click to enter</p>
      )}
    </div>
  );
}
