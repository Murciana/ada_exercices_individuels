//a refaire en mettant un return dans la 1ere fonction + mettre characterList dans la boucle for
const monTexte = "Hello, world".replace(/[^a-zA-Z ]/g, '') // Remplacer tout caractère non alphabétique ou espace par une chaîne vide
 
function getLatinCharacterList(text) { 
	const listeCaracteres = text.split('')
return listeCaracteres
}
console.log(getLatinCharacterList(monTexte))

// Dictionnaire pour la traduction des lettres et symboles latins en code Morse
const latinToMorse = {
	'A':'.-',
	'B':'-...',
	'C':'-.-.',
	'D':'-..',
	'E':'.',
	'F':'..-.',
	'G':'--.',
	'H':'....',
	'I':'..',
	'J':'.---',
	'K':'-.-',
	'L':'.-..',
	'M':'--',
	'N':'-.',
	'O':'---',
	'P':'.--.',
	'Q':'--.-',
	'R':'.-.',
	'S':'...',
	'T':'-',
	'U':'..-',
	'V':'...-',
	'W':'.--',
	'X':'-..-',
	'Y':'-.--',
	'Z':'--..'
}
const morseToLatin = {
	'-': "T",
	'--': "M",
	'---': "O",
	'--.': "G",
	'--.-': "Q",
	'--..': "Z",
	'-.': "N",
	'-.-': "K",
	'-.--': "Y",
	'-.-.': "C",
	'-..': "D",
	'-..-': "X",
	'-...': "B",
	'.': "E",
	'.-': "A",
	'.--': "W",
	'.---': "J",
	'.--.': "P",
	'.-.': "R",
	'.-..': "L",
	'..': "I",
	'..-': "U",
	'..-.': "F",
	'...': "S",
	'...-': "V",
	'....': "H"
}

//convertit un caractère en morse 
function translateLatinCharacter(caractere) {
	const lettreMorse = caractere.toUpperCase();
    return latinToMorse[lettreMorse] || '/'; // Retourne le morse ou une chaîne vide si le caractère n'est pas trouvé

}
//translateLatinCharacter()//doit retourner ".-"
const lettreA = 'A';
console.log(`Morse pour la lettre "${lettreA}":`, translateLatinCharacter(lettreA))

// ETAPE 3
// Fonction pour encoder un texte en code Morse
function encode(text) {
	const characterList = getLatinCharacterList(text); // Récupère la liste des caractères
    let monMotEnMorse = ''; // Variable pour stocker le texte en code Morse
    // Boucle à travers chaque caractère du texte
    for (let i = 0; i < characterList.length; i++) {
	 // Ajoute la traduction Morse du caractère courant, ou une chaîne vide s'il n'est pas dans le dictionnaire
        monMotEnMorse += translateLatinCharacter(characterList[i]) + ' ';
    }

    console.log(`Morse pour le texte "${text}": ${monMotEnMorse.trim()}`); // `` permettent d'utiliser des guillemets / ${texte} sera remplacé par sa valeur 
    return monMotEnMorse.trim(); //Ajout de  trim() pour enlever les espaces supplémentaires à la fin de la chaîne Morse.
}
encode(monTexte); // doit retourner ".... . .-.. .-.. --- --..-- / .-- --- .-. .-.. -.."

// ETAPE 4
const MorseText = ".... . .-.. .-.. --- / .-- --- .-. .-.. -.." // attention au slash séparé par un espace. à refaire

function getMorseCharacterList(text) {
	const listeSymbolesMorse = text.split(' ')
	return listeSymbolesMorse
}
console.log(getMorseCharacterList(MorseText))

function translateMorseCharacter(caractere) {
	const symboleMorse = caractere; // vraiment necessaire ?
    return morseToLatin[symboleMorse] || ' '; // Retourne le morse ou une chaîne vide si le caractère n'est pas trouvé
}
const symboleMorseT = '-';
console.log(`Lettre pour le caractère "${symboleMorseT}":`, translateMorseCharacter(symboleMorseT)) // Doit donner la lettre T

function decode(text) {
	if (!text) {
		console.error('Le texte Morse à traduire ne doit pas être vide ou undefined.');
		return '';
    }
	const symbolesTexteMorse = getMorseCharacterList(text)
	let monMotEnLatin = '' 

	for (let i = 0; i < symbolesTexteMorse.length; i++) {
		// Ajoute la traduction Morse du caractère courant, ou une chaîne vide s'il n'est pas dans le dictionnaire
		   monMotEnLatin += translateMorseCharacter(symbolesTexteMorse[i]) + '' ;
	   }

    console.log(`Texte pour le message "${text}": ${monMotEnLatin.trim()}`); // `` permettent d'utiliser des guillemets / ${texte} sera remplacé par sa valeur 
    return monMotEnLatin.trim(); //Ajout de trim() pour enlever les espaces supplémentaires à la fin de la chaîne Morse.
}
decode(MorseText); // doit retourner "HELLO WORLD"
