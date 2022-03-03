const questions = [
    {
        label: '¿Qué cordillera separa Europa de Asia?',
        answers: [
            {
                name: 'no',
                value: 'Despeñaperros'
            },
            {
                name: 'no',
                value: 'Caucaso'
            },
            {
                name: 'yes',
                value: 'Urales'
            },
            {
                name: 'no',
                value: 'Apeninos'
            }
        ]
    },
    {
        label: '¿Quiénes fueron, según la leyenda, los dos hermanos fundadores de la ciudad de Roma?',
        answers: [
            {
                name: 'no',
                value: 'Ramón El Vanidoso'
            },
            {
                name: 'yes',
                value: 'Rómulo y Remo'
            },
            {
                name: 'no',
                value: 'Rémulo y Romo'
            },
            {
                name: 'no',
                value: 'Romualdo y Remo'
            }
        ]
    },
    {
        label: '¿Cuál es la velocidad de la luz?',
        answers: [
            {
                name: 'yes',
                value: '300.000 km/s'
            },
            {
                name: 'no',
                value: '300.000 km/h'
            },
            {
                name: 'no',
                value: '360.000 km/h'
            },
            {
                name: 'no',
                value: '300.000.000 km/h'
            }
        ]
    },
    {
        label: '¿Quién escribió “La colmena”?',
        answers: [
            {
                name: 'no',
                value: 'Miguel de Cervantes'
            },
            {
                name: 'no',
                value: 'La abeja Maya'
            },
            {
                name: 'yes',
                value: 'Camilo José Cela'
            },
            {
                name: 'no',
                value: "Gabriel García Márquez"
            }
        ]
    },
    {
        label: '¿Cómo se llama el protagonista de la saga de videojuegos "The Legend of Zelda"?',
        answers: [
            {
                name: 'yes',
                value: 'Link'
            },
            {
                name: 'no',
                value: 'Luis'
            },
            {
                name: 'no',
                value: 'Zelda'
            },
            {
                name: 'no',
                value: 'Lucas'
            }
        ]
    },
    {
        label: '¿Qué isla sirvió de prisión para Napoleón tras su derrota en la batalla de Waterloo?',
        answers: [
            {
                name: 'no',
                value: 'Isla Wake'
            },
            {
                name: 'yes',
                value: 'Santa Elena'
            },
            {
                name: 'no',
                value: 'San Antonio de Palé'
            },
            {
                name: 'no',
                value: 'Santa Lucía'
            }
        ]
    },
    {
        label: '¿Cuál es el río más caudaloso del mundo?',
        answers: [
            {
                name: 'no',
                value: 'Yangtsé'
            },
            {
                name: 'no',
                value: 'Nilo'
            },
            {
                name: 'no',
                value: 'Misisipi'
            },
            {
                name: 'yes',
                value: 'Amazonas'
            }
        ]
    },
    {
        label: '¿Cómo se llama el antagonista principal de la película de Disney "El Rey León"?',
        answers: [
            {
                name: 'yes',
                value: 'Scar'
            },
            {
                name: 'no',
                value: 'Mufasa'
            },
            {
                name: 'no',
                value: 'Banzai'
            },
            {
                name: 'no',
                value: 'Rafiki'
            }
        ]
    },
    {
        label: '¿De qué estilo arquitectónico es la catedral de Notre Dame?',
        answers: [
            {
                name: 'yes',
                value: 'Gótico'
            },
            {
                name: 'no',
                value: 'Románico'
            },
            {
                name: 'no',
                value: 'Renacentista'
            },
            {
                name: 'no',
                value: 'Neoclásico'
            }
        ]
    },
    {
        label: '¿Por qué fue famosa Marie Curie?',
        answers: [
            {
                name: 'no',
                value: 'Modelo de capas nuclear'
            },
            {
                name: 'no',
                value: 'Fisión nuclear'
            },
            {
                name: 'no',
                value: 'MANIAC'
            },
            {
                name: 'yes',
                value: 'Radiactividad'
            }
        ]
    },
]





// ************ //
//              //
//  Validación  //
//              //
// ************ //

if (document.getElementById('start') != null) {
    document.getElementById('start').addEventListener('click', function (event) {
        // Si metió un nombre y mostrar las reglas del juego y el enlace
        // TODO: Una vez metido el nombre, comprobar si existe en la bd para mostrar su gráfica de juego anterior
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
            bio.style.display = "block";
            bio.style.visibility = "visible";
        } else { // Aviso de que falta un nombre 
            let bio = document.getElementById("bio_game");
            bio.innerHTML = `Debes introducir un nombre para jugar`;
            bio.style = "border: 2px solid red; border-radius: 25px; padding: 10px;";
            bio.style.display = "block";
            bio.style.visibility = "visible";
        }
    });
}





