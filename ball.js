function Ball() {
    this.pos = createVector(width/2, height/2);
    this.r = 15;
    this.spd = createVector(4, 6);

    this.show = function() {
        noStroke();
        fill('white');
        ellipse(this.pos.x, this.pos.y, this.r*2);
    }

    this.update = function() {
        if(this.pos.y < this.r) this.spd.y = abs(this.spd.y);
        if(this.pos.y > height-this.r) this.spd.y = -abs(this.spd.y);

        this.pos.add(this.spd);
    }
}