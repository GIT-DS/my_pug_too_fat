class Background{
    constructor(src){
        this.img = new Image();
        this.img.src = src;
    }
    draw(){
        window.context.drawImage(this.img, 0, 0)
    }
}
module.exports = Background