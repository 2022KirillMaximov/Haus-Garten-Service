document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".toggle-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const section = btn.closest(".service-bg");
      if (!section) return;

      section.classList.toggle("open");

      btn.textContent = section.classList.contains("open")
        ? "Weniger anzeigen"
        : "Mehr erfahren";
    });
  });
});
