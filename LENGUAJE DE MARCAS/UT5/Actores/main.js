document.querySelector("#boton").addEventListener("click", () => {
  const head = ["Nombre", "Apellidos", "Edad", "Sexo", "Pelicula"];
  let actor = [
    document.querySelector("#nombre").value,
    document.querySelector("#apellidos").value,
    document.querySelector("#edad").value,
    document.querySelector(`input[name="genero"]:checked`).value,
    document.querySelector("#peli").value,
  ];

  let table = document.querySelector("#creado");

  if (!table) {
    let tabla = document.createElement("table");
    tabla.id = "creado";

    let header = document.createElement("thead");
    for (const element of head) {
      let th = document.createElement("th");
      th.textContent = element;
      header.appendChild(th);
    }

    let body = document.createElement("tbody");
    body.id = "cuerpo";
    let tr = document.createElement("tr");
    for (const element of actor) {
      let td = document.createElement("td");
      td.textContent = element;
      tr.appendChild(td);
    }

    body.appendChild(tr);

    tabla.appendChild(header);
    tabla.appendChild(body);
    document.body.appendChild(tabla);
  } else {
    let tr = document.createElement("tr");
    for (const element of actor) {
      let td = document.createElement("td");
      td.textContent = element;
      tr.appendChild(td);
    }
    document.querySelector("#cuerpo").appendChild(tr);
  }
});

document.querySelector("#boton1").addEventListener("click", () => {
    generarXML()
});

const generarXML = () => {
//   const xmlString = `<?xml version="1.0" encoding="UTF-8"?> <actores></actores>`;
//   // Parseamos la cadena XML
//   const parser = new DOMParser();
//   const xmlDoc = parser.parseFromString(xmlString, "text/xml");

const xml = new DOMParser().parseFromString('<actors></actors>', 'text/xml')
const actores = xml.documentElement

let tabla = document.querySelector("creado")
let filas = tabla.rows
console.log(filas)
};
