var indigo;
var mountains;
var peek;

function preload() {
  indigo = loadImage("indigo.png");
  mountains = loadImage("colormountains.jpg")
  peek = loadImage("14522522_1190497777663764_457694081_o.png")
  pbandj = loadImage("pbandj.png")
  mad = loadImage("mad.png")
  pb = loadImage("pb.png")
  bee = loadImage("bee_PNG16.png")
  pant = loadImage("12016295_10153633712107433_204160795_o.png")
  steve = loadImage("stevethecat.png")

}

function setup(){
createCanvas(1000,700);

}

function draw(){
background(255);
image(mountains,0,0,1000,700);
image(mad,-50,-5,290,290)
image(pant,650,-5,400,300)
image(steve,170,-5,200,200)
image(indigo,mouseX,mouseY,400,350);


image(peek,500,50,450,650)
image(bee,640,460,50,50)

image(pbandj,0,350,450,350)
image(pb,0,500,190,240)



 textSize(70);
textFont("Wayward Sans");

if(mouseIsPressed) {

    fill(random(0,255), random(0,255), 0);
    rect(0,0,1000,700)
    fill(255)
    text("Indigo's Adventure",100,400);
  }



}
