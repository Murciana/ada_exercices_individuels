/* ETAPE 2 - COMBINAISONS 4 COULEURS ET 8 CHOIX POSSIBLES
   ETAPE 3 - LES COMBINAISONS PEUVENT AVOIR PLUSIEURS FOIS LA MEME COULEUR
   ETAPE 4 - L'ORDINATEUR GENERE LES COMBINAISONS DE MANIERE ALEATOIRE
*/
let comboTests = 12

let colorChoices = ["yellow", "green", "purple", "orange", "pink", "red", "blue", "grey"]

let codemakerCombination = Array.from({ length: 4 }, () => colorChoices[Math.floor(Math.random() * colorChoices.length)]);
console.log("codeMaker's proposition: ",codemakerCombination);

function tryColors() {
    let codebreakerInput = prompt(`Let's guess codemaker's 4-colors combination. \nHere are the ${colorChoices.length} colors possible : ${colorChoices}`)
    let codebreakerProposition = codebreakerInput.split(',') // on sépare les différentes couleurs de la chaine de caractère
    
    // On vérifie que la longueur est exactement 2 et que chaque couleur proposée est dans `colorChoices`
    while ((codebreakerProposition.length < codemakerCombination.length) || (codebreakerProposition.length > codemakerCombination.length) || !codebreakerProposition.every((element) =>colorChoices.includes(element))) { 
        codebreakerInput = prompt(`Invalid proposition. Please choose between ${colorChoices}`)    
        codebreakerProposition = codebreakerInput.split(','); // mise à jour 
    } 
    console.log("codeBreaker's proposition: ",codebreakerProposition)
    return codebreakerProposition
}

function checkCombination() {
    let codebreakerCombination = tryColors()
   
    let wellPlaced = []; 
    let missPlaced = [];
    let notInCombo = [];  

    for (let i = 0; i < codebreakerCombination.length; i++) { 
        if (codemakerCombination[i] == codebreakerCombination[i]) { 
            wellPlaced.push(codebreakerCombination[i]);       
        } else if (!codemakerCombination.includes(codebreakerCombination[i])){
            notInCombo.push(codebreakerCombination[i])
        } else {
            missPlaced.push(codebreakerCombination[i])        
        }
    }        
    comboTests --
    console.log(`You have ${comboTests} tests left`);        
    
    return { wellPlaced: wellPlaced, missPlaced: missPlaced, notInCombo: notInCombo }
}       

function gamePlay() {
    let result = checkCombination()
    console.log("Your result is : ", result);
      
    if (result.wellPlaced.length === codemakerCombination.length) {
        console.log("you won");        
    }
    else if (comboTests === 0 ) {
        console.log("you lose");
    }
    else {
        // Si la combinaison est incorrecte mais qu'il reste des essais
        console.log(`You found ${result.wellPlaced.length} well placed color(s), try again!`)         
        gamePlay(); // Relancer un nouveau tour
    }   
}
gamePlay()

