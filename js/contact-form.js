document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("contactModal");
  const closeBtn = document.querySelector(".contact-modal-close");
  const overlay = document.querySelector(".contact-modal-overlay");
  const form = document.getElementById("contactForm");
  const statusText = document.getElementById("formStatus");

  /* === Открытие формы === */
  const openBtns = document.querySelectorAll(".open-contact");

  if (modal && openBtns.length > 0) {
    openBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        modal.classList.add("active");
      });
    });
  }

  /* === Закрытие === */
  [closeBtn, overlay].forEach(el => {
    if (el && modal) {
      el.addEventListener("click", () => {
        modal.classList.remove("active");
      });
    }
  });

  /* === Отправка в Formspree === */
  if (form && statusText) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      statusText.textContent = "Wird gesendet...";
      statusText.style.color = "#333";

      try {
        const response = await fetch(form.action, {
          method: "POST",
          body: new FormData(form),
          headers: {
            Accept: "application/json"
          }
        });

        if (response.ok) {
          statusText.textContent =
            "Vielen Dank! Wir werden uns in Kürze bei Ihnen melden.";
          statusText.style.color = "green";
          form.reset();
        } else {
          statusText.textContent =
            "Fehler beim Senden. Bitte versuchen Sie es erneut.";
          statusText.style.color = "red";
        }
      } catch (error) {
        statusText.textContent =
          "Fehler beim Senden. Bitte versuchen Sie es erneut.";
        statusText.style.color = "red";
      }
    });
  }
});