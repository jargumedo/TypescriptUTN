class Sorteo<T> {
  private numero?: T;

  constructor(private nombre: string) {}

  getNumero() {
    return this.numero;
  }

  setNumero(numero: T) {
    this.numero = numero;
  }

  public sortear(): string {
    return `Para ${this.nombre} el ticket es ${this.numero}`;
  }
}

let sorteo = new Sorteo<number>("Juliano");
sorteo.setNumero(23812378);

sorteo.sortear();
