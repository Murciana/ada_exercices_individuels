/* ETAPE 1 VERSION SIMPLIFIEE 
Combinaison à deviner : 2 pions de couleurs différentes 
12 essais, 4 choix de couleurs possibles. 3 fonctions :   
- Si la proposition est bien composée uniquement des 4 couleurs possibles et rien d’autre
- Une fonction qui retourne true ou false si la bonne combinaison est trouvée ou non
- Une fonction qui gère la partie (continuer tant que/fin si gagné)
*/
let comboTests = 12
let codemakerCombination = ["purple","yellow"]
console.log("codeMaker's proposition: ",codemakerCombination);

function tryColors() {
    let colorChoices = ["yellow", "green", "purple", "orange"]
    let codebreakerInput = prompt(`Let's guess codemaker's 2-colors combinaition. \nHere are the 4 colors possible : ${colorChoices}`)
    let codebreakerProposition = codebreakerInput.split(',') // on sépare les différentes couleurs de la chaine de caractère
    
    // On vérifie que la longueur est exactement 2 et que chaque couleur proposée est dans `colorChoices`
    while ((codebreakerProposition.length < 2) || (codebreakerProposition.length > 2) || !codebreakerProposition.every((element) =>colorChoices.includes(element))) { 
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

/* ETAPE 2 - COMBINAISONS 4 COULEURS ET 8 CHOIX POSSIBLES
*/