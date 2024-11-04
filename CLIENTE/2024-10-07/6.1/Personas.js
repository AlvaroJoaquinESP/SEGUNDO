const personas = [];
for(i= 1; i <= 5; i++) {


//No hace falta poner String, prompt ya lo hace por defecto.
let sexo = prompt('Introduzca M o F', 'H'); //EL SEGUNDO VALOR DEL PROMPT ES EL V POR DEFECCTO!!!!
let edad = Number(prompt('Introduzca la edad', '5'));

//Puedo meter el prompt dentro del objeto, pero no queda bien.
const Persona = {
    sexo1: sexo,
    edad1: edad,
}

personas.push(Persona);

}
console.log(personas);