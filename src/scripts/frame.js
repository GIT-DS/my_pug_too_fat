class Frame{
    constructor(lastPlat, number){
        this.lastPlat = lastPlat
        this.plats = [];
        this.number = number;
    }
    addPlatform(){
        let lastObject = this.lastPlat;
        for(let i = 0; i < Math.floor(window.canvas.height / (100 + 10)); i++){
            let distance = Math.random()*500;
            let rand = Math.random() < 0.5 ? -1 : 1; // random left or right;
            let x = (lastObject.x + distance) * rand;
            if (x >= window.canvas.width){
                x = window.canvas.width - (x - window.canvas.width);
            } else if (lastObject.x + lastObject.width < 0 ){
                x = 100 + x;
            }
            let y = lastObject.y - 100;
            let newObj = new Object(x, y, 100, 10, "black")
            this.plats.push(newObj);
            lastObject = newObj;
        }
    }
}

module.exports = Frame;