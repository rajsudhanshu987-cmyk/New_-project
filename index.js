




document.addEventListener("DOMContentLoaded", () => {

  const toggleBtn = document.getElementById("themeToggle");

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("light-theme");

      const isLight = document.body.classList.contains("light-theme");

      toggleBtn.innerHTML = isLight
        ? "<i class='fa-solid fa-sun'></i>"
        : "<i class='fa-solid fa-moon'></i>";
    });
  }

  const typedTextSpan = document.querySelector(".type-text");

  if (!typedTextSpan) return;

  const textArray = [
    "Software Engineer",
    "Full-Stack Developer",
    "Web Developer",
    "Problem Solver",
  ];

  let textArrayIndex = 0;
  let charIndex = 0;

  function type() {
    if (charIndex < textArray[textArrayIndex].length) {
      typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, 50);
    } else {
      setTimeout(erase, 1000);
    }
  }

  function erase() {
    if (charIndex > 0) {
      typedTextSpan.textContent =
        textArray[textArrayIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, 50);
    } else {
      textArrayIndex = (textArrayIndex + 1) % textArray.length;
      charIndex = 0;
      setTimeout(type, 500);
    }
  }

  setTimeout(type, 500);
});





document.querySelectorAll("a[href^='#']").forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});





const contactForm = document.querySelector(".contact-form");
const successMsg = document.getElementById("successMsg");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    successMsg.style.display = "block";

    setTimeout(() => {
      successMsg.style.display = "none";
    }, 3000);

    contactForm.reset();
  });
}