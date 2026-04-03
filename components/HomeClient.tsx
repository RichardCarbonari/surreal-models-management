"use client";
import { useState } from "react";
import SplashScreen from "./SplashScreen";
import styles from "@/app/page.module.css";

interface Model { slug: string; coverImage: string; name: string; }

const HOME_IMAGES: Model[] = [
  { coverImage: "https://lh3.googleusercontent.com/d/1-DbxNPsrGyTq_HP6AdFS8uNAPmmZTr1Q", name: "", slug: "" },
  { coverImage: "https://lh3.googleusercontent.com/d/15MRA9vFVOrM-j0foH-rqJQCFGlSIGJ-g", name: "", slug: "" },
  { coverImage: "https://lh3.googleusercontent.com/d/17DhcS1eXwb12qCnbrYuu2fndVXaLlgYe", name: "", slug: "" },
  { coverImage: "https://lh3.googleusercontent.com/d/1AwyrzxxfmJK8QSMy9B3EArO-x4vfBx8A", name: "", slug: "" },
  { coverImage: "https://lh3.googleusercontent.com/d/1CA8QXaNidkEOSe6xat8OM5aYe5hz3-xZ", name: "", slug: "" },
  { coverImage: "https://lh3.googleusercontent.com/d/1CGeZ4qqSdzA__NQMWvJRir0LJdKSwVn8", name: "", slug: "" },
  { coverImage: "https://lh3.googleusercontent.com/d/1ERH7FwKlMTmig3LoAUJ1FX6w52dsmXQE", name: "", slug: "" },
  { coverImage: "https://lh3.googleusercontent.com/d/1OogVZkU4VQ1-I2xyPPvMh05SBh1fb10U", name: "", slug: "" },
  { coverImage: "https://lh3.googleusercontent.com/d/1Q1IzEh17LU60Mma8avBNly4IyYZewWOO", name: "", slug: "" },
  { coverImage: "https://lh3.googleusercontent.com/d/1VI4HBhB_9fhbd4BYwCPAJD2sf6LFtRoU", name: "", slug: "" },
  { coverImage: "https://lh3.googleusercontent.com/d/1WheZvYuKU5mgmTelYf29SENOYXA0_mc9", name: "", slug: "" },
  { coverImage: "https://lh3.googleusercontent.com/d/1XWri2JcxMJklqsmPRzrUKxcnTX4tooKO", name: "", slug: "" },
  { coverImage: "https://lh3.googleusercontent.com/d/1YIbjQ4U6B-JwSjl-n_hnUUNYA-dZ3aqv", name: "", slug: "" },
  { coverImage: "https://lh3.googleusercontent.com/d/1aGuhM3deI0NBpDuopCNb3mcVRbjA8m8E", name: "", slug: "" },
  { coverImage: "https://lh3.googleusercontent.com/d/1cF5mesr5Pdnm4a8a5G9SfB1SbPHMTcao", name: "", slug: "" },
  { coverImage: "https://lh3.googleusercontent.com/d/1euyaGCPIf6U7MsLD3vXXlF487qVMX93h", name: "", slug: "" },
  { coverImage: "https://lh3.googleusercontent.com/d/1g0z1YGWNebsPxyMizZdrjj9pigwlWmWS", name: "", slug: "" },
  { coverImage: "https://lh3.googleusercontent.com/d/1nVlDAyHXkC-ROdIKqP2pPVIBPIdlbly3", name: "", slug: "" },
  { coverImage: "https://lh3.googleusercontent.com/d/1po9NDSbVXSTiPc70Z9N3eKT8S906Llzf", name: "", slug: "" },
  { coverImage: "https://lh3.googleusercontent.com/d/1s1iKYPORLYVJ1WEAIRykd3FQW-g3XZhh", name: "", slug: "" },
  { coverImage: "https://lh3.googleusercontent.com/d/1wAg1SRmfmu1WBykyA1dd2R4VoMsfcPiu", name: "", slug: "" },
  { coverImage: "https://lh3.googleusercontent.com/d/1xPUTN4s0xnj2oJMo1n-5d--fksExcc1y", name: "", slug: "" },
  { coverImage: "https://lh3.googleusercontent.com/d/1yLxgmelI_L7aHVc2l4UPzDfmW7HlEokJ", name: "", slug: "" },
];

export default function HomeClient({ images }: { images: Model[] }) {
  const alreadySeen = typeof window !== 'undefined' && sessionStorage.getItem('splashSeen') === '1';
  const [splashDone, setSplashDone] = useState(alreadySeen);
  const [slideIn, setSlideIn] = useState(alreadySeen);

  const handleSplashComplete = () => {
    sessionStorage.setItem('splashSeen', '1');
    setSplashDone(true);
    requestAnimationFrame(() => requestAnimationFrame(() => setSlideIn(true)));
  };

  // Use new home images instead of models data
  const imgs = [...HOME_IMAGES, ...HOME_IMAGES, ...HOME_IMAGES, ...HOME_IMAGES];

  const cols = [
    { dir: 'up' }, { dir: 'down' }, { dir: 'up' },
    { dir: 'down' }, { dir: 'up' }, { dir: 'down' }, { dir: 'up' },
  ];

  return (
    <>
      {!alreadySeen && <SplashScreen onComplete={handleSplashComplete} />}

      <div
        className={styles.wrapper}
        style={{
          transform: splashDone ? (slideIn ? 'translateY(0)' : 'translateY(100vh)') : 'translateY(100vh)',
          transition: slideIn ? 'transform 1.2s cubic-bezier(0.76, 0, 0.24, 1)' : 'none',
          opacity: splashDone ? 1 : 0,
        }}
      >
        <div className={styles.colsWrap}>
          {cols.map((col, colIdx) => (
            <div key={colIdx} className={styles.col}>
              <div
                className={`${styles.track} ${col.dir === 'up' ? styles.up : styles.down}`}
                style={{ animationDuration: '200s' }}
              >
                {[...imgs, ...imgs].map((m, i) => (
                  <div key={i} className={styles.card}>
                    <img src={m.coverImage} alt="" className={styles.cardImg} draggable={false} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
