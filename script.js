let divArray = []
let container = document.querySelector("#container")

for(let i = 0; i < 16; i++) {
  let rowDiv = document.createElement("div")
  rowDiv.classList.add("row-div")
  for(let j = 0; j < 16; j++) {
    let div = document.createElement("div")
    div.classList.add("div")
    rowDiv.appendChild(div)
  }
  container.appendChild(rowDiv)
}
