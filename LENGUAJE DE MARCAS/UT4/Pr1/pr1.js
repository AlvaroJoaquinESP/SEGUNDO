function changeName() {
    let parrafo = document.getElementById('miParrafo')
    parrafo.innerHTML = 'Alsa Martin es el noveno coche'
}

documentaddEventListener("DOMContentLoaded",()=> {
    changeName()

});