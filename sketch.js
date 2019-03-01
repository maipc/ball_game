const width = 850;
const height = 600;
const FontSize = 40;
let player, ball, ai;

let playerScore = 0;
let AIScore = 0;
let collide = 0;

function setup() { 
  createCanvas(width, height);
  player = new Player;
  ball = new Ball;
  ai = new AI;
} 

function draw() { 
  background('black');

  player.update();
  player.show();

  ball.update();
  ball.show();

  ai.update();
  ai.show();

  if(collide === 0) {
    if(check(ball, player)) {
      ball.spd.x = abs(ball.spd.x);
      playerScore++;
    }
    if(check(ball, ai)) {
      ball.spd.x = -abs(ball.spd.x);
      AIScore++;
    }
  }
  if(collide === 1) {
    if(ball.pos.x-ball.r > player.pos.x+player.w && ball.pos.x+ball.r < ai.pos.x)
      collide = 0;
  }
  gameOver();
  drawScores();
}

function drawScores() {
  let x1 = width/5;
  let x2 = width*4/5;
  let y = 50;
  fill('white');
  textSize(FontSize);
  text(playerScore, x1, y);
  text(AIScore, x2, y);
}

function check(obj1, obj2) {
  let c1, c2;
  if(obj1.pos.y <= obj2.pos.y) c2 = obj2.pos.y;
  else if(obj1.pos.y >= obj2.pos.y+obj2.h) c2 = obj2.pos.y+obj2.h;
  else  c2 = obj1.pos.y;

  if(obj1.pos.x < obj2.pos.x) c1 = obj2.pos.x;
  else if(obj1.pos.x >= obj2.pos.x+obj2.w) c1 = obj2.pos.x+obj2.w;
  else  c1 = obj1.pos.x;

  let d = dist(obj1.pos.x, obj1.pos.y, c1, c2);
  if(d<obj1.r) {
    collide = 1;
    return true;
  }
  else return false;
}

function gameOver() {
  if(ball.pos.x-ball.r < 0) {
    fill('white');
    textSize(FontSize);
    textAlign(CENTER);
    text('Computer win !', width/2, height/5);
  }
  else if(ball.pos.x+ball.r > width) {
    fill('white');
    textSize(FontSize);
    textAlign(CENTER);
    text('Player win !', width/2, height/5);
  }
}
