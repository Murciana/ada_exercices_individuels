//JEU DES ALLUMETTES
// On décrit le jeu des allumettes : au départ, il y a un tas de 50 allumettes.
// Chacun à son tour, les deux joueurs ôtent obligatoirement entre 1 et 6 allumettes.
// Celui qui ôte la dernière allumette gagne.

// ETAPE 1
// Faire une fonction qui prend en paramètre le nombre d'allumettes à enlever du reste.
// Pour rappel, une nom de fonction doit décrire clairement ce que fait celle-ci.

//nb d'allumettes au déart : 50
//nb d'allumettres à piocher : entre 1 et 6

// ETAPE 2
// Demander a l'utilisateur combien d'allumettes il souhaite retirer tant qu’il y a des allumettes dans le tas. 
//Pour rappel, on a 50 allumettes au départ.

// ETAPE 3
// Limiter le nombre d’allumettes à pouvoir être retirées de 1 à 6.
// Ajouter a votre jeu la notion de victoire.

let matches = 50; //nombre d'allumettes au départ

function pickAMatch(matchesNumber) { // version avec récursivité 
	const minMatches = 1 
	const maxMatches = 6	
	
    let message = parseInt(prompt(`There are ${matchesNumber} matches. Choose between ${minMatches} and ${maxMatches} matches to remove:`));

	if (isNaN(message) || message < minMatches ||message > matchesNumber) {
		message(`Invalid input! You must choose between ${minMatches} and ${maxMatches} matches`)
		return pickAMatch(matchesNumber) // Appel récursif pour redemander une entrée valide
	} 

		matchesNumber -= message
		console.log(`There are ${matchesNumber} matches left.`);

	//on vérifie si le joueur a gagné
	if (matchesNumber <= 0) {
        alert("You have won!");
        return; // Fin du jeu
    }
	pickAMatch(matchesNumber); // Appel récursif de la fonction avec le nouveau nombre d'allumettes
} 
// pickAMatch(matches)

// ETAPE 4
// Rajouter un 2eme joueur à votre jeu.


function matchesGame(matchesNumber) { // version sans récursivité 
	const minMatches = 1 
	const maxMatches = 6	
	let currentPlayer = 0; // Alternance pour représenter le joueur 0 et 1
	
	//Boucle du jeu 
	while (matchesNumber > 0) {	
		// Affichage du joueur courant et du nombre d'allumettes restantes
		alert(`Your turn Player ${currentPlayer} : There are ${matchesNumber} matches left.`)
		let matchesPicked = parseInt(prompt(`Choose between ${minMatches} and ${maxMatches} matches to remove:`));

		while (isNaN(matchesPicked) || matchesPicked < minMatches || matchesPicked > Math.min(maxMatches, matchesNumber)) { //Math : méthode qui calcule la valeur minimum entre les allumettes restantes et le nombre max a retirer  
			matchesPicked = parseInt(prompt(`Invalid input. You must choose between ${minMatches} and ${Math.min(maxMatches, matchesNumber)} matches:`))
			} 

		// MAJ du nombre d'allumettres restantes 
		matchesNumber -= matchesPicked
		console.log(`There are ${matchesNumber} matches left.`);

	//on vérifie si le joueur a gagné
		if (matchesNumber <= 0) {
			alert(`Congratulations Player ${currentPlayer}. You have won!`);
			// Fin du jeu
		} else { 
			currentPlayer = (currentPlayer === 0) ? 1 : 0
		}
	}
}
// matchesGame(matches)

// ETAPE 5
// Proposer un mode multi-joueur. Demander à l’utilisateur, combien il y a de joueur et gérer la partie en conséquence.

function getPlayersNumber() {
	let askPlayersNumber = parseInt(prompt("Choose the number of players")); 
	return Array.from({ length: askPlayersNumber }, (_, i) => i + 1); // Créer un tableau avec les numéros des joueurs de 1 à askPlayersNumber
  }

function matchesGame2(matchesNumber) { // version sans récursivité 
	const minMatches = 1 
	const maxMatches = 6	
	
	
	let playersNumber = getPlayersNumber()
	let currentPlayerIndex = 0; // Initialiser l'indice du joueur actuel
	
	//Boucle du jeu 
	while (matchesNumber > 0) {	
		// Affichage du joueur courant et du nombre d'allumettes restantes
		// Demander au joueur de choisir un nombre d'allumettes à retirer
		alert(`Your turn Player ${playersNumber[currentPlayerIndex]} : There are ${matchesNumber} matches left.`)
		let matchesPicked = parseInt(prompt(`Choose between ${minMatches} and ${maxMatches} matches to remove:`));

		// Valider l'entrée de l'utilisateur
		// Répéter la demande jusqu'à ce que l'entrée soit valide
		while (isNaN(matchesPicked) || matchesPicked < minMatches || matchesPicked > Math.min(maxMatches, matchesNumber)) { //Math : méthode qui calcule la valeur minimum entre les allumettes restantes et le nombre max a retirer  
			matchesPicked = parseInt(prompt(`Invalid input. You must choose between ${minMatches} and ${Math.min(maxMatches, matchesNumber)} matches:`))
			} 

		// MAJ du nombre d'allumettres restantes 
		matchesNumber -= matchesPicked
		console.log(`There are ${matchesNumber} matches left.`);

		//on vérifie si le joueur a gagné
		if (matchesNumber <= 0) {
			alert(`Congratulations Player ${playersNumber[currentPlayerIndex]}. You have won!`);
			// Fin du jeu
		} else { 
      	// Passer au joueur suivant
      	// currentPlayerIndex + 1 pour passer au prochain joueur
      	// % playersNumber.length pour revenir au premier joueur après le dernier joueur
      	currentPlayerIndex = (currentPlayerIndex + 1) % playersNumber.length;
		}
	}
}
 matchesGame2(matches)

