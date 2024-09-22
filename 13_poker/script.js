/* ETAPE 1 - Écrire une fonction createDeck qui génère un deck de 52 cartes à jouer 
sous forme d'un  tableau de chaines de caractères type 1♠︎ ou V♣︎. */

// Fonction qui créé le jeu de 52 cartes en associant un symbole (values) et un chiffre (ranks)
function createDeck() { 
    const ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"] ;
    const values = ['♠', '♣', '♥', '♦']  ;

    // On associe un symbole à un chiffre et on ajoute les 52 cartes dans la variable deck 
    let deck = [];
    for (let value of values) {
        for (let rank of ranks) {
            deck.push(rank + value);        
        }        
    }

    /*Méthode qui permet de mélanger les cartes:
      On parrcourt le tableau de droite à gauche
      On définie l'index aléatoire J  de façon random en appliquant Math.floor et Math.random pour avoir un nombre entier 
      A chaque itération, on créé un tableau temporaire qui permet de mélanger les index i et j pour être sûr que les cartes soient mélangées
    */
    for (let i = deck.length - 1; i > 0 ; i--) { 
        const j = Math.floor(Math.random()*(i+1));   
        [deck[i],deck[j]] = [deck[j],deck[i]] ;        
    }
    return deck  // retourne le deck de 52 cartes mélangées 
}

/* ETAPE 2 - Pour la suite, un deck sera déclaré et stocké dans une variable deck
Écrire une fonction deal qui distribue (et donc retire du deck) un nombre de carte, le nombre doit être donné en paramètre.
*/
const deck = createDeck()

function deal(cardsToPick){
        let cardsPicked =  deck.splice(-(cardsToPick)) // on retire du deck le nombre de cartes à retirer en partant des dernières cartes
        return cardsPicked
}

const player1 = deal(2)
console.log("cards picked by P1 ", player1); 

const player2 = deal(2)
console.log("cards picked by P2 ", player2);

console.log(deck.length, " remaining cards"); // on vérifie que les 4 cartes ont bien étées retirées du deck

/* ETAPE 3 -  Écrire une fonction flop qui retournera le flop, c'est à dire les 5 cartes 
posées au centre du jeu, communes à tous les joueurs.
*/ 

let currentTurn = 1 // tour actuel

function flop() {    
    const turnDeal = deal(5) // on retourne 5 cartes

    let burntCards = [] // contiendra les cartes brulées 
    let pickedCards = []   // contiendra les cartes sorties
}
flop()
