
var blueBox = document.getElementById("caja_azul")

function pintar(elemento, color) {
    elemento.style.backgroundColor = color
}

blueBox.addEventListener("click", ()=>{
    pintar(blueBox, 'black')
})


var redBox = document.getElementById("caja_roja")

function pintar(elemento, color) {
    elemento.style.backgroundColor = color
}

redBox.addEventListener("click", ()=>{
    pintar(redBox, 'black')
})


var greenBox = document.getElementById("caja_verde")

function pintar(elemento, color) {
    elemento.style.backgroundColor = color
}

greenBox.addEventListener("click", ()=>{
    pintar(greenBox, 'black')
})

var yellowBox = document.getElementById("caja_amarilla")

function pintar(elemento, color) {
    elemento.style.backgroundColor = color
}

yellowBox.addEventListener("click", ()=>{
    pintar(yellowBox, 'black')
})