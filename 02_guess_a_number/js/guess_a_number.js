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


let givenNumber1;
function type_a_number() {
  givenNumber1 = parseInt(prompt("Saisissez un nombre"));
  console.log("Le nombre saisi est :", givenNumber1);
  return givenNumber1;
}
let givenNumber2 = 22;
function didIWin(givenNumber1, givenNumber2) {
  if (givenNumber1 < givenNumber2) {
    alert("Plus grand");
    return false; // Retourne false si le nombre est plus petit
  } else if (givenNumber1 > givenNumber2) {
    alert("Plus petit");
    return false; // Retourne false si le nombre est plus grand
  } else {
    alert("Bravo ! Vous avez deviné le nombre");
    return true; // Retourne true si le nombre est correct
  }
}
function gamePlay() {
  let numberMystery = false;
  while (!numberMystery) { //négation 
    let guess = type_a_number(); // Demande à l'utilisateur de saisir un nombre
    numberMystery = didIWin(guess, givenNumber2); // Vérifie si le nombre a été deviné
  }
  // Une fois que numberMystery est true, le jeu s'arrête
  alert("Merci d'avoir joué !");
}
// Appeler la fonction gamePlay pour commencer le jeu
gamePlay();
