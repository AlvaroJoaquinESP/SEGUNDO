const insurances = []


const insertaPoliza = () => {
    const seguro = new Seguro()
    for (let i=1;i<=1;i++) {
    
        seguro.insertInsurance()
        insurances.push(seguro)
    
}
}

const consultarTodos = () => {
    insurances.forEach(element => {
        element.showInsurance()
    });
}

const consultarVehiculo = (cocheMoto) => {
    for (const element of insurances) {
        element.vehicleType()
    }
}


insertaPoliza()

consultarTodos()

consultarVehiculo("COCHE")


