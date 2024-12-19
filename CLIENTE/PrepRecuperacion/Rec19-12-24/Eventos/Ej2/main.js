let stock = [];
document.querySelector("#boton").addEventListener("click", () => {
  addProduct();
});

document.querySelector("#boton1").addEventListener("click", () => {
  emptyStock();
});

const addProduct = () => {
  const product = {
    productId: Number(document.querySelector("#productId").value),
    name: document.querySelector("#name").value,
    cuantity: Number(document.querySelector("#cuantity").value),
    pvp: Number(document.querySelector("#pvp").value),
  };
  stock.push(product);
  mostrarInventario();
};

const mostrarInventario = () => {
  let salida = `<table>
    <th>Product ID</th>
    <th>Name</th>
    <th>Cuantity</th>
    <th>Pvp</th>
    <th>Total</th>`;
  stock.forEach((element) => {
    salida += `<tr>
        <td>${element.productId}</td>
        <td>${element.name}</td>
        <td>${element.cuantity}</td>
        <td>${element.pvp}</td>
        <td>${element.pvp * element.cuantity}</td>
        <td><button onclick="javascript:eliminar(${
          element.productId
        })">Eliminar</button></td>`;
  });
  salida += `</tr></table>`;
  document.querySelector("#salida").innerHTML = salida;
};

const emptyStock = () => {
  if (stock.length > 0) {
    stock = [];
  }
  mostrarInventario();
};

const eliminar = (productId) => {
  for (let i = 0; i < stock.length; i++) {
    if (stock[i].productId == productId) {
        stock.splice(stock.indexOf(stock[i]), 1)
    }
  }
mostrarInventario();
};


