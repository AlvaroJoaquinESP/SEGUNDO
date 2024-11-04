const sumar = () => {
    let n1 = Number(document.getElementById("num1").value)
    let n2 = Number(document.getElementById("num2").value)
    let suma = n1 + n2
    let resultado = Number(document.getElementById("res").value = suma)
}
const restar = () => {
    let n1 = Number(document.getElementById("num1").value)
    let n2 = Number(document.getElementById("num2").value)
    let resta = n1 - n2
    let resultado = Number(document.getElementById("res").value = resta)
}
const multiplicar = () => {
    let n1 = Number(document.getElementById("num1").value)
    let n2 = Number(document.getElementById("num2").value)
    let producto = n1 * n2
    let resultado = Number(document.getElementById("res").value = producto)
}