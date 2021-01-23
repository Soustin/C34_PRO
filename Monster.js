class Monster{
    constructor(x, y, width, height){
        var options = {
            restitution: 0.3,
            density:1,
            friction:0.25
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
           this.width = width;
           this.height = height;
           this.x =x;
           this.y =y;
           this.image = loadImage("images/Monster-01.png");
           World.add(world, this.body);
        }   
         display(){
           var angle = this.body.angle;
           var pos = this.body.position;
           push();
           translate(pos.x, pos.y);
           rotate(angle);
           imageMode(CENTER);
           image(this.image, 0, 0, this.width, this.height);
           pop();
         }
    }