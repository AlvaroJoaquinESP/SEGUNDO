function procesarXML(file){
    const parser = new DOMParser()
    const xml = parser.parseFromString(file,"text/xml")
    const table = document.createElement("table")
    encabezado = table.createTHead().insertRow()

    const nombres = ["Nombre","Nacimiento","Nacionalidad","Ranking","Titulos"]

    for (const nombre of nombres) {
        const enc = document.createElement("th")
        enc.textContent = nombre
        encabezado.appendChild(enc)
    }

    const tenistas = xml.getElementsByTagName("tenista");
    const body = table.createTBody()

    for (const tenista of tenistas) {
        const row = body.insertRow()
        const cells = [tenista.getElementsByTagName("nombre")[0].textContent,
        tenista.getElementsByTagName("nacimiento")[0].textContent,
        tenista.getElementsByTagName("nacionalidad")[0].textContent,
        tenista.getElementsByTagName("ranking")[0].textContent,
        tenista.getElementsByTagName("titulos")[0].textContent]

        for (const cell of cells) {
            const td = document.createElement("td")
            td.textContent = cell
            row.appendChild(td)
        }
    }

    document.body.appendChild(table)

}

const file = `<?xml version="1.0" encoding="UTF-8"?>
<tenistas>
    <tenista id="1">
        <nombre>Novak Djokovic</nombre>
        <nacimiento>22/05/1987</nacimiento>
        <nacionalidad>Serbia</nacionalidad>
        <ranking>1</ranking>
        <mejor_ranking>1</mejor_ranking>
        <titulos>93</titulos>
        <superficie>Dura</superficie>
        <equipo>
            <patrocinador>Lacoste</patrocinador>
            <entrenador>Goran Ivanisevic</entrenador>
        </equipo>
        <grand_slams>
            <grand_slam titulo="Wimbledon">7</grand_slam>
            <grand_slam titulo="Australian Open">10</grand_slam>
            <grand_slam titulo="Roland Garros">3</grand_slam>
            <grand_slam titulo="US Open">4</grand_slam>
        </grand_slams>
    </tenista>

    <tenista id="2">
        <nombre>Carlos Alcaraz</nombre>
        <nacimiento>05/05/2003</nacimiento>
        <nacionalidad>España</nacionalidad>
        <ranking>2</ranking>
        <mejor_ranking>1</mejor_ranking>
        <titulos>12</titulos>
        <superficie>Dura</superficie>
    </tenista>
    </tenistas>`

    procesarXML(file)