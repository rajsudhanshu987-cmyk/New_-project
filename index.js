const toggleBtn = document.getElementById("themeToggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");
  const isLight = document.body.classList.contains("light-theme");
  
  toggleBtn.innerHTML = isLight
    ? "<i class='fas fa-sun'></i>"
    : "<i class='fas fa-moon'></i>";
});

const typedTextSpan = document.querySelector(".type-text");
//const cursorSpan = document.querySelector(".cursor");
const textArray = [
  "Software Engineer",
  "Web Developer",
  "Python Developer",
  "Problem Solver",
];
const typingDelay = 50;
const erasingDelay = 50;
const newTextDelay = 1000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    typedTextSpan.textContent = textArray[textArrayIndex].substring(
      0,
      charIndex - 1,
    );
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;

    // charIndex = 0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // On DOM Load initiate the effect
  if (textArray.length) setTimeout(type, newTextDelay + 250);
});



// window.addEventListener("scroll", () => {
//   document.querySelector(".navbar").classList.toggle("scrolled", window.scrollY > 50);
// });