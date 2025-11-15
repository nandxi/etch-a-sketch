let container = document.querySelector("#container")
let button = document.querySelector("button")

function addSquares(sides) {
  for(let i = 0; i < sides; i++) {
    for(let j = 0; j < sides; j++) {
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
}

button.addEventListener("click", () => {
  let squaresNo = +prompt("Enter the number of squares per side: ")
  addSquares(squaresNo)
})