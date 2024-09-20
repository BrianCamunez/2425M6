console.log("Calculadora inicialitzada!");

let entradaActual = '';

document.querySelector('#btn1').addEventListener('click', function() {
    entradaActual += '1';
    document.querySelector('#pantalla').innerHTML = entradaActual;
});

  document.querySelector('#btn2').addEventListener('click', function() {
    entradaActual += '2';
    document.querySelector('#pantalla').innerHTML = entradaActual;
});

document.querySelector('#btn3').addEventListener('click', function() {
    entradaActual += '3';
    document.querySelector('#pantalla').innerHTML = entradaActual;
});

document.querySelector('#btn4').addEventListener('click', function() {
    entradaActual += '4';
    document.querySelector('#pantalla').innerHTML = entradaActual;
});

document.querySelector('#btn5').addEventListener('click', function() {
    entradaActual += '5';
    document.querySelector('#pantalla').innerHTML = entradaActual;
});

document.querySelector('#btn6').addEventListener('click', function() {
    entradaActual += '6';
    document.querySelector('#pantalla').innerHTML = entradaActual;
});

document.querySelector('#btn7').addEventListener('click', function() {
    entradaActual += '7';
    document.querySelector('#pantalla').innerHTML = entradaActual;
});

document.querySelector('#btn8').addEventListener('click', function() {
    entradaActual += '8';
    document.querySelector('#pantalla').innerHTML = entradaActual;
});

document.querySelector('#btn9').addEventListener('click', function() {
    entradaActual += '9';
    document.querySelector('#pantalla').innerHTML = entradaActual;
});

document.querySelector('#btn0').addEventListener('click', function() {
    entradaActual += '0';
    document.querySelector('#pantalla').innerHTML = entradaActual;
});


document.querySelector('#btnSuma').addEventListener('click', function() {
    entradaActual += '+';
    document.querySelector('#pantalla').innerHTML = entradaActual;
  });

  document.querySelector('#btnResta').addEventListener('click', function() {
    entradaActual += '-';
    document.querySelector('#pantalla').innerHTML = entradaActual;
  });


  document.querySelector('#btnIgual').addEventListener('click', function() {
    const resultat = eval(entradaActual);
    console.log('Resultat:', resultat); // Testeja el resultat a la consola
    document.querySelector('#pantalla').textContent = resultat;
  });

  document.querySelector('#btnBorrar').addEventListener('click', function() {
    entradaActual = '';
    document.querySelector('#pantalla').textContent = '0';
  });

  document.querySelector('#btnIgual').addEventListener('click', function() {
    try {
      if (entradaActual !== '') {
        const resultat = eval(entradaActual);
        document.querySelector('#pantalla').textContent = resultat;
      } else {
        console.log('No hi ha res a calcular');
      }
    } catch (error) {
      console.log('Error en l\'operació:', error);
      document.querySelector('#pantalla').textContent = 'Error';
    }
  });