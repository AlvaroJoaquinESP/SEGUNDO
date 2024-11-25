const arraySeguros = [];

const insertaPoliza = () => {
  for (let i = 0; i < 4; i++) {
    const seguro = new Seguro();
    arraySeguros.push(seguro);
  }
};

const consultarTodos = () => {
  for (const i of arraySeguros) {
    i.mostrarSeguro();
  }
};

const consultarVehiculo = (tipoVehiculo) => {
  for (const element of arraySeguros) {
    if (element.vehiculo == tipoVehiculo) {
      element.mostrarSeguro();
    }
  }
};

const consultarTipo = (tipo) => {
  for (const element of arraySeguros) {
    if (element.tipo == tipo) {
      element.mostrarSeguro();
    }
  }
};


const consultarMes = (mes) => {
    for (const element of arraySeguros) {
        if (element.mes == mes) {
            element.mostrarSeguro();
        }
    }
}





