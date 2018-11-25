document.addEventListener('DOMContentLoaded', function (){
let colorSelector = document.querySelector("#colorSelector")
let colors = document.querySelector('#colorPallet');
let canvas = document.querySelector('#canvas')

function selectColor(e) {
  colorSelector.style.backgroundColor = e.target.style.backgroundColor
}

colors.addEventListener('click', selectColor, false)

createCanvas(3000)
function createCanvas (number) {
  for (let square = 0; square < number; square++ ) {
    $(canvas).append("<div class='grid'></div>")
  }
}

canvas.addEventListener('click', function(e){
console.log(e.target)
if (e.target.classList.contains('grid')) {
  console.log('ok')
  e.target.style.backgroundColor = colorSelector.style.backgroundColor

}
} )


})

// element.setAttribute("style", "background-color: red;");
/* <td style="background-color:black"></td> */
// (document.body.classList.contains('thatClass')) {