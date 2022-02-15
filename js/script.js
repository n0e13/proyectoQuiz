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
                class: 'btn_orange',
                type: 'button',
                name: 'no',
                value: 'Caucaso'
            },
            {
                class: 'btn_blue',
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
                class: 'btn_blue',
                type: 'button',
                name: 'yes',
                value: '300.000m/s'
            },
            {
                class: 'btn_grey',
                type: 'button',
                name: 'no',
                value: '300.000km/h'
            },
            {
                class: 'btn_yellow',
                type: 'button',
                name: 'no',
                value: '50km/h'
            },
            {
                class: 'btn_orange',
                type: 'button',
                name: 'no',
                value: '300.000.000km/h'
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
                class: 'btn_blue',
                type: 'button',
                name: 'yes',
                value: 'Link'
            },
            {
                class: 'btn_grey',
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
    }
]


const fieldset = document.createElement('fieldset');


// Validación
document.querySelector("form[id='preguntas']").addEventListener('click', function (event) {

    // Comprobamos si el nombre es sí o no
    if (event.target.name == "yes") {
        fGeneraPregunta();
    } else {
        console.log('mal');
    }
});

function fGeneraPregunta() {
    // Una posición al azar para mostrar una pregunta
    let min = 0;
    let max = 4;
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
    fieldset.innerHTML = `<legend>${preguntas[numPregunta].titulo}</legend>` + newHTML;

    formulario.appendChild(fieldset);

}

// Genera una pregunta nada más abrir 
document.onload = fGeneraPregunta();