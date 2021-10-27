const Object = require('./object.js')
// const Background = require('./background.js')

class Frame{
    constructor(number, lastPlat = ""){
        this.plats = [];
        this.number = number;
        this.lastPlat = lastPlat;
        this.addPlatform();
    }
    addPlatform(){
        if (this.number === 0){
            this.plats.push( new Object(0, canvas.height - 100, canvas.width, 100, "black"))
            this.plats.push( new Object( canvas.width / 2, canvas.height - 150, 10, 10, "lightgrey") )
            this.lastPlat = this.plats[this.plats.length - 1];
        }
        for(let i = 0; i < window.canvas.height/ 190; i++){
            let rand = Math.random() < 0.5 ? -1 : 1; // random left or right;
            let distance = (Math.random() * 100 + 200) * rand
            let x = (this.lastPlat.x + distance);
            
            if (x < 0) {
                x = 50;
            } else if (x > canvas.width - 100){
                x = canvas.width - 200;
            }


            
            let y = this.lastPlat.y - 190;
            if (y < 0 && this.number != 0){
                y = canvas.height - 10;
            }

            let randWidth = Math.random()*canvas.width * 0.01 + 20;

            let newObj = new Object(x, y, randWidth, canvas.height *0.01, "lightgrey")
            this.plats.push(newObj);
            this.lastPlat = newObj;
        }
    }


    draw(){
        this.plats.forEach(plat => plat.draw());
    }
}

module.exports = Frame;