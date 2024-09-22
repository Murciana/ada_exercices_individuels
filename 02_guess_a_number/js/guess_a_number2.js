/*******
document.write("<b>LESSON 1: PRINT HELLO WORLD USING VARIABLES</b><br><br>");

// To start we will create 2 variables:
var variable1 = 'Hello ';
var variable2 = 'World!<br><br>'; // <br> means line break in html
 
// Create a third variable by adding both variables:
var final_text = variable1 + variable2;

// Print the final result:
document.write(final_text);

document.write("<b>LESSON 2: SOLVE AN EQUATION</b><br><br>");

var n = 9;
var x = n*n;
document.write("Result of n*n=" + x);

document.write("<br><br><b>LESSON 3: PRINT NUMBERS FROM 1 TO 10</b><br><br>");

// Create a loop of 10 elements.
// Variable "i" starts with value 1 and while i<=10 it will increment 1 (i=i+1) 
for (var i=1; i<=10; i=i+1) {

  document.write(i); // Print the current "i" number

  // Print a comma followed by a space if i < 10
  if (i<10) {
    document.write(", ");
  }
}

function show_random_number() {

  var random_number = Math.random(); // generate random number between 0 and 1
  alert(random_number); // show popup with a random number
  
}
  */

let givenNumber 
function typeNumber () {
    givenNumber = prompt("Saissisez un nombre") 
    console.log("Le nombre saisi est " + givenNumber)
    return givenNumber
}
let misteryNumber = 22
function didIwin (givenNumber, misteryNumber) {
    if (givenNumber < misteryNumber) { 
        alert("plus grand")
        return false; // Retourne false si le nombre est plus petit
    } if (givenNumber > misteryNumber) {           
        alert("Plus petit")
        return false; // Retourne false si le nombre est plus grand    
    } if (givenNumber == misteryNumber) {
        console.log("Bravo ! Vous avez deviné le nombre")
        return true; // Retourne true si le nombre est correct 
    }
  }
function gamePlay(){
    let nombre_a_deviner = false
    while (!nombre_a_deviner) {
    let guess = typeNumber()
    nombre_a_deviner = didIwin(guess, misteryNumber)
    }
    alert("Merci d'avoir joué !")
}
//gamePlay()

let givenNumber2
function typeNumber2 () {
    givenNumber2 = parseInt(prompt("Saissisez un nombre entre 0 et 50")) // || --> pipe (ou)
        while (givenNumber2 <0 || givenNumber2 > 50)  {
            givenNumber2 = parseInt(prompt("Vous devez choisir entre un nombre compris entre 0 et 50 !"))
        }
        return givenNumber2 
}

misteryNumber = typeNumber2()
console.log("le nombre à deviner est " + misteryNumber)

function didIwin2 (a, b) {
    if (givenNumber2 < misteryNumber) { 
        alert("plus grand")
        return false; // Retourne false si le nombre est plus petit
    } if (givenNumber2 > misteryNumber) {           
        alert("Plus petit")
        return false; // Retourne false si le nombre est plus grand    
    } if (givenNumber2 == misteryNumber) {
        console.log("Bravo ! Vous avez deviné le nombre")
        return true; // Retourne true si le nombre est correct 
    }
  }
  function gamePlay2 (){
    let nombre_a_deviner = false
    while (!nombre_a_deviner) {
    let guess = typeNumber2()
    nombre_a_deviner = didIwin2(guess, misteryNumber)
    }
    alert("Merci d'avoir joué !")
}
gamePlay2()
