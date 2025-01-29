document.querySelector("#boton").addEventListener("click", () => {
  addGrade()
});

document.addEventListener("DOMContentLoaded", () => {
  showTable()
})

const addGrade = () => {
const name = document.querySelector("#name").value;
const asignatura = document.querySelector("#asignatura").value;
const nota = document.querySelector("#nota").value;

const data = [name, asignatura, nota];

let table = document.querySelector("table");
let tr = document.createElement("tr");
table.appendChild(tr);

// let td = document.createElement("td");
// td.textContent = "datos";
// tr.appendChild(td);

// let td1 = document.createElement("td");
// td1.textContent = "dats";
// tr.appendChild(td1);

// let td2 = document.createElement("td");
// td2.textContent = "datos";
// tr.appendChild(td2);

for (const datos of data) {
  let td = document.createElement("td");
  td.textContent = datos;
  tr.appendChild(td);
}


deleteButton(tr)
};



const showTable = () => {
const table = document.createElement("table");
const tr = document.createElement("tr");

const head = ["Nombre", "Asignatura", "Nota", "Eliminar"];

for (const thead of head) {
  const th = document.createElement("th");
  th.textContent = thead;
  tr.appendChild(th);
}

table.appendChild(tr);
document.querySelector("#salida").appendChild(table);
};



const deleteButton = (tr) => {
const tdDel = document.createElement("td");
const del = document.createElement("button");
del.textContent = "Eliminar";

del.addEventListener("click", () => {
  tr.remove();
});

tdDel.appendChild(del);
tr.appendChild(tdDel);
};











// Ejercicio 2.

document.querySelector("#boton1").addEventListener("click",function() {
  
const file = document.querySelector("#xml").value
  procesarXML(file)

});

const procesarXML = (file) => {
  const parser = new DOMParser()
  const xml = parser.parseFromString(file,"text/xml")

  const table = document.createElement("table")
  const encabezado = table.createTHead().insertRow()

  const arrHead = ["Nombre", "Asignatura", "Nota"]

  for (const element of arrHead) {
    let th = document.createElement("th")
    th.textContent = element
    encabezado.appendChild(th)
  }

  const alumno = xml.documentElement.getElementsByTagName("alumno")
  console.log(alumno)

  for (const elemento of alumno) {
    console.log(elemento)
    let tr = document.createElement("tr")
    let arrXML = [elemento.querySelector("nombre").textContent,
      elemento.querySelector("asignatura").textContent,
      elemento.querySelector("nota").textContent
    ]

    for (const element of arrXML) {
      let td = document.createElement("td")
      td.textContent = element
      tr.appendChild(td)
    }
    
  }

  document.body.appendChild(table)


}





// Descomentar y copiar para probar.
//  `<?xml version="1.0 encoding="UTF-8"?>
// <notas>
//     <alumno>
//       <nombre>Albert Einstein</nombre>
//       <asignatura>Servidor</asignatura>
//       <nota>10</nota>
//     </alumno>
    
//     <alumno>
//       <nombre>Marie Curie</nombre>
//       <asignatura>Cliente</asignatura>
//       <nota>9.8</nota>
//     </alumno>

//     <alumno>
//       <nombre>Isaac Newton</nombre>
//       <asignatura>Marcas</asignatura>
//       <nota>9.9</nota>
//     </alumno>
    
//     <alumno>
//       <nombre>Galileo Galilei</nombre>
//       <asignatura>Cliente</asignatura>
//       <nota>9.6</nota>
//     </alumno>

// </notas>`