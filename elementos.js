const sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
const sectionReiniciar = document.getElementById("reiniciar")
const botonMascotaJugador = document.getElementById("boton-mascota")
const botonFuego = document.getElementById("boton-fuego")
const botonAgua = document.getElementById("boton-agua")
const botonTierra = document.getElementById("boton-tierra")
const botonReinicar = document.getElementById("boton-reiniciar")
const sectionSeleccionarMascota = document.getElementById("seleccionar-mascota")

const sectionReiniciarJuego = document.getElementById("reiniciar")
const inputDragon = document.getElementById ("pikachu")
const inputLeon = document.getElementById ("phanpy")
const inputBallena = document.getElementById ("squirtle")
const spanMascotaJugador = document.getElementById("mascota-judador")

const spanMascotaEnemigo = document.getElementById("mascota-enemigo")

const spanVidasJugador = document.getElementById("vidas-jugador")
const spanVidasEnemigo = document.getElementById("vidas-enemigo")

const sectionMensajes = document.getElementById("resultado")
const ataquesDelJugador = document.getElementById("ataque-jugador")
const ataquesDelEnemigo = document.getElementById("ataque-enemigo")

let saloisa = []
let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

class Saloisa {
    constructor(nombre,foto, vida){
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
    }
}

let pikachu = new Saloisa('Pikachu', 'img/dragon.jpg', 5)

let phanpy = new Saloisa('Phanpy', 'img/tierra.png', 5)

let squirtle = new Saloisa('Squirtle', 'img/Agua.png', 5)

pikachu.ataques.push(
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '💦', id: 'boton-agua'},
    {nombre: '🌱', id: 'boton-tierra'},
)

phanpy.ataques.push(
    {nombre: '🌱', id: 'boton-tierra'},
    {nombre: '🌱', id: 'boton-tierra'},
    {nombre: '🌱', id: 'boton-tierra'},
    {nombre: '💦', id: 'boton-agua'},
    {nombre: '🔥', id: 'boton-fuego'},
)

squirtle.ataques.push(
    {nombre: '💦', id: 'boton-agua'},
    {nombre: '💦', id: 'boton-agua'},
    {nombre: '💦', id: 'boton-agua'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🌱', id: 'boton-tierra'},
)

saloisa.push(pikachu, phanpy, squirtle)

function iniciarJuego(){
    sectionSeleccionarAtaque.style.display = "none"
    sectionReiniciar.style.display = "none"
    botonMascotaJugador.addEventListener("click", SeleccionarMascotaJugador)
    botonFuego.addEventListener("click", ataqueFuego)
    botonAgua.addEventListener("click", ataqueAgua)
    botonTierra.addEventListener("click", ataqueTierra)
    botonReinicar.addEventListener("click", reiniciarJuego)
}

function SeleccionarMascotaJugador(){
    sectionSeleccionarMascota.style.display = "none"
    sectionReiniciarJuego.style.display = "none"
    sectionSeleccionarAtaque.style.display = "flex"

    if (inputDragon.checked){
        spanMascotaJugador.innerHTML = "pikachu"
    }else if (inputLeon.checked) {
        spanMascotaJugador.innerHTML = "phanpy"
    }else if (inputBallena.checked) {
        spanMascotaJugador.innerHTML = "squirtle"
    } else {
        alert("Selecciona una mascota")
    }

    SeleccionarMascotaEnemigo()
}

function SeleccionarMascotaEnemigo(){
    let mascotaAleatoria = aleatorio(1, 3)
    
    if (mascotaAleatoria == 1){
        spanMascotaEnemigo.innerHTML = "pikachu"
    } else if (mascotaAleatoria == 2){
        spanMascotaEnemigo.innerHTML = "phanpy"
    } else {
        spanMascotaEnemigo.innerHTML = "squirtle"
    }
}

function ataqueFuego(){
    ataqueJugador = "FUEGO"
    ataqueAleatorioEnemigo()
}

function ataqueAgua(){
    ataqueJugador = "AGUA"
    ataqueAleatorioEnemigo()
}

function ataqueTierra(){
    ataqueJugador = "TIERRA"
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(1, 3)

    if(ataqueAleatorio == 1){
        ataqueEnemigo = "FUEGO"
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = "AGUA"
    } else {
        ataqueEnemigo = "TIERRA"
    }

    combate()
}

function combate(){
    if (ataqueEnemigo == ataqueJugador) {
        crearMensaje("Empate")
    } else if (ataqueJugador == "FUEGO" && ataqueEnemigo == "TIERRA"){
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if (ataqueJugador == "AGUA" && ataqueEnemigo == "FUEGO"){
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if (ataqueJugador == "TIERRA" && ataqueEnemigo == "AGUA"){
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else {
        crearMensaje("PERDISTE")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }

    revisarVidas()
}

function revisarVidas(){
    if(vidasEnemigo == 0){
        crearMensajeFinal("Felicitaciones Ganaste 🥳🥳🥳🥳🥳🥳🥳🥳")
    }else if(vidasJugador == 0){
        crearMensajeFinal("Perdiste, sigue intentando 😔")
    }
}

function crearMensaje(resultado){
    let nuevoAtaqueDelJugador = document.createElement("p")
    let nuevoAtaqueDelEnemigo = document.createElement("p")

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo

    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajeFinal(resultadoFinal){
    sectionMensajes.innerHTML = resultadoFinal
    botonFuego.disabled = true
    botonAgua.disabled = true
    botonTierra.disabled = true
    sectionReiniciarJuego.style.display = "block"
}

function reiniciarJuego (){
    location.reload()
}

function aleatorio (min, max){
    return Math.floor(Math.random()*(max - min + 1) + min)
}

window.addEventListener("load", iniciarJuego)