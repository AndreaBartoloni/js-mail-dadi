let btn = document.querySelector("#button");
let email = ["test@gmail.com", "prova@gmail.com"];

btn.addEventListener("click", function(){
    let richiestEmail = document.getElementById('richiesta-email').value;
    let verifica = document.getElementById('verifica');
    if (richiestEmail == email[0]) {
        verifica.innerHTML = "Autorizzazione Approvata.";
    } else {
        verifica.innerHTML = "Autorizzazione non concessa.";
    }

    if(richiestEmail == ""){
        verifica.innerHTML = "campo vuoto"
    }
});

const numeri = [1, 2, 3, 4, 5, 6];
let risultato = document.querySelector('#risultato');
risultato.addEventListener("click", function(){

    
    const numeroCasuale = Math.floor( Math.random() * 6 )
    let giocatore1 = numeri[numeroCasuale];
    let giocatore2 = numeri[numeroCasuale];
    
    if(giocatore1 %2 == 0){
        console.log("Ha vinto il giocatore 1:", giocatore1)
        
    }else{
        console.log("Ha vinto il giocatore 2:", giocatore2)
        
    }
});









 