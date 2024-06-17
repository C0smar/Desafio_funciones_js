

document.addEventListener('keydown', function (event) {
    
    var cambiarColor = document.getElementById('key') 

    if (event.key === 'a') {
        cambiarColor.style.backgroundColor = 'pink'

    } else if (event.key === 's') {
        cambiarColor.style.backgroundColor = 'orange'
    } else if (event.key === 'd') {
        cambiarColor.style.backgroundColor = 'skyblue'
    }})



document.addEventListener('keydown',(event)=>{
    var container = document.querySelector('.container')
     
    function generarDivs (color) {
        var nuevosDiv = document.createElement('div')
    nuevosDiv.style.width ='200px'
    nuevosDiv.style.height ='200px'
    nuevosDiv.style.backgroundColor= color
    document.body.appendChild(nuevosDiv)
        }if (event.key == 'q') {
            generarDivs('purple')
       }else if (event.key == 'w'){
            generarDivs('gray')
       }else if (event.key == 'e') {
            generarDivs('brown')
       }
})

