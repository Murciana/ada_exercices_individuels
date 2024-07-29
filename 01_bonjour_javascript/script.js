let firstname = prompt("Entrez-votre prenom")

function sayHello(prenom) {
    let message = "Bonjour ";
    let date = new Date();
    let hour = date.getHours();

    if (hour >= 18) {
        message = "Bonsoir ";
    }
    return message + prenom + " !";
}

let bonjour = sayHello(firstname)

document.querySelector('h1').innerText = bonjour

