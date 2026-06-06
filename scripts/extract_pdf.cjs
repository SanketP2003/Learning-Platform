const fs = require('fs');
const pdfjsLib = require('pdfjs-dist/legacy/build/pdf.js');

async function extract(filePath) {
  const data = new Uint8Array(fs.readFileSync(filePath));
  const loadingTask = pdfjsLib.getDocument({data});
  const doc = await loadingTask.promise;
  let fullText = '';
  for (let i = 1; i <= doc.numPages; i++) {
    const page = await doc.getPage(i);
    const content = await page.getTextContent();
    const strings = content.items.map(item => item.str);
    fullText += strings.join(' ') + '\n\n';
  }
  return fullText;
}

extract('Frontend Intern Challenge_ Next-Gen Learning Dashboard.pdf').then(text => {
  console.log(text.slice(0, 20000));
  fs.writeFileSync('pdf_extracted_text.txt', text);
}).catch(err => {
  console.error('Error extracting PDF:', err);
});