if (document.getElementById('player') != null) {
    // Cuando gana el foco el input del nombre, se oculta el aviso
    document.getElementById('player').addEventListener('focus', function (event) {
        let bio = document.getElementById("bio_game");
        bio.style = "";
        bio.style.visibility = "hidden";
    });
}





// ********************** //
//                        //
//  Variables de usuario  // TODO: hay que meter esto en localStorage o Firebase
//                        //
// ********************** //

let playerName = "";      // Nombre TODO: lo tenemos ya en el HOME hay que almacenarlo allí para leerlo aquí
let playerScore = 0;      // Puntuación final
let playerTime = 0;       // Tiempo total de la partida
let answerTotal = 0;      // Contador de answers acertadas. 
let answerLoseFail = 0;   // Contador de respuestas perdidas o falladas. Cada una resta 1.
let maxQuestions = 9;    // Máximo de preguntas por partida. Empieza en 0.





// ************************ //
//                          //
//  Pregunta acertada o no  //
//                          //
// ************************ //

if (document.getElementById('answers') != null) {
    document.getElementById('answers').addEventListener('click', function (event) {
        // Comprobamos si el nombre es sí o no
        if (event.target.name == "yes") {
            playerScore += timeToReply + 1;
        } else {
            answerLoseFail++;
        }

        if (answerTotal < maxQuestions) {
            answerTotal++;
            printQuestion(randomQuestion());
            clearInterval(timerAtras);
            startQuiz();
        } else {
            // Una vez llega a 10 respuestas. Mostramos los resultados
            window.location.href = "../pages/results.html";
        }
    });
}





// ***************** //
//                   //
//  Pregunta ramdon  //
//                   //
// ***************** //

function randomQuestion() {
    // Una posición al azar para mostrar una pregunta
    let min = 0;
    let max = questions.length - 1;
    let numQuestion = Math.floor(Math.random() * (max - min + 1)) + min;
    return questions[numQuestion];
}





// ******************* //
//                     //
//  Imprimir pregunta  //
//                     //
// ******************* //

function printQuestion(question) {
    if (document.getElementById('question') != null) {
        document.getElementById('question').innerHTML = printTitle(question);
    }
    if (document.getElementById('answers') != null) {
        document.getElementById('answers').innerHTML = printAnswers(question);
    }
}





// ******************************** //
//                                  //
//  Imprimir título de la pregunta  //
//                                  //
// ******************************** //

function printTitle(question) {
    return question.label;
}





// ******************************* //
//                                 //
//  Imprimir todas las respuestas  //
//                                 //
// ******************************* //

function printAnswers(question) {
    let aAnswers = question.answers;
    let sAnswers = "";
    for (let i = 0; i < aAnswers.length; i++) {
        sAnswers += printAnswer(aAnswers[i], i);
    }
    return sAnswers;
}





// ************************ //
//                          //
//  Imprimir una respuesta  //
//                          //
// ************************ //

const aColors = ["btn_yellow", "btn_orange", "btn_green", "btn_blue"];

function printAnswer(answer, i) {
    let newBtn = document.createElement("button");

    // Atributos
    let btnClass = document.createAttribute("class");
    btnClass.value = aColors[i];
    newBtn.setAttributeNode(btnClass);

    let btnName = document.createAttribute("name");
    btnName.value = answer.name;
    newBtn.setAttributeNode(btnName);

    let btnValue = document.createAttribute("value");
    btnValue.value = answer.value;
    newBtn.setAttributeNode(btnValue);
    newBtn.innerHTML = answer.value;

    return newBtn.outerHTML;
}





// ********************************* //
//                                   //
//  Cuenta atrás para cada pregunta  //
//                                   //
// ********************************* //

let timerAtras = 0;
let timeToReply = 0;

if (document.getElementById('timer') != null) {
    let eTimer = document.getElementById('timer');

    function countDown() {
        if (timeToReply == -1) {
            answerLoseFail++;
            answerTotal++;
            clearInterval(timerAtras);
            startQuiz();
        } else {
            eTimer.innerHTML = `Te quedan ${timeToReply} segundos`;
            timeToReply--;
        }
    }
}





// ************************ //
//                          //
//  Contador de la partida  //
//                          //
// ************************ //

if (document.getElementById('contador') != null) {
    let eCont = document.getElementById('contador');
    let timerContador = setInterval(timeCount, 1000);
    let min = 0;
    let segundos = 0;
    function timeCount() {
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
}





// **************************** //
//                              //
//  Iniciar los temporizadores  //
//                              //
// **************************** //

function startQuiz() {
    if (answerTotal < maxQuestions) {
        timeToReply = 5;
        timerAtras = setInterval(countDown, 1000);
        printQuestion(randomQuestion());
        countDown();
    }
}





// ******** //
//          //
//  Inicio  //
//          //
// ******** //
if (window.location.pathname == "/pages/question.html") {
    startQuiz();
    timeCount();
}
