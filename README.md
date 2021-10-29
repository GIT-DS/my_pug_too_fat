# My Pug is Too Fat (give her some exercise)

# [Live](https://git-ds.github.io/my_pug_too_fat/)

![pug1](https://user-images.githubusercontent.com/39077702/139508307-f8f56b19-3a90-4625-a7ed-8a43c6e7a009.png)
![pug2](https://user-images.githubusercontent.com/39077702/139508308-2dd3e65c-05d6-4def-bbdd-f5d6213dff15.png)
![pug3](https://user-images.githubusercontent.com/39077702/139508309-27df8e02-49ea-4ce4-994d-13187b1ad018.png)

## Background

The point of this game is to give my chonky pug some exercise by jumping from platform to platform. Each platform is procedurally generated to ensure it's somewhere within the parabolic curve of my pug's jump. Sounds fun right? SIKE! This game is designed to be frustrating. There will be some *fun* surprises along the way : ^ ) . If you mess up and fall, you could potentially make my pug fall all the way to the bottom. 

## Functionality and MVP

This application will:

- Generate a random map
- Users will attempt to climb up
- When users miss a platform, the user will fall all the way to the bottom, unless another platform catches them

## Wireframes
![wireframe1](https://i.ibb.co/p0cKzZg/IMG-3879-1.jpg)
![wireframe2](https://i.ibb.co/Gt74nRL/IMG-3877-1.jpg)
## Architecture and Technologies 

- Javascript for game logic
- Canvas for game render/ drawing
- HTML/ CSS for other rendering

## Technical Implimentation

# Wind Effect

Every 6 frames/levels, wind is added to create greater difficulty. The wind effect changes the player's X position depending on the direction of the wind.
```javascript
// player model
    windEffect(direction){
        if (direction === 'left'){
            this.x -= this.wind
        } else if (direction === 'right'){
            this.x += this.wind
        }
    }
```

Wind direction changes on a set interval. To provide a visual cue, I also implemented circles to represent particles in the wind traveling horizontally.

```javascript
// wind model

    draw(){
        this.circles.forEach(circle => circle.draw());
        if (this.timer < 0){
            this.changeState();
            this.timer = 500;
        } else {
            this.timer--;
        }
        this.collision();
    }

    changeState(){
        if(this.state === "right"){
            this.state = "left"
        } else if (this.state === "left"){
            this.state = "right"
        }

        this.circles.forEach(circle => circle.dx = -circle.dx)
    
    }

```






## Implementation Timeline

<b>Day 1:</b> Plan and set up general file structure. Begin creating game clases. 

<b>Day 2:</b> Complete game classes. Render static platforms. Begin creating game logic.

<b>Day 3:</b> Create player class. Set up movement and collision detection.

<b>Day 4:</b> Add in textures & sprites

<b>Day 5:</b> Final testing and gameplay 
