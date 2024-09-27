/* ETAPE 1 VERSION SIMPLIFIEE 
Combinaison à deviner : 2 pions de couleurs différentes 
12 essais, 4 choix de couleurs possibles. 3 fonctions :   
- Si la proposition est bien composée uniquement des 4 couleurs possibles et rien d’autre
- Une fonction qui retourne true ou false si la bonne combinaison est trouvée ou non
- Une fonction qui gère la partie (continuer tant que/fin si gagné)
*/
let attemptsIndex = 12 // on initialise le nombre d'essais possibles 
let codemakerCombination = ["purple","yellow"] //combinaison proposée par le Codemaker
console.log("codeMaker's proposition: ",codemakerCombination);

function tryColors() { 
//Fonction qui demande au joueur de proposer des combinaisons de couleur
    let colorChoices = ["yellow", "green", "purple", "orange"]
    let codebreakerInput = prompt(`Let's guess codemaker's 2-colors combination. \nHere are the 4 colors possible : ${colorChoices}`)
    let codebreakerProposition = codebreakerInput.split(',') // on sépare ensuite les différentes couleurs de la chaine de caractère
    
    // On vérifie que la proposition contient bien 2 couleurs et que chaque couleur proposée est incluses dans `colorChoices`
    while ((codebreakerProposition.length < 2) || (codebreakerProposition.length > 2) || !codebreakerProposition.every((element) =>colorChoices.includes(element))) { 
        codebreakerInput = prompt(`Invalid proposition. Please choose between ${colorChoices}`)    
        codebreakerProposition = codebreakerInput.split(','); 
    } 
    console.log("codeBreaker's proposition: ",codebreakerProposition)
    return codebreakerProposition
}

function checkCombination() {
//Fonction qui vérifie si la proposition du joueur correspond à la combinaison du Codemaker
    let codebreakerCombination = tryColors()
   
    let wellPlaced = []; //contiendra les propositions trouvées et bien placées 
    let missPlaced = []; //contiendra les propositions trouvées mais mal placées
    let notInCombo = [];  //contiendra les propositions qui ne sont pas dans la combinaison

    for (let i = 0; i < codebreakerCombination.length; i++) { 
    //on parcourt la combinaison du Codemaker et on vérifie les correspondances pour chaque élément de la proposition
        if (codemakerCombination[i] == codebreakerCombination[i]) { 
            wellPlaced.push(codebreakerCombination[i]);       
        } else if (!codemakerCombination.includes(codebreakerCombination[i])){
            notInCombo.push(codebreakerCombination[i])
        } else {
            missPlaced.push(codebreakerCombination[i])        
        }
    }        
    attemptsIndex -- //on retire un essai restant à chaque appel de la fonction 
    console.log(`You have ${attemptsIndex} tests left`);        
    
    return { wellPlaced: wellPlaced, missPlaced: missPlaced, notInCombo: notInCombo }
    //le resultat de la vérification est retourné dans un objet 
}       

function gamePlay() {
//Fonction qui gère le jeu 
    let result = checkCombination()
    console.log("Your result is : ", result);
      
    if (result.wellPlaced.length === codemakerCombination.length) {
    //la partie est gagnée si tous les éléments bien placés correspondent à la combinaison du Codemaker
        console.log("you won");        
    }
    else if (attemptsIndex === 0 ) {
    // la partie est perdue quand il n'y a plus d'essai restant
        console.log("you lose");
    }
    else {
        // Si la combinaison est incorrecte mais qu'il reste des essais
        console.log(`You found ${result.wellPlaced.length} well placed color(s), and missplaced ${result.missPlaced.length} color(s). ${result.notInCombo.length} is\\are not in the combo. \nTry again!`)         
        gamePlay(); //On relance un nouveau tour
    }   
}
gamePlay()
