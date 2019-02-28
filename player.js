 function Player() {
    this.w = 25;
    this.h = 70;

    this.pos = createVector(this.w, height/2-this.h/2);
    this.acc = createVector(0, 0);
    this.spd = 10;

    this.show = function() {
        noStroke();
        fill(255);
        rect(this.pos.x, this.pos.y, this.w, this.h);
    }


    this.update = function() {
        if(keyIsDown(DOWN_ARROW) && this.pos.y+this.h<=height) 
            this.acc.y = this.spd;
	    else if(keyIsDown(UP_ARROW) && this.pos.y>=0) 
            this.acc.y = -this.spd;
        else this.acc.y = 0;
        this.pos.add(this.acc);
        this.pos.y = constrain(this.pos.y, 0, height-this.h);
    }

}