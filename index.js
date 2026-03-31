const toggleBtn = document.getElementById("themeToggle");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");
    const isLight = document.body.classList.contains("light-theme");
    // localStorage.setItem("theme", isLight ? "light" : "dark");
    toggleBtn.innerHTML = isLight ? "<i class='fas fa-sun'></i>" : "<i class='fas fa-moon'></i>";
});

