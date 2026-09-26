import jsPDF from "jspdf";

export function getCertificateLevel(score, total) {
  const pct = (score / total) * 100;
  if (pct >= 85) return { level: "Distinction", color: [245, 166, 35],  emoji: "🏆" };
  if (pct >= 70) return { level: "Merit",        color: [59,  130, 246], emoji: "🥇" };
  return              { level: "Participation",  color: [148, 163, 184], emoji: "🎖️" };
}

export function getScoreMessage(score, total) {
  const pct = (score / total) * 100;
  if (pct === 100) return "Perfect Score! You are a Cybercrime Awareness Champion!";
  if (pct >= 85)   return "Outstanding! You have exceptional knowledge of cybercrime awareness!";
  if (pct >= 70)   return "Well done! You have solid awareness of online safety and cyber threats.";
  if (pct >= 50)   return "Good effort! Keep learning to better protect yourself online.";
  return "Keep going! Cybercrime awareness starts with education. Stay safe online.";
}

/**
 * Generate a PDF certificate – using cert.jpeg template
 */
export async function generateCertificate({ name, college, score, total, level, color, date }) {
  const doc = new jsPDF({ orientation: "landscape", unit: "mm", format: "a4" });
  const W = doc.internal.pageSize.getWidth();   // 297mm
  const H = doc.internal.pageSize.getHeight();  // 210mm

  // Load the template image
  const img = new Image();
  img.src = '/cert.jpeg'; // Loaded from public folder
  
  try {
    await new Promise((resolve, reject) => {
      img.onload = resolve;
      img.onerror = reject;
    });
    
    // Add background template
    doc.addImage(img, 'JPEG', 0, 0, W, H);
  } catch (error) {
    console.error("Failed to load certificate template", error);
    // Fallback background if image fails to load
    doc.setFillColor(241, 245, 249);
    doc.rect(0, 0, W, H, "F");
    doc.setTextColor(255, 0, 0);
    doc.text("Template not found", W/2, H/2, { align: "center" });
  }

  // ── Name ─────────────────────────────────────────────────────────────
  // Assuming the name goes roughly in the middle. Adjust Y coordinate as needed based on the actual cert.jpeg layout.
  doc.setFont("helvetica", "bold");
  doc.setFontSize(32);
  doc.setTextColor(11, 17, 32); // Dark Navy text
  
  // Try to center the name vertically around the lower-middle part
  const nameY = H * 0.55; 
  doc.text(name.toUpperCase(), W / 2, nameY, { align: "center" });

  doc.save(`TamilNaduPolice_CyberAwareness_${name.replace(/\s+/g, "_")}.pdf`);
}
