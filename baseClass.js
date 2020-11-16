class baseClass
{
    constructor(x,y,width1,height1,angle1)
    {
     
     var options = { 'restitution':0.8,
                    'friction':1.5,
                    'density':1.0}

     this.body = Bodies.rectangle(x,y,width1,height1,options)
     World.add(world,this.body)
     this.width = width1; 
     this.height = height1;
     this.angle = angle1;
     this.image =  loadImage("sprites/base.png") 
     
    }

    display()
    {
        var pos = this.body.position;
        var angle = this.body.angle;
        push()
            imageMode(CENTER);
            translate(pos.x,pos.y);
            rotate(angle);           
            image(this.image,0,0,this.width,this.height);
        pop();
    }
}