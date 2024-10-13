const botoCrearFicha = document.getElementById("crearFicha");
botoCrearFicha.addEventListener("click", verDatos);


function verDatos() {
    let nombre = document.querySelector("#nombre").value;
    let primerApellido = document.querySelector("#primerApellido").value;
    let segundoApellido = document.querySelector("#segundoApellido").value;
    let dni = document.querySelector("#dni").value;
    let imageUrl = document.querySelector("#imageUrl").value; 

    document.querySelector("#nombreCompleto").innerHTML = `${nombre} ${primerApellido} ${segundoApellido}`;
    document.querySelector("#dniDerecha").innerHTML = `DNI: ${dni}`;
    document.querySelector("#imagen").setAttribute("src", imageUrl);

    console.log(nombre);
    console.log(primerApellido);
    console.log(segundoApellido);
    console.log(dni);
    console.log(imageUrl);
}
