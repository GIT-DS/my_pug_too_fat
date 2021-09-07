class WindCircles{
    constructor(x, y, dx, radius){
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.radius = radius
        this.friction = 0.2;
    }

    draw(){
        this.circleStep();
        window.context.beginPath();
        window.context.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
        window.context.fillStyle = 'rgba(255, 255, 255, .30)'
        window.context.fill();
        window.context.strokeStyle = 'rgba(255, 255, 255, .10)'
        window.context.stroke();
    }

    circleStep(){
        this.x += this.dx * this.friction;
    }
}
module.exports = WindCircles;