import React from 'react';
import { Worker } from '@react-pdf-viewer/core'; // Поддержка Web Worker
import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
export default function About() {
  const pdfUrl = '../../../public/pdf/About.pdf';
  return (
    <div >
      <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
        <Viewer fileUrl={pdfUrl} />
      </Worker>
    </div>
  )    
}
