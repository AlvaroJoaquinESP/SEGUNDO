const agenda = [];

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

const agregarContacto = () => {
  let nombreT = leeString("Introduzca nombre");
  let numTlfnoT = leeNumber("Introduzca número de teléfono");
  let emailT = leeString("Introduzca email");
  contacto = {
    nombre: nombreT,
    numTlfno: numTlfnoT,
    email: emailT,
  };
  agenda.push(contacto);
};

const buscarContactos = () => {
  let buscado = leeString("Introduzca el nombre del contacto a buscar");
  agenda.forEach((element) => {
    if (element.nombre == buscado) {
      console.log(`Nombre: ${element.nombre},
                Teléfono: ${element.numTlfno},
                Email: ${element.email}`);
    }
  });
};

const eliminarContacto = () => {
  let eliminado = leeString("Introduzca el nombre del contacto a eliminar");
  for (let i = 0; i < agenda.length; i++) {
    if (agenda[i].nombre == eliminado) {
        delete agenda[i]
    }
  }
};

const mostrarContactos = () => {
    agenda.forEach(element => {
        console.log(element)
    });
};

do {
  let opcion = leeNumber("Introduzca un número entre 1 y 4");
  switch (opcion) {
    case 1:
        agregarContacto()
      break;

    case 2:
        buscarContactos()
      break;

    case 3:
        eliminarContacto()
      break;

    case 4:
        mostrarContactos()
      break;
    default:
        alert("Merluzo")
        // La documentación dice que este break no es necesario pero se recomienda usarlo.
      break;
  }
} while (true);
