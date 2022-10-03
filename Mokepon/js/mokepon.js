const ataquesEnemigo = document.getElementById('ataques-enemigo')
const ataquesJugador = document.getElementById('ataques-jugador')
const botonAgua = document.getElementById('boton-agua')
const botonFuego = document.getElementById('boton-fuego')
const botonTierra = document.getElementById('boton-tierra')
const botonMascotaJugador = document.getElementById('boton-mascota')
const botonReiniciar = document.getElementById('boton-reiniciar')
const inputHipodoge = document.getElementById('hipodoge')
const inputCapipepo = document.getElementById('capipepo')
const inputRatigueya = document.getElementById('ratigueya')
const inputLangostelvis = document.getElementById('langostelvis')
const inputTucapalma = document.getElementById('tucapalma')
const inputPydos = document.getElementById('pydos')
const sectionMensajes = document.getElementById('resultado')
const sectionReiniciar = document.getElementById('reiniciar')
const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
const spanMascotaEnemigo = document.getElementById('mascota-enemigo')
const spanMascotaJugador = document.getElementById('mascota-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')
const spanVidasJugador = document.getElementById('vidas-jugador')

let mokepones = []
let ataqueJugador
let ataqueEnemigo
let resultadoCombate
let vidasJugador = 3
let vidasEnemigo = 3
let resultadoFinal

class Mokepon {
    constructor(nombre, foto, vida) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
    }
}

let hipodoge = new Mokepon('Hipodoge', './assets/mokepons_mokepon_hipodoge_attack.png', 5)
let capipepo = new Mokepon('Capipepo', './assets/mokepons_mokepon_capipepo_attack.png', 5)
let ratigueya = new Mokepon('Ratigueya', './assets/mokepons_mokepon_ratigueya_attack.png', 5)

mokepones.push(hipodoge, capipepo, ratigueya)

function iniciarJuego() {
    sectionSeleccionarAtaque.style.display = 'none'
    sectionReiniciar.style.display = 'none'

    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
    botonFuego.addEventListener('click', ataqueFuego)
    botonAgua.addEventListener('click', ataqueAgua)
    botonTierra.addEventListener('click', ataqueTierra)
    botonReiniciar.addEventListener('click', reiniciarJuego)
}

function seleccionarMascotaJugador() {
    if(inputHipodoge.checked) {
        mascotaJugador("Hipodoge")
    } else if(inputCapipepo.checked) {
        mascotaJugador("Capipepo")
    } else if(inputRatigueya.checked) {
        mascotaJugador("Ratigueya")
    } /*else if(inputLangostelvis.checked) {
        mascotaJugador("Langostelvis")
    } else if(inputTucapalma.checked) {
        mascotaJugador("Tucapalma")
    } else if(inputPydos.checked) {
        mascotaJugador("Pydos")
    } */else {
        alert("Debes seleccionar una mascota")
    }
}

function mascotaJugador(mascota) {
    sectionSeleccionarMascota.style.display = 'none'
    sectionSeleccionarAtaque.style.display = 'flex'
    spanMascotaJugador.innerHTML = mascota

    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo() {
    let mascotaAleatoria = aleatorio(1, 3)

    switch(mascotaAleatoria) 
    {
        case 1:
            mascotaEnemigo("Hipodoge")
            break
        case 2:
            mascotaEnemigo("Capipepo")
            break
        case 3:
            mascotaEnemigo("Ratigueya")
            break
        case 4:
            mascotaEnemigo("Langostelvis")
            break
        case 5:
            mascotaEnemigo("Tucapalma")
            break
        case 6:
            mascotaEnemigo("Pydos")
            break
    }
}

function mascotaEnemigo(mascota) {
    spanMascotaEnemigo.innerHTML = mascota
}

function ataqueFuego() {
    ataqueJugador = 'FUEGO'
    ataqueAleatorioEnemigo()
}

function ataqueAgua() {
    ataqueJugador = 'AGUA'
    ataqueAleatorioEnemigo()
}

function ataqueTierra() {
    ataqueJugador = 'TIERRA'
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1, 3)

    switch(ataqueAleatorio) 
    {
        case 1:
            ataqueEnemigo = 'FUEGO'
            break
        case 2:
            ataqueEnemigo = 'AGUA'
            break
        case 3:
            ataqueEnemigo = 'TIERRA'
            break
    }

    combate()
}

function combate() {
    if(ataqueJugador == ataqueEnemigo) {
        resultadoCombate = 'EMPATE'
    } else if(ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA' || ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO' || ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA') {
        vidasEnemigo--
        resultadoCombate = 'GANASTE'
    } else {
        vidasJugador--
        resultadoCombate = 'PERDISTE'
    }
    
    revisarVidas()
}

function revisarVidas() {
    if(vidasJugador > 0 && vidasEnemigo > 0) {
        crearMensajeCombate()
        spanVidasJugador.innerHTML = vidasJugador + ' ❤️'
        spanVidasEnemigo.innerHTML = vidasEnemigo + ' ❤️'
    } else if(vidasJugador == 0) {
        crearMensajeCombate()
        spanVidasJugador.innerHTML = vidasJugador + ' ❤️'
        resultadoFinal = "Perdiste"
        crearMensajeFinal(resultadoFinal)
    } else if(vidasEnemigo == 0) {
        crearMensajeCombate()
        spanVidasEnemigo.innerHTML = vidasEnemigo + ' ❤️'
        resultadoFinal = "Ganaste"
        crearMensajeFinal(resultadoFinal)
    }
}

function crearMensajeCombate() {   
    let nuevoAtaqueJugador = document.createElement('p')
    let nuevoAtaqueEnemigo = document.createElement('p')

    sectionMensajes.innerHTML = resultadoCombate
    nuevoAtaqueJugador.innerHTML = ataqueJugador
    nuevoAtaqueEnemigo.innerHTML = ataqueEnemigo

    ataquesJugador.appendChild(nuevoAtaqueJugador)
    ataquesEnemigo.appendChild(nuevoAtaqueEnemigo)
}

function crearMensajeFinal(resultadoFinal) {
    sectionMensajes.innerHTML = resultadoFinal + ' el combate'

    botonFuego.disabled = true
    botonAgua.disabled = true
    botonTierra.disabled = true

    sectionReiniciar.style.display = 'block'
}

function reiniciarJuego() {
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', iniciarJuego)