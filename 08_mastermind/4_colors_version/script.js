/* ETAPE 2 - COMBINAISONS 4 COULEURS ET 8 CHOIX POSSIBLES
   ETAPE 3 - LES COMBINAISONS PEUVENT AVOIR PLUSIEURS FOIS LA MEME COULEUR
   ETAPE 4 - L'ORDINATEUR GENERE LES COMBINAISONS DE MANIERE ALEATOIRE
*/
let attemptsIndex = 12 // on initialise le nombre d'essais possibles 

let colorChoices = ["yellow", "green", "purple", "orange", "pink", "red", "blue", "grey"] //liste des couleurs disponibles pour composer la combinaison

let codemakerCombination = Array.from({ length: 4 }, () => colorChoices[Math.floor(Math.random() * colorChoices.length)]);
//Création de la combinaison de 4 couleurs en créant un tableau de façon aléatoire 
console.log("codeMaker's proposition: ",codemakerCombination);

function tryColors() {
    let codebreakerInput = prompt(`Let's guess codemaker's 4-colors combination. \nHere are the ${colorChoices.length} colors possible : ${colorChoices}`)
    let codebreakerProposition = codebreakerInput.split(',') // on sépare les différentes couleurs de la chaine de caractère

    // On vérifie que la proposition du joueur contient bien le nombre de coulurs de la combinaison à deviner et que chaque couleur proposée est incluse dans `colorChoices`
    while ((codebreakerProposition.length < codemakerCombination.length) || (codebreakerProposition.length > codemakerCombination.length) || !codebreakerProposition.every((element) =>colorChoices.includes(element))) { 
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
    console.log(`You have ${attemptsIndex} attempts left`);        
    
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
        gamePlay(); // Relancer un nouveau tour
    }   
}
gamePlay()

