const lineaFactura = [];
for (i = 0; i < 3; i++) {
  let producto = prompt("Ingrese el producto");
  let cantidad = Number(prompt("Ingrese cantidad"));
  let precioUd = Number(prompt("Ingrese precio"));

  const Articulo = {
    producto1 : producto,
    cantidad1 : cantidad,
    precioUd1 : precioUd,
  }

  lineaFactura.push(Articulo);
}

console.log(lineaFactura);
