function AI() {
    this.w = player.w;
    this.h = player.h;

    this.pos = createVector(width-this.w*2, height/2-this.h/2);
    this.spd = createVector(0, 0);

    this.show = function() {
        noStroke();
        fill(255);
        rect(this.pos.x, this.pos.y, this.w, this.h);
    }
    
    this.update = function() {
        this.spd.y = -((this.pos.y+(this.h/2)) - ball.pos.y);
        if(this.spd.y < -4) this.spd.y = -7;
        else if(this.spd.y > 4) this.spd.y = 7;

        this.pos.add(this.spd);
        this.pos.y = constrain(this.pos.y, 0, height-this.h);
    }
}