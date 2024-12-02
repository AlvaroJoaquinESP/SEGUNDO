function recorrerBody() {
  // Obtener todos los elementos dentro del body
  const elementos = document.body.getElementsByTagName("*");

  // Crear una lista vacía para almacenar los nombres de las etiquetas
  let listaElementos = [];

  // Recorrer todos los elementos y agregar el nombre de la etiqueta a la lista
  for (let i = 0; i < elementos.length; i++) {
    listaElementos.push(elementos[i].tagName);
  }

  // Mostrar en consola la lista de elementos encontrados
  console.log("Elementos en el body:", listaElementos);
}

// Llamar a la función cuando la página se haya cargado
document.addEventListener("DOMContentLoaded", recorrerBody);
