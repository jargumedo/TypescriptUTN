"use strict";
let estudiasteJavascript = true;
if (estudiasteJavascript) {
    console.log("Podes seguir viendo el curo");
}
else {
    console.log("Primero tenes que ver el de JS");
}
let interMiami = 11;
let fcDallas = 11;
let messi = 1;
let juegaMessi = true;
let palabras = "Me emocione al verlo a Messi";
function jugar(equipo1, equipo2, juegaMessi) {
    let motivo = "";
    if (juegaMessi) {
        equipo1 += messi;
        motivo = " porque juega Messi";
    }
    if (equipo1 > equipo2)
        console.log(`Gana equipo 1 ${motivo}`);
    if (equipo1 == equipo2)
        console.log("Empatan");
    if (equipo1 < equipo2)
        console.log("Gana equipo 2");
}
