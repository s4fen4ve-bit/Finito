//Variables

let acontecimientos = document.getElementById('acontecimientos')
let acciones = document.getElementById('acciones')
let boton1 = document.getElementById('boton1')
let boton2 = document.getElementById('boton2')
let boton3 = document.getElementById('boton3')
let botonP = document.getElementById('botonP')
let botonR = document.getElementById('botonR')
let finalesUnicos = JSON.parse(localStorage.getItem("FinalesUnicos")) || [];
let finales = finalesUnicos.length;


//inicio del juego

acontecimientos.innerHTML = '<p class="acontecimientos">!Hola Jugador¡ este es un juego de rol medieval con varios finales, intenta explorar todas la acciones posibles y conseguir todos los 7 finales disponibles</p>'
boton1.innerHTML = '<p class="acciones">iniciar el juego</p>'
botonP.innerHTML = '<p class="acciones">Ver puntaje</p>'
boton2.innerHTML = '<p class="esconder"></p>'
boton3.innerHTML = '<p class="esconder"></p>'

boton1.addEventListener("click", serpiente);
botonP.addEventListener("click", Puntaje);

//Ver puntaje

function Puntaje(){

          let musica = document.getElementById("musicaFinal");
      musica.volume = 0.6;
  musica.play();

  acontecimientos.innerHTML = `<p class="acontecimientos">${finales}/7 finales</p>`;
  botonP.innerHTML = '<p class="esconder"></p>';
  botonR.innerHTML = '<p class="acciones">reiniciar progreso</p>';
  botonR.addEventListener("click", reiniciarFinales)

   }

//serpiente

function serpiente(){


      let musica = document.getElementById("musicaFinal");
      musica.volume = 0.6;
  musica.play();

botonP.innerHTML = '<p class="esconder"></p>'
botonR.innerHTML = '<p class="esconder"></p>';
acontecimientos.innerHTML = '<p class="acontecimientos">Te despiertas sin ningun recuerdo del pasado, sin embargo no hay tiempo de pensar por que una serpiente se interpone en tu camino, ¿que vas a hacer?</p>'
boton1.innerHTML = '<p class="acciones">huir</p>'
boton2.innerHTML = '<p class="acciones">matar</p>'

boton1.addEventListener("click", muerteSerpiente)
boton2.addEventListener("click", leon)

}

function muerteSerpiente(){

acontecimientos.innerHTML = '<p class="acontecimientos">Al tratar de huir, la serpiente se asusta y te muerde, el veneno te mata, no obstante, tu determinacion te permite reencarnar si tu lo deseas</p>'
boton1.innerHTML = '<p class="esconder"></p>'
boton2.innerHTML = '<p class="esconder"></p>'
boton3.innerHTML = '<p class="acciones">rencarnar</p>'

completarFinal("muerteSerpiente")

}

//leon

function leon(){

acontecimientos.innerHTML = '<p class="acontecimientos">la serpiente salta hacia ti pero la consigues agarrar y la neutralizas. Siguiendo tu camino te topas con un leon que parece que no quiere pelear, ¿que haces?</p>'
boton1.innerHTML = '<p class="acciones">matar</p>'
boton2.innerHTML = '<p class="acciones">huir</p>'

boton1.addEventListener("click", cazador)
boton2.addEventListener("click", cazadorL)

}

//cazador

function cazador(){

acontecimientos.innerHTML = '<p class="acontecimientos">desenvainas una pequeña daga y de dos cuchilladas rapidas la bestia cae, sin embargo cuando continuas te topas con un cazador de leones, ¿que haces?</p>'
boton1.innerHTML = '<p class="acciones">luchar</p>'
boton2.innerHTML = '<p class="acciones">huir</p>'
boton3.innerHTML = '<p class="esconder"></p>'

boton1.addEventListener("click", muerteCazador1)
boton2.addEventListener("click", muerteCazador2)
}

function muerteCazador1(){

acontecimientos.innerHTML = '<p class="acontecimientos">Tu daga no es suficiente contra su ballesta cargada, mueres, ¿acaso quieres reencarnar?, intentarlo de nuevo, quizas con la ayuda de alguien mas lo podrias conseguir</p>'
boton1.innerHTML = '<p class="esconder"></p>'
boton2.innerHTML = '<p class="esconder"></p>'
boton3.innerHTML = '<p class="acciones">reintentar</p>'

completarFinal("muerteCazador1")

}

