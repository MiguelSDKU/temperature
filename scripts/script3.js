function practice() {
  console.log("Practice");
  let num1 = 10;
  let num2 = 10;

  if (num1 > num2) {
    console.log("The num1 is greater than num2");
  } else if (num1 < num2) {
    console.log("The num1 is less than the num2");
  } else {
    console.log("The numbers are equal");
  }
}

function license() {
  var age = prompt("Enter your age: ");
  if (age >= 18) {
    alert("Congratulations! You can get your driving license.");
  } else {
    alert("Sorry, you are too young to get a driving license.");
  }
}

function random() {
  let randomNumber = Math.floor(Math.random() * 10) + 1;
  console.log(randomNumber);
  var userNumber = Number(prompt("Guess a number between 1 and 10"));

  if (userNumber == randomNumber) {
    document.getElementById("random").innerHTML = `
    <div class="randomz">  
    <p>Name: YOU GOT THE CORRECT GUESS!!!</p>
    </div>
      `;
  } else {
    document.getElementById("random").innerHTML = `
    <div class="randomz">  
    <p>Name: YOU LOST!!!</p>
    </div>
      `;
  }
}

//Database simulation
let userName = "sjimenez@sdgku.edu";
let password = "Test1234";
function login() {
  //get the uname and pass from the user
  let uname = prompt("Enter your user name:");
  let pass = prompt("Enter your password:");
  //compare the inputs with the DB data
  if (uname == userName && pass == password) {
    document.getElementById("results").innerHTML =
      "Welcome to the system " + uname;
  } else {
    document.getElementById("results").innerHTML = "Invalid credentials";
  }
}
