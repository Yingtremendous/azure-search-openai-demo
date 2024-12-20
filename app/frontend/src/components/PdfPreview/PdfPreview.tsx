import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

interface PdfPreviewProps {
    fileUrl: string;
}

const PdfPreview: React.FC<PdfPreviewProps> = ({ fileUrl }) => {
    const defaultFileUrl = './data/20220629_ISpec_FERRERO_Materialflusssteuerung_v20.pdf';
    return (
        <div>
            <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
                <Viewer fileUrl={fileUrl || defaultFileUrl} />
            </Worker>
        </div>
    );
};

export default PdfPreview;