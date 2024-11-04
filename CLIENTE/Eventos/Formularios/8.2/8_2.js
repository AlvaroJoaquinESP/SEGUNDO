document.querySelector("#formulario").addEventListener("submit", (ev) => {
    
let texto1 = document.querySelector("#text1").value
let texto2 = document.querySelector("#text2").value

if (texto1 != texto2) {
    ev.preventDefault()
    alert("Iguales merluzo")
}
})
