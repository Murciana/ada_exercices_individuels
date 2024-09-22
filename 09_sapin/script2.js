/**  ETAPE 1 : afficher un triangle d'étoiles 
 * 
 * **/

// 1.1 Afficher une ligne d'étoiles 
function afficherEtoiles(n) {
    let etoiles = '*'
    return etoiles.repeat(n) // renvoie nouvelle chaine de caractères qui contient le nombre de copie demandée, concaténées les unes aux autres.
}
// console.log(afficherEtoiles(2))

// 1.2 Afficher un carré d'étoiles 
function afficherRectangles(hauteur, largeur) {
    let rectangleEtoiles 
    
    let etoilesHauteur = afficherEtoiles(hauteur)
    let colonne = etoilesHauteur.split('')

    let etoilesLargeur = afficherEtoiles(largeur - 1)
    // etoilesLargeur = etoilesLargeur.repeat(largeur-1)

    let totalEtoiles = "";
    for (let etage = 0; etage < colonne.length; etage++) {
    totalEtoiles += colonne[etage] + "\n";
    rectangle = colonne[etage] + etoilesLargeur
    console.log(rectangle);
    }

}
afficherRectangles(5,5)

function afficherRectangle(hauteur, largeur) {
    let rectangleEtoiles 
    
    let etoilesHauteur = '*'
    etoilesHauteur = etoilesHauteur.repeat(hauteur)
    let colonne = etoilesHauteur.split('')

    let etoilesLargeur = '*'
    etoilesLargeur = etoilesLargeur.repeat(largeur-1)

    let totalEtoiles = "";
    for (let etage = 0; etage < colonne.length; etage++) {
    totalEtoiles += colonne[etage] + "\n";
    rectangle = colonne[etage] + etoilesLargeur
    console.log(rectangle);
    }

}
afficherRectangle(5,8)

//1.3 Afficher un triangle d'étoiles 
 function afficherTriangleDroite(n) {
      // comment afficher des lignes qui "s'allongent" un peu plus à chaque itération ?
    let triangle 
    let epine = "\\"
    let etoiles = '*'
    let totalEtoiles = ""

    for (let etage = 0; etage < n.length; etage++) {

    }
 }
 afficherTriangleDroite(5) 

 // function afficherPointeSapin(n) {
//     for(let i = 0 ; i < n ; i++) {
//         let forme = afficherTriangleGauche(i)
//         for(let j = 1 ; j <= i ; j++) {
//             forme += afficherTriangleDroite(j)
//         }
//     }
// }

// afficherPointeSapin(4)
