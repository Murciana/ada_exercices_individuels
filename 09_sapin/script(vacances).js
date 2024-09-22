/**  ETAPE 1 : afficher un triangle d'étoiles 
 * 
 * **/

// 1.1 Afficher une ligne d'étoiles 
function afficherEtoiles(n) {
    let etoiles = '*'
    return etoiles.repeat(n) // renvoie nouvelle chaine de caractères qui contient le nombre de copie demandée, concaténées les unes aux autres.
}

function afficherTronc(n) {
    let tronc = '#'
    return tronc.repeat(n) // renvoie nouvelle chaine de caractères qui contient le nombre de copie demandée, concaténées les unes aux autres.
}


// 1.2 Afficher un carré d'étoiles 
// function afficherRectangle(hauteur, largeur) {
//     let rectangleEtoiles 
//     let totalEtoiles = ""; // contiendra mon nombre total d'étoiles 

//     let etoilesHauteur = afficherTronc(hauteur)
//     let colonne = etoilesHauteur.split('')

//     let etoilesLargeur = afficherTronc(largeur - 1) // on enlève 1 étoile pour ne pas additionner avec l'étoile de la colonne

//     for (let etoile = 0; etoile < colonne.length; etoile++) { // pour chaque étage de ma colonne d'étoiles 
//         totalEtoiles += colonne[etoile] + "\n";                  //  j'ajoute une étoile à ma colonne et je reviens à la ligne 
//         rectangle = colonne[etoile] + etoilesLargeur            //   A cette colonne j'additionne le nombre d'étoiles pour la largeur 
//         console.log(rectangle);
       
//     }
// }
//afficherRectangle(5,5)

//1.3 Afficher un triangle d'étoiles gauche 
 function afficherTriangleDroite(n) {
    n = afficherEtoiles(n)
    let triangleDroit = ""   
    for (let i = 0; i < n.length; i++) {
        triangleDroit += afficherEtoiles(i) + "\\"
        //   console.log(triangleDroit + "\\");
        }
        return triangleDroit
}
//afficherTriangleDroite(5) 

 //1.4 Afficher un triangle d'étoiles gauche 
 function afficherTriangleGauche(n) {
    let triangleGauche = ""
    // En s'inspirant de la fonction afficherTriangleDroite(), 
    // comment aligner correctement les etoiles sur le bord de droite ?
    for (let i = 0; i < n; i++) {
      let espace = " ".repeat(n - i - 1); // Calcule le nombre d'espaces pour chaque ligne
      triangleGauche = espace + "/" + afficherEtoiles(i); // Utilise la fonction afficherEtoiles pour générer les étoiles
      //   console.log(espace + "/" + triangleGauche); // Construit et affiche la ligne avec les étoiles alignées
      }
      return triangleGauche
}
//afficherTriangleGauche(5)

// 1.5 Assemblage et décorations
// on ajout le tronc | 
// on ajoute l'étoile en haut au milieu + 
function afficherPointeSapin(n) {
    let etoilepointe = " ".repeat(n+1) + "+" 
    console.log(etoilepointe);
    for (let i = 0; i <= (n - 1); i++) {
        let espace = " ".repeat(n - i);
        let triangleGauche = "/" + afficherEtoiles(i);
        let triangleDroit = afficherEtoiles(i) + "\\";
        console.log(espace + triangleGauche + "|" + triangleDroit);
    }
}
//afficherPointeSapin(4)

/** ETAPE 2: Sapin à étages*/

//2.1 Afficher un étage : changer afficherPointeSapin pour afficher n’importe quel étage du sapin
function afficherEtage(hauteur, pointe_offset) {
    // comment sauter les premières lignes d'étoiles pour ne commencer qu'à la ligne numero 'pointe_offset' ?
    // afficherPointeSapin(hauteur) - le nombre de lignes à retirer 
    // let etage = afficherPointeSapin(hauteur)
    for (let i = pointe_offset; i < hauteur + pointe_offset; i++) {
        let espace = " ".repeat(hauteur + pointe_offset - i);
        let triangleGauche = "/" + afficherEtoiles(i);
        let triangleDroit = afficherEtoiles(i) + "\\";
        console.log(espace + triangleGauche + "|" + triangleDroit);
    }
 }
// afficherEtage(3, 0) // les 3 premières lignes
// afficherEtage(3, 1) // affiche à partir de la deuxième ligne, et continue sur 3 lignes
// afficherEtage(3, 2) // affiche à partie de la troisième lige, et continue sur 3 lignes

// 2.2 Aligner les étages

function afficherEtage2(hauteur, pointe_offset, espacement) {
       // afficher 'espacement' fois un espace ' '

    for (let i = pointe_offset; i < hauteur + pointe_offset; i++) {
        let espace = " ".repeat(espacement + hauteur + pointe_offset - i);
        let triangleGauche = "/" + afficherEtoiles(i);
        let triangleDroit = afficherEtoiles(i) + "\\";
        console.log(espace + triangleGauche + "|" + triangleDroit);
    }
 }
// afficherEtage2(3, 0, 3)
// afficherEtage2(3, 1, 2)
// afficherEtage2(3, 2, 1)
// afficherEtage2(3, 3, 0)

// NOTE : la pointe_offset = hauteur - espacement 
// espacement = hauteur - pointe offset 

// 2.3 assemblage du sapin 

function afficherSapin(etages, hauteur_etage) {
    // Initialisation du pointe_offset et de l'espacement
    let pointe_offset = 0;
    let espacement = hauteur_etage - 1;

    let etoilepointe = " ".repeat(hauteur_etage + espacement + 1) + "+" 
    console.log(etoilepointe);

    for (let i = 0 ; i < etages ; i++) {
        afficherEtage2(hauteur_etage, pointe_offset, espacement)
        // Mettre à jour les valeurs pour le prochain étage
        pointe_offset += 1;
        espacement -= 1;
    }
    let tronc = " ".repeat(hauteur_etage + espacement + 1) + afficherRectangle(etages, hauteur_etage)
}
  
  afficherSapin(3,3)