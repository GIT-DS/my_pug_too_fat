const Object = require('./object.js')

class Frame{
    constructor(number, lastPlat = ""){
        this.plats = [];
        this.number = number;
        this.lastPlat = lastPlat;
        this.draw();
        this.addPlatform();

    }
    addPlatform(){
        if (this.number === 0){
            this.plats.push( new Object(0, canvas.height - 100, canvas.width, 100, "black"))
            this.plats.push( new Object( canvas.width / 2, canvas.height - 150, 100, 10, "black") )
            this.lastPlat = this.plats[this.plats.length - 1];
        }
        for(let i = 0; i < Math.floor(window.canvas.height / (100 + 10)); i++){
            let rand = Math.random() < 0.5 ? -1 : 1; // random left or right;
            let distance = Math.random() * 300 * rand;
            let x = (this.lastPlat.x + distance);
            
            if (x < 0) {
                x = 0;
            } else if (x > canvas.width){
                x = canvas.width - this.lastPlat.width
            }



            // x = this.iansClamp(0, window.canvas.width, x);

            let y = this.lastPlat.y - 100;
            let newObj = new Object(x, y, 100, 10, "black")
            this.plats.push(newObj);
            this.lastPlat = newObj;
            console.log(this.lastPlat)
        }
    }


    draw(){
        this.plats.forEach(plat => plat.draw());
    }
}

module.exports = Frame;