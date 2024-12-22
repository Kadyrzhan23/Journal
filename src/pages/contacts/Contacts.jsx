import React from "react";
import { Worker } from "@react-pdf-viewer/core"; // Поддержка Web Worker
import { Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import styles from "../about/About.module.css";
export default function Contacts() {
  const pdfUrl = "../../../public/pdf/contact.pdf";
  return (
    <div className={styles.wrapper}>
      {/* <Worker
        workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}
      >
        <Viewer fileUrl={pdfUrl} />
      </Worker> */}
      <div className={styles.footer}>
        Manzil: Toshkent viloyati, Qibray tumani Universitet ko‘chasi 2-uy
      </div>
      <div className={styles.lines3}>
        <div className={styles.line3}>
          Toshkent davlat agrar universiteti Bosh bino Ilmiy bo‘lim
        </div>
        <br />
        <br />
        <br />
        <div className={styles.line3}>Telegram: @Azizbek_1711</div>
        <div className={styles.line3}>
          Email:
          <a
            href="mailto:agriculture.medicine.journal@gmail.com"
          >
            agriculture.medicine.journal@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}
