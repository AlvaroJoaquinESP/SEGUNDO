const cestaProductos = [];

// Funciones para leer string y number.
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

const agregarProducto = () => {
  let nombreT = leeString("Introduzca el nombre");
  let cantidadT = leeNumber("Introduzca la cantidad");
  let precioT = leeNumber("Introduzca el precio");

  const product1 = {
    nombre: nombreT,
    cantidad: cantidadT,
    precio: precioT,
  };
  cestaProductos.push(product1);
};

const actualizarCantidad = () => {
  let productoT = leeString("Introduzca el nombre del producto a actualizar");
  let cantidadT = leeString("Ingrese la nueva cantidad");

  for (const i of cestaProductos) {
    if (i.nombre == productoT) {
      i.cantidad = cantidadT;
    }
  }
};

const eliminarProducto = () => {
  let eliminado = leeString("Introduce el nombre del objeto a eliminar");
  cestaProductos.forEach((element) => {
    if (element.nombre == eliminado) {
      delete element;
    }
  });
};

const mostrarCesta = () => {
  cestaProductos.forEach((i) => {
    alert(`Nombre: ${i.nombre},
            Cantidad: ${i.cantidad},
            Precio: ${i.precio}`);
  });
};

const calcularCompra = () => {
  let total = 0;
  for (const element of object) {
    total += element.cantidad * element.precio;
  }
  alert(`Total: ${total}`);
};

do {
  let opcion = leeNumber("Introduce un numero entre 1 y 5");
  switch (opcion) {
    case 1:
      agregarProducto();
      break;

    case 2:
      actualizarCantidad();
      break;

    case 3:
      eliminarProducto();
      break;

    case 4:
      mostrarCesta();
      break;

    case 5:
      calcularCompra();
      break;
    default:
      alert("Entre 1 y 5");
  }
} while (true);
