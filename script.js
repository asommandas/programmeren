console.log("hoi")

const buttonAchtergrond1 = document.getElementById("strik");
const buttonAchtergrond2 = document.getElementById("citroen");
const buttonAchtergrond3 = document.getElementById("bloem");


buttonAchtergrond1.addEventListener("click", function () {
    document.body.style.backgroundImage = "url('foto/achtergrond_strik.png')"
})

buttonAchtergrond2.addEventListener("click", function () {
    document.body.style.backgroundImage = "url('foto/achtergrond_citroen.png')"
})

buttonAchtergrond3.addEventListener("click", function () {
    document.body.style.backgroundImage = "url('foto/achtergrond_blauw.png')"
})

let h2Element = document.querySelector("h2");
let buttonStart = document.querySelector(".tekst button");

function kiesCake() {
    h2Element.textContent = "Kies een smaak cake";
}

buttonStart.addEventListener("click", kiesCake);

const standaard = document.querySelector("#zero");
const chocoBasis = document.querySelector("#chocoBasis");
const groteChoco = document.querySelector("#groteChoco");
let stap = 1

function kiesSmaak() {
    standaard.classList.add("onzichtbaar");
    glazuurRoze.classList.add("onzichtbaar");
    glazuurRozeChocoLaag1Strik.classList.add("onzichtbaar");
    glazuurRozeChocoLaag1Citroen.classList.add("onzichtbaar");
    stap = stap + 1;
    groteChoco.classList.add("zichtbaar");
    groteChoco.classList.remove("onzichtbaar");
    h2Element.textContent = "Klik op de roze glazuur";
}
chocoBasis.addEventListener("click", kiesSmaak);

const vanilleBasis = document.querySelector("#vanilleBasis");
const groteVanille = document.querySelector("#groteVanille");


const roze = document.querySelector("#roze");
const glazuurRoze = document.querySelector("#glazuurRoze");

function kiesGlazuur() {
    if (stap == 2) {

        standaard.classList.add("onzichtbaar");
        groteChoco.classList.add("onzichtbaar");
        glazuurRozeChocoLaag1Strik.classList.add("onzichtbaar");
        glazuurRozeChocoLaag1Citroen.classList.add("onzichtbaar");
        stap = stap + 1;

        glazuurRoze.classList.add("zichtbaar");
        glazuurRoze.classList.remove("onzichtbaar");

        h2Element.textContent = "Kies een leuke decoratie";
    } else {
        h2Element.textContent = "Kies eerst voor een taart";
        return
    }
}
roze.addEventListener("click", kiesGlazuur);

const geel = document.querySelector("#geel");
const glazuurGeel = document.querySelector("#glazuurGeel");


const strikDeco = document.querySelector("#strikDeco");
const glazuurRozeChocoLaag1Strik = document.querySelector("#glazuurRozeChocoLaag1Strik");

function kiesDecoStrik() {
    if (stap == 3) {
        standaard.classList.add("onzichtbaar");
        groteChoco.classList.add("onzichtbaar");
        glazuurRoze.classList.add("onzichtbaar");
        glazuurRozeChocoLaag1Citroen.classList.add("onzichtbaar");
        stap = stap + 1;

        glazuurRozeChocoLaag1Strik.classList.add("zichtbaar");
        glazuurRozeChocoLaag1Strik.classList.remove("onzichtbaar");

        h2Element.textContent = "Je bent klaar";
    }
    else {
        h2Element.textContent = "kies eerst voor glazuur";
        return
    }
}
strikDeco.addEventListener("click", kiesDecoStrik);

const citroenDeco = document.querySelector("#citroenDeco");
const glazuurRozeChocoLaag1Citroen = document.querySelector("#glazuurRozeChocoLaag1Citroen");

function kiesDecoCitroen() {

    standaard.classList.add("onzichtbaar");
    groteChoco.classList.add("onzichtbaar");
    glazuurRoze.classList.add("onzichtbaar");
    glazuurRozeChocoLaag1Strik.classList.add("onzichtbaar");

    glazuurRozeChocoLaag1Citroen.classList.add("zichtbaar");
    glazuurRozeChocoLaag1Citroen.classList.remove("onzichtbaar");

    h2Element.textContent = "Je bent klaar";
}
citroenDeco.addEventListener("click", kiesDecoCitroen);

