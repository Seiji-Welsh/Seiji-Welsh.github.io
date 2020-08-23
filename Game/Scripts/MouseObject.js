class MouseObject extends Component{
    constructor(){
        super();
    }
    Start(){
        let thise = this;
        Time.WaitAndRepeat(function(){
            if(Input.mouseDown || Input.bDown){
                let mouseToPos = ScreenToWorldPoint(Input.mousePosition.x, Input.mousePosition.y);
                thise.myEntity.transform.pos.x = Math.round(mouseToPos.x / 32) * 32;
                thise.myEntity.transform.pos.y = Math.round(mouseToPos.y / 32) * 32;
                for(let i = 1; i <= entities.length; i++){
                    if(entities[i - 1].transform.pos.x == thise.myEntity.transform.pos.x && entities[i - 1].transform.pos.y == thise.myEntity.transform.pos.y && entities[i -1].tag2 == "tile" && sortOrderHTML.value == entities[i - 1].GetComponent(Renderer).sortingOrder){
                        Destroy(entities[i - 1]);
                        break;
                    }
                }
                switch(selectedTile){
                    case "grassTile":
                        if(useColliders){
                            spawnEntity(new Entity("grass", "ground", [new Renderer(sortOrderHTML.value, "https://Seiji-Welsh.github.io/Game/Images/Tiles/Grass/Grass.png", 32, 32, false), new RectangleCollider(32, 32, 0, 0)], "tile"), thise.myEntity.transform.pos.x, thise.myEntity.transform.pos.y, 1, 1, 0);
                        }
                        else spawnEntity(new Entity("grass", "ground", [new Renderer(sortOrderHTML.value, "https://Seiji-Welsh.github.io/Game/Images/Tiles/Grass/Grass.png", 32, 32, false)], "tile"), thise.myEntity.transform.pos.x, thise.myEntity.transform.pos.y, 1, 1, 0);
                        break;
                    case "woodTile":
                        if(useColliders){
                            spawnEntity(new Entity("wood", "ground", [new Renderer(sortOrderHTML.value, "https://Seiji-Welsh.github.io/Game/Images/Tiles/Wood/Wood.png", 32, 32, false), new RectangleCollider(32, 32, 0, 0)], "tile"), thise.myEntity.transform.pos.x, thise.myEntity.transform.pos.y, 1, 1, 0);
                        }
                        else spawnEntity(new Entity("wood", "ground", [new Renderer(sortOrderHTML.value, "https://Seiji-Welsh.github.io/Game/Images/Tiles/Wood/Wood.png", 32, 32, false)], "tile"), thise.myEntity.transform.pos.x, thise.myEntity.transform.pos.y, 1, 1, 0);
                        break;
                    case "roundTile":
                        if(useColliders){
                            spawnEntity(new Entity("round", "ground", [new Renderer(sortOrderHTML.value, "https://Seiji-Welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstNone.png", 32, 32, false), new RectangleCollider(32, 32, 0, 0)], "tile"), thise.myEntity.transform.pos.x, thise.myEntity.transform.pos.y, 1, 1, 0);
                        }
                        else spawnEntity(new Entity("round", "ground", [new Renderer(sortOrderHTML.value, "https://Seiji-Welsh.github.io/Game/Images/Tiles/RoundTilesTest/RndTlsTstNone.png", 32, 32, false)], "tile"), thise.myEntity.transform.pos.x, thise.myEntity.transform.pos.y, 1, 1, 0);
                        if(autoTile.checked)
                        updateTiles();
                        break;
                    case "eraser":
                        if(autoTile.checked)
                        updateTiles();
                        break;
                }
            }
        }, 0, Infinity);
    }
}