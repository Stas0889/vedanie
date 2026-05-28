const auditForm = document.querySelector(".audit-card");
const auditCount = document.querySelector("#audit-count");

if (auditForm && auditCount) {
  auditForm.addEventListener("change", () => {
    const checked = auditForm.querySelectorAll("input[type='checkbox']:checked").length;
    auditCount.textContent = String(checked);
  });
}
