export const traerReservas = () => {
  let datos = localStorage.getItem("reservas");

  if (datos) {
    return JSON.parse(datos);
  } else {
    const salida = [
      {
        id: 1,
        nombre: "Cipriano",
        fechaSalida: "2025-02-02",
        fechaEntrada: "2025-02-02",
        habitacion: "suite",
      },
      {
        id: 2,
        nombre: "Carmen",
        fechaSalida: "2025-02-02",
        fechaEntrada: "2025-02-02",
        habitacion: "presidencial",
      },
      {
        id: 3,
        nombre: "Susana",
        fechaSalida: "2025-02-02",
        fechaEntrada: "2025-02-02",
        habitacion: "normal",
      },
    ];

    return salida;
  }
};

export const guardarReservas = (arrReservas) => {
  const reservaJSON = JSON.stringify(arrReservas);
  localStorage.setItem("reservas", reservaJSON);
};
