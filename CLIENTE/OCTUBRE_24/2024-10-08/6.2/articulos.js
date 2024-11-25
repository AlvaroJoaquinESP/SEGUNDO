
const lineaFactura = [];
for(i = 0; i < 3; i++) {

let producto = prompt('Ingrese un producto');
let cantidad = Number(prompt('Ingrese la cantidad'));
let precioUnidad = Number(prompt('Ingrese precio por unidad'));

const Articulo = {
    producto1 : producto,
    cantidad1 : cantidad,
    precioUnidad1:precioUnidad,
}

lineaFactura.push(Articulo);
}
console.log(lineaFactura);

