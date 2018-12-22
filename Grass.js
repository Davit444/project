var LivingCreature = require("./LivingCreature");
module.exports = class Grass extends LivingCreature {
    
    mult() {
        
        var arr = this.chooseCell(0);
        var norVandak=arr[Math.floor(Math.random()*arr.length)];
        this.multiply++ 
        if (norVandak && this.multiply > 3) {
            var newX = norVandak[0]
            var newY = norVandak[1]
            matrix[newY][newX] = 1
            var newGr = new Grass(newX, newY)
            grassArr.push(newGr)
        }
    }
}