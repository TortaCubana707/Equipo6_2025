// --- Filtro por nivel ---
function filterProjects(level) {
  const cards = document.querySelectorAll(".card");
  cards.forEach(card => {
    if (level === "all") {
      card.style.display = "block";
    } else {
      card.style.display = card.classList.contains(level) ? "block" : "none";
    }
  });
}

// --- Buscador ---
document.getElementById("search").addEventListener("keyup", function() {
  const value = this.value.toLowerCase();
  const projects = document.querySelectorAll(".project");
  projects.forEach(project => {
    const text = project.innerText.toLowerCase();
    project.style.display = text.includes(value) ? "block" : "none";
  });
});

// --- Accordion funcional (opcional) ---
const accordions = document.querySelectorAll(".accordion");
accordions.forEach(acc => {
  acc.addEventListener("click", function() {
    const panel = this.nextElementSibling;
    panel.style.display = panel.style.display === "block" ? "none" : "block";
  });
});
