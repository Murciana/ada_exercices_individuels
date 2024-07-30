/**  ETAPE 1 : afficher un triangle d'étoiles 
 * 
 * **/

// 1.1 Afficher une ligne d'étoiles 
function afficherEtoiles(n) {
    let etoiles = '*'
    return etoiles.repeat(n) // renvoie nouvelle chaine de caractères qui contient le nombre de copie demandée, concaténées les unes aux autres.
}

// 1.2 Afficher un carré d'étoiles 
function afficherRectangle(hauteur, largeur) {
    let rectangleEtoiles 
    let totalEtoiles = ""; // contiendra mon nombre total d'étoiles 

    let etoilesHauteur = afficherEtoiles(hauteur)
    let colonne = etoilesHauteur.split('')

    let etoilesLargeur = afficherEtoiles(largeur - 1) // on enlève 1 étoile pour ne pas additionner avec l'étoile de la colonne

    for (let etoile = 0; etoile < colonne.length; etoile++) { // pour chaque étage de ma colonne d'étoiles 
        totalEtoiles += colonne[etoile] + "\n";                  //  j'ajoute une étoile à ma colonne et je reviens à la ligne 
        rectangle = colonne[etoile] + etoilesLargeur            //   A cette colonne j'additionne le nombre d'étoiles pour la largeur 
        console.log(rectangle);
    }

}
// afficherRectangle(5,5)

//1.3 Afficher un triangle d'étoiles 
 function afficherTriangleDroite(n) {
      // comment afficher des lignes qui "s'allongent" un peu plus à chaque itération ?
    n = afficherEtoiles(n)
    let triangle 
    let epine = "\\"
    let totalEtoiles = ""

    for (let etoile = 0; etoile < n.length; etoile++) {
    
        totalEtoiles += n[etoile] + "\n"
        triangle = n[etoile] + epine
        console.log(triangle);
    }
 }
 afficherTriangleDroite(5) 
