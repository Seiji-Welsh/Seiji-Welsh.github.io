var canvas = document.querySelector("canvas");
var c = canvas.getContext("2d");
class Ball{
    constructor(){
        this.x = canvas.width / 2;
        this.y = canvas.height / 2;
        this.angle = degToRad(randomRange(-50, 50) + 180);
        this.xv = Math.cos(this.angle);
        this.yv = Math.sin(this.angle);
    }
    render(){
        c.beginPath();
        c.arc(this.x, this.y, scale, Math.PI * 2, 0, false);
        c.fill();
    }
    update(){
        this.x += this.xv * ballSpeed;
        this.y -= this.yv * ballSpeed;
        if(this.y - scale <= 0){
            this.yv = -Math.abs(this.yv);
        }
        if(this.y + scale >= canvas.height){
            this.yv = Math.abs(this.yv);
        }
        if(this.x - scale <= racketLeft.x + rackWidth && this.x - scale >= racketLeft.x + rackWidth - (rackWidth * 3) && this.y >= racketLeft.y && this.y <= racketLeft.y + rackHeight){
            if(this.y + scale > racketLeft.y + (rackHeight / 2))
            this.yv = -Math.abs(this.yv);
            else this.yv = Math.abs(this.yv);
            this.yv * 1.5;
            this.xv *= -1;
            ballSpeed += .3;
        }
        if(this.x + scale >= racketRight.x && this.x + scale <= racketRight.x + (rackWidth * 3) && this.y >= racketRight.y && this.y <= racketRight.y + rackHeight){
            if(this.y + scale > racketRight.y + (rackHeight / 2))
            this.yv = -Math.abs(this.yv);
            else this.yv = Math.abs(this.yv);
            this.yv * 1.5;
            this.xv *= -1;
            ballSpeed += .3;
        }
    }
}
class Board{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
    render(){
        c.beginPath();
        c.fillRect(this.x, this.y, rackWidth, rackHeight);
    }
}
addEventListener("mousemove", mouseEvent);
c.fillStyle = "white";
var FPS = 50;
var scale = 10;
var rackWidth = 20;
var rackHeight = 90;
var ballSpeed = 15;
var difficulty = ballSpeed;
var canMove = false;
var score1 = 0;
var score2 = 0;
var ball = new Ball();
var racketLeft = new Board(50 - rackWidth, (canvas.height / 2) - rackHeight);
var racketRight = new Board(canvas.width - 50, (canvas.height / 2) - rackHeight);
setTimeout(reset, 1000);
setInterval(game, 1000 / FPS);
function game(){
    if(canMove)
    ball.update();
    if(ball.x <= canvas.width / 2 || !canMove){
        if(racketLeft.y + (rackHeight / 2) >= ball.y + scale + 10){
            racketLeft.y -= Math.abs(ball.yv) * difficulty;
        }
        if(racketLeft.y + (rackHeight / 2) <= ball.y + scale - 10)
        {
            racketLeft.y += Math.abs(ball.yv) * difficulty;
        }
    }
    else{
        if(racketLeft.y + (rackHeight / 2) >= canvas.height / 2){
            racketLeft.y -= 12;
        }
        if(racketLeft.y + (rackHeight / 2) <= canvas.height / 2)
        {
            racketLeft.y += 12;
        }
    }
    if(ball.x < 0){
        ball = new Ball();
        setTimeout(reset, 1000);
        canMove = false;
        score2++;
    }
    if(ball.x > canvas.width){
        ball = new Ball();
        setTimeout(reset, 1000);
        canMove = false;
        score1++;
    }
    //rendering
    c.clearRect(0, 0, canvas.width, canvas.height);
    c.textAlign = "right";
    c.font = "50px sans-serif";
    c.fillText(score1.toString(), 150, 100);
    c.textAlign = "left";
    c.fillText(score2.toString(), canvas.width - 150, 100);
    renderBackground();
    ball.render();
    racketLeft.render();
    racketRight.render();
}
function renderBackground(){
    for(var i = 0; i <= 8; i++){
        c.beginPath();
        c.fillRect((canvas.width / 2) - 2.5, i * 69.3, 5, 15);
    }
}
function mouseEvent(evt){
    racketRight.y = evt.clientY - (rackHeight / 2);
}
function randomRange(min, max){
    return Math.random() * (max - min) + min;
}
function degToRad(deg){
    return deg * (Math.PI / 180);
}
function reset(){
    canMove = true;
    ballSpeed = difficulty;
}