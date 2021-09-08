class Object {
    constructor(x, y, width, height, color, visible = true){
        this.x = x;
        this.y =  y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.visible = visible;

    }

    draw (){
        context.fillStyle = this.color;
        context.lineWidth = 3;
        context.strokeStyle = "black"
        context.fillRect(this.x, this.y, this.width, this.height);   
        context.strokeRect(this.x, this.y, this.width, this.height);
    }



}

module.exports = Object;