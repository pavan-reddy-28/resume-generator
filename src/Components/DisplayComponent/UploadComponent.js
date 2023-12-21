import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const UploadComponent = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [pdfText, setPdfText] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    
  };

React.useEffect(() => {
    handleTextExtraction();
  
}, [selectedFile])


  const handleTextExtraction = async () => {
    try {
      const reader = new FileReader();
      reader.onload = async () => {
        const text = await extractText(reader.result);
        
        setPdfText(text);
      };
      reader.readAsArrayBuffer(selectedFile);
    } catch (error) {
      console.error('Error reading PDF:', error);
    }
  };

  const extractText = async (fileData) => {
    const loadingTask = pdfjs.getDocument({ data: fileData });
    const pdf = await loadingTask.promise;
    const page = await pdf.getPage(1);
    const textContent = await page.getTextContent();
    const extractedText = textContent.items.filter((item)=>item.str.length!=0).map((item) =>{console.log("pdf logger ",item.str.length); return item.str.trim()}).join('\n');
    return extractedText;
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <br />
      <br />
      
      <p>Page {pageNumber} of {numPages}</p>
      
      <div>
        <h3>Extracted Text:</h3>
        {pdfText && <textarea
          rows="10"
          cols="50"
          value={pdfText}
          readOnly
        />}
      </div>
    </div>
  );
};

export default UploadComponent;
