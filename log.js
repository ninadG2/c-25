class log extends baseClass
{
  constructor(x,y,heighttel,angle)
  {
    super(x,y,20,heighttel,angle)
    Matter.Body.setAngle(this.body , angle)  
    this.image = loadImage("sprites/wood2.png")
  }

 
}