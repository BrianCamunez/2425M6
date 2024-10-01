let solucionSeleccionada

const preguntas = [
    {
        pregunta: '¿En qué continente está situado España?',
        respuesta: ['Europa', 'América', 'Madrid', 'Antártida'],
        correcta: 'Europa'
    },
    {
        pregunta: '¿Cuál es la capital de Francia?',
        respuesta: ['Berlín', 'Madrid', 'París', 'Lisboa'],
        correcta: 'París'
    },
    {
        pregunta: '¿Qué océano se encuentra al oeste de África?',
        respuesta: ['Atlántico', 'Pacífico', 'Índico', 'Ártico'],
        correcta: 'Atlántico'
    },
    {
        pregunta: '¿Cuántos continentes hay en el mundo?',
        respuesta: ['5', '6', '7', '8'],
        correcta: '7'
    },
    {
        pregunta: '¿Cuál es el país más grande del mundo?',
        respuesta: ['Canadá', 'Rusia', 'China', 'Estados Unidos'],
        correcta: 'Rusia'
    },
    {
        pregunta: '¿Qué país es famoso por la Torre Eiffel?',
        respuesta: ['Francia', 'Italia', 'España', 'Reino Unido'],
        correcta: 'Francia'
    },
    {
        pregunta: '¿Cuál es la moneda de Japón?',
        respuesta: ['Yen', 'Won', 'Dólar', 'Euro'],
        correcta: 'Yen'
    },
    {
        pregunta: '¿Qué idioma se habla principalmente en Brasil?',
        respuesta: ['Español', 'Francés', 'Portugués', 'Inglés'],
        correcta: 'Portugués'
    },
    {
        pregunta: '¿Qué océano es el más grande del mundo?',
        respuesta: ['Atlántico', 'Índico', 'Pacífico', 'Ártico'],
        correcta: 'Pacífico'
    },
    {
        pregunta: '¿Cuál es el desierto más grande del mundo?',
        respuesta: ['Sahara', 'Gobi', 'Kalahari', 'Atacama'],
        correcta: 'Sahara'
    }
];

function SacarPregunta(){
    const numero = numeroAleatorio()
    const duda = preguntas[numero]
    console.log(duda.pregunta)
    document.querySelector("#question").innerHTML = duda.pregunta
    console.log(document.querySelector('#question'))

    let html = ''
    duda.respuesta.forEach((solucion, contador)=>{

        html += `<button class="btn btn-primary" id="answer${contador + 1}" onclick="mirarRespuesta('${solucion}', '${duda.correcta}')">${solucion}</button>`
        

    })

    document.querySelector("#answers").innerHTML = html

    const verdadera = duda.verdadera;

}

function mirarRespuesta(solucion, verdadera) {
    console.log(`Respuesta seleccionada: ${solucion}`);
    console.log(`Respuesta correcta: ${verdadera}`);
    let resultadoHtml = ''
    
    if (solucion === verdadera) {
        console.log('Es la correcta');
        document.querySelector('#result').innerHTML = "¡Correcto!";
    } else {
        console.log('No es correcta');
        document.querySelector('#result').innerHTML = "Incorrecto.";
    }
}

function numeroAleatorio(){
    let numero = Math.floor(Math.random()*10)
    return(numero)
}

document.addEventListener("DOMContentLoaded",SacarPregunta)
