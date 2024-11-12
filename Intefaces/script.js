"use strict";
let dev = {
    nombre: "Juliano",
    edad: 20,
    tecnologias: ["javascript", "html", "css"],
    tomaMate: true,
};
function enviarCV(programador) {
    console.log(`Este CV es de ${programador.nombre} y tiene ${programador.edad}`);
}
enviarCV(dev);
