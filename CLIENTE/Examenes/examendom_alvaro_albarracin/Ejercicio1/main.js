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
