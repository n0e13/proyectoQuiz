const preguntas = [
    {
        titulo: '¿Qué cordillera separa Europa de Asia?',
        respuestas: [
            {
                class: 'btn_yellow',
                type: 'button',
                name: 'no',
                value: 'Despeñaperros'
            },
            {
                class: 'btn_blue',
                type: 'button',
                name: 'no',
                value: 'Caucaso'
            },
            {
                class: 'btn_orange',
                type: 'button',
                name: 'yes',
                value: 'Urales'
            },
            {
                class: 'btn_grey',
                type: 'button',
                name: 'no',
                value: 'Apeninos'
            }
        ]
    },
    {
        titulo: '¿Quiénes fueron, según la leyenda, los dos hermanos fundadores de la ciudad de Roma?',
        respuestas: [
            {
                class: 'btn_orange',
                type: 'button',
                name: 'no',
                value: 'Ramón El Vanidoso'
            },
            {
                class: 'btn_yellow',
                type: 'button',
                name: 'yes',
                value: 'Rómulo y Remo'
            },
            {
                class: 'btn_grey',
                type: 'button',
                name: 'no',
                value: 'Rémulo y Romo'
            },
            {
                class: 'btn_blue',
                type: 'button',
                name: 'no',
                value: 'Romualdo y Remo'
            }
        ]
    },
    {
        titulo: '¿Cuál es la velocidad de la luz?',
        respuestas: [
            {
                class: 'btn_yellow',
                type: 'button',
                name: 'yes',
                value: '300.000 km/s'
            },
            {
                class: 'btn_grey',
                type: 'button',
                name: 'no',
                value: '300.000 km/h'
            },
            {
                class: 'btn_blue',
                type: 'button',
                name: 'no',
                value: '360.000 km/h'
            },
            {
                class: 'btn_orange',
                type: 'button',
                name: 'no',
                value: '300.000.000 km/h'
            }
        ]
    },
    {
        titulo: '¿Quién escribió “La colmena”?',
        respuestas: [
            {
                class: 'btn_yellow',
                type: 'button',
                name: 'no',
                value: 'Miguel de Cervantes'
            },
            {
                class: 'btn_blue',
                type: 'button',
                name: 'no',
                value: 'La abeja Maya'
            },
            {
                class: 'btn_orange',
                type: 'button',
                name: 'yes',
                value: 'Camilo José Cela'
            },
            {
                class: 'btn_grey',
                type: 'button',
                name: 'no',
                value: "Gabriel García Márquez"
            }
        ]
    },
    {
        titulo: '¿Cómo se llama el protagonista de la saga de videojuegos "The Legend of Zelda"?',
        respuestas: [
            {
                class: 'btn_grey',
                type: 'button',
                name: 'yes',
                value: 'Link'
            },
            {
                class: 'btn_blue',
                type: 'button',
                name: 'no',
                value: 'Luis'
            },
            {
                class: 'btn_yellow',
                type: 'button',
                name: 'no',
                value: 'Zelda'
            },
            {
                class: 'btn_orange',
                type: 'button',
                name: 'no',
                value: 'Lucas'
            }
        ]
    },
    {
        titulo: '¿Qué isla sirvió de prisión para Napoleón tras su derrota en la batalla de Waterloo?',
        respuestas: [
            {
                class: 'btn_grey',
                type: 'button',
                name: 'no',
                value: 'Isla Wake'
            },
            {
                class: 'btn_blue',
                type: 'button',
                name: 'yes',
                value: 'Santa Elena'
            },
            {
                class: 'btn_yellow',
                type: 'button',
                name: 'no',
                value: 'San Antonio de Palé'
            },
            {
                class: 'btn_orange',
                type: 'button',
                name: 'no',
                value: 'Santa Lucía'
            }
        ]
    },
    {
        titulo: '¿Cuál es el río más caudaloso del mundo?',
        respuestas: [
            {
                class: 'btn_grey',
                type: 'button',
                name: 'no',
                value: 'Yangtsé'
            },
            {
                class: 'btn_blue',
                type: 'button',
                name: 'no',
                value: 'Nilo'
            },
            {
                class: 'btn_orange',
                type: 'button',
                name: 'no',
                value: 'Misisipi'
            },
            {
                class: 'btn_yellow',
                type: 'button',
                name: 'yes',
                value: 'Amazonas'
            }
        ]
    },
    {
        titulo: '¿Cómo se llama el antagonista principal de la película de Disney "El Rey León"?',
        respuestas: [
            {
                class: 'btn_grey',
                type: 'button',
                name: 'yes',
                value: 'Scar'
            },
            {
                class: 'btn_orange',
                type: 'button',
                name: 'no',
                value: 'Mufasa'
            },
            {
                class: 'btn_blue',
                type: 'button',
                name: 'no',
                value: 'Banzai'
            },
            {
                class: 'btn_yellow',
                type: 'button',
                name: 'no',
                value: 'Rafiki'
            }
        ]
    },
    {
        titulo: '¿De qué estilo arquitectónico es la catedral de Notre Dame?',
        respuestas: [
            {
                class: 'btn_orange',
                type: 'button',
                name: 'yes',
                value: 'Gótico'
            },
            {
                class: 'btn_grey',
                type: 'button',
                name: 'no',
                value: 'Románico'
            },
            {
                class: 'btn_blue',
                type: 'button',
                name: 'no',
                value: 'Renacentista'
            },
            {
                class: 'btn_yellow',
                type: 'button',
                name: 'no',
                value: 'Neoclásico'
            }
        ]
    },
    {
        titulo: '¿Por qué fue famosa Marie Curie?',
        respuestas: [
            {
                class: 'btn_yellow',
                type: 'button',
                name: 'no',
                value: 'Modelo de capas nuclear'
            },
            {
                class: 'btn_blue',
                type: 'button',
                name: 'no',
                value: 'Fisión nuclear'
            },
            {
                class: 'btn_orange',
                type: 'button',
                name: 'no',
                value: 'MANIAC'
            },
            {
                class: 'btn_grey',
                type: 'button',
                name: 'yes',
                value: 'Radiactividad'
            }
        ]
    },
]

