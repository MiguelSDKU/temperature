function practice() {
  console.log("Practice");
}

function conversion() {
  var celsius = Number(prompt("What's the temperatue?"));
  var result = (celsius * 9) / 5 + 32;

  document.getElementById("results").innerHTML = `
  <div class="results">  
  <p>It's currently ${result} Farenheit outside</p>
  </div>
    `;

  updateThermometer(result);
}

function updateThermometer(temp) {
  const thermometer = document.querySelector(".temperatura");
  let levelHeight = (temp / 110) * 700;

  levelHeight = Math.min(levelHeight, 700);
  levelHeight = Math.max(levelHeight, 0);

  const existingLevel = thermometer.querySelector(".level");
  if (existingLevel) {
    thermometer.removeChild(existingLevel);
  }

  const level = document.createElement("div");
  level.classList.add("level");
  level.style.height = `${levelHeight}px`;

  if (temp < 54) {
    level.classList.add("low");
  } else if (temp < 76) {
    level.classList.add("moderate");
  } else if (temp < 93) {
    level.classList.add("high");
  } else {
    level.classList.add("very-high");
  }

  thermometer.appendChild(level);
}
