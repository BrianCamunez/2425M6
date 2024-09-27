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

function numeroAleatorio(){
    let numero = Math.floor(Math.random()*10)
    return(numero)
}

function respuestaCorrecta(respuestaSeleccionada, numeroRandom){
    if(respuestaSeleccionada === preguntas[numeroRandom].correcta){
        console.log('correcto')
    }else{
        console.log('incorrecto')
    }
}

function cargarPregunta(){
    let numeroRandom = numeroAleatorio()
    preguntaHtml = `
    <h2 id="question" class="mt-4">${preguntas[numeroRandom].pregunta}</h2>
      <div id="answers" class="d-grid gap-2 mt-3">
        <button class="btn btn-primary" id="answer1" onclick="respuestaCorrecta('${preguntas[numeroRandom].respuesta[0]},${numeroAleatorio}')">${preguntas[numeroRandom].respuesta[0]}</button>
        <button class="btn btn-primary" id="answer2" onclick="respuestaCorrecta('${preguntas[numeroRandom].respuesta[1]},${numeroAleatorio}')">${preguntas[numeroRandom].respuesta[1]}</button>
        <button class="btn btn-primary" id="answer3" onclick="respuestaCorrecta('${preguntas[numeroRandom].respuesta[2]},${numeroAleatorio}')">${preguntas[numeroRandom].respuesta[2]}</button>
        <button class="btn btn-primary" id="answer4" onclick="respuestaCorrecta('${preguntas[numeroRandom].respuesta[3]},${numeroAleatorio}')">${preguntas[numeroRandom].respuesta[3]}</button>
      </div>
      <div id="result" class="alert mt-3" style="display: none;"></div>
      <button id="next-question" class="btn btn-secondary mt-3" onclick="cargarPregunta()">Siguiente Pregunta</button>
    `
    document.querySelector('#quiz').innerHTML = preguntaHtml
}

cargarPregunta()
