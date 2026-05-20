const container = document.querySelector(".container");

function createSquare() {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.width = "16px";
    square.style.height = "16px";

    square.addEventListener("mouseenter", function() {
        square.style.backgroundColor = "black";
    });

    container.appendChild(square);
}

function deleteCanvas() {
    const canvasDivs = document.querySelectorAll(".square");
    canvasDivs.forEach(function(square){
        square.remove();
    });
}

function createCanvas(width) {
    container.style.width = `${16*width}px`;
    container.style.height = `${16*width}px`;

    for (let i = 0; i < width*width; i++) {
        createSquare();
    }
}

const button = document.querySelector("button");
button.addEventListener("click", function(){
    let strWidth = prompt("Enter number of squares per side. Ex: 100", "16");
    let canvasWidth = Number(strWidth);
    if (canvasWidth) {
        deleteCanvas();
        createCanvas(canvasWidth);
    }
});

createCanvas(16);