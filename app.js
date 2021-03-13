// Project Objectives

// Grid that loads when the page loads

// Be able to change the size of grid on command - i.e. grid should be dynamic

// Grid should be made with a function that takes in arguments (size)
const grid = document.querySelector(".grid");

displayGrid(16);

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
  e.target.style.backgroundColor = "#343434";
}
