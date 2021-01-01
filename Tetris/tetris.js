let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");
let tilesX = 10;
let tilesY = 13;
let tiles = [];
let pieces = [];
let fallingPiece;
let fallSpeed = 1000;
addEventListener("keydown", function(evt){
    switch(evt.keyCode){
        case 37:
            fallingPiece.x--;
            break;
        case 39:
            fallingPiece.x++;
            break;
        case 40:
            moveDown();
            break;
        case 38:
            fallingPiece.rotation++;
            if(fallingPiece.rotation > 3){
                fallingPiece.rotation = 0;
            }
            break;
        case 32:
            loop();
            break;
    }
})
let sleep = function(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}
class tetraCube{
    constructor(x, y, color){
        this.x = x;
        this.y = y;
        this.color = color;
    }
    render(){
        drawTetraCube(this.x, this.y, this.color);
    }
}
class tetraPiece{
    constructor(x, y, type, rotation, b1, b2, b3, b4){
        this.x = x;
        this.y = y;
        this.type = type;
        this.rotation = rotation;
        this.block1 = b1;
        this.block2 = b2;
        this.block3 = b3;
        this.block4 = b4;
    }
    update(){
        switch(this.type){
            case 0:
                //cyan
                switch(this.rotation){
                    case 0:
                        this.block1.x = this.x - 2; this.block1.y = this.y; this.block2.x = this.x - 1; this.block2.y = this.y; this.block3.x = this.x; this.block3.y = this.y; this.block4.x = this.x + 1; this.block4.y = this.y; break;
                    case 3:
                        this.block1.y = this.y - 2; this.block1.x = this.x; this.block2.y = this.y - 1; this.block2.x = this.x; this.block3.y = this.y; this.block3.x = this.x; this.block4.y = this.y + 1; this.block4.x = this.x; break;
                    case 2:
                        this.block1.x = this.x - 2; this.block1.y = this.y - 1; this.block2.x = this.x - 1; this.block2.y = this.y - 1; this.block3.x = this.x; this.block3.y = this.y - 1; this.block4.x = this.x + 1; this.block4.y = this.y - 1; break;
                    case 1:
                        this.block1.y = this.y - 2; this.block1.x = this.x - 1; this.block2.y = this.y - 1; this.block2.x = this.x - 1; this.block3.y = this.y; this.block3.x = this.x - 1; this.block4.y = this.y + 1; this.block4.x = this.x - 1; break;
                }
                break;
            case 1:
                //blue
                switch(this.rotation){
                    case 0:
                        this.block1.x = this.x - 1; this.block1.y = this.y - 1; this.block2.x = this.x - 1; this.block2.y = this.y; this.block3.x = this.x; this.block3.y = this.y; this.block4.x = this.x + 1; this.block4.y = this.y; break;
                    case 2:
                        this.block1.x = this.x + 1; this.block1.y = this.y + 1; this.block2.x = this.x - 1; this.block2.y = this.y;this.block3.x = this.x; this.block3.y = this.y;this.block4.x = this.x + 1; this.block4.y = this.y;break;
                    case 1:
                        this.block1.x = this.x; this.block1.y = this.y - 1;this.block2.x = this.x; this.block2.y = this.y + 1;this.block3.x = this.x; this.block3.y = this.y;this.block4.x = this.x + 1; this.block4.y = this.y - 1;break;
                    case 3:
                        this.block1.x = this.x; this.block1.y = this.y - 1;this.block2.x = this.x; this.block2.y = this.y + 1;this.block3.x = this.x; this.block3.y = this.y;this.block4.x = this.x - 1; this.block4.y = this.y + 1;break;
                }
                break;
            case 2:
                //orange
                switch(this.rotation){
                    case 0:
                        this.block1.x = this.x + 1; this.block1.y = this.y - 1;this.block2.x = this.x - 1; this.block2.y = this.y;this.block3.x = this.x; this.block3.y = this.y;this.block4.x = this.x + 1; this.block4.y = this.y;break;
                    case 2:
                        this.block1.x = this.x - 1; this.block1.y = this.y + 1;this.block2.x = this.x - 1; this.block2.y = this.y;this.block3.x = this.x; this.block3.y = this.y;this.block4.x = this.x + 1; this.block4.y = this.y;
                        break;
                    case 1:
                        this.block1.x = this.x; this.block1.y = this.y - 1;this.block2.x = this.x; this.block2.y = this.y + 1;this.block3.x = this.x; this.block3.y = this.y;this.block4.x = this.x + 1; this.block4.y = this.y + 1;break;
                    case 3:
                        this.block1.x = this.x; this.block1.y = this.y - 1;this.block2.x = this.x; this.block2.y = this.y + 1;this.block3.x = this.x; this.block3.y = this.y;this.block4.x = this.x - 1; this.block4.y = this.y - 1;break;
                }
                break;
            case 3:
                //yellow
                this.block1.x = this.x; this.block1.y = this.y;this.block2.x = this.x; this.block2.y = this.y + 1;this.block3.x = this.x + 1; this.block3.y = this.y;this.block4.x = this.x + 1; this.block4.y = this.y + 1;break;
            case 4:
                //lime
                switch(this.rotation){
                    case 0:
                        this.block1.x = this.x - 1; this.block1.y = this.y;this.block2.x = this.x; this.block2.y = this.y;this.block3.x = this.x; this.block3.y = this.y - 1;this.block4.x = this.x + 1; this.block4.y = this.y - 1;break;
                    case 1:
                        this.block1.x = this.x; this.block1.y = this.y - 1;this.block2.x = this.x; this.block2.y = this.y;this.block3.x = this.x + 1; this.block3.y = this.y;this.block4.x = this.x + 1; this.block4.y = this.y + 1;break;
                    case 2:
                        this.block1.x = this.x - 1; this.block1.y = this.y + 1;this.block2.x = this.x; this.block2.y = this.y + 1;this.block3.x = this.x; this.block3.y = this.y;this.block4.x = this.x + 1; this.block4.y = this.y;break;
                    case 3:
                        this.block1.x = this.x - 1; this.block1.y = this.y - 1;this.block2.x = this.x - 1; this.block2.y = this.y;this.block3.x = this.x; this.block3.y = this.y;this.block4.x = this.x; this.block4.y = this.y + 1;break;
                }
                break;
            case 5:
                //purple
                switch(this.rotation){
                    case 0:
                        this.block1.x = this.x - 1; this.block1.y = this.y;this.block2.x = this.x; this.block2.y = this.y;this.block3.x = this.x; this.block3.y = this.y - 1;this.block4.x = this.x + 1; this.block4.y = this.y;break;
                    case 1:
                        this.block1.x = this.x; this.block1.y = this.y + 1;this.block2.x = this.x; this.block2.y = this.y;this.block3.x = this.x; this.block3.y = this.y - 1;this.block4.x = this.x + 1; this.block4.y = this.y;break;
                    case 2:
                        this.block1.x = this.x; this.block1.y = this.y + 1;this.block2.x = this.x; this.block2.y = this.y;this.block3.x = this.x - 1; this.block3.y = this.y;this.block4.x = this.x + 1; this.block4.y = this.y;break;
                    case 3:
                        this.block1.x = this.x; this.block1.y = this.y + 1;this.block2.x = this.x; this.block2.y = this.y;this.block3.x = this.x - 1; this.block3.y = this.y;this.block4.x = this.x; this.block4.y = this.y - 1;break;
                }
                break;
            case 6:
                //red
                switch(this.rotation){
                    case 0:
                        this.block1.x = this.x - 1; this.block1.y = this.y - 1;this.block2.x = this.x; this.block2.y = this.y - 1;this.block3.x = this.x; this.block3.y = this.y;this.block4.x = this.x + 1; this.block4.y = this.y;break;
                    case 1:
                        this.block1.x = this.x + 1; this.block1.y = this.y - 1;this.block2.x = this.x + 1; this.block2.y = this.y;this.block3.x = this.x; this.block3.y = this.y;this.block4.x = this.x; this.block4.y = this.y + 1;break;
                    case 2:
                        this.block1.x = this.x - 1; this.block1.y = this.y; this.block2.x = this.x; this.block2.y = this.y; this.block3.x = this.x; this.block3.y = this.y + 1; this.block4.x = this.x + 1; this.block4.y = this.y + 1; break;
                    case 3:
                        this.block1.x = this.x; this.block1.y = this.y - 1; this.block2.x = this.x; this.block2.y = this.y; this.block3.x = this.x - 1; this.block3.y = this.y; this.block4.x = this.x - 1; this.block4.y = this.y + 1; break;
                }
                break;
        }
    }
}
function drawTetraCube(x, y, color){
    ctx.lineWidth = 2;
    ctx.strokeStyle = "rgb(0, 0, 0)"
    ctx.fillStyle = color;
    ctx.fillRect(x * (canvas.width / tilesX), y * (canvas.height / tilesY), canvas.width / tilesX, canvas.height / tilesY);
    ctx.strokeRect(x * (canvas.width / tilesX), y * (canvas.height / tilesY), canvas.width / tilesX, canvas.height / tilesY);
}
function spawnTetraCube(x, y, color){
    let addition = new tetraCube(x, y, color)
    tiles.push(addition);
    return addition;
}
function spawnTetraPiece(x, y, type, color){
    fallingPiece = new tetraPiece(x, y, type, 0, spawnTetraCube(0, 0, color), spawnTetraCube(1, 0, color), spawnTetraCube(1, 1, color), spawnTetraCube(0, 1, color));
    pieces.push(fallingPiece);
}
frame();
function frame(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for(let i = 0; i < pieces.length; i++){
        pieces[i].update();
    }
    for(let i = 0; i < tiles.length; i++){
        tiles[i].render();
    }
    requestAnimationFrame(frame);
}
tick();
loop();
function moveDown(){
    fallingPiece.y++;
    let storedFP = fallingPiece;
    if(detect()){
        storedFP.y--;
    }
}
async function tick(){
    for(;;){
        await sleep(fallSpeed);
        moveDown();
    }
}
function detect(){
    for(let i = 0; i < tiles.length; i++){
        if(tiles[i] != fallingPiece.block1 && tiles[i] != fallingPiece.block2 && tiles[i] != fallingPiece.block3 && tiles[i] != fallingPiece.block4){
            if((tiles[i].x == fallingPiece.block1.x && tiles[i].y - 1 == fallingPiece.block1.y) || (tiles[i].x == fallingPiece.block2.x && tiles[i].y - 1 == fallingPiece.block2.y) || (tiles[i].x == fallingPiece.block3.x && tiles[i].y - 1 == fallingPiece.block3.y) || (tiles[i].x == fallingPiece.block4.x && tiles[i].y - 1 == fallingPiece.block4.y)){
                loop();
                return true;
            }
        }
    }
}
async function loop(){
    let type = Math.round(Math.random()*6);
    switch(type){
        case 0:
            spawnTetraPiece(5, 0, type, "cyan");
            break;
        case 1:
            spawnTetraPiece(4, 1, type, "blue");
            break;
        case 2:
            spawnTetraPiece(4, 1, type, "yellow");
            break;
        case 3:
            spawnTetraPiece(4, 0, type, "orange");
            break;
        case 4:
            spawnTetraPiece(4, 1, type, "lime");
            break;
        case 5:
            spawnTetraPiece(4, 1, type, "purple");
            break;
        case 6:
            spawnTetraPiece(4, 1, type, "red");
            break;
    }
}
