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
let metallicWallTile = document.getElementById("metallicWallTile");
let groundTile = document.getElementById("groundTile");
let stairTile = document.getElementById("stairTile");
let doorTile = document.getElementById("doorTile");
let boxTile = document.getElementById("boxTile");
let lightTile = document.getElementById("lightTile");
let chainTile = document.getElementById("chainTile");
let enemy1Tile = document.getElementById("enemy1Tile");
let spikeTile = document.getElementById("spikeTile");
let cageTile = document.getElementById("cageTile");
let cageBGTile = document.getElementById("cageBGTile");
let meteorTile = document.getElementById("meteorTile");
let grassTile = document.getElementById("grassTile");
let glowingMeteorTile = document.getElementById("glowingMeteorTile");
let windowTile = document.getElementById("windowTile");
let nonRoundGround = document.getElementById("nonRoundGround");
let nonRoundGrass = document.getElementById("nonRoundGrass");
let woodBridgeLowerTile = document.getElementById("woodBridgeLowerTile");
let woodBridgeUpperTile = document.getElementById("woodBridgeUpperTile");
let magmaMeteorTile = document.getElementById("magmaMeteorTile");
let beamTile = document.getElementById("beamTile");
let facilityTableTile = document.getElementById("facilityTableTile");
let computerTile = document.getElementById("computerTile");
let moistDirtTile = document.getElementById("moistDirtTile");
let buildingBlockTile = document.getElementById("buildingBlockTile");
let vineTile = document.getElementById("vineTile");
let eraser = document.getElementById("eraser");
let yesCollider = document.getElementById("yesCollider");
let sortOrderHTML = document.getElementById("sortingOrder");
let autoTile = document.getElementById("autoTile");
let saveSceneText = document.getElementById("saveSceneText");
let loadSceneText = document.getElementById("loadSceneText");
let copyText = document.getElementById("copyText");
let pageRight = document.getElementById("pageRight");
let cellSize = document.getElementById("cellSize");
let yesAutoSort= document.getElementById("yesAutoSort");
let maxFPS = document.getElementById("maxFPS");
let maxRenderFPS = document.getElementById("maxRenderFPS");

