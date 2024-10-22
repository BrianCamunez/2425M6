const posiciones = [
    { top: '450px', right: '440px' },
    { top: '380px', right: '440px' },
    { top: '300px', right: '430px' },
    { top: '250px', right: '418px' },
    { top: '180px', right: '418px' },
    { top: '110px', right: '410px' },
    { top: '110px', right: '340px' },
    { top: '110px', right: '290px' },
    { top: '110px', right: '250px' },
    { top: '110px', right: '200px' },
    { top: '110px', right: '150px' },
    { top: '110px', right: '80px' },
    { top: '180px', right: '80px' },
    { top: '250px', right: '80px' },
    { top: '340px', right: '80px' },
    { top: '440px', right: '80px' },
    { top: '440px', right: '140px' },
    { top: '440px', right: '200px' },
    { top: '440px', right: '280px' },
    { top: '440px', right: '370px' },
    { top: '360px', right: '370px' },
    { top: '280px', right: '360px' },
    { top: '180px', right: '360px' },
    { top: '180px', right: '300px' },
    { top: '180px', right: '250px' },
    { top: '180px', right: '200px' },
    { top: '180px', right: '140px' },
    { top: '230px', right: '140px' },
    { top: '280px', right: '140px' },
    { top: '340px', right: '140px' },
    { top: '340px', right: '200px' },
    { top: '340px', right: '250px' },
    { top: '340px', right: '300px' },
    { top: '260px', right: '300px' },
    { top: '260px', right: '250px' },
    { top: '260px', right: '200px' },
];

let jugador1 = document.querySelector("#jugador1");
let posicion1 = 0;
let jugador2 = document.querySelector("#jugador2");
let turno = 1;
let posicion2 = 0;
let perderTurnoJugador1 = false;
let perderTurnoJugador2 = false;
const tirarDadosBoton1 = document.querySelector("#botonTirarDados1");
const tirarDadosBoton2 = document.querySelector("#botonTirarDados2");



tirarDadosBoton1.addEventListener("click", () => {
    if (turno % 2 !== 0) {
        tirarDados(jugador1);
    }
});

tirarDadosBoton2.addEventListener("click", () => {
    if (turno % 2 === 0) {
        tirarDados(jugador2);
    }
});

function tirarDados(jugador) {
    const numeroDado = Math.floor(Math.random() * 6) + 1;
    console.log(numeroDado);
    moverJugador(jugador, numeroDado);
    cargarPregunta(jugador);
    turno++;
    actualizarBotones();
}

function moverJugador(jugador, dado) {
    if (jugador === jugador1) {
        posicion1 += dado;
        if (posicion1 < posiciones.length) {
            jugador.style.top = posiciones[posicion1].top;
            jugador.style.right = posiciones[posicion1].right;
        } else {
            posicion1 = posiciones.length - 1;
            jugador.style.top = posiciones[posicion1].top;
            jugador.style.right = posiciones[posicion1].right;
        }
        casillasEspeciales(jugador1, posicion1);
    } else {
        posicion2 += dado;
        if (posicion2 < posiciones.length) {
            jugador.style.top = posiciones[posicion2].top;
            jugador.style.right = posiciones[posicion2].right;
        } else {
            posicion2 = posiciones.length - 1;
            jugador.style.top = posiciones[posicion2].top;
            jugador.style.right = posiciones[posicion2].right;
        }
        casillasEspeciales(jugador2, posicion2);
    }
}

