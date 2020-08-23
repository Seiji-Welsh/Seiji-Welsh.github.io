let canvas = document.querySelector("canvas");
let c = canvas.getContext("2d");
c.imageSmoothingEnabled = false;
let FPS = 50;
let pipes = [];
let resetting = false;
let score = 0;
let panSpeed = 4;
let jumpHeight = 12.5;
let ground1 = new Ground(0, canvas.height - 100, 539, 196);
let ground2 = new Ground(ground1.width, canvas.height - 100, 539, 196);
let ground3 = new Ground(ground1.width * 2, canvas.height - 100, 539, 196);
let onFloor = false;
let bg = new Image();
bg.src = "https://Seiji-Welsh.github.io/FlappyBird/Images/BG.png";
addEventListener("keydown", InputDown);
canvas.addEventListener("mousedown", function(){
    onInputThing();
})

let brid = new Player(200, 150, 60, 60);
setInterval(Update, 1000 / FPS);
function Update(){
    brid.Update();
    for(let i = 1; i <= pipes.length; i++){
        pipes[i - 1].Update();
    }
    ground1.Update();
    ground2.Update();
    ground3.Update();
    c.clearRect(0, 0, canvas.width, canvas.height);
    c.drawImage(bg, 0, 0, 504, 640);
    c.drawImage(bg, 504, 0, 504, 640);
    for(let i = 1; i <= pipes.length; i++){
        pipes[i - 1].render();
    }
    brid.render();
    ground1.render();
    ground2.render();
    ground3.render();
    c.fillStyle = "black";
    c.textAlign = "center";
    c.font = "50px Arial";
    c.fillText(score.toString(), canvas.width / 2, 100);
}
function makePipe(){
    pipes.push(new PipePair(canvas.width, 98, 700));
}
function degToRad(angle){
    return angle * (Math.PI / 180);
}
makePipe();
let pipeCreation = setInterval(function(){
    makePipe();
}, 1500)
function InputDown(evt){
    if(evt.keyCode == 32){
        onInputThing();
    }
}
function randomRange(min, max){
    return Math.random() * (max - min) + min;
}
function Reset(){
    clearInterval(pipeCreation);
    resetting = true;
}
function SceneLoad(){
    pipes = [];
    brid = new Player(200, 150, 60, 60);
    ground1 = new Ground(0, canvas.height - 100, 539, 196);
    ground2 = new Ground(ground1.width * 1, canvas.height - 100, 539, 196);
    ground3 = new Ground(ground1.width * 2, canvas.height - 100, 539, 196);
    makePipe();
    pipeCreation = setInterval(function(){
        makePipe();
    }, 1500)
    resetting = false;
    score = 0;
    onFloor = false;
    panSpeed = 4;
}
brid.vel = jumpHeight;
function onInputThing(){
    if(onFloor){
        SceneLoad();
        brid.vel = jumpHeight;
    }
    else if(!resetting){
        brid.vel = jumpHeight;
    }
}