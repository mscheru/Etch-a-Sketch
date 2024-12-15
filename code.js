const container = document.querySelector("#container");
let width = window.innerWidth;
let height = window.innerHeight;
const containerRect = container.getBoundingClientRect();

const containerWidth = containerRect.width;
const containerHeight = containerRect.height;

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function createGrid(n) { 
  // Creates nxn grid
  for (let i = 0; i < n*n; i++) {
    const div = document.createElement("div");
    div.style.backgroundColor = "white";
    div.style.border = "1px solid black";

    div.classList.add('square');
    container.appendChild(div);
    div.dataset.opacity = 0;

    div.style.width = `${containerWidth / n}px`; 
    div.style.height = `${containerHeight / n}px`;

    div.addEventListener("mouseover", () => {
      currOpacity = parseFloat(div.dataset.opacity);
      currOpacity += .1;
      div.dataset.opacity = currOpacity;
      div.style.backgroundColor = `rgba(0, 0, 0, ${currOpacity})`;
      //div.style.backgroundColor = getRandomColor();
    })
  }
}

const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  container.innerHTML = '';
  const size = parseInt(prompt("Type in the new grid size :)"));
  if (size > 100) {
    size = 100;
  }
  createGrid(size);
})

function startSketch() {
  createGrid(16);
  //how to access all the divs???

}

startSketch();