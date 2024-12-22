import React from "react";
import { Worker } from "@react-pdf-viewer/core"; // Поддержка Web Worker
import { Viewer } from "@react-pdf-viewer/core";
import styles from "./About.module.css";
import "@react-pdf-viewer/core/lib/styles/index.css";
export default function About() {
  const pdfUrl = "../../../public/pdf/About.pdf";
  return (
    <div className={styles.wrapper}>
      {/* <Worker
        workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}
      >
        <Viewer fileUrl={pdfUrl} />
      </Worker> */}
      <p className={`${styles.title}`}>
        THE ROLE OF AGRICULTURE AND MEDICINE IN SCIENCE jurnali O‘zbekiston
        Respublikasi Prezidenti Administratsiyasi huzuridagi axborot va ommaviy
        kommunikatsiyalar agentligi tomonidan 2024-yil 5-dekabr kuni taqdim
        etilgan № 516376 GUVOHNOMA asosida o‘z faoliyatini boshlad
      </p>
      <br />
      <br />
      <p className={styles.title}>
        THE ROLE OF AGRICULTURE AND MEDICINE IN SCIENCE jurnali Toshkent davlat
        agrar universiteti huzurida o‘z faoliyatini olib bor
      </p>
      <br />
      <p className={styles.title}>
        Jurnal ushbu ixtisosliklarda maqolalarni nashr{" "}
      </p>
      <div className={styles.lines}>
        <div className={styles.line}>
          <span>06.00.00</span>
          <span>Qishloq xo‘jaligi yo‘nalish sohalari.</span>
        </div>
        <div className={styles.line}>
          <span>08.00.04</span>
          <span>Qishloq xo‘jaligi iqtisodiyoti yo‘nalishi.</span>
        </div>
        <div className={styles.line}>
          <span>14.00.00</span>
          <span>Meditsina sohasi yo‘nalishlari.</span>
        </div>
        <div className={styles.line}>
          <span>16.00.00</span>
          <span>Veterinariya sohasi yo‘nalishlari.</span>
        </div>
      </div>
      <br />
      <br />
      <div className={styles.lines2}>
        <div className={styles.line2}>
          Tarqatilish xududi - <strong> Respublika miqiyosida</strong>
        </div>
        <div className={styles.line2}>
          OAV tili - O‘zbek, rus, ingiliz, qoraqalpoq va qozoq tillarida
        </div>
        <div className={styles.line2}>
          Jurnal rahbari: Turg‘unov Azizbek Normat o‘g‘li 
        </div>
      </div>
      <div className={styles.footer}>Manzil: Toshkent
          viloyati, Qibray tumani Universitet ko‘chasi 2-uy</div>
    </div>
  );
}
