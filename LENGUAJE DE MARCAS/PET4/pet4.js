document.querySelector("#boton").addEventListener("click", () => {
  let blue = document.querySelector("#blue").value;
  let red = document.querySelector("#red").value;
  let green = document.querySelector("#green").value;

  let blueBox = document.createElement("div");
  blueBox.style("background-color: blue")
  let redBox = document.createElement("div");
  redBox.innerHTML("background-color: red")
  let greenBox = document.createElement("div");
  greenBox.style("background-color: green")

  if (!isNaN(blue)) {
    blue.appendChild(blueBox)
  }
  if (!isNaN(red)) {
    red.appendChild(redBox)
  }
  if (!isNaN(green)) {
    green.appendChild(greenBox)
  }
});
