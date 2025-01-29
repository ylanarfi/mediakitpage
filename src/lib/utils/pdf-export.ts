import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export const exportToPDF = async (element: HTMLElement, username: string) => {
  try {
    // Create canvas from the element
    const canvas = await html2canvas(element, {
      scale: 2, // Higher scale for better quality
      useCORS: true, // Enable CORS for images
      logging: false, // Disable logging
      backgroundColor: '#111827', // Match the background color
      windowWidth: 1200, // Fixed width for consistency
      onclone: (document) => {
        // Any cleanup needed for the cloned document
        const elem = document.getElementById('printable-content');
        if (elem) {
          elem.style.padding = '20px';
          elem.style.display = 'block'; // Make sure it's visible for capture
        }
      },
    });

    // Calculate dimensions
    const imgWidth = 210; // A4 width in mm
    const pageHeight = 297; // A4 height in mm
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    
    // Create PDF with the correct type declaration
    const pdf = new jsPDF('p', 'mm', 'a4');

    // Convert canvas to base64 image
    const imgData = canvas.toDataURL('image/jpeg', 0.7);

    // Add image to PDF with proper type handling
    pdf.addImage({
      imageData: imgData,
      format: 'JPEG',
      x: 0,
      y: 0,
      width: imgWidth,
      height: imgHeight
    });

    // Save the PDF
    pdf.save(`mediakit_${username.toLowerCase()}.pdf`);
  } catch (error) {
    console.error('Error generating PDF:', error);
    throw error;
  }
};