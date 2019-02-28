function AI() {
    this.w = player.w;
    this.h = player.h;

    this.pos = createVector(width-this.w*2, height/2-this.h/2);
    this.acc = createVector(0, 0);
    this.spd = 10;

    this.show = function() {
        noStroke();
        fill(255);
        rect(this.pos.x, this.pos.y, this.w, this.h);
    }
    
    this.update = function() {
        if(ball.pos.y < this.pos.y-this.h/2) {
            this.acc.y -= this.spd;
        }
        else {
            this.acc.y += this.spd;
        }
        this.acc.y = constrain(this.acc.y, -10, 10);
        
        this.pos.add(this.acc);
        this.pos.y = constrain(this.pos.y, 0, height-this.h);
    }
}