const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;








function setup(){
    var canvas = createCanvas(600,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(200,height,800,20);
    log3 = new Log(250,320,100,15);

    var ball_options = {isStatic:true}
    ball = Bodies.circle(200,350,40,ball_options);
    World.add(world,ball);
    log1 = new Log(200,370,100,40);
    log2 = new Log(200,352,100,15);

}
function draw(){
    background(0);
    Engine.update(engine);
    ground.display();
    log3.display();
    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,40,40);
    log1.display();
    log2.display();
    
}