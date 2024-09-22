let base = 'dictionnaire'

//TODO ajouter un bouton pour le début du jeu 
function wordIndications() { 
    document.getElementById("guessword").innerText =  base[0]
    document.getElementById("lettersnumber").innerText = base.length 
}
wordIndications()

function tryWord(word, base) {
	// TODO: fix jeu sensible à la casse.
    let wellPlaced = []; 
    let notInWord = [];  
    let missplaced = []; 
    
  	let arrayBase = base.split(''); 
    let arrayWord = word.split(''); 
    
	// for (let i = 0; i < arrayBase.length; i++) { //ajouter notinworld dans la boucle et supprimer la 2eme boucle (includes arrayword[i]), faire la boucle sur arrayword
  //       if (arrayBase[i] === arrayWord[i]) { 
  //     	wellPlaced.push(arrayWord[i]);       
  //       }	else {
  //           missplaced.push(arrayWord[i])        
  //           }
  //       }
  for (let i = 0; i < arrayWord.length; i++) { //ajouter notinworld dans la boucle et supprimer la 2eme boucle (includes arrayword[i]), faire la boucle sur arrayword
    if (arrayBase[i] === arrayWord[i]) { 
    wellPlaced.push(arrayWord[i]);       
    }	else if (!arrayBase.includes(arrayWord[i])){
      notInWord.push(arrayWord[i])
    } else {
        missplaced.push(arrayWord[i])        
        }
    }
    
    // for (const char of arrayWord) {
    // 	if (arrayBase.includes(char) === false) { 
    //   	notInWord.push(char)                      
    //   }
    // }
    return { wellPlaced: wellPlaced, missplaced: missplaced, notInWord: notInWord }
  }
//}

function guess() {
	let word = document.getElementById("word").value
	let result = tryWord(word, base)
    //console.log(result)
    document.getElementById("word").value = ''
    document.getElementById("try").innerText = word
    document.getElementById("well").innerText = 'Lettres bien placées dans le mot: '+result.wellPlaced.join(', ')
    document.getElementById("miss").innerText = 'Lettres mal placées dans le mot: '+result.missplaced.join(', ')
    document.getElementById("not").innerText = 'Lettres qui ne sont pas dans le mot: '+result.notInWord.join(', ')
    if (result.wellPlaced.length === base.length) {
        document.getElementById("win").innerText = 'Vous avez gagné !'
    }
}
