
socket = io();

var side = 50;

function setup() {


    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
}




function draw() {
    function drawMatrix(){
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }
            else if (matrix[y][x] == 3) {
                fill("red");
            }
            else if (matrix[y][x] == 4) {
                fill("#25146b");
            }
            else if (matrix[y][x] == 5) {
                fill("#000000");
            }

            rect(x * side, y * side, side, side)


        }
    }
}
}

socket.on("matrica sarqi",drawMatrix)

