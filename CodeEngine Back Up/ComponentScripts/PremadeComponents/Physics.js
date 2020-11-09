class Physics extends Component{
    constructor(gravityScale, dragX, dragY, frictionX, frictionY){
        super();
        this.xv = 0;
        this.yv = 0;
        this.dragX = dragX;
        this.dragY = dragY;
        this.frictionX = frictionX;
        this.frictionY = frictionY;
        this.myCollider;
        this.gravityScale = gravityScale;
        this.globalGravity = 1;
    }
    Start(){
        this.myCollider = this.myEntity.GetComponent(RectangleCollider);
    }
    Update(){
        this.xv /= this.dragX;
        this.yv /= this.dragY;
        this.yv -= this.gravityScale * this.globalGravity;
        this.myEntity.transform.pos.x += this.xv;
        this.myEntity.transform.pos.y += this.yv;
    }
    CollisionUpdate(collisionType, collider){
        if(collisionType == "up" || collisionType == "down"){
            this.myEntity.transform.pos.y -= this.yv;
            if(collisionType == "up"){
                this.myEntity.transform.pos.y += (collider.myEntity.transform.pos.y + (collider.size.y / 2) + (this.myCollider.size.y / 2)) - this.myEntity.transform.pos.y;
            }
            else{
                this.myEntity.transform.pos.y += (collider.myEntity.transform.pos.y - (collider.size.y / 2) - (this.myCollider.size.y / 2)) - this.myEntity.transform.pos.y;
            }
            this.yv = 0;
            this.xv /= this.frictionX;
        }
        else{
            this.myEntity.transform.pos.x -= this.xv;
            if(collisionType == "right"){
                this.myEntity.transform.pos.x += (collider.myEntity.transform.pos.x + (collider.size.x / 2) + (this.myCollider.size.x / 2)) - this.myEntity.transform.pos.x;
            }
            else{
                this.myEntity.transform.pos.x += (collider.myEntity.transform.pos.x - (collider.size.x / 2) - (this.myCollider.size.x / 2)) - this.myEntity.transform.pos.x;
            }
            this.xv = 0;
            this.yv /= this.frictionY;
        }
    }
}