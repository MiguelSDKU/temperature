function practice() {
  console.log("Practice");
}

function conversion() {
  var selection = Number(
    prompt("Conversion to Celsius [1]     Conversion to Fahrenheit[2]")
  );

  if (selection == 1) {
    var fahrenheit = Number(prompt("What's the temperature?"));
    var celsius_conversion = ((fahrenheit - 32) * 5) / 9;
    document.getElementById("results").innerHTML = `
    <div class="results">  
    <p>It's currently ${celsius_conversion.toFixed(1)} Celsius outside</p>
    </div>
      `;
    updateThermometer2(celsius_conversion);
  } else if (selection == 2) {
    var celsius = Number(prompt("What's the temperature?"));
    var fahrenheit_conversion = (celsius * 9) / 5 + 32;
    document.getElementById("results").innerHTML = `
    <div class="results">  
    <p>It's currently ${fahrenheit_conversion.toFixed(1)} Fahrenheit outside</p>
    </div>
      `;
    updateThermometer(fahrenheit_conversion);
  } else {
    document.getElementById("results").innerHTML = `
    <div class="results">  
    <p>Select a valid option</p>
    </div>
      `;
  }
}

function rangeConversion() {
  var start = Number(prompt("Enter the starting temperature in Celsius:"));
  var end = Number(prompt("Enter the ending temperature in Celsius:"));

  if (isNaN(start) || isNaN(end) || start > end) {
    document.getElementById("results").innerHTML = `
    <div class="results">  
    <p>Please enter valid start and end temperatures, with start <= end.</p>
    </div>
    `;
    return;
  }

  var table = `
    <table>
      <thead>
        <tr>
          <th>Celsius</th>
          <th>Fahrenheit</th>
        </tr>
      </thead>
      <tbody>
  `;

  for (var celsius = start; celsius <= end; celsius++) {
    var fahrenheit = (celsius * 9) / 5 + 32;
    table += `
      <tr>
        <td>${celsius}</td>
        <td>${fahrenheit.toFixed(1)}</td>
      </tr>
    `;
  }

  table += `
      </tbody>
    </table>
  `;

  document.getElementById("results").innerHTML = table;
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

function updateThermometer2(temp) {
  const thermometer = document.querySelector(".temperatura");
  let levelHeight = (temp / 43) * 700;

  levelHeight = Math.min(levelHeight, 700);
  levelHeight = Math.max(levelHeight, 0);

  const existingLevel = thermometer.querySelector(".level");
  if (existingLevel) {
    thermometer.removeChild(existingLevel);
  }

  const level = document.createElement("div");
  level.classList.add("level");
  level.style.height = `${levelHeight}px`;

  if (temp < 15) {
    level.classList.add("low");
  } else if (temp < 23) {
    level.classList.add("moderate");
  } else if (temp < 37) {
    level.classList.add("high");
  } else {
    level.classList.add("very-high");
  }

  thermometer.appendChild(level);
}
