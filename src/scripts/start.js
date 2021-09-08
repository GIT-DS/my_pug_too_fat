class Start{
    constructor(){
        this.startButton = new Object(canvas.width/2, canvas.height/2, 300, 100, "White")
    }

    draw(){
        window.context.drawImage(startBG, 0, 0, canvas.width, canvas.height)
        window.startButton = new Object(canvas.width/2 - 177, canvas.height - 200, 300, 100, "White")
        window.startButton.draw();
        window.context.font = "30px Arial";
        window.context.fillStyle = "black"
        window.context.textAlign = "center";
        window.context.fillText("Start", canvas.width / 2 - 30, canvas.height - 150 + 13)
    }
}

module.exports = Start