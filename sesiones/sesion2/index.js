console.log('Hola sesion 2!!!')

// SUMAR numeros

// Pedir datos con prompt

// const numero = prompt('Introduce un numero: ')
// console.log('Este es el numero: ', numero)

// const numero2 = prompt('Introduce el numero 2')
// console.log('este es el numero 2: ', numero2)
// console.log('suma: ', parseInt(numero)+parseInt(numero2))


// Juego de los numeros

const numeroAdivinar = 10


let numeroIntroducido = -1
var intentos = 0

while(intentos< 3 && numeroAdivinar != numeroIntroducido){
    numeroIntroducido = prompt('Introduce un numero: ')
    intentos ++
    console.log(intentos)
    
if(numeroIntroducido < numeroAdivinar){
    alert('Es menor al objetivo')
}else if(numeroIntroducido > numeroAdivinar){
    alert('Es mayor al objetivo')
} else if(parseInt(numeroIntroducido) === numeroAdivinar){
    alert('Has adivinado el numero!!!')
}
}