let students = ["Mike", "Brett", "Kevin", "Ryan", "Emilio", "Juan"];

function multiTable() {
  var numero = Number(prompt("Select a number to multiply"));
  // alert("Now you'll give me the range");
  var rango1 = Number(prompt("Give me the first number"));
  var rango2 = Number(prompt("Give me the second number"));
  for (let i = rango1; i < rango2 + 1; i++) {
    console.log(i + " x " + numero + " = " + i * numero);
  }
}

function challenge1() {
  var number = Number(prompt("Give me the number to find: "));
  for (let i = 1; i < 101; i++) {
    if (i == number) {
      console.log("I found it");
    } else {
      console.log(i);
    }
  }
}

let ages = [22, 35, 20, 43, 37, 33, 51, 27];
let total = 0;
let average = 0;

function practica() {
  for (let i = 0; i < 8; i++) {
    total += ages[i];
    // console.log(ages[i]);
    console.log(total);
  }
  average = total / ages.length;
  console.log(average);
}
