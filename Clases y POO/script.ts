class Pelicula {
  nombre?: string = "Rapido y Furiosos";
  protagonistas?: string[];
  actores?: string[];

  constructor(nombre?: string, protagonistas?: string[], actores?: string[]) {
    this.nombre = nombre;
    this.protagonistas = protagonistas;
    this.actores = actores;
  }

  proyectarEnCine() {
    console.log(this.nombre);
  }
}

const pelicula1 = new Pelicula(
  "Rapido y Furiosos",
  ["Vin Diesel", "Michelle Rodriguez"],
  ["Vin Diesel", "Michelle Rodriguez"]
);
