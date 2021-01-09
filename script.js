// bringing in all panels by using getelementByID or qwerySelector

const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    // removeActiveClases
    removeActiveClases();
    panel.classList.add("active");
  });
});

function removeActiveClases() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
