const body = document.querySelector("body");
const button = document.createElement("button");

button.textContent = "Click me!";
body.appendChild(button);
const buttonSize = getElementSize(button);

const border = document.createElement("div");
border.id = "current";
border.style.width = "90vw";
border.style.height = "70vh";
border.style.border = "10px solid black";
body.appendChild(border);

let canClear = false;

button.addEventListener("click", (event) => {
  const currentDiv = document.getElementById("current");
  const currentDivSize = getElementSize(currentDiv);

  // Difference between Current Div size and Button Size
  const sizeDif = {
    width: currentDivSize.width - buttonSize.width,
    height: currentDivSize.height - buttonSize.height,
  };

  if (canClear) {
    // Reset square
    border.innerHTML = "";
    border.id = "current";
    border.style.backgroundColor = "white";
    canClear = false;
  }
  if (sizeDif.width <= 0 || sizeDif.height <= 0) {
    // Last Square
    currentDiv.style.backgroundColor = getRandomColor();
    canClear = true;
  } else {
    currentDiv.style.backgroundColor = getRandomColor();
    currentDiv.id = "";

    const newDiv = document.createElement("div");
    newDiv.id = "current";
    currentDiv.appendChild(newDiv);
  }
});

// Helper functions
function getRandomColor() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r},${g},${b})`;
}

function getElementSize(element) {
  let { width, height } = element.getBoundingClientRect();
  width = Math.floor(width);
  height = Math.floor(height);
  return { width, height };
}
