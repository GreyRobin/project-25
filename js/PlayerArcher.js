class PlayerArcher {
    constructor(x, y, width, height) {
      const options = {
        isStatic: true
      };
  
      this.body = Matter.Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      //this.collapse = false;
      this.image = loadImage("./assets/playerArcher.png");
  
      World.add(world, this.body);
  
      Matter.Body.setAngle(this.body, -PI / 2); // -90 degree
    }
  
    display() {
      var pos = this.body.position;
      var angle = this.body.angle;
      
      if (keyIsDown(DOWN_ARROW) && angle < -1.2) {
        angle += 0.01;
        Matter.Body.setAngle(this.body, angle);
      }
  
      if (keyIsDown(UP_ARROW) && angle > -1.9) {
        angle -= 0.01;
        Matter.Body.setAngle(this.body, angle);
      }
      if (this.body.velocity.x > 0 && this.body.position.x > 400) { 
        var position = [this.body.position.x, this.body.position.y]; 
        this.trajectory.push(position); 
      } 
      for (var i = 0; i < this.trajectory.length; i++) { 
        fill("white"); 
        ellipse(this.trajectory[i][0], this.trajectory[i][1], 5, 5); 
      }
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }
  }
  