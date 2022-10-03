function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function eleccion(jugada) {
    let resultado = ""
    if(jugada == 1) {
        resultado = "piedra 🪨"
    } else if (jugada == 2) {
        resultado = "papel 📄"
    } else if (jugada == 3) {
        resultado = "tijera ✂️"
    } else {
        resultado = "no elegir 🤦‍♂️"
    }
    return resultado
}

// 1 es piedra, 2 es papel, 3 es tijera
let jugador = 0
let pc = 0
let min = 1
let max = 3
let triunfos = 0
let perdidas = 0

while(triunfos < 3 && perdidas < 3) {
    jugador = prompt("Elige: 1 para 🪨, 2 para 📄, 3 para ✂️")
    pc = aleatorio(min, max)

    // alert("Elegiste " + jugador)
    alert("Elegiste " + eleccion(jugador))

    if(jugador >= min && jugador <= 3) {
        alert("PC elige " + eleccion(pc))
    }
    
    // Combate
    if(pc == jugador) {
        alert("Empate")
    } else if(jugador == 1 && pc == 3 || jugador == 2 && pc == 1 || jugador == 3 && pc == 2) {
        triunfos++
        alert("Ganaste")
    } else {
        perdidas++
        alert("Perdiste")
    }
}     

if(triunfos == 1) {
    alert("Ganaste " + triunfos + " vez. Perdiste " + perdidas + " veces.")
} else if(perdidas == 1) {
    alert("Ganaste " + triunfos + " veces. Perdiste " + perdidas + " vez.")
} else {
    alert("Ganaste " + triunfos + " veces. Perdiste " + perdidas + " veces.")
}

if(triunfos == 3) {
    alert("Ganaste el juego")
} else {
    alert("Perdiste el juego")
}