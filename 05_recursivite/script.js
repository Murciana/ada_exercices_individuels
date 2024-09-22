// rappel : dans un objet on a des clés et des valeurs
const dossierPrincipal = {
	nom: "🗂️ Ada",
	contenu: [
		{
			nom: "🗂️ Projets collectifs Ada",
			contenu: [
				{
					nom: "🗂️ Pico8",
					contenu: [
						{
							nom: "📑 mariokart.p8",
						},
					],
				},
				{
					nom: "🗂️ Dataviz",
					contenu: [
						{
							nom: "📑 index.html",
						},
						{
							nom: "📑 script.js",
						},
					],
				},
			],
		},
		{ nom: "📑 CV.pdf" },
		{
			nom: "🗂️ Projets persos",
			contenu: [
				{
					nom: "🗂️ Portfolio",
					contenu: [
						{
							nom: "📑 index.html",
						},
						{
							nom: "📑 script.js",
						},
					],
				},
			],
		},
	],
};

function afficherDossier(dossier) {
	let dossierAda; //Pas besoin de le stocker dans une variable + console.log direct dans la fonction
	return (dossierAda = dossier.nom);
}

function afficherDossierIteratif(dossier) {
	let nouveauDossier = "";
	nouveauDossier += `${afficherDossier(dossier)}\n`; // On ajoute le nom du dossier principal au nouveau dossier

	for (const element of dossier.contenu) {
		// boucle qui parcourt chaque élément "contenu" du contenu du dossier principal
		nouveauDossier += `${element.nom}\n`; // on ajoute le nom de chaque élément au nouveau dossier (se traduit par : Pour chaque element dans le contenu du dossier, ajoute son nom)
	}
	return nouveauDossier; //retourne le résultat final avec le nom du dossier principal et chaque élémen dossier principal
}
console.log(
	"affichage de la fonction afficherDossierIteratif: \n" +
		afficherDossierIteratif(dossierPrincipal)
);

function afficherDossierRecursif(dossier, indentation = 0) {
	let nouveauDossier = ""; //Initialisation de la variable nouveauDossier qui stockera le résultat final
	const indent = "  ".repeat(indentation); // Indentation (deux espaces par niveau) on la répète et on revient au niveau de départ

	nouveauDossier += `${indent}${afficherDossier(dossier)}\n`; // on ajoute le nom du dossier principal avec indentation

	if (dossier.contenu) {
		// On vérifie si le dossier passé en paramètre a un attribut 'contenu', si oui -> il contient d'autres dossiers ou fichiers à traiter.
		for (const element of dossier.contenu) {
			// boucle qui parcourt chaque élément 'contenu' dans le dossier, chaque 'element' peut être soit un sous-dossier, soit un fichier. ("pour chaque élément 'contenu' de mon dossier")
			nouveauDossier += afficherDossierRecursif(element, indentation + 1); //Pour chaque element dans le contenu du dossier, j'appelle récursivement afficherDossierRecursif pour traiter ses sous-dossiers/fichiers.
		}
	}
	return nouveauDossier; // Retourne le contenu complet du dossier et de ses sous-dossiers une fois qu'il n'y a plus rien à traiter
}
console.log(
	"affichage de la fonction afficherDossierRecursif: \n" +
		afficherDossierRecursif(dossierPrincipal)
);

/** Tests précédents de fonctions: 

function afficherDossierRecursif2(dossier) {
    let nouveauDossier3 = ''
    if (dossier.contenu){
        nouveauDossier3 += afficherDossierIteratif(dossier)
    } else {
        afficherDossierRecursif2(dossier.contenu)
    }
    return nouveauDossier3
}
//console.log(afficherDossierRecursif2(dossierPrincipal));



 
**/
