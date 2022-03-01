// ************ //
//              //
//  Validación  //
//              //
// ************ //

document.getElementById('start').addEventListener('click', function (event) {
    // Si metió un nombre y mostrar las reglas del juego y el enlace
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
    } else { // Alert con el error TODO: cambiarlo por recuadro con aviso 
        alert('Debes introducir un nombre para jugar');
    }
});