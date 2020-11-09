class RectangleCollider extends Component{
    constructor(sizeX, sizeY, offsetX, offsetY){
        super();
        this.size = {
            "x" : sizeX,
            "y" : sizeY
        };
        this.offset = {
            "x" : offsetX,
            "y" : offsetY
        };
        this.visualizeCollider = false;
        this.myColor = "black";
        this.currentCollision = null;
        this.collisionType;
        this.triggerType;
        this.colliding = false;
        this.myRenderer;
        this.physics;
    }
    Start(){
        this.myRenderer = this.myEntity.GetComponent(Renderer);
        this.physics = this.myEntity.GetComponent(Physics);

    }
    Update(){
        switch(this.myEntity.name){
            case "Player":
                this.CollisionCheck(["enm1", "sp"], true, ["enm1", "sp"], true);
                break;
            case "enm1":
                if(this.myRenderer.onScreen){
                    this.CollisionCheck(["Player", "enm1", "sp"], true, [undefined], false);
                    break;
                }
        }
    }
    PostRenderUpdate(){
        if(this.visualizeCollider){
            let preScalePos = CoordinateToDrawPos(this.myEntity.transform.pos.x + this.offset.x, this.myEntity.inversedPosY - this.offset.y);
            let drawPos = {
                "x" : (preScalePos.x - (this.size.x / 2)) / mainCamera.transform.scale.x,
                "y" : (preScalePos.y - (this.size.y / 2)) / mainCamera.transform.scale.x
            }
            ctx.lineWidth = 2;
            ctx.strokeStyle = this.myColor;
            ctx.strokeRect(drawPos.x, drawPos.y, this.size.x / mainCamera.transform.scale.x, this.size.y / mainCamera.transform.scale.x);
        }
    }
    CollisionCheck(collDeny, physicsCollision, trigAllow, triggerCollision){
        this.colliding = false;
        for(let i = 1; i <= entities.length; i++){
            let ent = entities[i - 1];
            let entCollider = ent.GetComponent(RectangleCollider);
            if(entCollider != null && ent.order != this.myEntity.order){
                if(this.myEntity.transform.pos.x + (this.size.x / 2) + this.offset.x > ent.transform.pos.x - (entCollider.size.x / 2) + entCollider.offset.x &&
                this.myEntity.transform.pos.x - (this.size.x / 2) + this.offset.x < ent.transform.pos.x + (entCollider.size.x / 2) + entCollider.offset.x &&
                this.myEntity.transform.pos.y + (this.size.y / 2) + this.offset.y > ent.transform.pos.y - (entCollider.size.y / 2) + entCollider.offset.y &&
                this.myEntity.transform.pos.y - (this.size.y / 2) + this.offset.y < ent.transform.pos.y + (entCollider.size.y / 2) + entCollider.offset.y){
                    let passColl = true;
                    let passTrig = false;
                    let hasTileOnSide = {
                        "left" : false,
                        "up" : false,
                        "right" : false,
                        "down" : false
                    }
                    if(physicsCollision){
                        for(let f = 0; f < collDeny.length; f++){
                            if(ent.name == collDeny[f]){
                                passColl = false;
                            }
                        }
                    }
                    if(triggerCollision){
                        for(let f = 0; f < trigAllow.length; f++){
                            if(ent.name == trigAllow[f]){
                                passTrig = true;
                            }
                        }
                    }
                    this.collisionInfo(ent, hasTileOnSide, passColl, passTrig);
                    for(let e = 1; e <= this.myEntity.components.length; e++){
                        if(physicsCollision && typeof this.myEntity.components[e - 1].CollisionUpdate == "function" && passColl){
                            this.myEntity.components[e - 1].CollisionUpdate(this.collisionType, entCollider);
                        }
                        if(triggerCollision && typeof this.myEntity.components[e - 1].TriggerUpdate == "function" && passTrig){
                            this.myEntity.components[e - 1].TriggerUpdate(this.triggerType, entCollider);
                        }
                    }
                }
            }
        }
    }
    collisionInfo(ent, hasTileOnSide, isPhys, isTrig){
        this.colliding = true;
        if(ent.tag3 != "denySmoothing"){
            for(let a = 1; a <= entities.length; a++){
                let ent2 = entities[a - 1];
                let entCollider2 = ent2.GetComponent(RectangleCollider);
                if(ent2.tag3 != "denySmoothing"){
                    if(entCollider2 != null && ent2.order != ent.order){
                        if(ent2.transform.pos.x == ent.transform.pos.x + 32 && ent2.transform.pos.y == ent.transform.pos.y){
                            hasTileOnSide.right = true;
                        }
                        else if(ent2.transform.pos.x == ent.transform.pos.x - 32 && ent2.transform.pos.y == ent.transform.pos.y){
                            hasTileOnSide.left = true;
                        }
                        else if(ent2.transform.pos.x == ent.transform.pos.x && ent2.transform.pos.y == ent.transform.pos.y + 32){
                            hasTileOnSide.up = true;
                        }
                        else if(ent2.transform.pos.x == ent.transform.pos.x && ent2.transform.pos.y == ent.transform.pos.y - 32){
                            hasTileOnSide.down = true;
                        }
                    }
                }
            }
        }
        let type;
        if(!(Math.abs(this.myEntity.transform.pos.x - ent.transform.pos.x) > Math.abs(this.myEntity.transform.pos.y - ent.transform.pos.y))){
            if(this.myEntity.transform.pos.y - ent.transform.pos.y > 0){
                if(!hasTileOnSide.up){
                    type = "up";
                }
                else{
                    if(this.myEntity.transform.pos.x - ent.transform.pos.x > 0){
                        if(!hasTileOnSide.right){
                            type = "right";
                        }
                    }
                    else{
                        if(!hasTileOnSide.left){
                            type = "left";
                        }
                    }
                }
            }
            else{
                if(!hasTileOnSide.down){
                    type = "down";
                }
                else{
                    if(this.myEntity.transform.pos.x - ent.transform.pos.x > 0){
                        if(!hasTileOnSide.right){
                            type = "right";
                        }
                    }
                    else{
                        if(!hasTileOnSide.left){
                            type = "left";
                        }
                    }
                }
            }
        }
        else{
            if(this.myEntity.transform.pos.x - ent.transform.pos.x > 0){
                if(!hasTileOnSide.right){
                    type = "right";
                }
                else{
                    if(this.myEntity.transform.pos.y - ent.transform.pos.y > 0){
                        if(!hasTileOnSide.up){
                            type = "up";
                        }
                    }
                    else{
                        if(!hasTileOnSide.down){
                            type = "down";
                        }
                    }
                }
            }
            else{
                if(!hasTileOnSide.left){
                    type = "left";
                }
                else{
                    if(this.myEntity.transform.pos.y - ent.transform.pos.y > 0){
                        if(!hasTileOnSide.up){
                            type = "up";
                        }
                    }
                    else{
                        if(!hasTileOnSide.down){
                            type = "down";
                        }
                    }
                }
            }
        }
        if(type != undefined){
            if(isTrig){
                this.triggerType = type;
            }
            if(isPhys){
                this.collisionType = type;
            }
        }
    }
}