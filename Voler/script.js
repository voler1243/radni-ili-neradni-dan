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