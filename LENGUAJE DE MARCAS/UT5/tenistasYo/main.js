const procesarXML = (file) => {
  const parse = new DOMParser();
  const fileParse = parse.parseFromString(file, "text/xml");

  // Create table
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tbody = document.createElement("tbody");

  const encabezado = [
    "nombre",
    "nacimiento",
    "nacionalidad",
    "ranking",
    "mejor_ranking",
    "titulos",
  ];

  encabezado.forEach((element) => {
    const th = document.createElement("th");
    th.textContent=element
    thead.appendChild(th)
  });

  const tenistas = fileParse.getElementsByTagName("tenista")
  console.log(tenistas)
  
  for (const element of tenistas) {
    const tr = document.createElement("tr")
    const dataTenista = [element.querySelector("nombre").textContent,
        element.querySelector("nacimiento").textContent,
        element.querySelector("nacionalidad").textContent,
        element.querySelector("ranking").textContent,
        element.querySelector("mejor_ranking").textContent,
        element.querySelector("titulos").textContent
    ]

    for (const element of dataTenista) {
        const td = document.createElement("td")
        td.textContent  = element
        tr.appendChild(td)
    }

    tbody.appendChild(tr)
  }
  table.appendChild(thead)
  table.appendChild(tbody)
  document.body.appendChild(table)
};

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
    </tenistas>`;

    procesarXML(file)
