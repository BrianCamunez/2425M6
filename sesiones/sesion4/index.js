console.log('Sesion 4')


//Array
const frutas = ['pera', 'manzana', 'platano', 9, 32, "34"]

//Accesp a posicion array
console.log(frutas[2])

//array de dos dimensiones
const barquitos = [
    ["1A", "1B", "1C"],
    ["2A", "2B", "2C"],
    ["3A", "3B", "3C"]
]

console.log(barquitos[2][1])//3C

//objetos javascript
const persona = {
    nombre :  'Pepe',
    apellidos: 'Lotillas Rotas'
}

console.log('nombre = ', persona.nombre)

//Array de objetos

const arrayPersonas = [
    {
        nombre :  'Pepe',
        apellidos: 'Lotillas Rotas'
    },
    {
        nombre :  'Sara',
        apellidos: 'Lotillas Rotas'
    },
    {
        nombre :  'Andres',
        apellidos: 'Roto Rotas'
    }
]

console.log(arrayPersonas[2].nombre)

const alumnes = [
    {
      nom: "Joan Pérez",
      edat: 18,
      correu: "joan.perez@example.com",
      moduls: [
        { nom: "Desenvolupament Web", nota: 8.5 },
        { nom: "Bases de Dades", nota: 7.0 },
        { nom: "Sistemes Operatius", nota: 6.5 }
      ]
    },
    {
      nom: "Maria Sánchez",
      edat: 19,
      correu: "maria.sanchez@example.com",
      moduls: [
        { nom: "Desenvolupament Web", nota: 9.0 },
        { nom: "Bases de Dades", nota: 8.0 },
        { nom: "Sistemes Operatius", nota: 7.5 }
      ]
    },
    {
      nom: "Pere Martínez",
      edat: 20,
      correu: "pere.martinez@example.com",
      moduls: [
        { nom: "Desenvolupament Web", nota: 7.5 },
        { nom: "Bases de Dades", nota: 6.0 },
        { nom: "Sistemes Operatius", nota: 8.0 }
      ]
    }
  ];

  console.log(alumnes[1].moduls[2].nota)
  console.log(alumnes[2].moduls[1].nom)

  //Recorres elementos de un array con for

  for(let i =0; i<arrayPersonas.length;i++){
    console.log('Nombre de  ',arrayPersonas[i].nombre)
  }

  //Generando html a partir de una array
  //Creo lista desordenada con los nombres de los alumnos
let listaHtml =  '<ul>'

for(let i=0; i<arrayPersonas.length;i++){
  listaHtml +=`<li> ${arrayPersonas[i].nombre} </li>`
}

listaHtml += '</ul>'

document.querySelector('#miLista').innerHTML = listaHtml;

let tablaHtml = ''
for(let i=0;i<arrayPersonas.length;i++){
  tablaHtml += `
  <tr>
    <td>${arrayPersonas[i].nombre}</td>
    <td>${arrayPersonas[i].apellidos}</td>
  </tr>
  `
}

document.querySelector('#miTabla').innerHTML = `
 <table>
  <thead>
      <th>Nombre</th>
       <th>Apellidos</th>
     </thead>
       <tbody>
           ${tablaHtml}
         </tbody>
 </table>
`

const quiz = [
  {
    pregunta: "¿Qué etiqueta usamos para una lista ordenada?",
    respuestas: ["ol", "ul", "table", "palomitas"],
    correcta: 0
  },
  {
    pregunta: "¿Cuál es la etiqueta para un enlace en HTML?",
    respuestas: ["link", "href", "a", "url"],
    correcta: 2
  },
  {
    pregunta: "¿Qué etiqueta se utiliza para insertar una imagen?",
    respuestas: ["img", "image", "picture", "photo"],
    correcta: 0
  },
  {
    pregunta: "¿Qué etiqueta se usa para definir un párrafo?",
    respuestas: ["p", "para", "paragraph", "text"],
    correcta: 0
  },
  {
    pregunta: "¿Cómo se define un encabezado de nivel 1?",
    respuestas: ["h1", "header", "h", "h2"],
    correcta: 0
  },
  {
    pregunta: "¿Qué atributo se utiliza para definir el destino de un enlace?",
    respuestas: ["src", "href", "link", "url"],
    correcta: 1
  },
  {
    pregunta: "¿Cuál es la etiqueta que se usa para crear una tabla?",
    respuestas: ["table", "tab", "list", "grid"],
    correcta: 0
  }
];

quizHtml = ''

for(let i=0;i<quiz.length;i++){
  let numero = ''
  quizHtml += `
  <h2>${quiz[i].pregunta}</h2>
  <button onclick="mirarRespuesta(${i}, 0)">${quiz[i].respuestas[0]}</button>
  <button onclick="mirarRespuesta(${i}, 1)">${quiz[i].respuestas[1]}</button>
  <button onclick="mirarRespuesta(${i}, 2)">${quiz[i].respuestas[2]}</button>
  <button onclick="mirarRespuesta(${i}, 3)">${quiz[i].respuestas[3]}</button>
  `
}

function mirarRespuesta(contador, posicion){
  if(posicion === quiz[contador].correcta){
    console.log('correcto')
  }else{
    console.log('incorrecto')
  }
}

document.querySelector('#miQuiz').innerHTML = quizHtml

//<h4>La respuesta correcta es ${quiz[i].respuestas[quiz[i].correcta]}</h4>