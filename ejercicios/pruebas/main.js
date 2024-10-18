const tirarDadosBoton = document.querySelector("#botonTirarDados");
        let turno = 1;

        tirarDadosBoton.addEventListener("click", tirarDados);

        function tirarDados() {
            const numeroDado = Math.floor(Math.random() * 6) + 1;
            console.log("Número de dado:", numeroDado);

            // Cambiar el data-bs-target según el turno
            if (turno % 2 === 0) {
                tirarDadosBoton.setAttribute("data-bs-target", "#exampleModal2");
            } else {
                tirarDadosBoton.setAttribute("data-bs-target", "#exampleModal1");
            }
        }