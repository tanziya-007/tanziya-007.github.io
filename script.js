function downloadResume() {
  const link = document.createElement("a");
  link.href = "resume.pdf";
  link.download = "Tanziya_Banu_Resume.pdf";
  link.click();
}