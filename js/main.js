const btnGenerator = document.querySelector(".btn-generator");
const btnCancel = document.querySelector(".btn-cancel");
const generatorNameElement = document.querySelector(".nameSurname");
const generatorOfferElement = document.querySelector(".offer");
const generatorCarriageElement = document.querySelector(".carriage");
const generatorCpElement = document.querySelector(".cp-code");
const generatorPriceElement = document.querySelector(".price");

btnGenerator.addEventListener(`click`, function() {
    // chiedi all'utente il nome e il cognome
    let nameSurname = document.getElementById("name").value;

    // chiedi all'utente il numero dei km che vuole percorrere
    let km = Number( document.getElementById("km").value);
    
    // chiedi all'utente l'età del passeggero
    let age = document.getElementById("age").value;

    console.log("nameSurname, distance, age");

    // crea una variabile in base al prezzo al km (pari a 0.21€)
    let price = km * 0.21;
    let offert = "Biglietto standard";

    // crea delle condizioni per applicare lo sconto in base all'età dell'utente
    if (age === `underage`) {
        price -= price * 0.20;
        offert = "Biglietto per minorenni" 
    } else if (age === `over`) {
        price -= price * 0.40;
        offert = "Biglietto per over 65"
    } 

    // stampo prezzo biglietto con eventuale scontistica applicata su console
    console.log(`${price.toFixed(2)}€`);
    console.log(`message`);

    const ticketElement = document.querySelector(".ticket");
    // aggiungo variabili per calcolare la carrozza e il numero randomico per il codice CP
    const carriage = Math.floor(Math.random() * 10) + 1;
    const cpRandom = Math.floor(Math.random() * 9999) + 90000;

    //ricavo i dati forniti dall'utente nella pagina 
    generatorNameElement.innerHTML = nameSurname;
    generatorOfferElement.innerHTML = offert;
    generatorCarriageElement.innerHTML = carriage;
    generatorCpElement.innerHTML = cpRandom;
    generatorPriceElement.innerHTML = (`${price.toFixed(2)}€`);


    ticketElement.classList.replace("d-none", "ticket");
});