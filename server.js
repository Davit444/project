var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);


app.use(express.static("."));
app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000);

Grass = require("./Grass.js");
Xotaker = require("./Xotaker.js");
Gishatich = require("./Gishatich.js");
Mard = require("./Mard.js");
Satana = require("./Satana.js");

io.on('connection', function (socket) {

});
weather = "spring";
grassArr = [];
xotakerArr = [];
gishatichArr = [];
mardArr = [];
satanaArr = [];
matrix = [];

var m =20;
var mat = [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 4, 5];
for (var y = 0; y < m; y++) {
    matrix.push([])
    for (x = 0; x < m; x++) {
        var r = Math.floor(Math.random() * mat.length);
        matrix[y].push(mat[r]);
    }
}console.log(matrix)


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




setInterval(changeWeather, 5000);
function changeWeather() {
    if (weather == "spring") {
        weather = "summer"
    }
    else if (weather == "summer") {
        weather =="autmn"
    }
    else if (weather == "autmn") {
        weather = "winter"
    }
    else if (weather == "winter") {
        weather = "spring"
    }
    io.sockets.emit("changeWeather", weather);
}


function drawServerayin() {


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
    io.sockets.emit("matrix", matrix);

}
setInterval(drawServerayin, 1000);

