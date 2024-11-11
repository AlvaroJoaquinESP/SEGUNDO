class Seguro {
  constructor() {
    this.DNI = "";
    this.name = "";
    this.surname = "";
    this.phone = "";
    this.email = "";
    this.vehicle = "";
    this.type = "";
    this.month = "";
    this.price = 0;
  }

  insertInsurance() {
    this.DNI = prompt("Inserte un dni válido");
    this.name = prompt("Inserte un nombre válido");
    this.surname = prompt("Inserte un apellido válido");
    this.phone = prompt("Inserte un tlfno válido");
    this.vehicle = prompt("Inserte un vehículo válido");
    this.type = prompt("Inserte un tipo válido");
    this.month = prompt("Inserte un mes válido");
    this.price = Number(prompt("Inserte un precio válido"));

    if (isNaN(this.price)) {
      alert("El precio debe de ser un número");
    }
  }

  showInsurance() {
    let exit = `<table border=1>
        <thead>
            <th>DNI</th>
            <th>NAME</th>
            <th>SURNAME</th>
            <th>PHONE</th>
            <th>VEHICLE</th>
            <th>TYPE</th>
            <th>MONTH</th>
            <th>PRICE</th>
        </thead>
        <tbody>
            <tr>
                <td>${this.DNI}</td>
                <td>${this.name}</td>
                <td>${this.surname}</td>
                <td>${this.phone}</td>
                <td>${this.vehicle}</td>
                <td>${this.type}</td>
                <td>${this.month}</td>
                <td>${this.price}</td>
            </tr>
        </tbody>
    </table>`
  }

  insuranceType() {
    return this.type
  }

  insuranceMonth() {
    return this.month
  }
  
  vehicleType() {
    return this.vehicle
  }


}