function casillasEspeciales(jugador, posicion) {
    switch (posicion) {
        case 1:
            actualizarPosicion(20);
            break;
        case 4:
            perderTurno();
            break;
        case 6:
            actualizarPosicion(10);
            break;
        case 11:
            actualizarPosicion(0);
            break;
        case 13:
            actualizarPosicion(28);
            break;
        case 17:
            perderTurno();
            break;
        case 21:
            actualizarPosicion(23);
            break;
        case 24:
            actualizarPosicion(8);
            break;
        case 29:
            actualizarPosicion(26);
            break;
        case 30:
            turno--;
            break;
        case 32:
            actualizarPosicion(19);
            break;
        case 35:
            window.location.reload();
            break;
        default:
            cargarPregunta(jugador);
            console.log("Pregunta X");
    }
    function actualizarPosicion(posicionNueva) {
        jugador.style.top = posiciones[posicionNueva].top;
        jugador.style.right = posiciones[posicionNueva].right;
    }
    function perderTurno() {
        if (jugador === jugador1) {
            perderTurnoJugador1 = true;
        } else {
            perderTurnoJugador2 = true;
        }
    }
}

function numeroAleatorio() {
    return Math.floor(Math.random() * preguntas.length);
}

function cargarPregunta(jugador) {
    const numero = numeroAleatorio();
    const duda = preguntas[numero];
    console.log(duda.pregunta);
    if (jugador === jugador2) {
        document.querySelector("#question2").innerHTML = duda.pregunta;
    }
}

function actualizarBotones() {
    tirarDadosBoton1.disabled = (turno % 2 === 0);
    tirarDadosBoton2.disabled = (turno % 2 !== 0);
}

