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
        let red = Math.random() * 255
        let green = Math.random() * 255
        let blue = Math.random() * 255
        div.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
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
  while (squaresNo > 100) {
    squaresNo = +prompt("Enter a number less than 100: ")
  }
  removeSquares(container)
  addSquares(squaresNo)
})

addSquares(16)