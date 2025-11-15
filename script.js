let container = document.querySelector("#container")
let button = document.querySelector("button")

function addSquares(sides) {
  for(let i = 0; i < sides * sides; i++) {
    let div = document.createElement("div")
      div.classList.add("div")
      container.appendChild(div)
      div.style.width = `${500 / sides}px`
      div.style.height = `${500 / sides}px`
      div.addEventListener("mouseenter", () => {
        div.classList.add("colored")
    })
  }
}

function removeSquares(container) {
  let divs = Array.from(document.querySelectorAll(".div"))
  for (let div of divs) {
    container.removeChild(div);
  }
}

button.addEventListener("click", () => {
  let squaresNo = +prompt("Enter the number of squares per side: ")
  removeSquares(container)
  addSquares(squaresNo)
})

addSquares(16)