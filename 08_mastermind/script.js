/* ETAPE 1 VERSION SIMPLIFIEE 
Combinaison à deviner : 2 pions de couleurs différentes 
12 essais, 4 choix de couleurs possibles. 3 fonctions :   
- Si la proposition est bien composée uniquement des 4 couleurs possibles et rien d’autre
- Une fonction qui retourne true ou false si la bonne combinaison est trouvée ou non
- Une fonction qui gère la partie (continuer tant que/fin si gagné)
*/
let codemakerCombination = ["purple", "yellow"]

function tryColors() {
let colorChoices = ["yellow", "green", "purple", "orange"]
let gameRules = alert(`Here are the 4 colors possible : ${colorChoices}`)
let codebreakerInput = prompt("Let's guess codemaker's 2-colors' combinaition")
let codebreakerProposition = codebreakerInput.split(',')

if (!codebreakerProposition.every((element) =>colorChoices.includes(element))) {
    codebreakerInput = prompt(`Invalid proposition. Please choose between ${colorChoices}`)
} 
    console.log(codebreakerProposition)
    return codebreakerProposition
}
tryColors()

function checkCombination() {

}

function gamePlay() {

}