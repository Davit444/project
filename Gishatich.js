var LivingCreature = require("./LivingCreature");
module.exports=class Gishatich extends LivingCreature {
    getNewDirections() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ]
    }
    mult() {
        var arr = this.chooseCell(0);
        var norVandak=arr[Math.floor(Math.random()* arr.length)]
        if (norVandak && this.energy > 10) {
            var newX = norVandak[0]
            var newY = norVandak[1]
            matrix[newY][newX] = 2
            var gsh = new Gishatich(newX, newY)
            gishatichArr.push(gsh)
        }
    }

    move() {
        var arr = this.chooseCell(0);
        var norVandak=arr[Math.floor(Math.random()* arr.length)]
        this.energy -= 2;
        if (norVandak) {
            var newX = norVandak[0]
            var newY = norVandak[1]
            matrix[newY][newX] = 3
            matrix[this.y][this.x] = 0

            this.x = newX
            this.y = newY
        }
    }

    eat() {
        var arr = this.chooseCell(2);
        var norVandak=arr[Math.floor(Math.random()* arr.length)]
        if (norVandak) {
            var newX = norVandak[0]
            var newY = norVandak[1]
            matrix[newY][newX] = 3
            matrix[this.y][this.x] = 0

            for (var i in xotakerArr) {
                if (xotakerArr[i].x == newX && xotakerArr[i].y == newY) {
                    xotakerArr.splice(i, 1)
                }
            }

            this.x = newX
            this.y = newY
            this.energy += 2
        }
    }

    die() {

        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0
            for (var i in gishatichArr) {
                if (gishatichArr[i].x == this.x && gishatichArr[i].y == this.y) {
                    gishatichArr.splice(i, 1)
                }
            }
        }
    }
}