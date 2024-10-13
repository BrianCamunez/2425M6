const bd = [];

const botoCrearFicha = document.querySelector("#crearFicha");
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

    const usuari = {
        nom: nombre,
        cognoms: `${primerApellido} ${segundoApellido}`,
        dni: dni,
        urlImatge: imageUrl
    };

    bd.push(usuari);

    console.log(bd);

    pintaTaula();
}

function pintaTaula() {

    const taulaFila = document.querySelector("#taulaUsuari");
    
    taulaFila.innerHTML = ""; 

    let tabla = `<table class="table">
                    <thead>
                        <tr>
                            <th>Nom</th>
                            <th>Cognoms</th>
                            <th>DNI</th>
                            <th>URL Imatge</th>
                        </tr>
                    </thead>
                    <tbody>`;

    bd.forEach(usuari => {
        tabla += `<tr>
                    <td>${usuari.nom}</td>
                    <td>${usuari.cognoms}</td>
                    <td>${usuari.dni}</td>
                    <td><img src="${usuari.urlImatge}" alt="Imatge de ${usuari.nom}" style="width: 50px; height: 50px;"></td>
                  </tr>`;
    });

    tabla += `</tbody></table>`;

    taulaFila.innerHTML = tabla;
}
