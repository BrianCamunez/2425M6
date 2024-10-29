const libros = [
    { titulo: "1984", autor: "George Orwell", genero: "Distopía", ano: 1949 },
    { titulo: "Orgullo y Prejuicio", autor: "Jane Austen", genero: "Romance", ano: 1813 },
    { titulo: "Cien años de soledad", autor: "Gabriel García Márquez", genero: "Realismo Mágico", ano: 1967 },
    { titulo: "El Gran Gatsby", autor: "F. Scott Fitzgerald", genero: "Tragedia", ano: 1925 },
    { titulo: "Matar a un ruiseñor", autor: "Harper Lee", genero: "Ficción", ano: 1960 }
];

const librosLista = document.querySelector("#libros-lista")
const libroSelector = document.querySelector("#libro-selector")
const reservasLista = document.querySelector("#reservas-lista")
const reservarBoton = document.querySelector("#reservar-boton")

function cargarLibros(){
    libros.forEach((libro) => {
        const row = `<tr>
                        <td>${libro.titulo}</td>
                        <td>${libro.autor}</td>
                        <td>${libro.genero}</td>
                        <td>${libro.ano}</td>
                    </tr>`
        librosLista.innerHTML += row;

        const opcion = `<option value="${libro.titulo}">${libro.titulo} - ${libro.autor}</option>`
        libroSelector.innerHTML += opcion

    })

}

function reservarLibro(){
    const libroSeleccionado = libroSelector.value
    const libroReservado = libros.find(libro => libro.titulo === libroSeleccionado)
    if (libroReservado) {
        const fechaReserva = new Date().toLocaleString();
        const reservaItem = `<div class="reserva-item list-group-item">
                                <strong>${libroReservado.titulo}</strong> - ${libroReservado.autor} 
                                <br>Reservado el: ${fechaReserva}
                            </div>`;
        reservasLista.innerHTML = reservaItem + reservasLista.innerHTML;
    }
}

reservarBoton.addEventListener("click", reservarLibro);

cargarLibros()
