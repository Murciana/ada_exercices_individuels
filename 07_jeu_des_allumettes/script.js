let matchesToPick = 50; //nombre d'allumettes au départ

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
		let playerEntry = parseInt(prompt(`Choose between ${minMatches} and ${maxMatches} matches to remove:`));

		// Valider l'entrée de l'utilisateur
		// Répéter la demande jusqu'à ce que l'entrée soit valide
		while (isNaN(playerEntry) || playerEntry < minMatches || playerEntry > Math.min(maxMatches, matchesNumber)) { //Math : méthode qui calcule la valeur minimum entre les allumettes restantes et le nombre max a retirer  
			playerEntry = parseInt(prompt(`Invalid input. You must choose between ${minMatches} and ${Math.min(maxMatches, matchesNumber)} matches:`))
			} 

		// MAJ du nombre d'allumettres restantes 
		matchesNumber -= playerEntry
		console.log(`There are ${matchesNumber} matches left.`);

		//on vérifie si le joueur a gagné
		if (matchesNumber <= 0) {
			alert(`Congratulations Player ${playersNumber[currentPlayerIndex]}. You won!`);
			// Fin du jeu
		} else { 
      	// Passer au joueur suivant
      	// currentPlayerIndex + 1 pour passer au prochain joueur
      	// % playersNumber.length pour revenir au premier joueur après le dernier joueur
      	currentPlayerIndex = (currentPlayerIndex + 1) % playersNumber.length;
		}
	}
}
 matchesGame2(matchesToPick)
