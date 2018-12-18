var LivingCreature = require("./LivingCreature");
module.exports=class Xotaker extends LivingCreature {
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
            var xt = new Xotaker(newX, newY)
            xotakerArr.push(xt)
        }
    }

    move() {
        var arr = this.chooseCell(0);
        var norVandak=arr[Math.floor(Math.random()* arr.length)]
        this.energy--;

        if (norVandak) {
            var newX = norVandak[0]
            var newY = norVandak[1]
            matrix[newY][newX] = 2
            matrix[this.y][this.x] = 0

            this.x = newX
            this.y = newY
        }
    }

    eat() {
        var arr = this.chooseCell(1);
        var norVandak=arr[Math.floor(Math.random()* arr.length)]
        if (norVandak) {
            var newX = norVandak[0]
            var newY = norVandak[1]
            matrix[newY][newX] = 2
            matrix[this.y][this.x] = 0


            for (var i in grassArr) {
                if (grassArr[i].x == newX && grassArr[i].y == newY) {
                    grassArr.splice(i, 1)
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
            for (var i in xotakerArr) {
                if (xotakerArr[i].x == this.x && xotakerArr[i].y == this.y) {
                    xotakerArr.splice(i, 1)
                }
            }
        }
    }
}