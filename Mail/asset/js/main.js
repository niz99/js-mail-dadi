let listaMail = [
    "imone@gmail.com",
    "edoardo@gmail.com",
    "paolo@gmail.com",
    "nizar@gmail.com",
    "nicolo@gmail.com",
    "martina@gmail.com",
    "francesco@gmail.com",
    "valeria@gmail.com",
    "giorgia@gmail.com",
    "cristian@gmail.com",
];

let mail = prompt("Inserisci la tua mail: ");

let mailAutorizzata = false;

for(let i = 0; i < listaMail.length; i++) {

    if(mail == listaMail[i]) {
        mailAutorizzata = true;
    }

}

if(mailAutorizzata == true) {
    document.getElementById("container").innerHTML = `<h1 class="true">Mail corretta, sei autorizzato</h1>`;
} else {
    document.getElementById("container").innerHTML = `<h1 class="false">Mail non corretta, non sei autorizzato</h1>`;
}

