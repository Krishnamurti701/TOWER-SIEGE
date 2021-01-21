class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
      
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }
attach(body){
    this.sling.bodyA= body;
}


    display(){
        image(this.sling1,200,20)
        image(this.sling2,170,20)

        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push()
            strokeWeight(5);
            stroke(48,22,8)
            if(pointA.x<220){
                line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
                line(pointA.x-20, pointA.y, pointB.x+30, pointB.y-3);  
            }
            line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
            line(pointA.x-20, pointA.y, pointB.x+30, pointB.y-3);
            pop()
        }
    }
    
}