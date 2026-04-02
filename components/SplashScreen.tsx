"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./SplashScreen.module.css";

interface Props {
  onComplete: () => void;
}

export default function SplashScreen({ onComplete }: Props) {
  const [phase, setPhase] = useState<"idle" | "expanding" | "done">("idle");
  const triggered = useRef(false);

  const trigger = () => {
    if (triggered.current) return;
    triggered.current = true;
    setPhase("expanding");
    setTimeout(() => {
      onComplete();
      setPhase("done");
    }, 1200);
  };

  useEffect(() => {
    const onMove = () => trigger();
    const onClick = () => trigger();
    window.addEventListener("mousemove", onMove, { once: true });
    window.addEventListener("click", onClick, { once: true });
    window.addEventListener("touchstart", onClick, { once: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("click", onClick);
      window.removeEventListener("touchstart", onClick);
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div className={`${styles.splash} ${phase === "expanding" ? styles.expanding : ""}`}>
      {/* White background that clips away */}
      <div className={`${styles.bg} ${phase === "expanding" ? styles.bgExpand : ""}`} />

      {/* The logo — becomes the clip mask shape */}
      <div className={styles.logoWrap}>
        <h1 className={`${styles.logo} ${phase === "expanding" ? styles.logoExpand : ""}`}>
          Surreal
        </h1>
        {phase === "idle" && (
          <p className={styles.hint}>move to enter</p>
        )}
      </div>
    </div>
  );
}
