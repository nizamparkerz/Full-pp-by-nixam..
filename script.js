const upload = document.getElementById("upload");
const preview = document.getElementById("preview-container");
const downloadBtn = document.getElementById("download-btn");

upload.addEventListener("change", () => {
  const file = upload.files[0];
  if (!file) return;

  const img = document.createElement("img");
  img.src = URL.createObjectURL(file);
  preview.innerHTML = "";
  preview.appendChild(img);
  downloadBtn.disabled = false;
});

downloadBtn.addEventListener("click", () => {
  html2canvas(preview).then(canvas => {
    const link = document.createElement("a");
    link.download = "whatsapp-dp.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  });
});