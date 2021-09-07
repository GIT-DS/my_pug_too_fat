class WindCircles{
    constructor(x, y, dx, radius){
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.radius = radius
        this.friction = 0.1;
    }

    draw(){
        window.context.beginPath();
        let cir = window.context.arc(this.x, this.y, radius, 0, Math.PI*2, false);
        cir.fillStyle = 'blue'
        cir.stroke();
        this.circleStep();
    }

    circleStep(){
        this.x += this.dx * this.friction;
    }
}
module.exports = WindCircles;