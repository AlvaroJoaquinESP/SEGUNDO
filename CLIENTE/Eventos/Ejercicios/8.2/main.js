document.querySelector("#formulary").addEventListener("submit", (ev) => {
    const text1 = document.querySelector("#text1").value
    const text2 = document.querySelector("#text2").value

    if (text1 != text2) {
        ev.preventDefault()
        alert(" No son iguales")
    }
})