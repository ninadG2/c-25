class bird extends baseClass
{
    constructor(xa,ya)
    {
     
     super(xa,ya,50,50)
     this.image = loadImage("sprites/bird.png")
    }
   
    display()
    {
     this.body.position.x = mouseX;
     this.body.position.y = mouseY;
     super.display()
    }
}