let giocatore = Math.floor(Math.random() * 6) + 1;
let pc = Math.floor(Math.random() * 6) + 1;

if(giocatore > pc) {
    console.log("Ha vinto il giocatore");
    document.getElementById("container").innerHTML = `Ha vinto il giocatore`;
} else if (giocatore < pc) {
    console.log("Ha vinto il pc");
    document.getElementById("container").innerHTML = `Ha vinto il pc`;
} else {
    console.log("Pari");
    document.getElementById("container").innerHTML = `Pari`;
}
