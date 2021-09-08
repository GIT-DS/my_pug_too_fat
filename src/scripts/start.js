class Start{
    constructor(){
        this.startButton = new Object(canvas.width/2, canvas.height/2, 300, 100, "White")
    }

    draw(){
        this.startButton.draw();
        window.context.fillText("Start", canvas.width / 2, canvas.height /2)
    }
}

module.exports = Start