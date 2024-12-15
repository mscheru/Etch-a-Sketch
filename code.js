const container = document.querySelector("#container");
let width = window.innerWidth;
let height = window.innerHeight;
const containerRect = container.getBoundingClientRect();

const containerWidth = containerRect.width;
const containerHeight = containerRect.height;

function createGrid(n) { 
  // Creates nxn grid
  for (let i = 0; i < n*n; i++) {
    const div = document.createElement("div");
    div.style.backgroundColor = "red";

    div.classList.add('square');
    container.appendChild(div);

    div.style.width = `${containerWidth / n}px`; 
    div.style.height = `${containerHeight / n}px`;
  }
}

function startSketch() {
  createGrid(16);
}

startSketch();