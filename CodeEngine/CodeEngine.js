let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');
let FrameTime = 100;
let RunTimeFrameTime = 100;
let TimeScale = 1;
let entities = [];
let t0 = 1;
let t1 = 1;
let rtt0 = 1;
let rtt1 = 1;
let thePlayer;
let levelController;
let FrameCount = 0;
//canvas.width = window.innerWidth;
//canvas.height=window.innerHeight;
ctx.imageSmoothingEnabled = false;
async function Update(){
    setTimeout(Update, 1000 / maxFPS.value / TimeScale);
    if(!SceneManager.loading){
        t1 = performance.now();
        FrameTime = t1 - t0;
        t0 = performance.now();
        if(FrameCount % 10 == 0)
        maxRenderFPS.value -= 1
        if(maxRenderFPS.value < 1) maxRenderFPS.value = 1;
        if(1000 / FrameTime < 50){
            maxRenderFPS.value = 2;
        }
        if(1000 / FrameTime < 40){
            maxRenderFPS.value = 3;
        }
        if(1000 / FrameTime < 30){
            maxRenderFPS.value = 4;
        }
        if(1000 / FrameTime < 20){
            maxRenderFPS.value = 5;
        }
        for(let i = 1; i <= entities.length; i++){
            entities[i - 1].Update();
        }
        for(let i = 1; i <= entities.length; i++){
            entities[i - 1].LateUpdate();
        }
        if(FrameCount % maxRenderFPS.value == 0){
            rtt1 = performance.now();
            RunTimeFrameTime = rtt1 - rtt0;
            rtt0 = performance.now();
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            //ctx.fillStyle = "rgba(255, 255, 255, 0.15)";
            //ctx.fillRect(0, 0, canvas.width, canvas.height);
            for(let i = 1; i <= entities.length; i++){
                entities[i - 1].RenderUpdate();
            }
            for(let i = 1; i <= entities.length; i++){
                entities[i - 1].PostRenderUpdate();
            }
        }
        FrameCount++;
        Input.MouseScrollY = 0;
    }
}
let sleep = function(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}
function spawnEntity(entity, x, y, scaleX, scaleY, rotation){
    entities.push(entity);
    entities[entities.length - 1].order = entities.length - 1;
    let componentSetter = [...entities[entities.length - 1].components];
    for(let i = 1; i <= componentSetter.length; i++){
        componentSetter[i - 1].myEntity = entities[entities.length - 1];
    }
    entities[entities.length - 1].transform.pos.x = x;
    entities[entities.length - 1].transform.pos.y = y;
    entities[entities.length - 1].transform.scale.x = scaleX;
    entities[entities.length - 1].transform.scale.y = scaleY;
    entities[entities.length - 1].transform.angle = rotation;
    if(!SceneManager.loading)
    entity.Start();
    return entities[entities.length - 1];
}
function Destroy(entity){
    entity.alive = false;
    entities.splice(entity.order, 1);
    for(var i = 1; i <= entities.length; i++){
        entities[i - 1].order = i - 1;
    }
}
function FindEntity(name){
    for(let i = 1; i <= entities.length; i++){
        if(entities[i - 1].name == name){
            return entities[i - 1];
        }
    }
    return null;
}
function degToRad(deg){
    return deg * (Math.PI / 180);
}
function randomRange(min, max){
    return Math.random() * (max - min) + min;
}
function CoordinateToDrawPos(x, y){
    return {
        "x" : -mainCamera.transform.pos.x + x + ((canvas.width / 2) * mainCamera.transform.scale.x),
        "y" : mainCamera.transform.pos.y + y + ((canvas.height / 2) * mainCamera.transform.scale.x) - canvas.height
    };
}
function distance(x1,y1,x2,y2){
    if(!x2) x2 = 0;
    if(!y2) y2 = 0;
    return Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
}
function ScreenToWorldPoint(x, y){
    let result = {
        "x" : mainCamera.transform.pos.x + ((-(canvas.width / 2) + x) * mainCamera.transform.scale.x),
        "y" : mainCamera.transform.pos.y + ((-(canvas.height / 2) + y) * mainCamera.transform.scale.x)
    }
    return{
        "x": result.x,
        "y": result.y
    };
}
let mainCamera;
setTimeout(function(){
    addEventListener("keydown", Input.InputDown);
    addEventListener("keyup", Input.InputUp);
    canvas.addEventListener("wheel", Input.MouseWheel, {passive : false});
    canvas.addEventListener("mousemove", Input.MouseMove);
    canvas.addEventListener("mousedown", Input.MouseDown);
    addEventListener("mouseup", Input.MouseUp);
    SceneManager.Load(SceneManager.Level1);
    Update();
}, 0)



/*
brush teeth
piano
read
this
music
exercise
clean room
among us
school
friends
wash dishes
minecraft
fall guys
*/