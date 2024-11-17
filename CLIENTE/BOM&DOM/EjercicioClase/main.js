const tareas = [];

const agregar = () => {
    const tarea = document.querySelector("#agree").value
    if (tarea) {
        tareas.push(tarea)
        document.querySelector("#agree").value = ""
    }
//   tareas.push(document.getElementById("agree").value)
};
 
const mostrar = () => {
  agregar();
  let lista = "<ul>"
  tareas.forEach(element => {
    lista += `<li>${element}</li>`
  });
  document.querySelector("#tareas").innerHTML = lista
};
