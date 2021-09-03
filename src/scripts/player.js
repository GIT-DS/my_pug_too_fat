class Player{
    constructor(x, y, width, height, color){
        this.x = x;
        this.y = y;
        this.dx = 0;
        this.dy = 0;
        this.width = width;
        this.height = height;
        this.maxHeight = 10;
        this.color = color
        this.draw();
    }

    draw(){
        context.fillStyle = "red";
        context.fillRect(this.x, this.y, this.width, this.height);
    }

    animate(){
        this.x += this.dx;

        if(this.y >= this.maxHeight){
            this.dy = -this.dy;
        }

        this.y += this.dy;
    }
}

module.exports = Player;