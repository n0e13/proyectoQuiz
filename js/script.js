const questions = [
    {
        label: '¿Quiénes fueron, según la leyenda, los dos hermanos fundadores de la ciudad de Roma?',
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





// ********************************************************************************************************** //
//                                                                                                            //
//                                                HOME                                                        //
//                                                                                                            //
// ********************************************************************************************************** //



// ******************************* //
//                                 //
//  Importaciones de Firebase v.9  //
//                                 //
// ******************************* //

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-auth.js";
import { getFirestore, collection, doc, getDoc, getDocs, setDoc, addDoc, deleteDoc, query, orderBy, limit, updateDoc } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-firestore.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-storage.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// *************************** //
//                             //
//  Configuración de Firebase  //
//                             //
// *************************** //

const firebaseConfig = {
    apiKey: "AIzaSyDOSYwaFGAjU3SFP_ZbW6HK8Vix9ieYe7I",
    authDomain: "pruebaweb-de104.firebaseapp.com",
    projectId: "pruebaweb-de104",
    storageBucket: "pruebaweb-de104.appspot.com",
    messagingSenderId: "664357072668",
    appId: "1:664357072668:web:37b1f61329b69d906654d9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//Initialize Auth
const auth = getAuth();
const user = auth.currentUser;
//Initialize DDBB
const db = getFirestore(app);
//Initialize cloudstore
const storage = getStorage();





// ********************* //
//                       //
//  Registro con Google  //
//                       //
// ********************* //
let userGoogle;
if (document.getElementById('google') != null) {
    //Empezamos a cargar las preguntas
    getQuestionsFromAPI();

    const signGoogle = document.getElementById('google');

    signGoogle.addEventListener('click', function (event) {
        const provider = new GoogleAuthProvider();
        provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

        const authGoogle = getAuth();
        signInWithPopup(authGoogle, provider)
            .then(async (result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                userGoogle = result.user;
                // Si no está en la BD le pedimos un nick
                await isInDB(userGoogle.email)
                    .then((docUser) => {
                        if (docUser) {
                            showUserData(docUser.data().username, userGoogle.email, userGoogle.photoURL);
                        } else {
                            setNickname();
                        }
                    });
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    });
}





// *************************** //
//                             //
//  Registro con email + pass  //
//                             //
// *************************** //
let userData = "";
if (document.getElementById('user-data') != null) {
    userData = document.getElementById('user-data');
}

if (document.getElementById('signup-form') != null) {
    const signUpForm = document.getElementById('signup-form');
    //SignUp function
    signUpForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const signUpEmail = document.getElementById('signup-email').value;
        const signUpPassword = document.getElementById('signup-pass').value;
        const signUpUser = document.getElementById('signup-user').value;
        const signUpImg = document.getElementById('signup-picture').files[0];
        const storageRef = ref(storage, signUpImg.name);
        const usersRef = collection(db, "users");
        let publicImageUrl;
        try {
            //Create auth user
            await createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword)
                .then((userCredential) => {
                    console.log('User registered')
                    const user = userCredential.user;
                    signUpForm.reset();
                })
            //Upload file to cloud storage
            await uploadBytes(storageRef, signUpImg)
                .then(async (snapshot) => {
                    console.log('Uploaded a blob or file!')
                    publicImageUrl = await getDownloadURL(storageRef);
                })
            //Create document in DB
            await setDoc(doc(usersRef, signUpEmail), {
                username: signUpUser,
                email: signUpEmail,
                profile_picture: publicImageUrl
            })
        } catch (error) {
            console.log('Error: ', error)
        }

    })
}





// *************************** //
//                             //
//  Conexión con email + pass  //
//                             //
// *************************** //

if (document.getElementById('login-form') != null) {
    const loginForm = document.getElementById('login-form');
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const loginEmail = document.getElementById('login-email').value;
        const loginPassword = document.getElementById('login-pass').value;
        //Call the collection in the DB
        const docRef = doc(db, "users", loginEmail);
        //Search a document that matches with our ref
        const docSnap = await getDoc(docRef);

        signInWithEmailAndPassword(auth, loginEmail, loginPassword)
            .then((userCredential) => {
                console.log('User authenticated')
                const user = userCredential.user;
                console.log(user);
                loginForm.reset();
            })
            .then(() => {
                if (docSnap.exists()) {
                    showUserData(docSnap.data().username, docSnap.data().email, docSnap.data().profile_picture);
                } else {
                    console.log("No such document!");
                }
            })
            .catch((error) => {
                document.getElementById('msgerr').innerHTML = 'Invalid user or password';
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    })
}






// ***************************************** //
//                                           //
//  Comprobar si existe en la base de datos  //
//                                           //
// ***************************************** //

async function isInDB(id) {
    const docUser = doc(db, "users", id);
    const docSnap = await getDoc(docUser);

    if (docSnap.exists()) {
        console.log("Existe el email");
        return docSnap;
    } else {
        console.log("No existe el email");
        return false;
    }
}




// ************************* //
//                           //
//  Desconexión del usuario  //
//                           //
// ************************* //

if (document.getElementById('logout') != null) {
    const logout = document.getElementById('logout');
    //Logout function
    logout.addEventListener('click', () => {
        signOut(auth)
            .then(() => {
                console.log('Logout user')
                userData.style.cssText = '';
                userData.innerHTML = ``;
            }).catch((error) => {
                console.log('Error: ', error)
            });
    })
}





// ******************** //
//                      //
//  Estado del usuario  //
//                      //
// ******************** //

auth.onAuthStateChanged(user => {
    if (user) {
        console.log('Logged user');
    } else {
        console.log('No logged user');
    }
})





// ************************** //
//                            //
//  Mostrar datos de usuario  //
//                            //
// ************************** //

function showUserData(nick, email, photo) {
    userData.style.cssText = 'background-color: #73AB84;width: 50%;margin: 2rem auto;padding: 1rem;border-radius: 5px;display: flex;flex-direction: column;align-items: center; visibility:visible';
    userData.innerHTML = `<h3>User Data</h3>
                  <p>Username: ${nick}</p>
                  <img src=${photo} alt='User profile picture'>
                 <p>Responde rápido si quieres que se te recuerde.</p>
                 <p> Calienta motores. Has venido a jugar. <a href="./pages/question.html">¡JUEGA!</a></p>`
}





// ********************************************* //
//                                               //
//  Pedir el nick de los registrados con Google  //
//                                               //
// ********************************************* //

function setNickname() {
    if (document.getElementById('nick') != null) {
        // Mostramos el DIV para meter el nick
        let divNick = document.getElementById('nick');
        divNick.style.visibility = "visible";

        // Comprobamos que mete el nick
        let saveNick = document.getElementById('save');
        saveNick.addEventListener('click', function (event) {
            playerName = document.getElementById('player').value;
            if (playerName != "") {
                saveInDB(playerName);
                divNick.style.visibility = "hidden";
            } else {
                let divError = document.getElementById("nick_error");
                divError.innerHTML = `Debes introducir un nombre para jugar`;
                divError.style = "border: 2px solid red; border-radius: 25px; padding: 10px;";
                divError.style.display = "block";
                divError.style.visibility = "visible";
            }
        });
    }
}



if (document.getElementById('player') != null) {
    // Cuando gana el foco el input del nick, se oculta el aviso
    document.getElementById('player').addEventListener('focus', function (event) {
        let nickError = document.getElementById("nick_error");
        nickError.style = "";
        nickError.style.visibility = "hidden";
    });
}





// ******************************************** //
//                                              //
//  Guardar en BD a los registrados con Google  //
//                                              //
// ******************************************** //

async function saveInDB(nick) {
    const usersRef = collection(db, "users");
    await setDoc(doc(usersRef, userGoogle.email), {
        username: nick,
    }).then(() => {
        showUserData(nick, userGoogle.email, userGoogle.photoURL);
        console.log("Usuario guardado");
    });
}





// ********************************************************************************************************* //
//                                                                                                           //
//                                             QUESTIONS                                                     //
//                                                                                                           //
// ********************************************************************************************************* //



// ********************** //
//                        //
//  Variables de usuario  // 
//                        //
// ********************** //

let playerName = "";      // Nombre //TODO: lo tenemos ya en el HOME hay que almacenarlo allí para leerlo aquí
let playerScore = 0;      // Puntuación final
let playerTime = 0;       // Tiempo total de la partida
let answerTotal = 0;      // Contador de answers acertadas. 
let answerLoseFail = 0;   // Contador de respuestas perdidas o falladas. Cada una resta 1.
let maxQuestions = 9;    // Máximo de preguntas por partida. Empieza en 0.




// ********************************* //
//                                   //
//  Obtención de datos de las API's  // 
//                                   //
// ********************************* //

async function getQuestionsFromAPI() {
    const apiOpen = "https://opentdb.com/api.php?amount=10&type=multiple";
    const apiTrivia = "https://api.trivia.willfry.co.uk/questions?limit=10";

    try {
        let aQuestionsOpen = [];
        let aQuestionsTrivia = [];

        await getDataFromAPI(apiOpen)
            .then(data => {
                aQuestionsOpen = data.results.map(obj => {
                    let sQuestion = obj.question;
                    let aAnswers = [];
                    let oCorrect = { name: "yes", value: obj.correct_answer };
                    aAnswers.push(oCorrect);
                    for (let i = 0; i < obj.incorrect_answers.length; i++) {
                        let oIncorrect = { name: "no", value: obj.incorrect_answers[i] }
                        aAnswers.push(oIncorrect);
                    }
                    return { label: sQuestion, answers: aAnswers };
                });
            });

        await getDataFromAPI(apiTrivia)
            .then(data => {
                aQuestionsTrivia = data.map(obj => {
                    let sQuestion = obj.question;
                    let aAnswers = [];
                    let oCorrect = { name: "yes", value: obj.correctAnswer };
                    aAnswers.push(oCorrect);
                    // A veces hay null y más de 3 respuestas
                    let aAux = [];
                    for (const i of obj.incorrectAnswers) {
                        i && aAux.push(i);
                    }
                    for (let i = 0; i < 3; i++) {
                        let oIncorrect = { name: "no", value: aAux[i] }
                        aAnswers.push(oIncorrect);
                    }
                    return { label: sQuestion, answers: aAnswers };
                });
            });

        // Junto todas las preguntas en un array y las guardo en Firestore
        let aMixQuestions = [...questions, ...aQuestionsOpen, ...aQuestionsTrivia];
        await saveQuestions(shuffleArray(aMixQuestions));

    } catch (error) {
        console.log('Error: ', error)
    }
}


async function getDataFromAPI(api) {
    try {
        let response = await fetch(api);
        let data = await response.json()
        return data;
    } catch (error) {
        console.log(`ERROR: ${error.stack}`);
    }
}


// ********************** //
//                        //
//  Mezclo las preguntas  //
//                        //
// ********************** //
function shuffleArray(array) {
    let aAux = array;
    for (let i = aAux.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [aAux[i], aAux[j]] = [aAux[j], aAux[i]];
    }
    return aAux;
}





// ******************************** //
//                                  //
//  Guardar preguntas en Firestore  //
//                                  //
// ******************************** //

async function saveQuestions(aQuestions) {
    // Borro las preguntas que hay guardadas para que no se acumulen
    await deleteQuestions();
    await aQuestions.map(question => {
        saveOneQuestion(question);
    });
    await saveTenQuestions();
}

async function saveOneQuestion(question) {
    await addDoc(collection(db, "questions"), question);
}

async function deleteQuestions() {
    const querySnapshot = await getDocs(collection(db, "questions"));
    querySnapshot.forEach((doc) => {
        deleteOneQuestion(doc.id);
    });
}

async function deleteOneQuestion(id) {
    await deleteDoc(doc(db, "questions", id));
}

let aTenQuestions = [];
const aTen = [];
async function saveTenQuestions() {
    await getDocs(collection(db, "questions"))
        .then((doc) => {
            console.log(doc.data());
/*             if (aTenQuestions.length < 10) {
                let oQuestions = {
                    label: doc.data().label,
                    answers: doc.data().answers
                };
                aTenQuestions.push(oQuestions);
            } */
        });

    aTen = aTenQuestions;
    console.log("aTenQuestions " + aTenQuestions[0].label);
}


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

async function randomQuestion() {
    // Una posición al azar para mostrar una pregunta
    console.log(aTenQuestions);
    let min = 0;
    let max = aTenQuestions.length - 1;
    let numQuestion = Math.floor(Math.random() * (max - min + 1)) + min;
    return aTen[numQuestion];
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
let eTimer = "";

if (document.getElementById('timer') != null) {
    eTimer = document.getElementById('timer');
}

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






// ************************ //
//                          //
//  Contador de la partida  //
//                          //
// ************************ //
let eCont = "";
if (document.getElementById('contador') != null) {
    eCont = document.getElementById('contador');
    setInterval(timeCount, 1000);
}

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





// **************************** //
//                              //
//  Iniciar los temporizadores  //
//                              //
// **************************** //

function startQuiz() {
    if (answerTotal < maxQuestions) {
        timeToReply = 5;
        timerAtras = setInterval(countDown, 1000);
        console.log(timerAtras);
        printQuestion(randomQuestion());
        countDown();
    }
}





// ************* //
//               //
//  Inicio quiz  //
//               //
// ************* //
if (window.location.pathname == "/pages/question.html") {
    startQuiz();
    timeCount();
}




// ******************************************************************************************************* //
//                                                                                                         //
//                                             RESULTS                                                     //
//                                                                                                         //
// ******************************************************************************************************* //
