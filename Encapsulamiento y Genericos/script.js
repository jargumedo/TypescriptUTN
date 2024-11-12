"use strict";
class Sorteo {
    constructor(nombre) {
        this.nombre = nombre;
    }
    getNumero() {
        return this.numero;
    }
    setNumero(numero) {
        this.numero = numero;
    }
    sortear() {
        return `Para ${this.nombre} el ticket es ${this.numero}`;
    }
}
let sorteo = new Sorteo("Juliano");
sorteo.setNumero(23812378);
sorteo.sortear();
