let grid64 = "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr";
let grid144 = "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr";
let grid256 = "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr"
let container = document.querySelector(".container");
let clearBtn = document.querySelector("#clear");
let smallBtn = document.querySelector("#small");
let mediumBtn = document.querySelector("#medium");
let largeBtn = document.querySelector("#large");

smallBtn.addEventListener("click", function () {
  gridClearer();
  container.style.gridTemplateColumns =  grid64;
  gridCreator(64);
})

mediumBtn.addEventListener("click", function() {
  gridClearer();
  container.style.gridTemplateColumns = grid144;
  gridCreator(144);
  });

largeBtn.addEventListener("click", function () {
  gridClearer();
  container.style.gridTemplateColumns = grid256;
  gridCreator(256);
})

clearBtn.addEventListener("click", function () {
  let nodeList = document.querySelectorAll("#hover");
  nodeList.forEach((s) => {
    s.removeAttribute("id");
  })
})



function gridCreator(gridSize) {
  let i = 0;
    while(i<gridSize) {
      let square = document.createElement("div");
      square.setAttribute("class", "square");
      square.addEventListener("mouseover", function () {
        square.setAttribute("id", "hover");
      });     
      container.appendChild(square);
      i++;
    }
}

function gridClearer() {
  while(container.lastElementChild) {
    container.removeChild(container.lastElementChild);
  }
}






