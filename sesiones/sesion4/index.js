console.log('Sesion 4');


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