//Image IDs
images = [
    "https://seiji-welsh.github.io/Game/Images/Tiles/RoundGrass/RndTlsTstCornerNE.png",//0
    "https://seiji-welsh.github.io/Game/Images/Tiles/RoundGrass/RndTlsTstCornerNESE.png",//1
    "https://seiji-welsh.github.io/Game/Images/Tiles/RoundGrass/RndTlsTstCornerNESW.png",//2
    "https://seiji-welsh.github.io/Game/Images/Tiles/RoundGrass/RndTlsTstCornerNESWSE.png",//3
    "https://seiji-welsh.github.io/Game/Images/Tiles/RoundGrass/RndTlsTstCornerNW.png",//4
    "https://seiji-welsh.github.io/Game/Images/Tiles/RoundGrass/RndTlsTstCornerNWNE.png",//5
    "https://seiji-welsh.github.io/Game/Images/Tiles/RoundGrass/RndTlsTstCornerNWNESE.png",//6
    "https://seiji-welsh.github.io/Game/Images/Tiles/RoundGrass/RndTlsTstCornerNWNESW.png",//7
    "https://seiji-welsh.github.io/Game/Images/Tiles/RoundGrass/RndTlsTstCornerNWNESWSE.png",//8
    "https://seiji-welsh.github.io/Game/Images/Tiles/RoundGrass/RndTlsTstCornerNWSE.png",//9
    "https://seiji-welsh.github.io/Game/Images/Tiles/RoundGrass/RndTlsTstCornerNWSW.png",//10
    "https://seiji-welsh.github.io/Game/Images/Tiles/RoundGrass/RndTlsTstCornerNWSWSE.png",//11
    "https://seiji-welsh.github.io/Game/Images/Tiles/RoundGrass/RndTlsTstCornerSE.png",//12
    "https://seiji-welsh.github.io/Game/Images/Tiles/RoundGrass/RndTlsTstCornerSW.png",//13
    "https://seiji-welsh.github.io/Game/Images/Tiles/RoundGrass/RndTlsTstCornerSWSE.png",//14
    "https://seiji-welsh.github.io/Game/Images/Tiles/RoundGrass/RndTlsTstNone.png",//15
    "https://seiji-welsh.github.io/Game/Images/Tiles/RoundGrass/RndTlsTstSideDown.png",//16
    "https://seiji-welsh.github.io/Game/Images/Tiles/RoundGrass/RndTlsTstSideDownCornerNE.png",//17
    "https://seiji-welsh.github.io/Game/Images/Tiles/RoundGrass/RndTlsTstSideDownCornerNW.png",//18
    "https://seiji-welsh.github.io/Game/Images/Tiles/RoundGrass/RndTlsTstSideDownCornerNWNE.png",//19
    "https://seiji-welsh.github.io/Game/Images/Tiles/RoundGrass/RndTlsTstSideDownLeft.png",//20
    "https://seiji-welsh.github.io/Game/Images/Tiles/RoundGrass/RndTlsTstSideDownLeftCornerNE.png",//21
    "https://seiji-welsh.github.io/Game/Images/Tiles/RoundGrass/RndTlsTstSideDownLeftUp.png",//22
    "https://seiji-welsh.github.io/Game/Images/Tiles/RoundGrass/RndTlsTstSideLeft.png",//23
    "https://seiji-welsh.github.io/Game/Images/Tiles/RoundGrass/RndTlsTstSideLeftCornerNE.png",//24
    "https://seiji-welsh.github.io/Game/Images/Tiles/RoundGrass/RndTlsTstSideLeftCornerNESE.png",//25
    "https://seiji-welsh.github.io/Game/Images/Tiles/RoundGrass/RndTlsTstSideLeftCornerSE.png",//26
    "https://seiji-welsh.github.io/Game/Images/Tiles/RoundGrass/RndTlsTstSideLeftRight.png",//27
    "https://seiji-welsh.github.io/Game/Images/Tiles/RoundGrass/RndTlsTstSideLeftUp.png",//28
    "https://seiji-welsh.github.io/Game/Images/Tiles/RoundGrass/RndTlsTstSideLeftUpCornerSE.png",//29
    "https://seiji-welsh.github.io/Game/Images/Tiles/RoundGrass/RndTlsTstSideLeftUpRight.png",//30
    "https://seiji-welsh.github.io/Game/Images/Tiles/RoundGrass/RndTlsTstSideLeftUpRightDown.png",//31
    "https://seiji-welsh.github.io/Game/Images/Tiles/RoundGrass/RndTlsTstSideRight.png",//32
    "https://seiji-welsh.github.io/Game/Images/Tiles/RoundGrass/RndTlsTstSideRightCornerNW.png",//33
    "https://seiji-welsh.github.io/Game/Images/Tiles/RoundGrass/RndTlsTstSideRightCornerNWSW.png",//34
    "https://seiji-welsh.github.io/Game/Images/Tiles/RoundGrass/RndTlsTstSideRightCornerSW.png",//35
    "https://seiji-welsh.github.io/Game/Images/Tiles/RoundGrass/RndTlsTstSideRightDown.png",//36
    "https://seiji-welsh.github.io/Game/Images/Tiles/RoundGrass/RndTlsTstSideRightDownCornerNW.png",//37
    "https://seiji-welsh.github.io/Game/Images/Tiles/RoundGrass/RndTlsTstSideRightDownLeft.png",//38
    "https://seiji-welsh.github.io/Game/Images/Tiles/RoundGrass/RndTlsTstSideUp.png",//39
    "https://seiji-welsh.github.io/Game/Images/Tiles/RoundGrass/RndTlsTstSideUpCornerSE.png",//40
    "https://seiji-welsh.github.io/Game/Images/Tiles/RoundGrass/RndTlsTstSideUpCornerSW.png",//41
    "https://seiji-welsh.github.io/Game/Images/Tiles/RoundGrass/RndTlsTstSideUpCornerSWSE.png",//42
    "https://seiji-welsh.github.io/Game/Images/Tiles/RoundGrass/RndTlsTstSideUpDown.png",//43
    "https://seiji-welsh.github.io/Game/Images/Tiles/RoundGrass/RndTlsTstSideUpRight.png",//44
    "https://seiji-welsh.github.io/Game/Images/Tiles/RoundGrass/RndTlsTstSideUpRightCornerSW.png",//45
    "https://seiji-welsh.github.io/Game/Images/Tiles/RoundGrass/RndTlsTstSideUpRightDown.png",//46

    "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstCornerNE.png",//47
    "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstCornerNESE.png",//48
    "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstCornerNESW.png",//49
    "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstCornerNESWSE.png",//50
    "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstCornerNW.png",//51
    "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstCornerNWNE.png",//52
    "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstCornerNWNESE.png",//53
    "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstCornerNWNESW.png",//54
    "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstCornerNWNESWSE.png",//55
    "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstCornerNWSE.png",//56
    "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstCornerNWSW.png",//57
    "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstCornerNWSWSE.png",//58
    "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstCornerSE.png",//59
    "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstCornerSW.png",//60
    "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstCornerSWSE.png",//61
    "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstNone.png",//62
    "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstSideDown.png",//63
    "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstSideDownCornerNE.png",//64
    "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstSideDownCornerNW.png",//65
    "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstSideDownCornerNWNE.png",//66
    "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstSideDownLeft.png",//67
    "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstSideDownLeftCornerNE.png",//68
    "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstSideDownLeftUp.png",//69
    "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstSideLeft.png",//70
    "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstSideLeftCornerNE.png",//71
    "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstSideLeftCornerNESE.png",//72
    "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstSideLeftCornerSE.png",//73
    "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstSideLeftRight.png",//74
    "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstSideLeftUp.png",//75
    "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstSideLeftUpCornerSE.png",//76
    "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstSideLeftUpRight.png",//77
    "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstSideLeftUpRightDown.png",//78
    "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstSideRight.png",//79
    "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstSideRightCornerNW.png",//80
    "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstSideRightCornerNWSW.png",//81
    "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstSideRightCornerSW.png",//82
    "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstSideRightDown.png",//83
    "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstSideRightDownCornerNW.png",//84
    "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstSideRightDownLeft.png",//85
    "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstSideUp.png",//86
    "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstSideUpCornerSE.png",//87
    "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstSideUpCornerSW.png",//88
    "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstSideUpCornerSWSE.png",//89
    "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstSideUpDown.png",//90
    "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstSideUpRight.png",//91
    "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstSideUpRightCornerSW.png",//92
    "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstSideUpRightDown.png"//93
]

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
    else if(metallicWallTile.checked){selectedTile = "metallicWallTile"; physTileSelected = "metallicWallTile"}
    else if(stairTile.checked){selectedTile = "stairTile"; physTileSelected = "stairTile"}
    else if(doorTile.checked){selectedTile = "doorTile"; physTileSelected = "doorTile"}
    else if(boxTile.checked){selectedTile = "boxTile"; physTileSelected = "boxTile"}
    else if(lightTile.checked){selectedTile = "lightTile"; physTileSelected = "lightTile"}
    else if(chainTile.checked){selectedTile = "chainTile"; physTileSelected = "chainTile"}
    else if(enemy1Tile.checked){selectedTile = "enemy1Tile"; physTileSelected = "enemy1Tile"}
    else if(spikeTile.checked){selectedTile = "spikeTile"; physTileSelected = "spikeTile"}
    else if(cageTile.checked){selectedTile = "cageTile"; physTileSelected = "cageTile"}
    else if(cageBGTile.checked){selectedTile = "cageBGTile"; physTileSelected = "cageBGTile"}
    else if(meteorTile.checked){selectedTile = "meteorTile"; physTileSelected = "meteorTile"}
    else if(glowingMeteorTile.checked){selectedTile = "glowingMeteorTile"; physTileSelected = "glowingMeteorTile"}
    else if(grassTile.checked){selectedTile = "grassTile"; physTileSelected = "grassTile"}
    else if(nonRoundGround.checked){selectedTile = "nonRoundGround"; physTileSelected = "nonRoundGround"}
    else if(nonRoundGrass.checked){selectedTile = "nonRoundGrass"; physTileSelected = "nonRoundGrass"}
    else if(windowTile.checked){selectedTile = "windowTile"; physTileSelected = "windowTile"}
    else if(woodBridgeLowerTile.checked){selectedTile = "woodBridgeLowerTile"; physTileSelected = "woodBridgeLowerTile"}
    else if(woodBridgeUpperTile.checked){selectedTile = "woodBridgeUpperTile"; physTileSelected = "woodBridgeUpperTile"}
    else if(magmaMeteorTile.checked){selectedTile = "magmaMeteorTile"; physTileSelected = "magmaMeteorTile"}
    else if(beamTile.checked){selectedTile = "beamTile"; physTileSelected = "beamTile"}
    else if(facilityTableTile.checked){selectedTile = "facilityTableTile"; physTileSelected = "facilityTableTile"}
    else if(computerTile.checked){selectedTile = "computerTile"; physTileSelected = "computerTile"}
    else if(moistDirtTile.checked){selectedTile = "moistDirtTile"; physTileSelected = "moistDirtTile"}
    else if(buildingBlockTile.checked){selectedTile = "buildingBlockTile"; physTileSelected = "buildingBlockTile"}
    else if(vineTile.checked){selectedTile = "vineTile"; physTileSelected = "vineTile"}
    else if(eraser.checked){selectedTile = "eraser";}
    if(yesCollider.checked) useColliders = true;
    else useColliders = false;
    if(!Input.eDown){
        selectedTile = physTileSelected;
    }
    switch(selectedTile){
        case "groundTile":if(!groundTile.checked) groundTile.checked = true;break;
        case "wallTile":if(!wallTile.checked) wallTile.checked = true;break;
        case "metallicWallTile":if(!metallicWallTile.checked) metallicWallTile.checked = true;break;
        case "stairTile":if(!stairTile.checked) stairTile.checked = true;break;
        case "doorTile":if(!doorTile.checked) doorTile.checked = true;break;
        case "boxTile":if(!boxTile.checked) boxTile.checked = true;break;
        case "lightTile":if(!lightTile.checked) lightTile.checked = true;break;
        case "chainTile":if(!chainTile.checked) chainTile.checked = true;break;
        case "enemy1Tile":if(!enemy1Tile.checked) enemy1Tile.checked = true;break;
        case "spikeTile":if(!spikeTile.checked) spikeTile.checked = true;break;
        case "cageTile":if(!cageTile.checked) cageTile.checked = true;break;
        case "cageBGTile":if(!cageBGTile.checked) cageBGTile.checked = true;break;
        case "meteorTile":if(!meteorTile.checked) meteorTile.checked = true;break;
        case "glowingMeteorTile":if(!glowingMeteorTile.checked) glowingMeteorTile.checked = true;break;
        case "nonRoundGround":if(!nonRoundGround.checked) nonRoundGround.checked = true;break;
        case "nonRoundGrass":if(!nonRoundGrass.checked) nonRoundGrass.checked = true;break;
        case "grassTile":if(!grassTile.checked) grassTile.checked = true;break;
        case "windowTile":if(!windowTile.checked) windowTile.checked = true;break;
        case "woodBridgeLowerTile":if(!woodBridgeLowerTile.checked)woodBridgeLowerTile.checked = true;break;
        case "woodBridgeUpperTile":if(!woodBridgeUpperTile.checked)woodBridgeUpperTile.checked = true;break;
        case "magmaMeteorTile":if(!magmaMeteorTile.checked)magmaMeteorTile.checked = true;break;
        case "beamTile":if(!beamTile.checked)beamTile.checked = true;break;
        case "facilityTableTile":if(!facilityTableTile.checked)facilityTableTile.checked = true;break;
        case "computerTile":if(!computerTile.checked)computerTile.checked = true;break;
        case "moistDirtTile":if(!moistDirtTile.checked)moistDirtTile.checked = true;break;
        case "buildingBlockTile":if(!buildingBlockTile.checked)buildingBlockTile.checked = true;break;
        case "vineTile":if(!vineTile.checked)vineTile.checked = true;break;
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
            let imageNumber = "";
            if(sortObj[i - 1].name == "gd" || sortObj[i - 1].name == "grs"){
                for(let d = 0; d < images.length; d++){
                    if(images[d] == entityRenderer.img.src){
                        imageNumber = d; break;
                    }
                }
            }
            else imageNumber = "N";
            if(sortObj[i - 1].GetComponent(RectangleCollider) != null){
                result += ":" + sortObj[i - 1].name + ",t," + entityRenderer.sortingOrder + "," + sortObj[i - 1].transform.pos.x + "," + sortObj[i - 1].transform.pos.y + "," + imageNumber;
            }
            else{
                result += ":" + sortObj[i - 1].name + ",f," + entityRenderer.sortingOrder + "," + sortObj[i - 1].transform.pos.x + "," + sortObj[i - 1].transform.pos.y + "," + imageNumber;
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
async function updateTiles(ent, callAgain, iStart){
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
            //if(i % 1 == 0)
            //await sleep(33);
            let hasAbove = false;
            let hasLeft = false;
            let hasRight = false;
            let hasBottom = false;
            let hasNW = false;
            let hasNE = false;
            let hasSW = false;
            let hasSE = false;
            for(let e = 1; e <= entities.length; e++){
                if(entities[e - 1].tag2 == "tile" && (entities[e - 1].name == "gd" || entities[e - 1].name == "gdnr")){
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
            if(hasRight && hasLeft && hasBottom && hasAbove){entities[i - 1].GetComponent(Renderer).img.src = "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstNone.png";}
            else if(!hasAbove && hasRight && hasLeft && hasBottom){entities[i - 1].GetComponent(Renderer).img.src = "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstSideUp.png";}
            else if(!hasBottom && hasRight && hasLeft && hasAbove){entities[i - 1].GetComponent(Renderer).img.src = "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstSideDown.png";}
            else if(!hasRight && hasAbove && hasBottom && hasLeft){entities[i - 1].GetComponent(Renderer).img.src = "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstSideRight.png";}
            else if(!hasLeft && hasAbove && hasBottom && hasRight){entities[i - 1].GetComponent(Renderer).img.src = "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstSideLeft.png";}
            else if(!hasLeft && !hasAbove && hasRight && hasBottom){entities[i - 1].GetComponent(Renderer).img.src = "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstSideLeftUp.png";}
            else if(!hasAbove && !hasRight && hasBottom && hasLeft){entities[i - 1].GetComponent(Renderer).img.src = "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstSideUpRight.png";}
            else if(!hasRight && !hasBottom && hasLeft && hasAbove){entities[i - 1].GetComponent(Renderer).img.src = "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstSideRightDown.png";}
            else if(!hasBottom && !hasLeft && hasAbove && hasRight){entities[i - 1].GetComponent(Renderer).img.src = "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstSideDownLeft.png";}
            else if(!hasAbove && !hasBottom && hasRight && hasLeft){entities[i - 1].GetComponent(Renderer).img.src = "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstSideUpDown.png";}
            else if(!hasLeft && !hasRight && hasBottom && hasAbove){entities[i - 1].GetComponent(Renderer).img.src = "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstSideLeftRight.png";}
            else if(!hasLeft && !hasRight && !hasAbove && hasBottom){entities[i - 1].GetComponent(Renderer).img.src = "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstSideLeftUpRight.png";}
            else if(!hasLeft && !hasRight && hasAbove && !hasBottom){entities[i - 1].GetComponent(Renderer).img.src = "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstSideRightDownLeft.png";}
            else if(!hasAbove && !hasBottom && !hasLeft && hasRight){entities[i - 1].GetComponent(Renderer).img.src = "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstSideDownLeftUp.png";}
            else if(!hasAbove && !hasBottom && hasLeft && !hasRight){entities[i - 1].GetComponent(Renderer).img.src = "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstSideUpRightDown.png";}
            else if(!hasAbove && !hasBottom && !hasLeft && !hasRight){entities[i - 1].GetComponent(Renderer).img.src = "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstSideLeftUpRightDown.png";}
            if(!hasNW && hasLeft && hasAbove && hasRight && hasBottom && hasNE && hasSW && hasSE){entities[i - 1].GetComponent(Renderer).img.src = "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstCornerNW.png";}
            else if(hasNW && hasLeft && hasAbove && hasRight && hasBottom && !hasNE && hasSW && hasSE){entities[i - 1].GetComponent(Renderer).img.src = "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstCornerNE.png";}
            else if(hasNW && hasLeft && hasAbove && hasRight && hasBottom && hasNE && !hasSW && hasSE){entities[i - 1].GetComponent(Renderer).img.src = "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstCornerSW.png";}
            else if(hasNW && hasLeft && hasAbove && hasRight && hasBottom && hasNE && hasSW && !hasSE){entities[i - 1].GetComponent(Renderer).img.src = "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstCornerSE.png";}
            else if(!hasNW && hasLeft && hasAbove && hasRight && hasBottom && !hasNE && !hasSW && !hasSE){entities[i - 1].GetComponent(Renderer).img.src = "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstCornerNWNESWSE.png";}
            else if(!hasNW && hasLeft && hasAbove && hasRight && hasBottom && hasNE && !hasSW && hasSE){entities[i - 1].GetComponent(Renderer).img.src = "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstCornerNWSW.png";}
            else if(!hasNW && hasLeft && hasAbove && hasRight && hasBottom && !hasNE && hasSW && hasSE){entities[i - 1].GetComponent(Renderer).img.src = "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstCornerNWNE.png";}
            else if(hasNW && hasLeft && hasAbove && hasRight && hasBottom && !hasNE && hasSW && !hasSE){entities[i - 1].GetComponent(Renderer).img.src = "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstCornerNESE.png";}
            else if(hasNW && hasLeft && hasAbove && hasRight && hasBottom && hasNE && !hasSW && !hasSE){entities[i - 1].GetComponent(Renderer).img.src = "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstCornerSWSE.png";}
            else if(!hasLeft && !hasAbove && hasRight && hasBottom && !hasSE){entities[i - 1].GetComponent(Renderer).img.src = "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstSideLeftUpCornerSE.png";}
            else if(hasLeft && !hasAbove && !hasRight && hasBottom && !hasSW){entities[i - 1].GetComponent(Renderer).img.src = "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstSideUpRightCornerSW.png";}
            else if(!hasNW && hasLeft && hasAbove && !hasRight && !hasBottom){entities[i - 1].GetComponent(Renderer).img.src = "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstSideRightDownCornerNW.png";}
            else if(!hasLeft && hasAbove && hasRight && !hasBottom && !hasNE){entities[i - 1].GetComponent(Renderer).img.src = "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstSideDownLeftCornerNE.png";}
            else if(hasLeft && !hasAbove && hasRight && hasBottom && !hasSE && hasSW){entities[i - 1].GetComponent(Renderer).img.src = "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstSideUpCornerSE.png";}
            else if(hasLeft && !hasAbove && hasRight && hasBottom && !hasSW && hasSE){entities[i - 1].GetComponent(Renderer).img.src = "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstSideUpCornerSW.png";}
            else if(hasLeft && hasAbove && hasRight && !hasBottom && !hasNE && hasNW){entities[i - 1].GetComponent(Renderer).img.src = "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstSideDownCornerNE.png";}
            else if(hasLeft && hasAbove && hasRight && !hasBottom && hasNE && !hasNW){entities[i - 1].GetComponent(Renderer).img.src = "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstSideDownCornerNW.png";}
            else if(hasLeft && hasAbove && hasRight && hasBottom && !hasNE && hasNW && !hasSW && hasSE){entities[i - 1].GetComponent(Renderer).img.src = "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstCornerNESW.png";}
            else if(hasLeft && hasAbove && hasRight && hasBottom && hasNE && !hasNW && !hasSE && hasSW){entities[i - 1].GetComponent(Renderer).img.src = "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstCornerNWSE.png";}
            else if(!hasLeft && hasAbove && hasRight && hasBottom && !hasSE && hasNE){entities[i - 1].GetComponent(Renderer).img.src = "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstSideLeftCornerSE.png";}
            else if(!hasLeft && hasAbove && hasRight && hasBottom && !hasNE && hasSE){entities[i - 1].GetComponent(Renderer).img.src = "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstSideLeftCornerNE.png";}
            else if(hasLeft && hasAbove && !hasRight && hasBottom && !hasSW && hasNW){entities[i - 1].GetComponent(Renderer).img.src = "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstSideRightCornerSW.png";}
            else if(hasLeft && hasAbove && !hasRight && hasBottom && !hasNW && hasSW){entities[i - 1].GetComponent(Renderer).img.src = "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstSideRightCornerNW.png";}
            else if(hasLeft && hasAbove && hasRight && hasBottom && !hasNW && !hasSW && !hasSE && hasNE){entities[i - 1].GetComponent(Renderer).img.src = "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstCornerNWSWSE.png";}
            else if(hasLeft && hasAbove && hasRight && hasBottom && !hasSW && !hasNE && !hasSE && hasNW){entities[i - 1].GetComponent(Renderer).img.src = "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstCornerNESWSE.png";}
            else if(hasLeft && hasAbove && hasRight && hasBottom && !hasSW && !hasNE && hasSE && !hasNW){entities[i - 1].GetComponent(Renderer).img.src = "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstCornerNWNESW.png";}
            else if(hasLeft && hasAbove && hasRight && hasBottom && hasSW && !hasNE && !hasSE && !hasNW){entities[i - 1].GetComponent(Renderer).img.src = "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstCornerNWNESE.png";}
            else if(hasLeft && hasAbove && !hasRight && hasBottom && !hasNW && !hasSW){entities[i - 1].GetComponent(Renderer).img.src = "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstSideRightCornerNWSW.png";}
            else if(hasLeft && hasAbove && hasRight && !hasBottom && !hasNW && !hasNE){entities[i - 1].GetComponent(Renderer).img.src = "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstSideDownCornerNWNE.png";}
            else if(!hasLeft && hasAbove && hasRight && hasBottom && !hasNE && !hasSE){entities[i - 1].GetComponent(Renderer).img.src = "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstSideLeftCornerNESE.png";}
            else if(hasLeft && !hasAbove && hasRight && hasBottom && !hasSW && !hasSE){entities[i - 1].GetComponent(Renderer).img.src = "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstSideUpCornerSWSE.png";}
            if(!applyToAll){
                return;
            }
        }
        i++;
    }
    if(iStart != undefined && !applyToAll){
        i = iStart;
    }
    else i = 1;
    while(i <= entities.length){
        copyText.innerHTML = "";
        if((entities[i - 1] == ent || applyToAll) && (entities[i - 1].tag2 == "tile" && entities[i - 1].name == "grs")){
            //if(i % 1 == 0)
            //await sleep(33);
            let hasAbove = false;
            let hasLeft = false;
            let hasRight = false;
            let hasBottom = false;
            let hasNW = false;
            let hasNE = false;
            let hasSW = false;
            let hasSE = false;
            for(let e = 1; e <= entities.length; e++){
                if(entities[e - 1].tag2 == "tile" && (entities[e - 1].name == "grs" || entities[e - 1].name == "grsnr")){
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
            if(hasRight && hasLeft && hasBottom && hasAbove){entities[i - 1].GetComponent(Renderer).img.src = "https://seiji-welsh.github.io/Game/Images/Tiles/RoundGrass/RndTlsTstNone.png";}
            else if(!hasAbove && hasRight && hasLeft && hasBottom){entities[i - 1].GetComponent(Renderer).img.src = "https://seiji-welsh.github.io/Game/Images/Tiles/RoundGrass/RndTlsTstSideUp.png";}
            else if(!hasBottom && hasRight && hasLeft && hasAbove){entities[i - 1].GetComponent(Renderer).img.src = "https://seiji-welsh.github.io/Game/Images/Tiles/RoundGrass/RndTlsTstSideDown.png";}
            else if(!hasRight && hasAbove && hasBottom && hasLeft){entities[i - 1].GetComponent(Renderer).img.src = "https://seiji-welsh.github.io/Game/Images/Tiles/RoundGrass/RndTlsTstSideRight.png";}
            else if(!hasLeft && hasAbove && hasBottom && hasRight){entities[i - 1].GetComponent(Renderer).img.src = "https://seiji-welsh.github.io/Game/Images/Tiles/RoundGrass/RndTlsTstSideLeft.png";}
            else if(!hasLeft && !hasAbove && hasRight && hasBottom){entities[i - 1].GetComponent(Renderer).img.src = "https://seiji-welsh.github.io/Game/Images/Tiles/RoundGrass/RndTlsTstSideLeftUp.png";}
            else if(!hasAbove && !hasRight && hasBottom && hasLeft){entities[i - 1].GetComponent(Renderer).img.src = "https://seiji-welsh.github.io/Game/Images/Tiles/RoundGrass/RndTlsTstSideUpRight.png";}
            else if(!hasRight && !hasBottom && hasLeft && hasAbove){entities[i - 1].GetComponent(Renderer).img.src = "https://seiji-welsh.github.io/Game/Images/Tiles/RoundGrass/RndTlsTstSideRightDown.png";}
            else if(!hasBottom && !hasLeft && hasAbove && hasRight){entities[i - 1].GetComponent(Renderer).img.src = "https://seiji-welsh.github.io/Game/Images/Tiles/RoundGrass/RndTlsTstSideDownLeft.png";}
            else if(!hasAbove && !hasBottom && hasRight && hasLeft){entities[i - 1].GetComponent(Renderer).img.src = "https://seiji-welsh.github.io/Game/Images/Tiles/RoundGrass/RndTlsTstSideUpDown.png";}
            else if(!hasLeft && !hasRight && hasBottom && hasAbove){entities[i - 1].GetComponent(Renderer).img.src = "https://seiji-welsh.github.io/Game/Images/Tiles/RoundGrass/RndTlsTstSideLeftRight.png";}
            else if(!hasLeft && !hasRight && !hasAbove && hasBottom){entities[i - 1].GetComponent(Renderer).img.src = "https://seiji-welsh.github.io/Game/Images/Tiles/RoundGrass/RndTlsTstSideLeftUpRight.png";}
            else if(!hasLeft && !hasRight && hasAbove && !hasBottom){entities[i - 1].GetComponent(Renderer).img.src = "https://seiji-welsh.github.io/Game/Images/Tiles/RoundGrass/RndTlsTstSideRightDownLeft.png";}
            else if(!hasAbove && !hasBottom && !hasLeft && hasRight){entities[i - 1].GetComponent(Renderer).img.src = "https://seiji-welsh.github.io/Game/Images/Tiles/RoundGrass/RndTlsTstSideDownLeftUp.png";}
            else if(!hasAbove && !hasBottom && hasLeft && !hasRight){entities[i - 1].GetComponent(Renderer).img.src = "https://seiji-welsh.github.io/Game/Images/Tiles/RoundGrass/RndTlsTstSideUpRightDown.png";}
            else if(!hasAbove && !hasBottom && !hasLeft && !hasRight){entities[i - 1].GetComponent(Renderer).img.src = "https://seiji-welsh.github.io/Game/Images/Tiles/RoundGrass/RndTlsTstSideLeftUpRightDown.png";}
            if(!hasNW && hasLeft && hasAbove && hasRight && hasBottom && hasNE && hasSW && hasSE){entities[i - 1].GetComponent(Renderer).img.src = "https://seiji-welsh.github.io/Game/Images/Tiles/RoundGrass/RndTlsTstCornerNW.png";}
            else if(hasNW && hasLeft && hasAbove && hasRight && hasBottom && !hasNE && hasSW && hasSE){entities[i - 1].GetComponent(Renderer).img.src = "https://seiji-welsh.github.io/Game/Images/Tiles/RoundGrass/RndTlsTstCornerNE.png";}
            else if(hasNW && hasLeft && hasAbove && hasRight && hasBottom && hasNE && !hasSW && hasSE){entities[i - 1].GetComponent(Renderer).img.src = "https://seiji-welsh.github.io/Game/Images/Tiles/RoundGrass/RndTlsTstCornerSW.png";}
            else if(hasNW && hasLeft && hasAbove && hasRight && hasBottom && hasNE && hasSW && !hasSE){entities[i - 1].GetComponent(Renderer).img.src = "https://seiji-welsh.github.io/Game/Images/Tiles/RoundGrass/RndTlsTstCornerSE.png";}
            else if(!hasNW && hasLeft && hasAbove && hasRight && hasBottom && !hasNE && !hasSW && !hasSE){entities[i - 1].GetComponent(Renderer).img.src = "https://seiji-welsh.github.io/Game/Images/Tiles/RoundGrass/RndTlsTstCornerNWNESWSE.png";}
            else if(!hasNW && hasLeft && hasAbove && hasRight && hasBottom && hasNE && !hasSW && hasSE){entities[i - 1].GetComponent(Renderer).img.src = "https://seiji-welsh.github.io/Game/Images/Tiles/RoundGrass/RndTlsTstCornerNWSW.png";}
            else if(!hasNW && hasLeft && hasAbove && hasRight && hasBottom && !hasNE && hasSW && hasSE){entities[i - 1].GetComponent(Renderer).img.src = "https://seiji-welsh.github.io/Game/Images/Tiles/RoundGrass/RndTlsTstCornerNWNE.png";}
            else if(hasNW && hasLeft && hasAbove && hasRight && hasBottom && !hasNE && hasSW && !hasSE){entities[i - 1].GetComponent(Renderer).img.src = "https://seiji-welsh.github.io/Game/Images/Tiles/RoundGrass/RndTlsTstCornerNESE.png";}
            else if(hasNW && hasLeft && hasAbove && hasRight && hasBottom && hasNE && !hasSW && !hasSE){entities[i - 1].GetComponent(Renderer).img.src = "https://seiji-welsh.github.io/Game/Images/Tiles/RoundGrass/RndTlsTstCornerSWSE.png";}
            else if(!hasLeft && !hasAbove && hasRight && hasBottom && !hasSE){entities[i - 1].GetComponent(Renderer).img.src = "https://seiji-welsh.github.io/Game/Images/Tiles/RoundGrass/RndTlsTstSideLeftUpCornerSE.png";}
            else if(hasLeft && !hasAbove && !hasRight && hasBottom && !hasSW){entities[i - 1].GetComponent(Renderer).img.src = "https://seiji-welsh.github.io/Game/Images/Tiles/RoundGrass/RndTlsTstSideUpRightCornerSW.png";}
            else if(!hasNW && hasLeft && hasAbove && !hasRight && !hasBottom){entities[i - 1].GetComponent(Renderer).img.src = "https://seiji-welsh.github.io/Game/Images/Tiles/RoundGrass/RndTlsTstSideRightDownCornerNW.png";}
            else if(!hasLeft && hasAbove && hasRight && !hasBottom && !hasNE){entities[i - 1].GetComponent(Renderer).img.src = "https://seiji-welsh.github.io/Game/Images/Tiles/RoundGrass/RndTlsTstSideDownLeftCornerNE.png";}
            else if(hasLeft && !hasAbove && hasRight && hasBottom && !hasSE && hasSW){entities[i - 1].GetComponent(Renderer).img.src = "https://seiji-welsh.github.io/Game/Images/Tiles/RoundGrass/RndTlsTstSideUpCornerSE.png";}
            else if(hasLeft && !hasAbove && hasRight && hasBottom && !hasSW && hasSE){entities[i - 1].GetComponent(Renderer).img.src = "https://seiji-welsh.github.io/Game/Images/Tiles/RoundGrass/RndTlsTstSideUpCornerSW.png";}
            else if(hasLeft && hasAbove && hasRight && !hasBottom && !hasNE && hasNW){entities[i - 1].GetComponent(Renderer).img.src = "https://seiji-welsh.github.io/Game/Images/Tiles/RoundGrass/RndTlsTstSideDownCornerNE.png";}
            else if(hasLeft && hasAbove && hasRight && !hasBottom && hasNE && !hasNW){entities[i - 1].GetComponent(Renderer).img.src = "https://seiji-welsh.github.io/Game/Images/Tiles/RoundGrass/RndTlsTstSideDownCornerNW.png";}
            else if(hasLeft && hasAbove && hasRight && hasBottom && !hasNE && hasNW && !hasSW && hasSE){entities[i - 1].GetComponent(Renderer).img.src = "https://seiji-welsh.github.io/Game/Images/Tiles/RoundGrass/RndTlsTstCornerNESW.png";}
            else if(hasLeft && hasAbove && hasRight && hasBottom && hasNE && !hasNW && !hasSE && hasSW){entities[i - 1].GetComponent(Renderer).img.src = "https://seiji-welsh.github.io/Game/Images/Tiles/RoundGrass/RndTlsTstCornerNWSE.png";}
            else if(!hasLeft && hasAbove && hasRight && hasBottom && !hasSE && hasNE){entities[i - 1].GetComponent(Renderer).img.src = "https://seiji-welsh.github.io/Game/Images/Tiles/RoundGrass/RndTlsTstSideLeftCornerSE.png";}
            else if(!hasLeft && hasAbove && hasRight && hasBottom && !hasNE && hasSE){entities[i - 1].GetComponent(Renderer).img.src = "https://seiji-welsh.github.io/Game/Images/Tiles/RoundGrass/RndTlsTstSideLeftCornerNE.png";}
            else if(hasLeft && hasAbove && !hasRight && hasBottom && !hasSW && hasNW){entities[i - 1].GetComponent(Renderer).img.src = "https://seiji-welsh.github.io/Game/Images/Tiles/RoundGrass/RndTlsTstSideRightCornerSW.png";}
            else if(hasLeft && hasAbove && !hasRight && hasBottom && !hasNW && hasSW){entities[i - 1].GetComponent(Renderer).img.src = "https://seiji-welsh.github.io/Game/Images/Tiles/RoundGrass/RndTlsTstSideRightCornerNW.png";}
            else if(hasLeft && hasAbove && hasRight && hasBottom && !hasNW && !hasSW && !hasSE && hasNE){entities[i - 1].GetComponent(Renderer).img.src = "https://seiji-welsh.github.io/Game/Images/Tiles/RoundGrass/RndTlsTstCornerNWSWSE.png";}
            else if(hasLeft && hasAbove && hasRight && hasBottom && !hasSW && !hasNE && !hasSE && hasNW){entities[i - 1].GetComponent(Renderer).img.src = "https://seiji-welsh.github.io/Game/Images/Tiles/RoundGrass/RndTlsTstCornerNESWSE.png";}
            else if(hasLeft && hasAbove && hasRight && hasBottom && !hasSW && !hasNE && hasSE && !hasNW){entities[i - 1].GetComponent(Renderer).img.src = "https://seiji-welsh.github.io/Game/Images/Tiles/RoundGrass/RndTlsTstCornerNWNESW.png";}
            else if(hasLeft && hasAbove && hasRight && hasBottom && hasSW && !hasNE && !hasSE && !hasNW){entities[i - 1].GetComponent(Renderer).img.src = "https://seiji-welsh.github.io/Game/Images/Tiles/RoundGrass/RndTlsTstCornerNWNESE.png";}
            else if(hasLeft && hasAbove && !hasRight && hasBottom && !hasNW && !hasSW){entities[i - 1].GetComponent(Renderer).img.src = "https://seiji-welsh.github.io/Game/Images/Tiles/RoundGrass/RndTlsTstSideRightCornerNWSW.png";}
            else if(hasLeft && hasAbove && hasRight && !hasBottom && !hasNW && !hasNE){entities[i - 1].GetComponent(Renderer).img.src = "https://seiji-welsh.github.io/Game/Images/Tiles/RoundGrass/RndTlsTstSideDownCornerNWNE.png";}
            else if(!hasLeft && hasAbove && hasRight && hasBottom && !hasNE && !hasSE){entities[i - 1].GetComponent(Renderer).img.src = "https://seiji-welsh.github.io/Game/Images/Tiles/RoundGrass/RndTlsTstSideLeftCornerNESE.png";}
            else if(hasLeft && !hasAbove && hasRight && hasBottom && !hasSW && !hasSE){entities[i - 1].GetComponent(Renderer).img.src = "https://seiji-welsh.github.io/Game/Images/Tiles/RoundGrass/RndTlsTstSideUpCornerSWSE.png";}
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