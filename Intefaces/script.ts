interface Developer {
  nombre: string;
  edad: number;
  tecnologias: string[];
  tomaMate: boolean;
}

let dev: Developer = {
  nombre: "Juliano",
  edad: 20,
  tecnologias: ["javascript", "html", "css"],
  tomaMate: true,
};

function enviarCV(programador: Developer) {
  console.log(
    `Este CV es de ${programador.nombre} y tiene ${programador.edad}`
  );
}

enviarCV(dev);
