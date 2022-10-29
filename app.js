const card = document.querySelector(".card");
const container = document.querySelector(".container");
const body = document.querySelector('body')

let prev = 0
let calc = 0
const sensitivity = 2
container.addEventListener("mousedown", (e) => {
  const x = e.clientX;

  container.addEventListener("mousedown", rotate);
  function rotate(e) {
    calc = (e.clientX - x) / sensitivity;
    card.style.transform = `
        rotateY(${calc + prev}deg)
        `;
    body.style.cursor = "grabbing";
  }
  prev += calc;
  window.addEventListener("mouseup", function () {
    section.removeEventListener("mousemove", rotate);
    body.style.cursor = "default";
  });
});