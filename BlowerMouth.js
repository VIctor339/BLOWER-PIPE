class BlowerMouth{
    constructor(x,y,w,h){
        let options = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,w,h,options);
        this.w = w;
        this.color = color;
        this.h = h;
        World.add(world,this.body);
        }
        show(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        fill("#8d6e63")
        rect(0.01,this.h,this.w);
        pop();
        }
        }
        
