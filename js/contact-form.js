document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("contactModal");
  const closeBtn = document.querySelector(".contact-modal-close");
  const overlay = document.querySelector(".contact-modal-overlay");
  const form = document.getElementById("contactForm");
  const statusText = document.getElementById("formStatus");

  /* === Открытие формы со всех кнопок === */
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

  /* === Валидация и отправка === */
  if (form && statusText) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const email = form.email?.value || "";

      if (!email.includes("@")) {
        statusText.textContent = "Введите корректный e-mail";
        statusText.style.color = "red";
        return;
      }

      statusText.textContent = "Отправка...";
      statusText.style.color = "#333";

      /* ИМИТАЦИЯ отправки */
      setTimeout(() => {
        statusText.textContent = "Спасибо! Мы свяжемся с вами.";
        statusText.style.color = "green";
        form.reset();
      }, 1000);
    });
  }
});
