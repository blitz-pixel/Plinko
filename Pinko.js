class pinko{
    constructor(x,y){
        var options={
            'isStatic': true
        }

        this.body=Bodies.circle(x,y,10,options);
        //this.color= color(random(0,255), random(0,255), random(0,255));   
        this.r= 10;
        World.add(world, this.body);

    }

    display(){
        var pos=this.body.position;
        ellipseMode(CENTER);
        fill("white");
        ellipse(pos.x,pos.y,this.r);
    }
}