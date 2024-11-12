"use strict";
class Pelicula {
    constructor(nombre, protagonistas, actores) {
        this.nombre = "Rapido y Furiosos";
        this.nombre = nombre;
        this.protagonistas = protagonistas;
        this.actores = actores;
    }
    proyectarEnCine() {
        console.log(this.nombre);
    }
}
const pelicula1 = new Pelicula("Rapido y Furiosos", ["Vin Diesel", "Michelle Rodriguez"], ["Vin Diesel", "Michelle Rodriguez"]);