/*********************************************************************/
// Variables de usuario

let playerName = "";      // Nombre
let playerScore = 0;      // Puntuación final
let playerTime = 0;       // Tiempo total de la partida
let answerTotal = 0;      // Contador de respuestas acertadas. 
let answerLoseFail = 0;   // Contador de respuestas perdidas o falladas. Cada una resta 1.


/*********************************************************************/
// Validación

// Si metió un nombre y mostrar las reglas del juego y el enlace

// Para que sepa dónde ejecutar cada listener preguntamos por la ruta

document.getElementById('start').addEventListener('click', function (event) {

    playerName = document.getElementById('player').value;

    if (playerName != "") {
        let bio = document.getElementById("bio_game");
        bio.innerHTML = `<p>¡Hola, <strong>${playerName}</strong>!</p><p>Aquí tienes que darte vida para aparecer en la lista.</p>Las reglas son las siguientes: 
    <ul>
    <li>Tienes 5 segundos para leer y contestar cada pregunta.</li>
    <li>La puntuación es el sumatorio de los segundos que te sobran en cada pregunta.</li>
    <li>Hay 10 cuestiones diferentes. Se muestran aleatoriamente.</li>
    <li>Cada pregunta perdida o fallada resta 1 punto.</li>
    <li>Cada partida dura 5 preguntas.</li>
    </ul>
    <p><p> Calienta motoros. Has venido a jugar. <a href="./pages/question.html">¡JUEGA!</a>`;
        bio.style.display = "block"
    } else {
        alert('Debes introducir un nombre para jugar');
    }
});

// El quiz

// Pregunta acertada o no

document.querySelector('form[id="preguntas"]').addEventListener('click', function (event) {
    // Comprobamos si el nombre es sí o no
    if (event.target.name == "yes") {
        playerScore += timeToReply + 1;
        fGeneraPregunta();
        clearInterval(timerAtras);
        fInicial();
    } else {
        answerLoseFail++;
    }
});



/*********************************************************************/
// Generador de preguntas

const fieldset = document.createElement('fieldset');

function fGeneraPregunta() {
    answerTotal++;  /**************************************** preguntar si es menor que 5 para seguir generando preguntas */
    // Una posición al azar para mostrar una pregunta
    let min = 0;
    let max = preguntas.length - 1;
    let numPregunta = Math.floor(Math.random() * (max - min + 1)) + min;

    // cogemos el formulario creado en el HTML
    const formulario = document.getElementById('preguntas');

    // variables temporales para recoger solo la primera pregunta
    let resp = preguntas[numPregunta].respuestas;
    let pregunta = preguntas[numPregunta].titulo;

    let newHTML = "";
    fieldset.innerHTML = "";

    // iteramos las respuestas y las añadimos a un string
    for (let i = 0; i < resp.length; i++) {
        newHTML += `<input type="${resp[i].type}" 
        name="${resp[i].name}"
        value="${resp[i].value}"
        class="${resp[i].class}">`
    }
    // añadimos al HTML del body
    fieldset.innerHTML = `<legend>${pregunta}</legend>` + newHTML;

    formulario.appendChild(fieldset);
}



/*********************************************************************/
// Cuenta atrás para cada pregunta

let eTimer = document.getElementById('timer');
let timerAtras = 0;
let timeToReply = 0;

function fCuentaAtras() {
    if (timeToReply == -1) {
        answerLoseFail++;
        clearInterval(timerAtras);
        fInicial();
    } else {
        eTimer.innerHTML = `Te quedan ${timeToReply} segundos`;
        timeToReply--;
    }
}



/*********************************************************************/
// Contador de tiempo en el juego

let eCont = document.getElementById('contador');
let timerContador = setInterval(fContadorTiempo, 1000);
let min = 0;
let segundos = 0;

function fContadorTiempo() {
    if ((segundos == 60) && (min < 10)) {
        min++;
        segundos = 0;
        eCont.innerHTML = `Llevas jugando 0${min}:00`;
    } else if (segundos < 10) {
        eCont.innerHTML = `Llevas jugando 0${min}:0${segundos}`;
        segundos++;
    } else {
        eCont.innerHTML = `Llevas jugando 0${min}:${segundos}`;
        segundos++;
    }
}



/*********************************************************************/
// Iniciar los temporizadores

function fInicial() {
    timeToReply = 5;
    timerAtras = setInterval(fCuentaAtras, 1000);
    fGeneraPregunta();
    fCuentaAtras();
}



/*********************************************************************/
// Llamadas nada más cargar la web

document.onload = fInicial();
document.onload = fContadorTiempo();



document.getElementById('#match').addEventListener('click', function (event) {
    event.target.innerHTML = "Hola fullstacker";
});
