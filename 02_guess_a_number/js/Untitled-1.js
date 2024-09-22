


let givenNumber3
function typeNumber3 () {
    givenNumber3 = parseInt(prompt("Saissisez un nombre entre 0 et 50"))
        while (givenNumber3 <0 || givenNumber3 > 50)  {
            givenNumber3 = parseInt(prompt("Vous devez choisir entre un nombre compris entre 0 et 50 !"))
        }
        return givenNumber3
}

function getValue() { 
  // Get the input element by its ID 
  let numbersaisi = document.getElementById("saisie"); 

  // Get the value of the input field 
  let value = numbersaisi.value; 

  // Display the value in an alert 
  console.log("Le nombre entré par joueur 1 est " + value); 
}
//getValue()

//misteryNumber2 = getValue()

function didIwin3 (a, b) {
  if (value< misteryNumber2) { 
      alert("plus grand")
      return false; // Retourne false si le nombre est plus petit
  } if (value > misteryNumber2) {           
      alert("Plus petit")
      return false; // Retourne false si le nombre est plus grand    
  } if (value == misteryNumber2) {
      console.log("Bravo ! Vous avez deviné le nombre")
      return true; // Retourne true si le nombre est correct 
  }
}
//didIwin3()

function gamePlay3 (){
  let nombre_a_deviner = false
  while (!nombre_a_deviner) {
  let guess = tvalue()
  nombre_a_deviner = didIwin(guess, misteryNumber2)
  }
  alert("Merci d'avoir joué !")
}
//gamePlay3()