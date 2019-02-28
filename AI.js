function AI() {
    this.w = player.w;
    this.h = player.h;

    this.pos = createVector(width-this.w*2, height/2-this.h/2);
    this.acc = createVector(0, 0);

    this.show = function() {
        noStroke();
        fill(255);
        rect(this.pos.x, this.pos.y, this.w, this.h);
    }
    
    this.update = function() {
        this.acc.y = -((this.pos.y+(this.h/2)) - ball.pos.y);
        if(this.acc.y < -4) this.acc.y = -5;
        else if(this.acc.y > 4) this.acc.y = 5;

        this.pos.add(this.acc);
        this.pos.y = constrain(this.pos.y, 0, height-this.h);
    }
}