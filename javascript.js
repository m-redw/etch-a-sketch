function createSquare() {
    const container = document.querySelector(".container");
    const square = document.createElement("div");
    square.style.width = "16px";
    square.style.height = "16px";
    container.appendChild(square);
}

for (let i = 0; i < 256; i++) {
    createSquare();
}