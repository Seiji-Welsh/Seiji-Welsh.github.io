var canvas = document.querySelector("canvas");
var c = canvas.getContext("2d");
let FPS = 50;
var player;
var gameObjects = [];
var shootSpeed = 100;
var score = 0;
var highScore = 0;
var difficulty = 1000;
function Instantiate(GameObject, components, posX, posY, scaleX, scaleY){
    GameObject.x = posX;
    GameObject.y = posY;
    GameObject.scaleX = scaleX;
    GameObject.scaleY = scaleY;
    GameObject.order = gameObjects.length;
    var componentSetter = [...components];
    for(var i = 1; i <= components.length; i++){
        componentSetter[i - 1].gameObject = GameObject;
    }
    GameObject.components = [...componentSetter];
    gameObjects.push(GameObject);
    gameObjects[GameObject.order].start();
    return GameObject;
}
function Destroy(object){
    object.alive = false;
    gameObjects.splice(object.order, 1);
    for(var i = 1; i <= gameObjects.length; i++){
        gameObjects[i - 1].order = i - 1;
    }
}
setInterval(Update, 1000 / FPS);
function Update(){
    for(var i = 1; i <= gameObjects.length; i++){
        gameObjects[i - 1].update();
    }
    for(var i = 1; i <= gameObjects.length; i++){
        if(gameObjects[i - 1].GetComponent(Renderer) != null){
            gameObjects[i - 1].order = i - 1;
        }
        gameObjects[i - 1].lateUpdate();
        if(highScore < score){
            highScore = score;
        }
    }
    c.clearRect(0, 0, canvas.width, canvas.height);
    var goCopy = [];
    var soObj = [];
    var srArr = [];
    for(var i = 1; i <= gameObjects.length; i++){
        var rendCom = gameObjects[i - 1].GetComponent(Renderer)
        if(rendCom != null){
            srArr.push(rendCom.sortingOrder);
            goCopy.push(rendCom.gameObject);
        }
    }
    while(goCopy.length > 0){
        for(var i = 1; i <= goCopy.length; i++){
            if(i - 1 == srArr.findIndex(function(element){
                    return element == Math.min(...srArr);
                })){
                soObj.push(goCopy[i - 1]);
                goCopy.splice(i - 1, 1);
                srArr.splice(i - 1, 1);
                break;
            }
        }
    }
    for(var i = 1; i <= soObj.length; i++){
        if(soObj[i - 1].GetComponent(Renderer) != null){
            soObj[i - 1].renderUpdate();
        }
    }
    c.font = "30px Arial";
    c.fillStyle = "gray";
    c.textAlign = "center";
    c.fillText(highScore.toString(), canvas.width / 2, canvas.height - 10);
    c.fillText(score.toString(), canvas.width / 2, 30);
}
function degToRad(angle){
    return angle * (Math.PI / 180);
}

