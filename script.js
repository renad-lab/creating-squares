document.getElementById("button").addEventListener("click", function () {
  const container = document.getElementById("container");
  const squares = container.querySelectorAll(".square");
  const lastSquare = squares[squares.length - 1];
  const newSquare = document.createElement("div");
  newSquare.classList.add("square");
  newSquare.style.width = parseInt(lastSquare.style.width) + 20 + "px"; //
  newSquare.style.height = parseInt(lastSquare.style.height) + 20 + "px"; //
  container.appendChild(newSquare);
});
