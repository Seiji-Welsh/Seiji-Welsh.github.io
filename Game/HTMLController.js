class HTMLController extends Component{
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
let grassTile = document.getElementById("grassTile");
let dirtTile = document.getElementById("dirtTile");
let woodTile = document.getElementById("woodTile");
let roundTile = document.getElementById("roundTile");
let eraser = document.getElementById("eraser");
let yesCollider = document.getElementById("yesCollider");
let sortOrderHTML = document.getElementById("sortingOrder");
let autoTile = document.getElementById("autoTile");
sortOrderHTML.value = 1;
yesCollider.checked = true;
roundTile.checked = true;
let selectedTile = "grassTile";
let physTileSelected = "grassTile";
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
    if(grassTile.checked){selectedTile = "grassTile"; physTileSelected = "grassTile"}
    else if(dirtTile.checked){selectedTile = "dirtTile"; physTileSelected = "dirtTile"}
    else if(woodTile.checked){selectedTile = "woodTile"; physTileSelected = "woodTile"}
    else if(roundTile.checked){selectedTile = "roundTile"; physTileSelected = "roundTile"}
    else if(eraser.checked){selectedTile = "eraser";}
    if(yesCollider.checked) useColliders = true;
    else useColliders = false;
    if(!Input.eDown){
        selectedTile = physTileSelected;
    }

    switch(selectedTile){
        case "grassTile":
            if(!grassTile.checked)grassTile.checked = true;
            break;
        case "dirtTile":
            if(!dirtTile.checked) dirtTile.checked = true;
            break;
        case "woodTile":
            if(!woodTile.checked) woodTile.checked = true;
            break;
        case "roundTile":
            if(!roundTile.checked) roundTile.checked = true;
            break;
    }
}, 100);
function reloadScene(scene){
    SceneManager.Load(scene);
}
function saveScene(){
    updateTiles();
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
        if(sortObj[i - 1].tag2 == "tile"){
            if(sortObj[i - 1].GetComponent(RectangleCollider) != null){
                result = result + '\nspawnEntity(new Entity("' + sortObj[i - 1].name + '","' + sortObj[i - 1].tag + 
                '",[new Renderer(' + entityRenderer.sortingOrder + ',"' + entityRenderer.img.src + '",32,32,false),new RectangleCollider(32,32,0,0)],"tile"),' 
                + sortObj[i - 1].transform.pos.x + ',' + sortObj[i - 1].transform.pos.y + ',1,1,0)'
            }
            else{
                result = result + '\nspawnEntity(new Entity("' + sortObj[i - 1].name + '","' + sortObj[i - 1].tag + 
                '",[new Renderer(' + entityRenderer.sortingOrder + ',"' + entityRenderer.img.src + '",32,32,false)],"tile"),' 
                + sortObj[i - 1].transform.pos.x + ',' + sortObj[i - 1].transform.pos.y + ',1,1,0)'
            }
        }
    }
    console.log(result);
}
function clearTiles(){
    for(let i = 1; i <= entities.length; i++){
        if(entities[i - 1].tag2 == "tile"){
            Destroy(entities[i - 1]);
            i--;
        }
    }
    spawnEntity(new Entity("round","ground",[new Renderer(1,"https://Seiji-Welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstSideLeftUpRightDown.png",32,32,false),new RectangleCollider(32,32,0,0)],"tile"),0,-32,1,1,0)
}
function updateTiles(){
    for(let i = 1; i <= entities.length; i++){
        if(entities[i - 1].tag2 == "tile" && entities[i - 1].name == "round"){
            let hasAbove = false;
            let hasLeft = false;
            let hasRight = false;
            let hasBottom = false;
            let hasNW = false;
            let hasNE = false;
            let hasSW = false;
            let hasSE = false;
            for(let e = 1; e <= entities.length; e++){
                if(entities[e - 1].tag2 == "tile" && entities[e - 1].name == "round"){
                    if(!hasAbove && entities[e - 1].transform.pos.y == entities[i - 1].transform.pos.y + 32 && entities[e - 1].transform.pos.x == entities[i - 1].transform.pos.x){
                        hasAbove = true;
                    }
                    else if(!hasBottom && entities[e - 1].transform.pos.y == entities[i - 1].transform.pos.y - 32 && entities[e - 1].transform.pos.x == entities[i - 1].transform.pos.x){
                        hasBottom = true;
                    }
                    else if(!hasLeft && entities[e - 1].transform.pos.y == entities[i - 1].transform.pos.y && entities[e - 1].transform.pos.x == entities[i - 1].transform.pos.x - 32){
                        hasLeft = true;
                    }
                    else if(!hasRight && entities[e - 1].transform.pos.y == entities[i - 1].transform.pos.y && entities[e - 1].transform.pos.x == entities[i - 1].transform.pos.x + 32){
                        hasRight = true;
                    }
                    if(!hasNW && entities[e - 1].transform.pos.y == entities[i - 1].transform.pos.y + 32 && entities[e - 1].transform.pos.x == entities[i - 1].transform.pos.x - 32){
                        hasNW = true;
                    }
                    else if(!hasNE && entities[e - 1].transform.pos.y == entities[i - 1].transform.pos.y + 32 && entities[e - 1].transform.pos.x == entities[i - 1].transform.pos.x + 32){
                        hasNE = true;
                    }
                    else if(!hasSW && entities[e - 1].transform.pos.y == entities[i - 1].transform.pos.y - 32 && entities[e - 1].transform.pos.x == entities[i - 1].transform.pos.x - 32){
                        hasSW = true;
                    }
                    else if(!hasSE && entities[e - 1].transform.pos.y == entities[i - 1].transform.pos.y - 32 && entities[e - 1].transform.pos.x == entities[i - 1].transform.pos.x + 32){
                        hasSE = true;
                    }
                }
            }
            if(hasRight && hasLeft && hasBottom && hasAbove){
                entities[i - 1].GetComponent(Renderer).img.src = "https://Seiji-Welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstNone.png";
            }
            else if(!hasAbove && hasRight && hasLeft && hasBottom){
                entities[i - 1].GetComponent(Renderer).img.src = "https://Seiji-Welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstSideUp.png";
            }
            else if(!hasBottom && hasRight && hasLeft && hasAbove){
                entities[i - 1].GetComponent(Renderer).img.src = "https://Seiji-Welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstSideDown.png";
            }
            else if(!hasRight && hasAbove && hasBottom && hasLeft){
                entities[i - 1].GetComponent(Renderer).img.src = "https://Seiji-Welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstSideRight.png";
            }
            else if(!hasLeft && hasAbove && hasBottom && hasRight){
                entities[i - 1].GetComponent(Renderer).img.src = "https://Seiji-Welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstSideLeft.png";
            }
            else if(!hasLeft && !hasAbove && hasRight && hasBottom){
                entities[i - 1].GetComponent(Renderer).img.src = "https://Seiji-Welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstSideLeftUp.png";
            }
            else if(!hasAbove && !hasRight && hasBottom && hasLeft){
                entities[i - 1].GetComponent(Renderer).img.src = "https://Seiji-Welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstSideUpRight.png";
            }
            else if(!hasRight && !hasBottom && hasLeft && hasAbove){
                entities[i - 1].GetComponent(Renderer).img.src = "https://Seiji-Welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstSideRightDown.png";
            }
            else if(!hasBottom && !hasLeft && hasAbove && hasRight){
                entities[i - 1].GetComponent(Renderer).img.src = "https://Seiji-Welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstSideDownLeft.png";
            }
            else if(!hasAbove && !hasBottom && hasRight && hasLeft){
                entities[i - 1].GetComponent(Renderer).img.src = "https://Seiji-Welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstSideUpDown.png";
            }
            else if(!hasLeft && !hasRight && hasBottom && hasAbove){
                entities[i - 1].GetComponent(Renderer).img.src = "https://Seiji-Welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstSideLeftRight.png";
            }
            else if(!hasLeft && !hasRight && !hasAbove && hasBottom){
                entities[i - 1].GetComponent(Renderer).img.src = "https://Seiji-Welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstSideLeftUpRight.png";
            }
            else if(!hasLeft && !hasRight && hasAbove && !hasBottom){
                entities[i - 1].GetComponent(Renderer).img.src = "https://Seiji-Welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstSideRightDownLeft.png";
            }
            else if(!hasAbove && !hasBottom && !hasLeft && hasRight){
                entities[i - 1].GetComponent(Renderer).img.src = "https://Seiji-Welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstSideDownLeftUp.png";
            }
            else if(!hasAbove && !hasBottom && hasLeft && !hasRight){
                entities[i - 1].GetComponent(Renderer).img.src = "https://Seiji-Welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstSideUpRightDown.png";
            }
            else if(!hasAbove && !hasBottom && !hasLeft && !hasRight){
                entities[i - 1].GetComponent(Renderer).img.src = "https://Seiji-Welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstSideLeftUpRightDown.png";
            }
            if(!hasNW && hasLeft && hasAbove && hasRight && hasBottom && hasNE && hasSW && hasSE){
                entities[i - 1].GetComponent(Renderer).img.src = "https://Seiji-Welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstCornerNW.png";
            }
            else if(hasNW && hasLeft && hasAbove && hasRight && hasBottom && !hasNE && hasSW && hasSE){
                entities[i - 1].GetComponent(Renderer).img.src = "https://Seiji-Welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstCornerNE.png";
            }
            else if(hasNW && hasLeft && hasAbove && hasRight && hasBottom && hasNE && !hasSW && hasSE){
                entities[i - 1].GetComponent(Renderer).img.src = "https://Seiji-Welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstCornerSW.png";
            }
            else if(hasNW && hasLeft && hasAbove && hasRight && hasBottom && hasNE && hasSW && !hasSE){
                entities[i - 1].GetComponent(Renderer).img.src = "https://Seiji-Welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstCornerSE.png";
            }
            else if(!hasNW && hasLeft && hasAbove && hasRight && hasBottom && !hasNE && !hasSW && !hasSE){
                entities[i - 1].GetComponent(Renderer).img.src = "https://Seiji-Welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstCornerNWNESWSE.png";
            }
            else if(!hasNW && hasLeft && hasAbove && hasRight && hasBottom && hasNE && !hasSW && hasSE){
                entities[i - 1].GetComponent(Renderer).img.src = "https://Seiji-Welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstCornerNWSW.png";
            }
            else if(!hasNW && hasLeft && hasAbove && hasRight && hasBottom && !hasNE && hasSW && hasSE){
                entities[i - 1].GetComponent(Renderer).img.src = "https://Seiji-Welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstCornerNWNE.png";
            }
            else if(hasNW && hasLeft && hasAbove && hasRight && hasBottom && !hasNE && hasSW && !hasSE){
                entities[i - 1].GetComponent(Renderer).img.src = "https://Seiji-Welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstCornerNESE.png";
            }
            else if(hasNW && hasLeft && hasAbove && hasRight && hasBottom && hasNE && !hasSW && !hasSE){
                entities[i - 1].GetComponent(Renderer).img.src = "https://Seiji-Welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstCornerSWSE.png";
            }
            else if(!hasLeft && !hasAbove && hasRight && hasBottom && !hasSE){
                entities[i - 1].GetComponent(Renderer).img.src = "https://Seiji-Welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstSideLeftUpCornerSE.png";
            }
            else if(hasLeft && !hasAbove && !hasRight && hasBottom && !hasSW){
                entities[i - 1].GetComponent(Renderer).img.src = "https://Seiji-Welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstSideUpRightCornerSW.png";
            }
            else if(!hasNW && hasLeft && hasAbove && !hasRight && !hasBottom){
                entities[i - 1].GetComponent(Renderer).img.src = "https://Seiji-Welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstSideRightDownCornerNW.png";
            }
            else if(!hasLeft && hasAbove && hasRight && !hasBottom && !hasNE){
                entities[i - 1].GetComponent(Renderer).img.src = "https://Seiji-Welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstSideDownLeftCornerNE.png";
            }
            else if(hasLeft && !hasAbove && hasRight && hasBottom && !hasSE && hasSW){
                entities[i - 1].GetComponent(Renderer).img.src = "https://Seiji-Welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstSideUpCornerSE.png";
            }
            else if(hasLeft && !hasAbove && hasRight && hasBottom && !hasSW && hasSE){
                entities[i - 1].GetComponent(Renderer).img.src = "https://Seiji-Welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstSideUpCornerSW.png";
            }
            else if(hasLeft && hasAbove && hasRight && !hasBottom && !hasNE && hasNW){
                entities[i - 1].GetComponent(Renderer).img.src = "https://Seiji-Welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstSideDownCornerNE.png";
            }
            else if(hasLeft && hasAbove && hasRight && !hasBottom && hasNE && !hasNW){
                entities[i - 1].GetComponent(Renderer).img.src = "https://Seiji-Welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstSideDownCornerNW.png";
            }
            else if(hasLeft && hasAbove && hasRight && hasBottom && !hasNE && hasNW && !hasSW && hasSE){
                entities[i - 1].GetComponent(Renderer).img.src = "https://Seiji-Welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstCornerNESW.png";
            }
            else if(hasLeft && hasAbove && hasRight && hasBottom && hasNE && !hasNW && !hasSE && hasSW){
                entities[i - 1].GetComponent(Renderer).img.src = "https://Seiji-Welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstCornerNWSE.png";
            }
            else if(!hasLeft && hasAbove && hasRight && hasBottom && !hasSE && hasNE){
                entities[i - 1].GetComponent(Renderer).img.src = "https://Seiji-Welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstSideLeftCornerSE.png";
            }
            else if(!hasLeft && hasAbove && hasRight && hasBottom && !hasNE && hasSE){
                entities[i - 1].GetComponent(Renderer).img.src = "https://Seiji-Welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstSideLeftCornerNE.png";
            }
            else if(hasLeft && hasAbove && !hasRight && hasBottom && !hasSW && hasNW){
                entities[i - 1].GetComponent(Renderer).img.src = "https://Seiji-Welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstSideRightCornerSW.png";
            }
            else if(hasLeft && hasAbove && !hasRight && hasBottom && !hasNW && hasSW){
                entities[i - 1].GetComponent(Renderer).img.src = "https://Seiji-Welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstSideRightCornerNW.png";
            }
            else if(hasLeft && hasAbove && hasRight && hasBottom && !hasNW && !hasSW && !hasSE && hasNE){
                entities[i - 1].GetComponent(Renderer).img.src = "https://Seiji-Welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstCornerNWSWSE.png";
            }
            else if(hasLeft && hasAbove && hasRight && hasBottom && !hasSW && !hasNE && !hasSE && hasNW){
                entities[i - 1].GetComponent(Renderer).img.src = "https://Seiji-Welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstCornerNESWSE.png";
            }
            else if(hasLeft && hasAbove && hasRight && hasBottom && !hasSW && !hasNE && hasSE && !hasNW){
                entities[i - 1].GetComponent(Renderer).img.src = "https://Seiji-Welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstCornerNWNESW.png";
            }
            else if(hasLeft && hasAbove && hasRight && hasBottom && hasSW && !hasNE && !hasSE && !hasNW){
                entities[i - 1].GetComponent(Renderer).img.src = "https://Seiji-Welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstCornerNWNESE.png";
            }
            else if(hasLeft && hasAbove && !hasRight && hasBottom && !hasNW && !hasSW){
                entities[i - 1].GetComponent(Renderer).img.src = "https://Seiji-Welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstSideRightCornerNWSW.png";
            }
            else if(hasLeft && hasAbove && hasRight && !hasBottom && !hasNW && !hasNE){
                entities[i - 1].GetComponent(Renderer).img.src = "https://Seiji-Welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstSideDownCornerNWNE.png";
            }
            else if(!hasLeft && hasAbove && hasRight && hasBottom && !hasNE && !hasSE){
                entities[i - 1].GetComponent(Renderer).img.src = "https://Seiji-Welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstSideLeftCornerNESE.png";
            }
            else if(hasLeft && !hasAbove && hasRight && hasBottom && !hasSW && !hasSE){
                entities[i - 1].GetComponent(Renderer).img.src = "https://Seiji-Welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstSideUpCornerSWSE.png";
            }
        }
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