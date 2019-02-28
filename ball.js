function Ball() {
    this.pos = createVector(width/2, height/2);
    this.r = 15;
    this.spd = createVector(20, 15);
    this.collision = false;
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

    this.edges = function() {
        let collide = false;
        let obj;
        let d1, d2;

        for(let i=0; i<player.h; i++) {
            d1 = dist(this.pos.x, this.pos.y, ai.pos.x, ai.pos.y+i);
            d2 = dist(this.pos.x, this.pos.y, player.pos.x, player.pos.y+i);

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

        if(collide && !this.collision) {
            this.collision = true;
            this.acc.add(createVector(0.5, obj.acc.y*0.25));
            this.acc.x = -this.acc.x;
            this.acc.x = constrain(this.acc.x, -this.spd.x, this.spd.x);
            this.acc.y = constrain(this.acc.y, -this.spd.y, this.spd.y);
        }
        else {
            this.collision = false;
        }
    }

    this.scores = function() {
        if(this.pos.x < this.r) {
            AIScore++;
            this.res();
        }
        else if(this.pos.x > width+this.r) {
            playerScore++;
            this.res();
        }
    }

    this.res = function() {
        ai.pos = createVector(width-this.ai.w*2, height/2-this.ai.h/2);
        player.pos = createVector(this.player.w, height/2-this.player.h/2);

        this.pos = createVector(width/2, height/2);

        do {
            this.acc = p5.Vector.random2D();
            this.acc.setMag(random(4, 6));
        } while(abs(this.acc.x)<3 || abs(this.acc.y)<3);

    }
}