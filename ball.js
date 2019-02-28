function Ball() {
    this.pos = createVector(width/2, height/2);
    this.r = 15;
    this.spd = createVector(20, 15);
    do {
        this.acc = p5.Vector.random2D();
        this.acc.setMag(random(4, 6));
    } while(abs(this.acc.x)<3 || abs(this.acc.y)<3);

    this.show = function() {
        noStroke();
        fill('white');
        ellipse(this.pos.x, this.pos.y, this.r*2);
    }

    this.update = function() {
        this.pos.add(this.acc);

        if(this.pos.y < this.r || this.pos.y > height-this.r) {
            this.acc.y = -this.acc.y;
        }
    }

    this.check = function() {
        let collide = false;
        let obj;
        let d1, d2;

        for(let i=0; i<player.h; i++) {
            d1 = dist(this.pos.x, this.pos.y, ai.pos.x, ai.pos.y+i);
            d2 = dist(this.pos.x, this.pos.y, player.pos.x+player.w, player.pos.y+i);

            if(d1 <= this.r) {
                collide = true;
                obj = ai;
                break;
            }
            else if(d2 <= this.r) {
                collide = true;
                obj = player;
                break;
            }
        }

        if(collide) {
            if(obj === ai) AIScore++;
            else playerScore++;
            this.acc.x = -this.acc.x;
        }
    }
}