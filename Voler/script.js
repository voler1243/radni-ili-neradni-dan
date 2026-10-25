var danas = new Date();
var broj = danas.getDay();

if (broj === 0) {
    console.log("Danas je nedjelja");
} else if (broj === 1) {
    console.log("Danas je ponedjeljak");
} else if (broj === 2) {
    console.log("Danas je utorak");
} else if (broj === 3) {
    console.log("Danas je srijeda");
} else if (broj === 4) {
    console.log("Danas je četvrtak");
} else if (broj === 5) {
    console.log("Danas je petak");
} else {
    console.log("Danas je subota");
}

if (broj === 0 || broj === 6) {
    console.log("Neradni dan");
} else {
    console.log("Radni dan");
}

if (broj === 1) {
    console.log("Ja najviše volim JS od svih programskih jezika");
} else if (broj === 4) {
    console.log("Mali petak!");
} else if (broj === 5) {
    console.log("Vikend na Vidiku!");
}

var unos = prompt("Unesite broj (1-17) ili naziv dana:");
var tekst = unos.toLowerCase();
var uneseniBroj = Number(unos);
var danBroj = 0;
var danNaziv = "";

if (tekst === "ponedjeljak") {
    danBroj = 1;
} else if (tekst === "utorak") {
    danBroj = 2;
} else if (tekst === "srijeda") {
    danBroj = 3;
} else if (tekst === "četvrtak") {
    danBroj = 4;
} else if (tekst === "petak") {
    danBroj = 5;
} else if (tekst === "subota") {
    danBroj = 6;
} else if (tekst === "nedjelja") {
    danBroj = 7;
}