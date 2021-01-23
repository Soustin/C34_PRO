const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var boxGroup;

function preload() {
//preload the images here

}

function setup() {
  createCanvas(1500, 800);
  // create sprites here
  engine = Engine.create();
  world = engine.world;

  hero = new Hero(300, 460, 340, 190);

  ground = new Ground(600, 760, width, 8);

  line1 = new Line(hero.body, {x: 260, y:0});

  box1 = new Box(710, 700, 90, 90);
  box2 = new Box(711, 689, 60, 55);
  box3 = new Box(710, 634, 90, 90);
  box4 = new Box(713, 544, 40, 90);
  box5 = new Box(713, 504, 90, 40);
  box6 = new Box(803, 704, 90, 90);
  box7 = new Box(803, 614, 90, 90);
  box8 = new Box(803, 524, 90, 90);
  box9 = new Box(803, 434, 90, 90);
  box10 = new Box(803, 344, 90, 90);
  box11 = new Box(896, 704, 90, 90);
  box12 = new Box(896, 614, 90, 90);
  box13 = new Box(896, 524, 90, 90);
  box14 = new Box(896, 434, 90, 90);
  box15 = new Box(896, 344, 90, 90);
  box16 = new Box(896, 254, 90, 90);
  box17 = new Box(710 , 464, 100, 90);

  monster = new Monster(1100, 500, 160, 160);

  box18 = new Box(1100, 580, 90, 200);

}

function draw() {
  background(255,255,255);
  Engine.update(engine);

  ground.display();
  hero.display();
  line1.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  monster.display();
  //box18.display();

}

function keyPressed(){
  if(keyCode = 32){
    Matter.Body.setPosition(hero.body, {x: 5, y: 50});
  }
}