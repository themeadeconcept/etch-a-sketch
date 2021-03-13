// Project Objectives

// Grid that loads when the page loads

// Be able to change the size of grid on command - i.e. grid should be dynamic

// Grid should be made with a function that takes in arguments (size)
const grid = document.querySelector(".grid");
const clearbtn = document.querySelector(".clear-btn");
let result = "";

displayGrid(16);

clearbtn.addEventListener("click", pickSize);

function pickSize() {
  result = prompt("Please enter a number for size of grid (1-80)");

  if (result === NaN) {
    result = prompt(
      "A number was not entered.  Please enter a number between 1-80"
    );
  } else if (result > 0 && result <= 80) {
    clearGrid();
    setGrid(parseInt(result));
    displayGrid(parseInt(result));
  } else {
    pickSize();
  }
}

function setGrid(size) {
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
}

function displayGrid(size) {
  // create an element for each number in size
  for (let i = 0; i < size * size; i++) {
    // creates the element
    let div = document.createElement("div");
    // adds class to the element
    div.classList = "gridBox";
    div.addEventListener("mouseover", highlight);
    grid.appendChild(div);
  }
}

// e represents the event target (AKA the button clicked)
function highlight(e) {
  // adds style using javaScript for the Mouseover
  e.target.style.backgroundColor = "red";
}

// Clears the grid
function clearGrid() {
  // creates an array from the child nodes of grid div
  const gridArray = Array.from(grid.childNodes);
  // loops through the array and removes each child div
  gridArray.forEach((element) => {
    grid.removeChild(element);
  });
}
