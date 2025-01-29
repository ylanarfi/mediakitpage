import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export const exportToPDF = async (element: HTMLElement, username: string) => {
  try {
    // Show the element before capturing
    const printableContent = element;
    if (printableContent) {
      printableContent.style.display = 'block';
    }

    // Wait for images to load
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Create canvas from the element
    const canvas = await html2canvas(element, {
      scale: 3, // Higher scale for better quality
      useCORS: true, // Enable CORS for images
      logging: false, // Disable logging
      backgroundColor: '#111827', // Match the background color
      windowWidth: 1500, // Increased width for better quality
      imageTimeout: 15000, // Increased timeout for image loading
      allowTaint: true, // Allow tainted images
      onclone: (document) => {
        const elem = document.getElementById('printable-content');
        if (elem) {
          elem.style.padding = '20px';
          elem.style.display = 'block';
          // Force all images to be visible
          const images = elem.getElementsByTagName('img');
          for (let i = 0; i < images.length; i++) {
            images[i].style.display = 'block';
            images[i].style.visibility = 'visible';
          }
        }
      },
    });

    // Calculate dimensions
    const imgWidth = 210; // A4 width in mm
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    
    // Create PDF
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
      compress: true
    });

    // Add image to PDF with high quality
    pdf.addImage(
      canvas.toDataURL('image/jpeg', 1.0),
      'JPEG',
      0,
      0,
      imgWidth,
      imgHeight,
      undefined,
      'FAST'
    );

    // Save the PDF
    pdf.save(`mediakit_${username.toLowerCase()}.pdf`);

    // Hide the element after capturing
    if (printableContent) {
      printableContent.style.display = 'none';
    }
  } catch (error) {
    console.error('Error generating PDF:', error);
    throw error;
  }
};