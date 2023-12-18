document.addEventListener('DOMContentLoaded', function () {
    // Obtén todos los botones con la clase 'boton-seccion'
    var botones = document.querySelectorAll('.boton');

    // Agrega un listener para cada botón
    botones.forEach(function (boton) {
        boton.addEventListener('click', function () {
            // Obtiene el ID de la sección a la que se debe ir desde el atributo 'data-target'
            var target = boton.getAttribute('data-target');

            // Obtiene la posición vertical de la sección a la que se va
            var targetPosicion = document.getElementById(target).offsetTop;

            // Hace scroll suavemente hacia la posición de la sección
            window.scrollTo({
                top: targetPosicion,
                behavior: 'smooth'
            });

            // Inicia el efecto de tecleo al hacer clic
            iniciarTecleo();
        });
    });
});

function iniciarAudio() {
    var audio = document.getElementById('miAudio');
    audio.play();
}

var audio = document.getElementById('miAudio');

document.addEventListener('DOMContentLoaded', function () {
    // Obtén todos los botones con la clase 'boton-seccion'
    var botones = document.querySelectorAll('.botonA');

    // Agrega un listener para cada botón
    botones.forEach(function (botonA) {
        botonA.addEventListener('click', function () {
            // Obtiene el ID de la sección a la que se debe ir desde el atributo 'data-target'
            var target = botonA.getAttribute('data-target');

            // Obtiene la posición vertical de la sección a la que se va
            var targetPosicion = document.getElementById(target).offsetTop;

            // Hace scroll suavemente hacia la posición de la sección
            window.scrollTo({
                top: targetPosicion,
                behavior: 'smooth'
            });

            // Inicia el efecto de tecleo al hacer clic
            iniciarTecleo();
        });
    });
});



function iniciarTecleo() {
    if (audio.paused) {
        audio.play();
    }

    var textosParaTeclear = [
        "“Hoy es uno de esos días” - 4 de marzo, 2022.",
        "Polima Westcoast y Pailita, artistas chilenos estrenaron una canción:",
        "Ultrasolo",
        "La canción obtuvo más de 100 millones de reproducciones, ademas, se encuentra en el numero 42 del Top 50 global (Spotify, 2022)",
        "Un éxito que comenzó tiempo atrás..."
    ];
    var textosParaTeclear1 =  "“Hoy es uno de esos días” - 4 de marzo, 2022.";
    var textosParaTeclear2 =  "Polima Westcoast y Pailita, artistas chilenos estrenaron una canción:";
    var textosParaTeclear3 =  "Ultrasolo";
    var textosParaTeclear4 =  "La canción obtuvo más de 100 millones de reproducciones, ademas, se encuentra en el numero 42 del Top 50 global (Spotify, 2022)";
    var textosParaTeclear5 =  "Un éxito que comenzó tiempo atrás...";
    var intervaloTecleo;
    var textoTecleo1 = document.getElementById('efecto-tecleo-1');
    var textoTecleo2 = document.getElementById('efecto-tecleo-2');
    var textoTecleo3 = document.getElementById('efecto-tecleo-3');
    var textoTecleo4 = document.getElementById('efecto-tecleo-4');
    var textoTecleo5 = document.getElementById('efecto-tecleo-5');
    textoTecleo1.textContent = '';
    textoTecleo2.textContent = '';
    textoTecleo3.textContent = '';
    textoTecleo4.textContent = '';
    textoTecleo5.textContent = '';
    clearInterval(intervaloTecleo);

    var indiceTextoActual = 0;
    //    for (let indiceTextoActual = 0; indiceTextoActual < 5; indiceTextoActual++) {

    //console.log("Soy un texto", indiceTextoActual);
    //var textoTecleo = document.getElementById('efecto-tecleo-2'); // + (0));

    // Restaurar el texto original y detener el intervalo si ya está en marcha
    //textoTecleo.textContent = '';
    //clearInterval(intervaloTecleo);


    indiceCaracterActual1 = 0;
    intervaloTecleo1 = setInterval(function () {
        if (indiceCaracterActual1 < textosParaTeclear1.length) {
            textoTecleo1.textContent += textosParaTeclear1.charAt(indiceCaracterActual1);
            indiceCaracterActual1++;
        } else {
            clearInterval(intervaloTecleo1);
        }
    }, 100);

    tope = 100;
    j = 0
    for (let i = 0; i <= tope; i++)
        j++

    indiceCaracterActual2 = 0;
    intervaloTecleo2 = setInterval(function () {
        if (indiceCaracterActual2 < textosParaTeclear2.length) {
            textoTecleo2.textContent += textosParaTeclear2.charAt(indiceCaracterActual2);
            indiceCaracterActual2++;
        } else {
            clearInterval(intervaloTecleo2);
        }
    }, 100);

    indiceCaracterActual3 = 0;
    intervaloTecleo3 = setInterval(function () {
        setTimeout(function() {
            //your code to be executed after 1 second
          }, delayInMilliseconds);
        if (indiceCaracterActual3 < textosParaTeclear3.length) {
            textoTecleo3.textContent += textosParaTeclear3.charAt(indiceCaracterActual3);
            indiceCaracterActual3++;
        } else {
            clearInterval(intervaloTecleo3);
        }
    }, 100);

    indiceCaracterActual4 = 0;
    intervaloTecleo4 = setInterval(function () {
        if (indiceCaracterActual4 < textosParaTeclear4.length) {
            textoTecleo4.textContent += textosParaTeclear4.charAt(indiceCaracterActual4);
            indiceCaracterActual4++;
        } else {
            clearInterval(intervaloTecleo4);
        }
    }, 100);

    indiceCaracterActual5 = 0;
    intervaloTecleo5 = setInterval(function () {
        if (indiceCaracterActual5 < textosParaTeclear5.length) {
            textoTecleo5.textContent += textosParaTeclear5.charAt(indiceCaracterActual5);
            indiceCaracterActual5++;
        } else {
            clearInterval(intervaloTecleo5);
        }
    }, 100);


    var delayInMilliseconds = 1000000; //1000 milisegundos = 1 second

    setTimeout(function() {
        //Un segundo para ejecutar
      }, delayInMilliseconds);

    let btnStart = document.getElementById('btn-start');
    btnStart.style.display = 'block';








    // var indice = 0;
    // intervaloTecleo = setInterval(function () {
    //     if (indice < textosParaTeclear[indiceTextoActual].length) {
    //         textoTecleo.textContent += textosParaTeclear[indiceTextoActual].charAt(indice);
    //         indice++;
    //     } else {
    //         clearInterval(intervaloTecleo);

    //         // Si hemos alcanzado el final del arreglo, reiniciar desde el principio
    //         if (indiceTextoActual === textosParaTeclear.length) {
    //             //indiceTextoActual = 0;
    //         }
    //     }
    // }, 100);
    //    }
}
// JS graficos
window.PlotlyConfig = {MathJaxConfig: 'local'};
