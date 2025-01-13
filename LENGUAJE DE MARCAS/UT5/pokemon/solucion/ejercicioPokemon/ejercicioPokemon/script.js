function loadPhoto(){
    let photos = ["articuno.png","blastoise.png","bulbasur.png","caterpie.png","charmander.png","eve.png","pikachu.png","squirtle.png","totodile.png","zubat.png"]
    for (let index = 0; index < photos.length; index++) {
        const src = photos[index]
        createPhoto("img/"+src)
    }
}

function countPokemon(){
    const myteam = document.querySelector('#myteam')
    const total = myteam.querySelectorAll('img').length

    let status=true
    if(total == 6){
        alert("Has superado el número max de pokemon en tu equipo")
        status = false
    }

    return status

}


function createPhoto(src){
    const img = document.createElement("img")
    img.className = "photo"
    img.setAttribute("src",src);

    img.addEventListener("click",()=>{
        let status = countPokemon();
        if(status){
            document.querySelector('#myteam').appendChild(img)
        }
    })

    document.querySelector("#pokemon").appendChild(img)
}

loadPhoto();