class slingshot{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,pointB:pointB,
            stiffness:0.08,length:5

        }
        this.sling=Constraint.create(options);
        this.pointB=pointB
        World.add(world,this.sling);
    }

    fly(){
        this.sling.bodyA=null;
    }
    display(){
        if(this.sling.bodyA){
        var posA=this.sling.bodyA.position;
        var posB=this.pointB;
        strokeWeight(7)
        line(posA.x,posA.y,posB.x,posB.y);
        }
    }

}
