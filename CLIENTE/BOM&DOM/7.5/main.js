const rps = () => {
    // alert("aasdfdf")
    let yo = document.querySelector("#game").value
    const words = ["Rock","Paper","Scissors"]
    // Genero un índice aleatorio del array words[]. Cuidado al depurar.
    const randomWord = words[Math.round(Math.random() * (words.length - 1))]
    
    let seleccionado = document.querySelector("#result").value = randomWord
    
    if (seleccionado == randomWord ) {
        document.querySelector("#result").innerHTML = "Empate"
    }



    





}