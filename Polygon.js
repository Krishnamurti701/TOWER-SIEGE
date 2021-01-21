class Polygon  {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("images/polygon.png");
    
  }

  display() {
    push();
    this.body.position.x = mouseX;
    this.body.position.y = mouseY;
    super.display();
    imageMode(CENTER);
    image(polygonImg,polygon.position.x,polygon.position.y,40,40);
    pop();
  }
}
