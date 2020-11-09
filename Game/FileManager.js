class FileManager extends Component{
    constructor(){
        super();
    }
    LateUpdate(){
        for(let i = 1; i <= entities.length; i++){
            let entCollider = entities[i - 1].GetComponent(RectangleCollider);
            if(entCollider != null){
                entCollider.visualizeCollider = showColliders;
            }
        }
    }
}
let hitBoxCheck = document.getElementById("showCollidersCheck");
let EntitiesAmount = document.getElementById("EntitiesAmount");
let wallTile = document.getElementById("wallTile");
let groundTile = document.getElementById("groundTile");
let stairTile = document.getElementById("stairTile");
let doorTile = document.getElementById("doorTile");
let boxTile = document.getElementById("boxTile");
let lightTile = document.getElementById("lightTile");
let chainTile = document.getElementById("chainTile");
let enemy1Tile = document.getElementById("enemy1Tile");
let enemy1BlockerTile = document.getElementById("enemy1BlockerTile");
let spikeTile = document.getElementById("spikeTile");
let eraser = document.getElementById("eraser");
let yesCollider = document.getElementById("yesCollider");
let sortOrderHTML = document.getElementById("sortingOrder");
let autoTile = document.getElementById("autoTile");
let saveSceneText = document.getElementById("saveSceneText");
let loadSceneText = document.getElementById("loadSceneText");
let copyText = document.getElementById("copyText");
let pageRight = document.getElementById("pageRight");
let cellSize = document.getElementById("cellSize");
sortOrderHTML.value = 1;
cellSize.value = 32;
yesCollider.checked = true;
groundTile.checked = true;
let selectedTile = "groundTile";
let physTileSelected = "groundTile";
let showColliders = false;
let useColliders = true;
function hitBoxChecked(){
    if(hitBoxCheck.checked){
        showColliders = true;
    }
    else showColliders = false;
}
setInterval(function(){
    EntitiesAmount.innerHTML = entities.length + " Objects";
    if(Input.eDown){selectedTile = "eraser"; eraser.checked = true;}
    if(groundTile.checked){selectedTile = "groundTile"; physTileSelected = "groundTile"}
    else if(wallTile.checked){selectedTile = "wallTile"; physTileSelected = "wallTile"}
    else if(stairTile.checked){selectedTile = "stairTile"; physTileSelected = "stairTile"}
    else if(doorTile.checked){selectedTile = "doorTile"; physTileSelected = "doorTile"}
    else if(boxTile.checked){selectedTile = "boxTile"; physTileSelected = "boxTile"}
    else if(lightTile.checked){selectedTile = "lightTile"; physTileSelected = "lightTile"}
    else if(chainTile.checked){selectedTile = "chainTile"; physTileSelected = "chainTile"}
    else if(enemy1Tile.checked){selectedTile = "enemy1Tile"; physTileSelected = "enemy1Tile"}
    else if(enemy1BlockerTile.checked){selectedTile = "enemy1BlockerTile"; physTileSelected = "enemy1BlockerTile"}
    else if(spikeTile.checked){selectedTile = "spikeTile"; physTileSelected = "spikeTile"}
    else if(eraser.checked){selectedTile = "eraser";}
    if(yesCollider.checked) useColliders = true;
    else useColliders = false;
    if(!Input.eDown){
        selectedTile = physTileSelected;
    }

    switch(selectedTile){
        case "groundTile":if(!groundTile.checked) groundTile.checked = true;break;
        case "wallTile":if(!wallTile.checked) wallTile.checked = true;break;
        case "stairTile":if(!stairTile.checked) stairTile.checked = true;break;
        case "doorTile":if(!doorTile.checked) doorTile.checked = true;break;
        case "boxTile":if(!boxTile.checked) boxTile.checked = true;break;
        case "lightTile":if(!lightTile.checked) lightTile.checked = true;break;
        case "chainTile":if(!chainTile.checked) chainTile.checked = true;break;
        case "enemy1Tile":if(!enemy1Tile.checked) enemy1Tile.checked = true;break;
        case "enemy1BlockerTile":if(!enemy1BlockerTile.checked) enemy1BlockerTile.checked = true;break;
        case "spikeTile":if(!spikeTile.checked) spikeTile.checked = true;break;
    }
}, 100);
function reloadScene(scene){
    SceneManager.Load(scene);
}
function saveScene(){
    let result = "";
    let entityCopy = [];
    let sortObj = [];
    let sortArr = [];
    for(let i = 1; i <= entities.length; i++){
        let rendCom = entities[i - 1].GetComponent(Renderer);
        if(rendCom != null){
            sortArr.push(rendCom.sortingOrder);
            entityCopy.push(rendCom.myEntity);
        }
    }
    while(entityCopy.length > 0){
        let minOrder = sortArr.findIndex(function(element){
            return element == Math.min(...sortArr);
        })
        sortObj.push(entityCopy[minOrder]);
        entityCopy.splice(minOrder, 1);
        sortArr.splice(minOrder, 1);
    }
    for(let i = 1; i <= sortObj.length; i++){
        let entityRenderer = sortObj[i - 1].GetComponent(Renderer);
        if(sortObj[i - 1].tag2 == "tile" || sortObj[i - 1].name == "Player"){
            if(sortObj[i - 1].GetComponent(RectangleCollider) != null){
                result += ":" + sortObj[i - 1].name + ",t," + entityRenderer.sortingOrder + "," + sortObj[i - 1].transform.pos.x + "," + sortObj[i - 1].transform.pos.y;
            }
            else{
                result += ":" + sortObj[i - 1].name + ",f," + entityRenderer.sortingOrder + "," + sortObj[i - 1].transform.pos.x + "," + sortObj[i - 1].transform.pos.y;
            }
        }
    }
    result += ":";
    saveSceneText.value = result;
}
function clearTiles(){
    for(let i = 1; i <= entities.length; i++){
        if(entities[i - 1].tag2 == "tile" || entities[i - 1].tag2 == "postTile"){
            Destroy(entities[i - 1]);
            i--;
        }
    }
    spawnEntity(new Entity("gd","ground",[new RectangleCollider(32,32,0,0),new Renderer(1,"https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstSideLeftUpRightDown.png",32,32,false)],"tile"),0,-32,1,1,0);
    thePlayer.transform.pos.x = 0; thePlayer.transform.pos.y = 0;
}
function updateTiles(ent, callAgain, iStart){
    let i;
    let applyToAll = false;
    if(ent == undefined && callAgain == undefined && iStart == undefined){
        applyToAll = true;
    }
    if(iStart != undefined && !applyToAll){
        i = iStart;
    }
    else i = 1;
    while(i <= entities.length){
        copyText.innerHTML = "";
        if((entities[i - 1] == ent || applyToAll) && (entities[i - 1].tag2 == "tile" && entities[i - 1].name == "gd")){
            let hasAbove = false;
            let hasLeft = false;
            let hasRight = false;
            let hasBottom = false;
            let hasNW = false;
            let hasNE = false;
            let hasSW = false;
            let hasSE = false;
            for(let e = 1; e <= entities.length; e++){
                if(entities[e - 1].tag2 == "tile" && entities[e - 1].name == "gd"){
                    if(!hasAbove && entities[e - 1].transform.pos.y == entities[i - 1].transform.pos.y + 32 && entities[e - 1].transform.pos.x == entities[i - 1].transform.pos.x){
                        hasAbove = true;
                        if(callAgain == undefined)
                        updateTiles(entities[e - 1], false, entities[e - 1].order);
                    }
                    else if(!hasBottom && entities[e - 1].transform.pos.y == entities[i - 1].transform.pos.y - 32 && entities[e - 1].transform.pos.x == entities[i - 1].transform.pos.x){
                        hasBottom = true;
                        if(callAgain == undefined)
                        updateTiles(entities[e - 1], false, entities[e - 1].order);
                    }
                    else if(!hasLeft && entities[e - 1].transform.pos.y == entities[i - 1].transform.pos.y && entities[e - 1].transform.pos.x == entities[i - 1].transform.pos.x - 32){
                        hasLeft = true;
                        if(callAgain == undefined)
                        updateTiles(entities[e - 1], false, entities[e - 1].order);
                    }
                    else if(!hasRight && entities[e - 1].transform.pos.y == entities[i - 1].transform.pos.y && entities[e - 1].transform.pos.x == entities[i - 1].transform.pos.x + 32){
                        hasRight = true;
                        if(callAgain == undefined)
                        updateTiles(entities[e - 1], false, entities[e - 1].order);
                    }
                    if(!hasNW && entities[e - 1].transform.pos.y == entities[i - 1].transform.pos.y + 32 && entities[e - 1].transform.pos.x == entities[i - 1].transform.pos.x - 32){
                        hasNW = true;
                        if(callAgain == undefined)
                        updateTiles(entities[e - 1], false, entities[e - 1].order);
                    }
                    else if(!hasNE && entities[e - 1].transform.pos.y == entities[i - 1].transform.pos.y + 32 && entities[e - 1].transform.pos.x == entities[i - 1].transform.pos.x + 32){
                        hasNE = true;
                        if(callAgain == undefined)
                        updateTiles(entities[e - 1], false, entities[e - 1].order);
                    }
                    else if(!hasSW && entities[e - 1].transform.pos.y == entities[i - 1].transform.pos.y - 32 && entities[e - 1].transform.pos.x == entities[i - 1].transform.pos.x - 32){
                        hasSW = true;
                        if(callAgain == undefined)
                        updateTiles(entities[e - 1], false, entities[e - 1].order);
                    }
                    else if(!hasSE && entities[e - 1].transform.pos.y == entities[i - 1].transform.pos.y - 32 && entities[e - 1].transform.pos.x == entities[i - 1].transform.pos.x + 32){
                        hasSE = true;
                        if(callAgain == undefined)
                        updateTiles(entities[e - 1], false, entities[e - 1].order);
                    }
                }
            }
            if(hasRight && hasLeft && hasBottom && hasAbove){
                entities[i - 1].GetComponent(Renderer).img.src = "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstNone.png";
            }
            else if(!hasAbove && hasRight && hasLeft && hasBottom){
                entities[i - 1].GetComponent(Renderer).img.src = "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstSideUp.png";
            }
            else if(!hasBottom && hasRight && hasLeft && hasAbove){
                entities[i - 1].GetComponent(Renderer).img.src = "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstSideDown.png";
            }
            else if(!hasRight && hasAbove && hasBottom && hasLeft){
                entities[i - 1].GetComponent(Renderer).img.src = "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstSideRight.png";
            }
            else if(!hasLeft && hasAbove && hasBottom && hasRight){
                entities[i - 1].GetComponent(Renderer).img.src = "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstSideLeft.png";
            }
            else if(!hasLeft && !hasAbove && hasRight && hasBottom){
                entities[i - 1].GetComponent(Renderer).img.src = "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstSideLeftUp.png";
            }
            else if(!hasAbove && !hasRight && hasBottom && hasLeft){
                entities[i - 1].GetComponent(Renderer).img.src = "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstSideUpRight.png";
            }
            else if(!hasRight && !hasBottom && hasLeft && hasAbove){
                entities[i - 1].GetComponent(Renderer).img.src = "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstSideRightDown.png";
            }
            else if(!hasBottom && !hasLeft && hasAbove && hasRight){
                entities[i - 1].GetComponent(Renderer).img.src = "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstSideDownLeft.png";
            }
            else if(!hasAbove && !hasBottom && hasRight && hasLeft){
                entities[i - 1].GetComponent(Renderer).img.src = "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstSideUpDown.png";
            }
            else if(!hasLeft && !hasRight && hasBottom && hasAbove){
                entities[i - 1].GetComponent(Renderer).img.src = "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstSideLeftRight.png";
            }
            else if(!hasLeft && !hasRight && !hasAbove && hasBottom){
                entities[i - 1].GetComponent(Renderer).img.src = "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstSideLeftUpRight.png";
            }
            else if(!hasLeft && !hasRight && hasAbove && !hasBottom){
                entities[i - 1].GetComponent(Renderer).img.src = "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstSideRightDownLeft.png";
            }
            else if(!hasAbove && !hasBottom && !hasLeft && hasRight){
                entities[i - 1].GetComponent(Renderer).img.src = "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstSideDownLeftUp.png";
            }
            else if(!hasAbove && !hasBottom && hasLeft && !hasRight){
                entities[i - 1].GetComponent(Renderer).img.src = "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstSideUpRightDown.png";
            }
            else if(!hasAbove && !hasBottom && !hasLeft && !hasRight){
                entities[i - 1].GetComponent(Renderer).img.src = "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstSideLeftUpRightDown.png";
            }
            if(!hasNW && hasLeft && hasAbove && hasRight && hasBottom && hasNE && hasSW && hasSE){
                entities[i - 1].GetComponent(Renderer).img.src = "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstCornerNW.png";
            }
            else if(hasNW && hasLeft && hasAbove && hasRight && hasBottom && !hasNE && hasSW && hasSE){
                entities[i - 1].GetComponent(Renderer).img.src = "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstCornerNE.png";
            }
            else if(hasNW && hasLeft && hasAbove && hasRight && hasBottom && hasNE && !hasSW && hasSE){
                entities[i - 1].GetComponent(Renderer).img.src = "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstCornerSW.png";
            }
            else if(hasNW && hasLeft && hasAbove && hasRight && hasBottom && hasNE && hasSW && !hasSE){
                entities[i - 1].GetComponent(Renderer).img.src = "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstCornerSE.png";
            }
            else if(!hasNW && hasLeft && hasAbove && hasRight && hasBottom && !hasNE && !hasSW && !hasSE){
                entities[i - 1].GetComponent(Renderer).img.src = "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstCornerNWNESWSE.png";
            }
            else if(!hasNW && hasLeft && hasAbove && hasRight && hasBottom && hasNE && !hasSW && hasSE){
                entities[i - 1].GetComponent(Renderer).img.src = "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstCornerNWSW.png";
            }
            else if(!hasNW && hasLeft && hasAbove && hasRight && hasBottom && !hasNE && hasSW && hasSE){
                entities[i - 1].GetComponent(Renderer).img.src = "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstCornerNWNE.png";
            }
            else if(hasNW && hasLeft && hasAbove && hasRight && hasBottom && !hasNE && hasSW && !hasSE){
                entities[i - 1].GetComponent(Renderer).img.src = "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstCornerNESE.png";
            }
            else if(hasNW && hasLeft && hasAbove && hasRight && hasBottom && hasNE && !hasSW && !hasSE){
                entities[i - 1].GetComponent(Renderer).img.src = "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstCornerSWSE.png";
            }
            else if(!hasLeft && !hasAbove && hasRight && hasBottom && !hasSE){
                entities[i - 1].GetComponent(Renderer).img.src = "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstSideLeftUpCornerSE.png";
            }
            else if(hasLeft && !hasAbove && !hasRight && hasBottom && !hasSW){
                entities[i - 1].GetComponent(Renderer).img.src = "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstSideUpRightCornerSW.png";
            }
            else if(!hasNW && hasLeft && hasAbove && !hasRight && !hasBottom){
                entities[i - 1].GetComponent(Renderer).img.src = "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstSideRightDownCornerNW.png";
            }
            else if(!hasLeft && hasAbove && hasRight && !hasBottom && !hasNE){
                entities[i - 1].GetComponent(Renderer).img.src = "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstSideDownLeftCornerNE.png";
            }
            else if(hasLeft && !hasAbove && hasRight && hasBottom && !hasSE && hasSW){
                entities[i - 1].GetComponent(Renderer).img.src = "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstSideUpCornerSE.png";
            }
            else if(hasLeft && !hasAbove && hasRight && hasBottom && !hasSW && hasSE){
                entities[i - 1].GetComponent(Renderer).img.src = "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstSideUpCornerSW.png";
            }
            else if(hasLeft && hasAbove && hasRight && !hasBottom && !hasNE && hasNW){
                entities[i - 1].GetComponent(Renderer).img.src = "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstSideDownCornerNE.png";
            }
            else if(hasLeft && hasAbove && hasRight && !hasBottom && hasNE && !hasNW){
                entities[i - 1].GetComponent(Renderer).img.src = "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstSideDownCornerNW.png";
            }
            else if(hasLeft && hasAbove && hasRight && hasBottom && !hasNE && hasNW && !hasSW && hasSE){
                entities[i - 1].GetComponent(Renderer).img.src = "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstCornerNESW.png";
            }
            else if(hasLeft && hasAbove && hasRight && hasBottom && hasNE && !hasNW && !hasSE && hasSW){
                entities[i - 1].GetComponent(Renderer).img.src = "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstCornerNWSE.png";
            }
            else if(!hasLeft && hasAbove && hasRight && hasBottom && !hasSE && hasNE){
                entities[i - 1].GetComponent(Renderer).img.src = "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstSideLeftCornerSE.png";
            }
            else if(!hasLeft && hasAbove && hasRight && hasBottom && !hasNE && hasSE){
                entities[i - 1].GetComponent(Renderer).img.src = "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstSideLeftCornerNE.png";
            }
            else if(hasLeft && hasAbove && !hasRight && hasBottom && !hasSW && hasNW){
                entities[i - 1].GetComponent(Renderer).img.src = "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstSideRightCornerSW.png";
            }
            else if(hasLeft && hasAbove && !hasRight && hasBottom && !hasNW && hasSW){
                entities[i - 1].GetComponent(Renderer).img.src = "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstSideRightCornerNW.png";
            }
            else if(hasLeft && hasAbove && hasRight && hasBottom && !hasNW && !hasSW && !hasSE && hasNE){
                entities[i - 1].GetComponent(Renderer).img.src = "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstCornerNWSWSE.png";
            }
            else if(hasLeft && hasAbove && hasRight && hasBottom && !hasSW && !hasNE && !hasSE && hasNW){
                entities[i - 1].GetComponent(Renderer).img.src = "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstCornerNESWSE.png";
            }
            else if(hasLeft && hasAbove && hasRight && hasBottom && !hasSW && !hasNE && hasSE && !hasNW){
                entities[i - 1].GetComponent(Renderer).img.src = "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstCornerNWNESW.png";
            }
            else if(hasLeft && hasAbove && hasRight && hasBottom && hasSW && !hasNE && !hasSE && !hasNW){
                entities[i - 1].GetComponent(Renderer).img.src = "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstCornerNWNESE.png";
            }
            else if(hasLeft && hasAbove && !hasRight && hasBottom && !hasNW && !hasSW){
                entities[i - 1].GetComponent(Renderer).img.src = "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstSideRightCornerNWSW.png";
            }
            else if(hasLeft && hasAbove && hasRight && !hasBottom && !hasNW && !hasNE){
                entities[i - 1].GetComponent(Renderer).img.src = "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstSideDownCornerNWNE.png";
            }
            else if(!hasLeft && hasAbove && hasRight && hasBottom && !hasNE && !hasSE){
                entities[i - 1].GetComponent(Renderer).img.src = "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstSideLeftCornerNESE.png";
            }
            else if(hasLeft && !hasAbove && hasRight && hasBottom && !hasSW && !hasSE){
                entities[i - 1].GetComponent(Renderer).img.src = "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstSideUpCornerSWSE.png";
            }
            if(!applyToAll){
                return;
            }
        }
        i++;
    }
}
function loadScene(){
    SceneManager.Load(function(){
        SceneManager.CompileLevel(loadSceneText.value);
        SceneManager.ScenePreset();
    });
}
function copySaveSceneText(){
    saveSceneText.select();
    document.execCommand("copy");
    copyText.innerHTML = "text has been copied"
}
function highlightLoadText(){
    loadSceneText.select();
}
let fullScreenOn = false;
let originalCanvasWidth = canvas.width;
let originalCanvasHeight = canvas.height;
function toggleFullScreen(){
    if(!fullScreenOn){
        pageRight.style.position = "absolute";
        canvas.width = window.innerWidth - 20;
        canvas.height = window.innerHeight - 20;
        canvas.style.left = 0;
        canvas.style.top = 0;
        fullScreenOn = true;
    }
    else{
        pageRight.style.position = "initial";
        canvas.width = originalCanvasWidth;
        canvas.height = originalCanvasHeight;
        fullScreenOn = false;
    }
    
}
function RandomLetterString(lengthOfString){
    let finalString = "";
    let allLettersArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    for(let i = 0; i < lengthOfString; i++){
        let randomChar = allLettersArr[Math.round(randomRange(0, allLettersArr.length))];
        finalString = finalString + randomChar;
    }
    return finalString;
}