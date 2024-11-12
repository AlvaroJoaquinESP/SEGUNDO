const tareas = [];
const leeString = (pregunta) => {
    let unString;
    do {
      unString = prompt(pregunta);
    } while (unString.length == 0);
    return unString;
  };
  
  const leeNumber = (pregunta) => {
    let unNumber;
    do {
      unNumber = Number(prompt(pregunta));
    } while (unNumber < 0 || isNaN(unNumber));
    return unNumber;
  };
  
const agregarTareas = () => {
    let nombreP = leeString("Introduce el nombre de la nueva tarea")
  const tarea = {
    id: tareas.length,
    nombre: nombreP,
    completada: false,
  };
  tareas.push(tarea);
};

const marcarCompletadas = () => {
  let indice = leeNumber("Introduce el indice de la tarea completada");

  if (indice > tareas.length) {
    alert("Id tarea no existe");
  } else {
    tareas[indice].completada = true;
  }
};

const mostrarPendientes = () => {
  for (const element of tareas) {
    if (element.completada == false) {
      alert(`Tarea: ${element.id},<br>
         Nombre: ${element.nombre}`);
    }
  }
};

let opcion;
do {
    opcion=leeNumber(
    "¿Qué desea hacer?\n1. Agregar tarea\n2. Marcar tarea como completada\n3. Ver tareas pendientes\n4. Salir"
  );
  switch (opcion) {
    case 1:
      agregarTareas();
      break;

    case 2:
      marcarCompletadas();
      break;

    case 3:
      mostrarPendientes();
      break;

    case 4:
      "Fin";
      break;

    default:
      break;
  }
} while (opcion<4);