setInterval(function(){
    score++;
}, 50)
SpawnBullet();
function SpawnBullet(){
    setInterval(function(){
        if(input.spacDwn){
            Instantiate(new GameObject("Bullet", "weapon"), [new Renderer(0, "/Users/lelacreutz/Desktop/JavaScript/Website/Shooter/images/bullet.png")
            , new Bullet(), new BoxCollider(20, 20, 0, 0)], player.x + (player.scaleX / 2)
            , (player.y + 3) + Math.sin(degToRad(player.rotation)) * (player.scaleY / 2), 20, 8);
        }
    }, shootSpeed);
}
LevelCreation();
function LevelCreation(){
    var randNum = Math.round(Math.random() * 5);
    switch(randNum){
        case 0:
            var asteroid = Instantiate(new GameObject("asteroid", "enemy"), [new Renderer(10, "/Users/lelacreutz/Desktop/JavaScript/Website/Shooter/images/asteroid.png")
            , new ScrollingObject(), new BoxCollider(50, 50, 0, 0), new Enemy(5, 2, 10)], canvas.width + 100, Math.random() * canvas.height, 160, 106.6);
            asteroid.rotation = Math.random() * 360;
            break;
        case 1:
            Instantiate(new GameObject("enemy1", "enemy"), [new Renderer(5, "/Users/lelacreutz/Desktop/JavaScript/Website/Shooter/images/enemy1.png")
            , new ScrollingObject(), new BoxCollider(30, 20, 0, 0), new Enemy(10, 2, 100), new Enemy1()], canvas.width + 100, Math.random() * canvas.height, 80, 80);
            break;
        default:
            var asteroid = Instantiate(new GameObject("asteroid", "enemy"), [new Renderer(10, "/Users/lelacreutz/Desktop/JavaScript/Website/Shooter/images/asteroid.png")
            , new ScrollingObject(), new BoxCollider(50, 50, 0, 0), new Enemy(5, 2, 10)], canvas.width + 100, Math.random() * canvas.height, 160, 106.6);
            asteroid.rotation = Math.random() * 360;
            break;
    }
    setTimeout(LevelCreation, difficulty);
    return;
}
function sceneLoad(){
    score = 0;
    difficulty = 1000;
    var lenth = gameObjects.length;
    for(var i = 1; i <= lenth; i++){
        Destroy(gameObjects[0]);
    }
    var bg = Instantiate(new GameObject("BG", "background"), [new Renderer(-5, "/Users/lelacreutz/Desktop/JavaScript/Website/Shooter/images/bg.png")]
    , canvas.width / 2, canvas.height / 2, canvas.width, canvas.height);
    bg.GetComponent(Renderer).useAntialiasing = true;
    player = Instantiate(new GameObject("Player", "player"), [new Renderer(1, "/Users/lelacreutz/Desktop/JavaScript/Website/Shooter/images/ship.png")
    , new Player(), new BoxCollider(50, 10, 0, 0)], 100, canvas.height / 2, 80, 80);
}
function vectorToAngle(vectX, vectY){
    var angle = Math.atan2(vectY, vectX);
    var degrees = 180*angle/Math.PI;
    return (360 + Math.round(degrees)) % 360;
}
setInterval(function(){
    if(difficulty >= 100){
        difficulty--;
    }
}, 100);
addEventListener("keydown", inputDown);
addEventListener("keyup", inputUp);
var input = {
    "horizontal" : 0,
    "vertical" : 0,
    "l" : 0,
    "r" : 0,
    "u" : 0,
    "d" : 0,
    "wDwn" : false,
    "aDwn" : false,
    "sDwn": false,
    "dDwn" : false,
    "upDwn" : false,
    "lftDwn" : false,
    "dwnDwn" : false,
    "rgtDwn" : false,
    "spacDwn" : false
}
function inputDown(evt){
    switch(evt.keyCode){
        case 32:
            input.spacDwn = true;
            break;
        case 37:
            input.lftDwn = true;
            break;
        case 38:
            input.upDwn = true;
            break;
        case 39:
            input.rgtDwn = true;
            break;
        case 40:
            input.dwnDwn = true;
            break;
        case 65:
            input.aDwn = true;
            break;
        case 87:
            input.wDwn = true;
            break;
        case 68:
            input.dDwn = true;
            break;
        case 83:
            input.sDwn = true;
            break;
    }
    if(input.rgtDwn || input.dDwn){
        input.r = 1;
    }
    if(input.lftDwn || input.aDwn){
        input.l = -1;
    }
    if(input.upDwn || input.wDwn){
        input.u = 1;
    }
    if(input.dwnDwn || input.sDwn){
        input.d = -1;
    }
    input.horizontal = input.r + input.l;
    input.vertical = input.u + input.d;
}
function inputUp(evt){
    switch(evt.keyCode){
        case 37:
            input.lftDwn = false;
            break;
        case 38:
            input.upDwn = false;
            break;
        case 39:
            input.rgtDwn = false;
            break;
        case 40:
            input.dwnDwn = false;
            break;
        case 65:
            input.aDwn = false;
            break;
        case 87:
            input.wDwn = false;
            break;
        case 68:
            input.dDwn = false;
            break;
        case 83:
            input.sDwn = false;
            break;
        case 32:
            input.spacDwn = false;
            break;
    }
    if(!(input.rgtDwn || input.dDwn)){
        input.r = 0;
    }
    if(!(input.lftDwn || input.aDwn)){
        input.l = 0;
    }
    if(!(input.upDwn || input.wDwn)){
        input.u = 0;
    }
    if(!(input.dwnDwn || input.sDwn)){
        input.d = 0;
    }
    input.horizontal = input.r + input.l;
    input.vertical = input.u + input.d;
}
sceneLoad();
