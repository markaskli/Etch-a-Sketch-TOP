let color;

document.addEventListener('DOMContentLoaded', function() {
    createTable(16);
})


function createTable(size) {

    

    let board= document.querySelector(".board");
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`

    let numberOfDivs = size*size;

    for(let i = 0; i < numberOfDivs; i++) {
        let div = document.createElement('div');
        div.addEventListener('mouseover', generateColor)
        board.insertAdjacentElement('beforeend', div);
    } 

}

function generateColor() {
    if(color == 'black') {
        this.style.backgroundColor = "black";
    }
    else if(color == 'rgb') {
        var rgb = [Math.random() * 256, Math.random() * 256, Math.random() * 256];
        this.style.backgroundColor = "rgb(" + rgb + ")";
    }
}

function colorChose(output) {
    color = output;
}

var slider = document.getElementById("myRange");
var output = document.getElementById("value");

slider.oninput = () => {
  output.innerHTML = slider.value;
};

function clearBoard() {
    let divs = document.querySelectorAll("div");
    divs.forEach((div) => div.style.backgroundColor = "white");
}






