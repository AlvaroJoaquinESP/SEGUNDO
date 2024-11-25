const respuestasChatGPT = [
    "¡Claro! Déjame ayudarte con eso.",
    "Esa es una excelente pregunta.",
    "¿Puedes darme más detalles para ayudarte mejor?",
    "Lo siento, no estoy seguro de entender completamente. ¿Podrías aclararlo?",
    "Aquí tienes la información que necesitas:",
    "¿Podrías especificar un poco más sobre lo que necesitas?",
    "¡Qué interesante! Aquí está lo que encontré:",
    "¡Eso suena genial! Déjame elaborar sobre ello.",
    "Si necesitas más ayuda, solo pídelo.",
    "Esto es lo que puedo decir al respecto:",
    "Déjame comprobar eso por ti.",
    "Voy a buscar la mejor solución para ti.",
    "¡Eso parece divertido! Aquí tienes una idea:",
    "Por supuesto, aquí tienes un ejemplo:",
    "Si tienes otra pregunta, no dudes en decírmelo.",
    "¿Quieres que amplíe más esta explicación?",
    "¿Te gustaría más detalles técnicos o una visión general?",
    "Espero que esto responda tu pregunta.",
    "Déjame saber si hay algo más en lo que pueda ayudar.",
    "Eso depende del contexto. ¿Podrías explicarlo un poco más?",
    "¡Por supuesto! Aquí tienes la información que buscas.",
    "Déjame explicarlo paso a paso.",
    "Esa es una gran pregunta. Profundicemos en ella.",
    "¡Estoy aquí para ayudarte con lo que necesites!",
    "Esto es lo que sé sobre ese tema.",
    "Parece interesante, déjame investigar un poco más.",
    "¿Te gustaría un ejemplo práctico?",
    "Aquí tienes una solución que podría funcionar.",
    "Voy a explicarlo de la forma más clara posible.",
    "¡Esa es una idea interesante! Aquí va:",
    "¿Hay algo específico que te gustaría saber?",
    "Espero que esta respuesta te sea útil.",
    "Si necesitas más detalles, puedo proporcionarlos.",
    "¡Ah, entiendo! Aquí tienes la respuesta:",
    "¿Quieres saber cómo implementar esto?",
    "Esto depende de varios factores. Vamos a analizarlos.",
    "Déjame saber si esto resuelve tu duda.",
    "¿Te gustaría un enfoque más detallado o general?",
    "Estoy aquí para aclarar cualquier punto que no quede claro.",
    "Gracias por la pregunta. Vamos con la explicación.",
    "Vamos a dividir esto en partes para que sea más fácil.",
    "¿Te gustaría ver una lista de ejemplos?",
    "Si hay algo más, no dudes en preguntarme.",
    "Esto es lo que podría funcionar en este caso.",
    "¿Quieres que pruebe con un enfoque diferente?",
    "¡Claro! Esto es lo que puedo ofrecerte:",
    "Esto se puede resolver de varias maneras. Aquí tienes una:",
    "¿Te interesa el aspecto técnico o algo más práctico?",
    "Gracias por compartir tu duda. Aquí va la solución:",
    "Parece complejo, pero lo explicaré de forma sencilla.",
    "Si necesitas más contexto, puedo ampliarlo.",
    "Aquí tienes un dato curioso relacionado con tu pregunta:",
    "Espero que esto aclare tus dudas.",
    "¡Buena observación! Esto es lo que sabemos:",
    "Voy a darte una respuesta basada en lo que entiendo.",
    "Esto puede parecer confuso al principio, pero vamos paso a paso.",
    "Estoy aquí para ayudarte a entenderlo mejor.",
    "Déjame intentarlo de otra manera si no queda claro.",
    "¡Listo! Aquí tienes algo más que podría interesarte.",
    "Esto es lo que he encontrado que podría ser útil para ti.",
    "Espero que esta explicación sea lo suficientemente clara."
];

document.querySelector("#boton").addEventListener("click",()=> {
    let salida = document.querySelector("#salida").innerHTML
    let salida1 = document.querySelector("#salida1").innerHTML
    document.querySelector("#salida").innerHTML = salida
    
    salida1+=Math.round(Math.random() * respuestasChatGPT.length -1)
    document.querySelector("#salida").innerHTML = salida
    setTimeout(1,1)
    document.querySelector("#salida1").innerHTML = salida1
    salida+=document.querySelector("#mensaje").value
    
    document.querySelector("#mensaje").value = ""
});


// const aleatorio = () => {
//      return Math.round(Math.random() * respuestasChatGPT.length -1)
// }


// let salida = document.querySelector('#divId').innerHTML
//     salida+= "<p>la gillliii</p>"
//     for (let i = 0; i < 100; i++) {
//     salida+=i+", "
//     }
//     document.querySelector('#divId').innerHTML = salida
    