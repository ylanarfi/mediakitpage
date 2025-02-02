import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export const exportToPDF = async (element: HTMLElement, username: string) => {
  try {
    const printableContent = element;
    if (printableContent) {
      printableContent.style.display = 'block';
    }

    // Wait for images to load
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Create canvas with optimized settings
    const canvas = await html2canvas(element, {
      scale: 3, // Higher scale for better quality
      useCORS: true,
      logging: false,
      backgroundColor: '#111827',
      windowWidth: 1200,
      allowTaint: true,
      imageTimeout: 20000, // Increased timeout for better image loading
      onclone: (document) => {
        const elem = document.getElementById('printable-content');
        if (elem) {
          elem.style.padding = '20px';
          elem.style.display = 'block';
          // Ensure all images are visible
          const images = elem.getElementsByTagName('img');
          for (let i = 0; i < images.length; i++) {
            images[i].style.display = 'block';
            images[i].style.visibility = 'visible';
          }
        }
      },
    });

    // Calculate dimensions for A4 page with margins
    const margin = 10; // mm
    const pageWidth = 210; // A4 width in mm
    const printWidth = pageWidth - (margin * 2);
    
    // Create PDF with better quality settings
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
      compress: true,
    });

    // Calculate height based on aspect ratio
    const imgHeight = (canvas.height * printWidth) / canvas.width;

    // Add image with high quality settings
    pdf.addImage(
      canvas.toDataURL('image/jpeg', 1.0), // Maximum quality
      'JPEG',
      margin,
      margin,
      printWidth,
      imgHeight,
      undefined,
      'MEDIUM' // Better compression quality
    );

    // Save PDF
    pdf.save(`mediakit_${username.toLowerCase()}.pdf`);

    if (printableContent) {
      printableContent.style.display = 'none';
    }
  } catch (error) {
    console.error('Error generating PDF:', error);
    throw error;
  }
};