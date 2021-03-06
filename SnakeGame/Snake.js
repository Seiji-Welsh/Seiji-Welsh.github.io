/*class Segment{
    constructor(x, y){
        this.x = x;
        this.y = y; 
    }
    frame(){
        if(this.x == x && this.y == y){
            reload();
        }
        if(this.x == ax && this.y == ay){
            aset();
        }
        drawOrigin(this.x, this.y, "green");
    }
}
let canvas = document.querySelector("canvas");
let c = canvas.getContext("2d");
function sleep(timeout) {
    return new Promise(resolve => setTimeout(resolve, timeout));
}
let FPS = 20;
let data = [];
let cellSize = 15;
canvas.width = Math.round(canvas.width / cellSize) * cellSize;
canvas.height = Math.round(canvas.height / cellSize) * cellSize;
let gridWidth = canvas.width / cellSize;
let gridHeight = canvas.height / cellSize;
let x;
let y;
let ax;
let ay;
function aset(){
    ax = Math.round(Math.random() * (gridWidth - 1));
    ay = Math.round(Math.random() * (gridHeight - 1));
}
let xv
let yv;
let l = 1;
reload();
function frame(){
    c.clearRect(0, 0, canvas.width, canvas.height);
    data.push(new Segment(x, y));
    if(data.length >= l){
        data.shift();
    }
    x += xv;
    y += yv;
    drawOrigin(ax, ay, "red");
    for(let i = 0; i < data.length; i++){
        data[i].frame();
    }
    drawOrigin(x, y, "green");
    if(x == ax && y == ay){
        l += 5;
        aset();
    }
    if(x >= gridWidth || x < 0 || y >= gridHeight || y < 0){
        reload();
    }
}
function reload(){
    xv = 0; yv = 0;
    x = 2; y = Math.round(gridHeight / 2);
    aset();
    l = 1;
    data = [];
}
async function frameCaller(){
    for(;;){
        frame();
        await sleep(1000 / FPS);
    }
}
function drawOrigin(gx, gy, color){
    c.fillStyle = color;
    c.fillRect(gx * cellSize, gy * cellSize, cellSize, cellSize)
}
addEventListener("keydown", keyPush);
function keyPush(e){
    switch(e.keyCode){
        case 37:
            xv = -1; yv = 0;
            break;
        case 38:
            xv = 0; yv = -1;
            break;
        case 39:
            xv = 1; yv = 0;
            break;
        case 40:
            xv = 0; yv = 1;
            break;
        case 32:
            l += 10;
            break;
    }
}
frameCaller();*/
var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
class Segment{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
    render(){
        c.strokeStyle = "green";
        c.lineWidth = scale;
        c.lineTo(this.x * cellSize + (scale / 2), this.y * cellSize + (scale / 2));
        c.stroke();
    }
}
class Apple{
    constructor(){
        this.x = Math.round(randomRange(0, gridSize - 1));
        this.y = Math.round(randomRange(0, gridSize - 1));
    }
    render(){
        c.beginPath();
        c.fillStyle = "red";
        c.fillRect(this.x * cellSize, this.y * cellSize, scale, scale);
    }
}
addEventListener("keydown", inputDown);
function inputDown(evt){
    if(xv == fxv && yv == fyv){
        if((evt.keyCode == 37 || evt.keyCode == 65) && fxv != 1){
            fxv = -1;
            fyv = 0;
        }
        else if((evt.keyCode == 38 || evt.keyCode == 87) && fyv != -1){
            fxv = 0;
            fyv = 1;
        }
        else if((evt.keyCode == 39 || evt.keyCode == 68) && fxv != -1){
            fxv = 1;
            fyv = 0;
        }
        else if((evt.keyCode == 40 || evt.keyCode == 83) && fyv != 1){
            fxv = 0;
            fyv = -1;
        }
    }
}
var gridSize = 30;
var cellSize = canvas.width / gridSize;
var scale = cellSize * .85;
var xv = 0; var yv = 0;
var fxv = 0; var fyv = 0;
var length = 1;
var highScore = 1;
var posX = 4;
var posY = 5;
var lenPerAp = 3;
var segments = [];
var app = new Apple();
setInterval(update, 50);
update();
function update(){
    xv = fxv; yv = fyv;
    posX += xv; posY -= yv;
    if(posX < 0) {death();}
    if(posX >= gridSize) {death();}
    if(posY < 0) {death();}
    if(posY >= gridSize) {death();}
    var seg = new Segment(posX, posY);
    segments.push(seg);
    while(segments.length >= length + 1){
        segments.shift();
    }
    for(var i = 1; i <= segments.length; i++){
        if(posX == segments[i - 1].x && posY == segments[i - 1].y && i != segments.length) death();
    }
    if(posX == app.x && posY == app.y){
        length += lenPerAp;
        app = new Apple();
    }
    if(highScore < length){
        highScore = length;
    }
    for(var i = 1; i <= segments.length; i++){
        if(segments[i - 1].x == app.x && segments[i - 1].y == app.y){
            app = new Apple();
        }
    }
    Rendering();
}
function Rendering(){
    c.clearRect(0, 0, canvas.width, canvas.height);
    app.render();
    renderHead();
    for(var i = 1; i <= segments.length; i++){
        segments[i - 1].render();
    }
    c.font = "30px Arial";
    c.fillStyle = "rgba(255, 255, 255, .5)";
    c.textAlign = "left";
    c.fillText(length, 10, 40);
    c.textAlign = "right";
    c.fillText(highScore, 390, 40);
}
function renderHead(){
    c.beginPath();
    c.fillStyle = "green";
    c.fillRect(posX * cellSize, posY * cellSize, scale, scale);
}
function death(){
    c.clearRect(0, 0, canvas.width, canvas.height);
    posX = 4; posY = 5;
    length = 1;
    xv = 0; yv = 9;
    fxv = 0; fyv = 0;
    app = new Apple();
}
function randomRange(min, max){
    return Math.random() * (max - min) + min;
}