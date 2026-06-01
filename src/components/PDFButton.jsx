import html2canvas from "html2canvas";
import jsPDF from "jspdf";

function PDFButton() {
  const downloadPDF = async () => {
    const card = document.getElementById("digital-card");

    const canvas = await html2canvas(card, {
      scale: 2,
      useCORS: true,
    });

    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");

    const pdfWidth = 210;
    const pdfHeight =
      (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(
      imgData,
      "PNG",
      0,
      0,
      pdfWidth,
      pdfHeight
    );

    pdf.save("OneStepDigitalCard.pdf");
  };

  return (
    <button
      onClick={downloadPDF}
      style={{
        width: "85%",
        margin: "20px auto",
        display: "block",
        padding: "14px",
        background: "#2563eb",
        color: "#fff",
        border: "none",
        borderRadius: "15px",
        cursor: "pointer",
        fontSize: "16px",
        fontWeight: "600",
      }}
    >
      Download PDF
    </button>
  );
}

export default PDFButton;