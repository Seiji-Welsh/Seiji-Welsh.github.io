class MouseObject extends Component{
    constructor(){
        super();
        this.canOne = true;
    }
    /*//*/
    Start(){
        let thise = this;
        Time.WaitAndRepeat(function(){
            let mouseToPos = ScreenToWorldPoint(Input.mousePosition.x, Input.mousePosition.y);
            thise.myEntity.transform.pos.x = Math.round(mouseToPos.x / cellSize.value) * cellSize.value;//*/mouseToPos.x;
            thise.myEntity.transform.pos.y = Math.round(mouseToPos.y / cellSize.value) * cellSize.value;//*/mouseToPos.y;
            if(Input.mouseDown || Input.bDown){
                let objectSpawnee; 
                let left;
                let right;
                let up;
                let down;
                for(let i = 1; i <= entities.length; i++){
                    if(entities[i -1].tag2 == "tile" && sortOrderHTML.value == entities[i - 1].GetComponent(Renderer).sortingOrder){
                        if(entities[i - 1].transform.pos.x == thise.myEntity.transform.pos.x && entities[i - 1].transform.pos.y == thise.myEntity.transform.pos.y){
                            Destroy(entities[i - 1]);
                            if(selectedTile == "eraser")
                            SceneManager.DestructionSmokeEffect(thise.myEntity.transform.pos.x, thise.myEntity.transform.pos.y);
                        }
                        else if(entities[i - 1].transform.pos.x == thise.myEntity.transform.pos.x + 32 && entities[i - 1].transform.pos.y == thise.myEntity.transform.pos.y){
                            right = entities[i - 1];
                        }
                        else if(entities[i - 1].transform.pos.x == thise.myEntity.transform.pos.x - 32 && entities[i - 1].transform.pos.y == thise.myEntity.transform.pos.y){
                            left = entities[i - 1];
                        }
                        else if(entities[i - 1].transform.pos.x == thise.myEntity.transform.pos.x && entities[i - 1].transform.pos.y == thise.myEntity.transform.pos.y + 32){
                            up = entities[i - 1];
                        }
                        else if(entities[i - 1].transform.pos.x == thise.myEntity.transform.pos.x && entities[i - 1].transform.pos.y == thise.myEntity.transform.pos.y - 32){
                            down = entities[i - 1];
                        }
                    }
                }
                if(autoTile.checked){
                    if(right != undefined)
                    updateTiles(right, undefined, right.order - 1);
                    if(left != undefined)
                    updateTiles(left, undefined, left.order - 1);
                    if(up != undefined)
                    updateTiles(up, undefined, up.order - 1);
                    if(down != undefined)
                    updateTiles(down, undefined, down.order - 1);
                }
                switch(selectedTile){
                    case "groundTile":
                        if(yesAutoSort.checked)
                        sortOrderHTML.value = 1;
                        if(useColliders){
                            objectSpawnee = spawnEntity(new Entity("gd", "ground", [new RectangleCollider(32, 32, 0, 0), new Renderer(sortOrderHTML.value, "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstSideLeftUpRightDown.png", 32, 32, false)], "tile"), thise.myEntity.transform.pos.x, thise.myEntity.transform.pos.y, 1, 1, 0);
                        }
                        else objectSpawnee = spawnEntity(new Entity("gd", "ground", [new Renderer(sortOrderHTML.value, "https://seiji-welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstSideLeftUpRightDown.png", 32, 32, false)], "tile"), thise.myEntity.transform.pos.x, thise.myEntity.transform.pos.y, 1, 1, 0);
                        if(autoTile.checked)
                        updateTiles(objectSpawnee, undefined, objectSpawnee.order - 1);
                        break;
                    case "wallTile":
                        if(yesAutoSort.checked)
                        sortOrderHTML.value = -10;
                        if(useColliders){
                            objectSpawnee = spawnEntity(new Entity("wl", "ground", [new RectangleCollider(32, 32, 0, 0), new Renderer(sortOrderHTML.value, "https://seiji-welsh.github.io/Game/Images/Tiles/Wall/Wall.png", 32, 32, false)], "tile"), thise.myEntity.transform.pos.x, thise.myEntity.transform.pos.y, 1, 1, 0);
                        }
                        else objectSpawnee = spawnEntity(new Entity("wl", "ground", [new Renderer(sortOrderHTML.value, "https://seiji-welsh.github.io/Game/Images/Tiles/Wall/Wall.png", 32, 32, false)], "tile"), thise.myEntity.transform.pos.x, thise.myEntity.transform.pos.y, 1, 1, 0);
                        break;
                    case "metallicWallTile":
                        if(yesAutoSort.checked)
                        sortOrderHTML.value = -10;
                        objectSpawnee = SceneManager.MetallicWallTile(thise.myEntity.transform.pos.x, thise.myEntity.transform.pos.y, sortOrderHTML.value, useColliders);
                        break;
                    case "stairTile":
                        if(yesAutoSort.checked)
                        sortOrderHTML.value = 1;
                        if(useColliders){
                            objectSpawnee = spawnEntity(new Entity("st", "ground", [new RectangleCollider(32, 32, 0, 0), new Renderer(sortOrderHTML.value, "https://seiji-welsh.github.io/Game/Images/Tiles/Stair.png", 32, 32, false)], "tile"), thise.myEntity.transform.pos.x, thise.myEntity.transform.pos.y, 1, 1, 0);
                        }
                        else objectSpawnee = spawnEntity(new Entity("st", "ground", [new Renderer(sortOrderHTML.value, "https://seiji-welsh.github.io/Game/Images/Tiles/Stair.png", 32, 32, false)], "tile"), thise.myEntity.transform.pos.x, thise.myEntity.transform.pos.y, 1, 1, 0);
                        break;
                    case "doorTile":
                        if(yesAutoSort.checked)
                        sortOrderHTML.value = -5;
                        if(useColliders){
                            objectSpawnee = spawnEntity(new Entity("dr", "ground", [new RectangleCollider(32, 32, 0, 0), new Renderer(sortOrderHTML.value, "https://seiji-welsh.github.io/Game/Images/Tiles/Door/DoorBottom.png", 32, 32, false)], "tile"), thise.myEntity.transform.pos.x, thise.myEntity.transform.pos.y, 1, 1, 0);
                        }
                        else objectSpawnee = spawnEntity(new Entity("dr", "ground", [new Renderer(sortOrderHTML.value, "https://seiji-welsh.github.io/Game/Images/Tiles/Door/DoorBottom.png", 32, 32, false)], "tile"), thise.myEntity.transform.pos.x, thise.myEntity.transform.pos.y, 1, 1, 0);
                        break;
                    case "boxTile":
                        if(yesAutoSort.checked)
                        sortOrderHTML.value = 1;
                        if(useColliders){
                            objectSpawnee = spawnEntity(new Entity("bx", "ground", [new RectangleCollider(32, 32, 0, 0), new Renderer(sortOrderHTML.value, "https://seiji-welsh.github.io/Game/Images/Tiles/Box.png", 32, 32, false)], "tile", undefined, "destructable"), thise.myEntity.transform.pos.x, thise.myEntity.transform.pos.y, 1, 1, 0);
                        }
                        else objectSpawnee = spawnEntity(new Entity("bx", "ground", [new Renderer(sortOrderHTML.value, "https://seiji-welsh.github.io/Game/Images/Tiles/Box.png", 32, 32, false)], "tile"), thise.myEntity.transform.pos.x, thise.myEntity.transform.pos.y, 1, 1, 0);
                        break;
                    case "enemy1Tile":
                        if(yesAutoSort.checked)
                        sortOrderHTML.value = 0;
                        objectSpawnee = SceneManager.enemy1(true, thise.myEntity.transform.pos.x, thise.myEntity.transform.pos.y);
                        break;
                    case "enemy1BlockerTile":
                        objectSpawnee = SceneManager.enemy1Block(thise.myEntity.transform.pos.x, thise.myEntity.transform.pos.y, sortOrderHTML.value);
                        break;
                    case "lightTile":
                        if(yesAutoSort.checked)
                        sortOrderHTML.value = 1;
                        objectSpawnee = SceneManager.LightTile(thise.myEntity.transform.pos.x, thise.myEntity.transform.pos.y, sortOrderHTML.value, useColliders);
                        break;
                    case "chainTile":
                        if(yesAutoSort.checked)
                        sortOrderHTML.value = -5;
                        objectSpawnee = SceneManager.ChainTile(thise.myEntity.transform.pos.x, thise.myEntity.transform.pos.y, sortOrderHTML.value, useColliders);
                        break;
                    case "spikeTile":
                        if(yesAutoSort.checked)
                        sortOrderHTML.value = 1;
                        objectSpawnee = SceneManager.SpikeTile(thise.myEntity.transform.pos.x, thise.myEntity.transform.pos.y, sortOrderHTML.value, useColliders);
                        break;
                    case "cageTile":
                        if(yesAutoSort.checked)
                        sortOrderHTML.value = 1;
                        objectSpawnee = SceneManager.CageTile(thise.myEntity.transform.pos.x, thise.myEntity.transform.pos.y, sortOrderHTML.value, useColliders);
                        break;
                    case "cageBGTile":
                        if(yesAutoSort.checked)
                        sortOrderHTML.value = -9;
                        objectSpawnee = SceneManager.CageBGTile(thise.myEntity.transform.pos.x, thise.myEntity.transform.pos.y, sortOrderHTML.value, useColliders);
                        break;
                    case "nonRoundGround":
                        if(yesAutoSort.checked)
                        sortOrderHTML.value = 1;
                        objectSpawnee = SceneManager.NonRoundGround(thise.myEntity.transform.pos.x, thise.myEntity.transform.pos.y, sortOrderHTML.value, useColliders);
                        break;
                    case "nonRoundGrass":
                        if(yesAutoSort.checked)
                        sortOrderHTML.value = 1;
                        objectSpawnee = SceneManager.NonRoundGrass(thise.myEntity.transform.pos.x, thise.myEntity.transform.pos.y, sortOrderHTML.value, useColliders);
                        break;
                    case "meteorTile":
                        if(yesAutoSort.checked)
                        sortOrderHTML.value = 1;
                        objectSpawnee = SceneManager.MeteorTile(thise.myEntity.transform.pos.x, thise.myEntity.transform.pos.y, sortOrderHTML.value, useColliders);
                        break;
                    case "glowingMeteorTile":
                        if(yesAutoSort.checked)
                        sortOrderHTML.value = 1;
                        objectSpawnee = SceneManager.GlowingMeteorTile(thise.myEntity.transform.pos.x, thise.myEntity.transform.pos.y, sortOrderHTML.value, useColliders);
                        break;
                    case "grassTile":
                        if(yesAutoSort.checked)
                        sortOrderHTML.value = 1;
                        objectSpawnee = SceneManager.GrassTile(thise.myEntity.transform.pos.x, thise.myEntity.transform.pos.y, sortOrderHTML.value, useColliders);
                        if(autoTile.checked)
                        updateTiles(objectSpawnee, undefined, objectSpawnee.order - 1);
                        break;
                    case "windowTile":
                        if(yesAutoSort.checked)
                        sortOrderHTML.value = -10;
                        objectSpawnee = SceneManager.WindowTile(thise.myEntity.transform.pos.x, thise.myEntity.transform.pos.y, sortOrderHTML.value, useColliders);
                        if(autoTile.checked)
                        break;
                    case "woodBridgeLowerTile":
                        if(yesAutoSort.checked)
                        sortOrderHTML.value = 1;
                        objectSpawnee = SceneManager.WoodBridgeLowerTile(thise.myEntity.transform.pos.x, thise.myEntity.transform.pos.y, sortOrderHTML.value, useColliders);
                        if(autoTile.checked)
                        break;
                    case "woodBridgeUpperTile":
                        if(yesAutoSort.checked)
                        sortOrderHTML.value = 1;
                        objectSpawnee = SceneManager.WoodBridgeUpperTile(thise.myEntity.transform.pos.x, thise.myEntity.transform.pos.y, sortOrderHTML.value, useColliders);
                        if(autoTile.checked)
                        break;
                    case "magmaMeteorTile":
                        if(yesAutoSort.checked)
                        sortOrderHTML.value = 1;
                        objectSpawnee = SceneManager.MagmaMeteorTile(thise.myEntity.transform.pos.x, thise.myEntity.transform.pos.y, sortOrderHTML.value, useColliders);
                        if(autoTile.checked)
                        break;
                    case "beamTile":
                        if(yesAutoSort.checked)
                        sortOrderHTML.value = -4;
                        objectSpawnee = SceneManager.BeamTile(thise.myEntity.transform.pos.x, thise.myEntity.transform.pos.y, sortOrderHTML.value, useColliders);
                        if(autoTile.checked)
                        break;
                    case "facilityTableTile":
                        if(yesAutoSort.checked)
                        sortOrderHTML.value = 1;
                        objectSpawnee = SceneManager.FacilityTableTile(thise.myEntity.transform.pos.x, thise.myEntity.transform.pos.y, sortOrderHTML.value, useColliders);
                        if(autoTile.checked)
                        break;
                    case "computerTile":
                        if(yesAutoSort.checked)
                        sortOrderHTML.value = 1;
                        objectSpawnee = SceneManager.ComputerTile(thise.myEntity.transform.pos.x, thise.myEntity.transform.pos.y, sortOrderHTML.value, useColliders);
                        if(autoTile.checked)
                        break;
                    case "moistDirtTile":
                        if(yesAutoSort.checked)
                        sortOrderHTML.value = -10;
                        objectSpawnee = SceneManager.MoistDirtTile(thise.myEntity.transform.pos.x, thise.myEntity.transform.pos.y, sortOrderHTML.value, useColliders);
                        if(autoTile.checked)
                        break;
                    case "vineTile":
                        if(yesAutoSort.checked)
                        sortOrderHTML.value = 2;
                        objectSpawnee = SceneManager.VineTile(thise.myEntity.transform.pos.x, thise.myEntity.transform.pos.y, sortOrderHTML.value, useColliders);
                        if(autoTile.checked)
                        break;
                }
            }
        }, 0, Infinity);
    }
    Update(){
        if(Input.oneDown){
            if(this.canOne){
                this.canOne = false;
                thePlayer.transform.pos.x = this.myEntity.transform.pos.x;
                thePlayer.transform.pos.y = this.myEntity.transform.pos.y;
            }
        }
        else this.canOne = true;
    }
}