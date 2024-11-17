document.querySelector("#goku").addEventListener("keydown", () =>{
    // Capturo lo que hay en el input.
    let goku = document.querySelector("#goku").value

    // Mostrarlo en el div.
    document.querySelector("#vegeta").textContent = goku
    
    
    
})