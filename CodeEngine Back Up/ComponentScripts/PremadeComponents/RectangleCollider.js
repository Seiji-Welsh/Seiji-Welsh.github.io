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
        this.myColor = "lime";
        this.currentCollision = null;
        this.collisionType;
        this.colliding = false;
        this.myRenderer;
    }
    Start(){
        this.myRenderer = this.myEntity.GetComponent(Renderer);
    }
    LateUpdate(){
        if(this.myRenderer.onScreen){
            this.colliding = false;
            for(let i = 1; i <= entities.length; i++){
                let ent = entities[i - 1];
                let entCollider = ent.GetComponent(RectangleCollider);
                if(entCollider != null && ent.order != this.myEntity.order){
                    if(this.myEntity.transform.pos.x + (this.size.x / 2) > (ent.transform.pos.x - (entCollider.size.x / 2)) &&
                    this.myEntity.transform.pos.x - (this.size.x / 2) < (ent.transform.pos.x + (entCollider.size.x / 2)) &&
                    this.myEntity.transform.pos.y + (this.size.y / 2) > (ent.transform.pos.y - (entCollider.size.y / 2)) &&
                    this.myEntity.transform.pos.y - (this.size.y / 2) < (ent.transform.pos.y + (entCollider.size.y / 2))){
                        this.myColor = "red";
                        entCollider.myColor = "red";
                        this.colliding = true;
                        for(let e = 1; e <= this.myEntity.components.length; e++){
                            if(typeof this.myEntity.components[e - 1].CollisionUpdate == "function"){
                                if(!(Math.abs(this.myEntity.transform.pos.x - ent.transform.pos.x) > Math.abs(this.myEntity.transform.pos.y - ent.transform.pos.y))){
                                    if(this.myEntity.transform.pos.y - ent.transform.pos.y > 0){
                                        this.collisionType = "up";
                                    }
                                    else this.collisionType = "down";
                                }
                                else{
                                    if(this.myEntity.transform.pos.x - ent.transform.pos.x > 0){
                                        this.collisionType = "right";
                                    }
                                    else this.collisionType = "left";
                                }
                                this.myEntity.components[e - 1].CollisionUpdate(this.collisionType, entCollider);
                            }
                        }
                    }
                }
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
    /*CheckCollision(handler){
        this.myColor = "lime";
        this.colliding = false;
        for(let i = 1; i <= entities.length; i++){
            let ent = entities[i - 1];
            let entCollider = ent.GetComponent(RectangleCollider);
            if(entCollider != null && ent.order != this.myEntity.order){
                if(this.myEntity.transform.pos.x + (this.size.x / 2) > (ent.transform.pos.x - (entCollider.size.x / 2)) &&
                this.myEntity.transform.pos.x - (this.size.x / 2) < (ent.transform.pos.x + (entCollider.size.x / 2)) &&
                this.myEntity.transform.pos.y + (this.size.y / 2) > (ent.transform.pos.y - (entCollider.size.y / 2)) &&
                this.myEntity.transform.pos.y - (this.size.y / 2) < (ent.transform.pos.y + (entCollider.size.y / 2))){
                    this.myColor = "red";
                    entCollider.myColor = "red";
                    for(let e = 1; e <= this.myEntity.components.length; e++){
                        if(typeof this.myEntity.components[e - 1].CollisionUpdate == "function"){
                            if(!(Math.abs(this.myEntity.transform.pos.x - ent.transform.pos.x) > Math.abs(this.myEntity.transform.pos.y - ent.transform.pos.y))){
                                if(this.myEntity.transform.pos.y - ent.transform.pos.y > 0){
                                    this.collisionType = "up";
                                }
                                else this.collisionType = "down";
                            }
                            else{
                                if(this.myEntity.transform.pos.x - ent.transform.pos.x > 0){
                                    this.collisionType = "right";
                                }
                                else this.collisionType = "left";
                            }
                            if(handler != null)
                            handler(this.collisionType, entCollider);
                        }
                    }
                }
            }
        }
    }*/
}