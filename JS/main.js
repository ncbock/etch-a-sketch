const container = document.querySelector("#container");

for (let i=0; i<256; i++) {
    let content = document.createElement('div');
    content.classList.add('grid-square');
    container.appendChild(content)
}
let gridSquare = document.querySelectorAll(".grid-square")
let colorful = false

function addColor() {
    gridSquare.forEach((gridSquare) => {
        gridSquare.addEventListener('mouseenter', function(e) {
            if (colorful) {
                color = Math.floor(Math.random()*16777216).toString(16);
                e.target.style.background = "#"+color;
            } else {
                e.target.style.background = "black";
            }
        });
    });
}

addColor();

const btn = document.querySelector("#reset");

btn.addEventListener('click', () => {
    let square = prompt("Enter new grid size (4-64)");
    container.style.gridTemplateColumns = `repeat(${square}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${square}, 1fr)`;
    newSketch(square);
    gridSquare = document.querySelectorAll(".grid-square");
    addColor();
});

const clr = document.querySelector("#colorful")

clr.addEventListener('click', () => {
    colorful = !colorful
    if (colorful) {
        document.getElementById('colorful').innerHTML = "Black"
    }
    else {
        document.getElementById('colorful').innerHTML = "Color"
    }
})

function newSketch(num) {
    gridSquare.forEach((gridSquare) => {
        gridSquare.remove()
    });
    for (let i=0; i<(num*num); i++) {
        let content = document.createElement('div');
        content.classList.add('grid-square');
        container.appendChild(content)
    }
}