// Inicializar el estado de los botones al cargar
actualizarBotones();


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
    },
    {
        pregunta: '¿Cuál es la capital de España?',
        respuesta: ['Barcelona', 'Madrid', 'Valencia', 'Sevilla'],
        correcta: 'Madrid'
    },
    {
        pregunta: '¿Qué país es conocido como la tierra de los canguros?',
        respuesta: ['Nueva Zelanda', 'Australia', 'Sudáfrica', 'Canadá'],
        correcta: 'Australia'
    },
    {
        pregunta: '¿En qué océano se encuentra la isla de Hawái?',
        respuesta: ['Atlántico', 'Índico', 'Pacífico', 'Ártico'],
        correcta: 'Pacífico'
    },
    {
        pregunta: '¿Cuál es la montaña más alta del mundo?',
        respuesta: ['K2', 'Kilimanjaro', 'Everest', 'Makalu'],
        correcta: 'Everest'
    },
    {
        pregunta: '¿Qué continente es conocido como el continente negro?',
        respuesta: ['Asia', 'Europa', 'África', 'América'],
        correcta: 'África'
    },
    {
        pregunta: '¿Cuál es el río más largo del mundo?',
        respuesta: ['Nilo', 'Amazonas', 'Yangtsé', 'Misisipi'],
        correcta: 'Amazonas'
    },
    {
        pregunta: '¿Cuál es el océano más pequeño del mundo?',
        respuesta: ['Ártico', 'Índico', 'Atlántico', 'Pacífico'],
        correcta: 'Ártico'
    },
    {
        pregunta: '¿Qué país tiene más islas en el mundo?',
        respuesta: ['Suecia', 'Canadá', 'Indonesia', 'Noruega'],
        correcta: 'Suecia'
    },
    {
        pregunta: '¿Cuál es el país de origen del sushi?',
        respuesta: ['China', 'Corea', 'Japón', 'Tailandia'],
        correcta: 'Japón'
    },
    {
        pregunta: '¿Qué tipo de animal es un delfín?',
        respuesta: ['Pez', 'Mamífero', 'Reptil', 'Anfibio'],
        correcta: 'Mamífero'
    },
    {
        pregunta: '¿Cuál es la capital de Italia?',
        respuesta: ['Roma', 'Venecia', 'Milán', 'Florencia'],
        correcta: 'Roma'
    },
    {
        pregunta: '¿Qué es el Taj Mahal?',
        respuesta: ['Un palacio', 'Una fortaleza', 'Un templo', 'Una tumba'],
        correcta: 'Una tumba'
    },
    {
        pregunta: '¿Cuál es la capital de Alemania?',
        respuesta: ['Berlín', 'Múnich', 'Frankfurt', 'Colonia'],
        correcta: 'Berlín'
    },
    {
        pregunta: '¿En qué país se encuentra Machu Picchu?',
        respuesta: ['Argentina', 'Perú', 'Chile', 'Bolivia'],
        correcta: 'Perú'
    },
    {
        pregunta: '¿Cuál es el elemento químico con el símbolo O?',
        respuesta: ['Oxígeno', 'Oro', 'Osmio', 'Oganesón'],
        correcta: 'Oxígeno'
    },
    {
        pregunta: '¿Qué continente es conocido por tener los desiertos más grandes?',
        respuesta: ['Asia', 'África', 'América', 'Oceanía'],
        correcta: 'África'
    },
    {
        pregunta: '¿Cuál es el océano más profundo del mundo?',
        respuesta: ['Atlántico', 'Índico', 'Pacífico', 'Ártico'],
        correcta: 'Pacífico'
    },
    {
        pregunta: '¿Qué animal es conocido como el rey de la selva?',
        respuesta: ['Tigre', 'León', 'Elefante', 'Guepardo'],
        correcta: 'León'
    },
    {
        pregunta: '¿Cuál es la capital de Canadá?',
        respuesta: ['Toronto', 'Vancouver', 'Ottawa', 'Montreal'],
        correcta: 'Ottawa'
    },
    {
        pregunta: '¿Qué país es famoso por sus tulipanes?',
        respuesta: ['Bélgica', 'Francia', 'Países Bajos', 'Alemania'],
        correcta: 'Países Bajos'
    },
    {
        pregunta: '¿Qué país tiene la mayor población del mundo?',
        respuesta: ['India', 'Estados Unidos', 'China', 'Indonesia'],
        correcta: 'China'
    },
    {
        pregunta: '¿En qué país se originó el fútbol?',
        respuesta: ['Brasil', 'Inglaterra', 'Argentina', 'Italia'],
        correcta: 'Inglaterra'
    },
    {
        pregunta: '¿Qué continente alberga el río Nilo?',
        respuesta: ['Asia', 'África', 'Europa', 'América'],
        correcta: 'África'
    },
    {
        pregunta: '¿Cuál es la capital de Egipto?',
        respuesta: ['El Cairo', 'Atenas', 'Estambul', 'Riad'],
        correcta: 'El Cairo'
    },
    {
        pregunta: '¿Qué planeta es conocido como el planeta rojo?',
        respuesta: ['Venus', 'Júpiter', 'Marte', 'Mercurio'],
        correcta: 'Marte'
    },
    {
        pregunta: '¿Cuál es el idioma oficial de México?',
        respuesta: ['Español', 'Inglés', 'Francés', 'Portugués'],
        correcta: 'Español'
    },
    {
        pregunta: '¿Qué continente tiene el mayor número de países?',
        respuesta: ['Asia', 'África', 'Europa', 'América'],
        correcta: 'África'
    },
    {
        pregunta: '¿Qué país es famoso por su chocolate?',
        respuesta: ['Bélgica', 'Suiza', 'Francia', 'Alemania'],
        correcta: 'Suiza'
    },
    {
        pregunta: '¿Cuál es la moneda de Reino Unido?',
        respuesta: ['Euro', 'Dólar', 'Libra esterlina', 'Yen'],
        correcta: 'Libra esterlina'
    },
    {
        pregunta: '¿Qué océano se encuentra al este de Asia?',
        respuesta: ['Atlántico', 'Índico', 'Pacífico', 'Ártico'],
        correcta: 'Pacífico'
    },
    {
        pregunta: '¿Quién pintó la Mona Lisa?',
        respuesta: ['Picasso', 'Van Gogh', 'Da Vinci', 'Rembrandt'],
        correcta: 'Da Vinci'
    },
    {
        pregunta: '¿Cuál es la capital de India?',
        respuesta: ['Bombay', 'Nueva Delhi', 'Calcuta', 'Chennai'],
        correcta: 'Nueva Delhi'
    }
];