function muerteCazador2(){

acontecimientos.innerHTML = '<p class="acontecimientos">Apenas das un paso el cazador te dispara y mueres, ¿acaso quieres reencarnar?, intentarlo de nuevo, quizas con la ayuda de alguien mas lo podrias conseguir</p>'
boton1.innerHTML = '<p class="esconder"></p>'
boton2.innerHTML = '<p class="esconder"></p>'
boton3.innerHTML = '<p class="acciones">reencarnar</p>'

completarFinal("muerteCazador2")

}
function cazadorL(){

acontecimientos.innerHTML = '<p class="acontecimientos">ves que la bestia corre, parece que huye de algo, alzas la mirada y vislumbras un cazador de leones, ¿que vas a hacer?</p>'
boton1.innerHTML = '<p class="acciones">matar</p>'
boton2.innerHTML = '<p class="acciones">huir</p>'

boton1.addEventListener("click", bandidos)
boton2.addEventListener("click", aldea)
}

//aldea

function aldea(){

acontecimientos.innerHTML = '<p class="acontecimientos">El leon lo distrae y logras escapar, luego de un largo rato corriendo encuentras una aldea que esta siendo atacada, puedes atacarla y unirte al bando agresor o puedes ayudar a salvarla ¿que vas a hacer?</p>'
boton1.innerHTML = '<p class="acciones">atacar</p>'
boton2.innerHTML = '<p class="acciones">ayudar</p>'

boton1.addEventListener("click", asesino)
boton2.addEventListener("click", clerigo)

}

//bandidos

function bandidos(){
acontecimientos.innerHTML = '<p class="acontecimientos">Tu y el leon logran deshacerse del cazador, el leon se retira sin hacerte daño, sigues caminando y un grupo de bandidos que vieron lo acontecido te asaltan creyendo que eres un mercenario, ¿que decides hacer? </p>'
boton1.innerHTML = '<p class="acciones">luchar</p>'
boton2.innerHTML = '<p class="acciones">huir</p>'

boton1.addEventListener("click", mercenario)
boton2.addEventListener("click", cobarde)

}

//finales

function asesino(){
acontecimientos.innerHTML = '<p class="acontecimientos">junto con los bandidos masacran la aldea sin dejar sobrevivientes, luego de eso te separas del grupo y decides reflexionar acerca de lo que a pasado, te sientes horrible por lo que hiciste y ni siquiera sabes por que estas aqui pero sientes que tu determinacion puede hacer que vuelvas y que repitas lo que paso para no sentirte como un sucio asesino</p>'
boton3.innerHTML = '<p class="acciones">reencarnar</p>'
boton2.innerHTML = '<p class="esconder"></p>'
boton1.innerHTML = '<p class="esconder"></p>'

completarFinal("asesino")

}
function clerigo(){
acontecimientos.innerHTML = '<p class="acontecimientos">Tras rescatar la aldea, ayudas a refugiar los heridos y con el tiempo te vuelves el clerigo del pueblo, sin embargo, te sientes vacio, a pesar de tu posicion en la aldea aun no sabes por que estas aqui, solo quieres volver... quieres... rencarnar</p>'
boton3.innerHTML = '<p class="acciones">reencarnar</p>'
boton2.innerHTML = '<p class="esconder"></p>'
boton1.innerHTML = '<p class="esconder"></p>'

completarFinal("clerigo")

}
function mercenario(){
acontecimientos.innerHTML = '<p class="acontecimientos">te llenas de furia y apuñalas a un bandido, le robas su arma y luchas con el resto, cuando acabas con todos, decides no parar y te vuelves un mercenario en forma, atracas tabernas y clubes, con el tiempo te vuelves famoso, sin embargo, un dia empiezas a sentir una fuerza que te llama para que regreses, para que... rencarnes otra y otra vez</p>'
boton3.innerHTML = '<p class="acciones">reencarnar</p>'
boton2.innerHTML = '<p class="esconder"></p>'
boton1.innerHTML = '<p class="esconder"></p>'

completarFinal("mercenario")

}
function cobarde(){
acontecimientos.innerHTML = '<p class="acontecimientos">despues de huir una sensacion de miedo invade tu cuerpo, te sientes un pobre cobarde, no quieres estar aqui por que no sabes donde ni cuando es aqui, solo quieres una forma de salir de aqui...</p>'
boton3.innerHTML = '<p class="acciones">reencarnar</p>'
boton2.innerHTML = '<p class="esconder"></p>'
boton1.innerHTML = '<p class="esconder"></p>'

completarFinal("cobarde")

}

function completarFinal(idFinal){


  if (!finalesUnicos.includes(idFinal)) {   
    finalesUnicos.push(idFinal);            
    localStorage.setItem("FinalesUnicos", JSON.stringify(finalesUnicos));
  }
  finales = finalesUnicos.length;          
  localStorage.setItem("Finales", finales); 
}
function reiniciarFinales() {

  alert("progreso reiniciado")
  finalesUnicos = []; 
  finales = 0;        
  localStorage.removeItem("FinalesUnicos"); 
  localStorage.removeItem("Finales");
  document.location.reload()
}

