let estudiasteJavascript: boolean = true;

if (estudiasteJavascript) {
  console.log("Podes seguir viendo el curo");
} else {
  console.log("Primero tenes que ver el de JS");
}

let interMiami: number = 11;
let fcDallas: number = 11;
let messi: number = 1;
let juegaMessi: boolean = true;

let palabras: string = "Me emocione al verlo a Messi";

function jugar(equipo1: number, equipo2: number, juegaMessi: boolean): void {
  let motivo: string = "";
  if (juegaMessi) {
    equipo1 += messi;
    motivo = " porque juega Messi";
  }
  if (equipo1 > equipo2) console.log(`Gana equipo 1 ${motivo}`);
  if (equipo1 == equipo2) console.log("Empatan");
  if (equipo1 < equipo2) console.log("Gana equipo 2");
}
