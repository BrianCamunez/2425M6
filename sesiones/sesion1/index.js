console.log('Sesion 1!!!')

// Comentarios

/*Comentarios diferentes (Puedes usar ctrl)*/

// Variables

var nombre = 'Pepe'
let apellidos = "Potamo"
const dominio = "@fpllefia.com"
const nombreCompleto = apellidos.toLowerCase() + nombre.toLowerCase()
console.log('Nombre completo: ', nombreCompleto)

const email = nombreCompleto + dominio

console.log('Email:' , email)

// Concatenar textos con variables

const email2 = "otroemail" + dominio

console.log('email2', email2)

// Utilizando backsticks

const email3 = `otroemail${dominio}`

console.log('Email 3:', email3)

// Ejemplo de usos de backsticks con codigo html

const miCodigoHtml = `
    <div>
    <p>Hola</p>
    </div>
`

console.log(miCodigoHtml)