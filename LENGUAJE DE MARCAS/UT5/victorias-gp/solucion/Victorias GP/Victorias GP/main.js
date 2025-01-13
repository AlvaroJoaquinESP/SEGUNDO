document.querySelector("#btn").addEventListener("click",()=> {

  addInList();
  addInTable();

});

function addInList(){
    const nombre = document.querySelector("#nombre").value
    const victorias = document.querySelector("#victorias").value
    const li = document.createElement("li")
    li.textContent = nombre + ' - '+ victorias 
    const lista = document.querySelector("ul")
    lista.appendChild(li)
}


function addInTable(){ 
    const nombre = document.querySelector("#nombre").value
    const victorias = document.querySelector("#victorias").value

    const table = document.querySelector("table")
    const tr = document.createElement("tr")
    table.appendChild(tr)
    
    const tdNombre = document.createElement("td")
    tdNombre.textContent = nombre
    tr.appendChild(tdNombre)

    const tdVictorias = document.createElement("td")
    tdVictorias.textContent = victorias
    tr.appendChild(tdVictorias)

}

