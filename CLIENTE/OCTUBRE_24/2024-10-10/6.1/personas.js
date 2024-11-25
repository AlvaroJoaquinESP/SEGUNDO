const personas = [];
for (i = 0; i < 5; i++) {
  let sexo = prompt("Introduzca el sexo");
  let edad = Number(prompt("Introduzca la edad"));

  const Persona = {
    sexo1 : sexo,
    edad1 : edad,
  }
  personas.push(Persona);
}

for (const i of personas) {
    console.log(i);
}
