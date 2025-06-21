const toggle = document.getElementById("nav-toggle");
const navbar = document.getElementById("navbar");
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

toggle.addEventListener("click", () => {
  navbar.classList.toggle("show");
});

themeToggle.addEventListener("click", () => {
  body.classList.toggle("light-mode");
  localStorage.setItem("theme", body.classList.contains("light-mode") ? "light" : "dark");
});

// Charger le thème sauvegardé
if (localStorage.getItem("theme") === "light") {
  body.classList.add("light-mode");
}
// Ajouter un écouteur d'événement pour fermer le menu lors du clic en dehors
document.addEventListener("click", (event) => {
  if (!navbar.contains(event.target) && !toggle.contains(event.target)) {
    navbar.classList.remove("show");
  }
});