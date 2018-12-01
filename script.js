

var matrix= [];
var side = 50;
var grassArr = [];
var xotakerArr = [];
var gishatichArr =[];
var mardArr=[];
var satanaArr=[];
function setup() {
   var m = 20;
var mat = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,5,5];
for(var y = 0;y<m;y++){
  matrix.push([])
  for(x = 0; x<m;x++){
    var r = Math.floor(Math.random()*mat.length);
    matrix[y].push(mat[r]);
  }
}

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y)
                grassArr.push(gr)
            }
            else if (matrix[y][x] == 2) {
                var xt = new Xotaker(x, y)
                xotakerArr.push(xt)
            }
            else if (matrix[y][x] == 3) {
                var gsh = new Gishatich(x, y);
                gishatichArr.push(gsh);
            }
            else if (matrix[y][x] == 4) {
                var mrd = new Mard(x, y);
                mardArr.push(mrd);
            }
             else if (matrix[y][x] == 5) {
                var stn = new Satana(x, y);
                satanaArr.push(stn);
            }
            
           
           
        }
    }

    frameRate(5)  ;
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
}




function draw() {
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
            else if ( matrix[y][x]==4){
                fill("#25146b");
            }
             else if ( matrix[y][x]==5){
                fill("#000000");
            }

            rect(x * side, y * side, side, side)

           
        }
    }

    for (var i in grassArr) {
        grassArr[i].mult()
    }


    for (var i in xotakerArr) {
        xotakerArr[i].eat()
        xotakerArr[i].move()
        xotakerArr[i].mult()
        xotakerArr[i].die()
    }
    for (var i in gishatichArr) {
        gishatichArr[i].eat()
        gishatichArr[i].move()
        gishatichArr[i].mult()
        gishatichArr[i].die()
    }
    for (var i in mardArr) {
        mardArr[i].eat()
        mardArr[i].move()
        mardArr[i].die()
    }
    for (var i in satanaArr) {
        satanaArr[i].eat()
        satanaArr[i].move()
        satanaArr[i].die()
    }
   
}

