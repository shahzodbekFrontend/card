const card = document.querySelector(".card");
const container = document.querySelector(".container");
const body = document.querySelector("body");

let prev = 0;
let calc = 5;
const sensitivity = 1;
container.addEventListener("mouseover", (e) => {
  const x = e.clientX;
  container.addEventListener("mouseover", rotate);
  function rotate(e) {
    calc = (e.clientX + x) / sensitivity;
    card.style.transform = `
        rotateY(${calc + prev}deg)
        
        rotateX(${calc + prev}deg)
        `;
    body.style.cursor = "grabbing";
  }
  prev += calc;
  // window.addEventListener("mouseover", function () {
  //   section.removeEventListener("mouseout", rotate);
  //   body.style.cursor = "default";
  // });
});
