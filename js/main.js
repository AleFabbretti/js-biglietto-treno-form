const btnGenerator = document.querySelector(".btn-generator");
const btnCancel = document.querySelector(".btn-cancel");
const generatorNameElement = document.querySelector(".name-surname");
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

    // crea delle condizioni per applicare lo sconto in base all'età dell'utente
    if (age === "minorenne") {
        price -= price * 0.20;
        message = "Biglietto per minorenni" 
    } else if (age === "over-65") {
        price -= price * 0.40;
        message = "Biglietto per over 65"
    } else {
        price = km * 0.21;
        message = "Biglietto per Adulti"
    }

    // stampo prezzo biglietto con eventuale scontistica applicata su console
    console.log(`${price.toFixed(2)}€`);
    console.log(message);

    const ticket = document.querySelector(".ticket");

    const carriage = Math.floor(Math.random() * 10) + 1;
})