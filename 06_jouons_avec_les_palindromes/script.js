/* ETAPE 1
Créer une fonction isValidDate qui prend en paramètre une date en string et determine si elle est valide. 
Pour qu'une date soit valide, il faut qu'elle existe et qu'elle soit au format DD/MM/AAAA.
Tout au long de l’exercice, on supposera des années supérieures à 999 et inférieures 9999 - autrement dit, 
l’année sera systématiquement représentée sur 4 caractères.

isValidDate("03/04/2001") // true
isValidDate("03/14/2001") // false car 14 n'est pas un mois valide

Vous aurez probablement besoin de créer une autre fonction maxDaysInMonth pour vous assurer que le nombre de jours par mois est valide 
(ex: le 31/11 n’est pas valide, le mois de novembre ne contient que 30 jours)*/

function isValidDate(dateStr, format) {
	let regex; //va être utilisée pour vérifier si une chaîne de caractères représente une date au format DD/MM/YYYY

	//on définit le format de la date
	if (format === "DD/MM/YYYY") {
		regex = /^\d{2}\/\d{2}\/\d{4}$/;
	} else {
		return false; // Format non supporté
	}
	// teste si le format de la date en paramètre matche
	if (!regex.test(dateStr)) {
		return false; // La date ne correspond pas au format attendu
	}

	//on sépare la chaine de caractères de date selon le format
	let parts = dateStr.split("/");
	// on converti les différentes parties de la date en entiers
	let day = parseInt(parts[0], 10); // on converti la sous-chaine de caractères en base de 10
	let month = parseInt(parts[1], 10);
	let year = parseInt(parts[2], 10);

	if (year < 1000 || year > 9999) {
		//l'année est comprise entre 1000 et 9999 pour tjs être représentée sous 4 caractères
		return false;
	}

	if (month < 1 || month > 12) {
		// le mois est tjs compris entre 1 et 12
		return false;
	}

	if (day < 1 || day > maxDaysInMonth(month, year)) {
		// le jour est compris entre 1 et le nombre max de jours selon le mois de l'année
		return false;
	}
	return "la date est valide";
}
/* maxDaysInMonth retourne le nombre de jours dans un mois donné, en prenant en compte l'année pour vérifier si le mois de février 
est dans une année bissextile ou non.
*/
function maxDaysInMonth(month, year) {
	switch (month) {
		case 2:
			// Pour le mois de février, on vérifie si l'année est bissextile
			//Une année est bissextile si elle est divisible par 4, et pas divisible par 100, ou divisible par 400
			if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
				return 29;
			} else {
				return 28;
			}
		case 4:
		case 6:
		case 9:
		case 11: //Avril, Juin, Septembre, Novembre  ont tjs 30 jours
			return 30;
		default:
			return 31; // les autres mois ont tjs 31 jours (janvier, mars, mai, juillet, août, octobre, décembre)
	}
}

//console.log(isValidDate("11/02/2011", "DD/MM/YYYY"));
//console.log(isValidDate("03/14/2001", "DD/MM/YYYY"));
//console.log(isValidDate("29/02/2000", "DD/MM/YYYY"));
//console.log(isValidDate("29/02/2001", "DD/MM/YYYY"));

/* ETAPE 2
Créer une fonction isPalindrome qui prend une date en string en paramètre et retourne un booléen 
qui indique si la date est un palindrome. Si la date est invalide, retourner false.

Exemple de date palindrome: 11/02/2011. Les caractères / ne sont pas pris en compte.
doit retourner : 
isPalindrome("11/02/2011") // true
isPalindrome("03/04/2001") // false
*/
//il faut vérifier si la date est valide et si la date est un palindrome
function isPalindrome(dateStr) {
	// on vérifie si la date est valide avant de vérifier si elle est un palindrome
	if (!isValidDate(dateStr, "DD/MM/YYYY")) {
		//console.log("La date n'est pas valide");
		return false; // Si la date n'est pas valide, retourne false
	}

	// on supprime les '/' de la chaîne de caractères
	let dateStrCleaned = dateStr.replace(/\//g, "");
	// on iverse la chaîne de caractères nettoyée
	let dateReverse = dateStrCleaned.split("").reverse().join("");
	// vérification du palindrome
	return dateStrCleaned === dateReverse; // test de la comparaison, return true ou false 

}

isPalindrome("11/02/2011"); // "C'est un palindrome"
isPalindrome("31/04/2020"); // "La date n'est pas valide" (avril a 30 jours)
isPalindrome("29/02/2020"); // "La date est invalide (car pas une année bissextile")
isPalindrome("29/02/2019"); // "La date n'est pas valide" (pas une année bissextile)
isPalindrome("02/02/2020"); // "C'est un palindrome"

/* ETAPE 3
Créer une fonction getNextPalindromes qui donne les x prochaines dates palindromes à compter 
d’aujourd’hui. La fonction prendra le x en paramètre.
*/
function getNextPalindromes(x) {
	let today = new Date(); //on récupère la date actuelle
	let palindromes = [];

	/* Boucle while qui continue tant que le nombre de dates palindromes trouvées (palindromes.length) 
	est inférieur à x. x est le nombre de palindromes à trouver */
	while (palindromes.length < x) {
		today.setDate(today.getDate() + 1); // On incremente la date actuelle d'un jour pour modifier today
		let day = String(today.getDate()).padStart(2, "0"); // on converti la date en string. assure que la chaîne a toujours au moins 2 caractères en ajoutant des zéros à gauche si nécessaire. Cela garantit que le jour est toujours représenté par deux chiffres, comme 01, 02, ..., 31.
		let month = String(today.getMonth() + 1).padStart(2, "0"); //on récupère le mois (0janvier-11déc) + 1 pour échelle de 1 à 12. .padStart(2, '0') garantit que le mois est toujours représenté par deux chiffres.
		let year = today.getFullYear(); //récupère l'année actuelle sous forme de nombre à quatre chiffres.

		let dateStr = day + "/" + month + "/" + year; //on concatène les variables pour former la date sous le format "DD/MM/YYYY"

		if (isPalindrome(dateStr)) {
			// On vérifie si dateStr est un palindrome en a ppelant la fonction isPalindrome
			palindromes.push(dateStr); //Si c'est un palindrome, alors dateStr est ajoutée au tableau palindromes à l'aide de palindromes.push(dateStr).
		}
	}

	return palindromes;
	// Une fois que le tableau palindromes contient x dates palindromes, la boucle s'arrête et le tableau est retourné par
	//la fonction getNextPalindromes
}

console.log(getNextPalindromes(8));
