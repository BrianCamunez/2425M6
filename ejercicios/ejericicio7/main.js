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

let jugador1= document.querySelector("#jugador1");
let posicion1 = 0;
let jugador2= document.querySelector("#jugador2");
let turno = 1;
let posicion2 = 0;
let perderTurnoJugador1 = false;
let perderTurnoJugador2 = false;
const tirarDadosBoton = document.querySelector("#botonTirarDados");
tirarDadosBoton.addEventListener("click", tirarDados);

function tirarDados(){
    const numeroDado = Math.floor(Math.random() * 6) + 1;
    console.log(numeroDado);
    if(turno%2===0){
        if(perderTurnoJugador1){
            perderTurnoJugador1=false;
        }else{
            moverJugador(jugador1,numeroDado);
        }
    }else{
        if(perderTurnoJugador2){
            perderTurnoJugador2=false;
        }else{
            moverJugador(jugador2,numeroDado);
        }
    }
    turno++;
}

function moverJugador(jugador, dado){
    if(jugador === jugador1){
        posicion1 += dado;
        if(posicion1<posiciones.length){
            jugador.style.top = posiciones[posicion1].top;
            jugador.style.right = posiciones[posicion1].right;
        }else{
            posicion1 = posiciones.length -1;
            jugador.style.top = posiciones[posicion1].top;
            jugador.style.right = posiciones[posicion1].right; 
        }
        casillasEspeciales(jugador1,posicion1);
    }else{
        posicion2 += dado;
        if(posicion2<posiciones.length){
            jugador.style.top = posiciones[posicion2].top;
            jugador.style.right = posiciones[posicion2].right;
        }else{
            posicion2 = posiciones.length -1;
            jugador.style.top = posiciones[posicion2].top;
            jugador.style.right = posiciones[posicion2].right;
        }
        casillasEspeciales(jugador2,posicion2);
    }
}

function casillasEspeciales(jugador, posicion){
    switch(posicion){
        case 1:
            if (jugador === jugador1) {
                posicion1 = 20;
                jugador.style.top = posiciones[posicion1].top;
                jugador.style.right = posiciones[posicion1].right; 
            } else {
                posicion2 = 20;
                jugador.style.top = posiciones[posicion2].top;
                jugador.style.right = posiciones[posicion2].right;
            }
            
            break;
        case 4:
            if (jugador === jugador1) {
                perderTurnoJugador1 = true;
            } else {
                perderTurnoJugador2 = true;
            }
            break;
    }
}