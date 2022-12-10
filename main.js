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
        div.addEventListener('mouseover', (event) => {
            event.target.style.backgroundColor = generateColor();
        });
        board.insertAdjacentElement('beforeend', div);
    }

}

function generateColor(color) {

    var rgb = [Math.random() * 256, Math.random() * 256, Math.random() * 256];
    return "rgb(" + rgb + ")";
}

document.getElementById('blackColor').addEventListener('click', generateColor(black));

