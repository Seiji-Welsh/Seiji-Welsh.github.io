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
        this.myEnemy;
    }
    Start(){
        this.myCollider = this.myEntity.GetComponent(RectangleCollider);
        if(this.myEntity.tag == "Enemy"){
            this.myEnemy = this.myEntity.GetComponent(Enemy);
        }
    }
    Update(){
        if(this.myEntity.tag != "Enemy" || !this.myEnemy.paused){
            this.xv /= this.dragX;
            this.yv /= this.dragY;
            this.yv -= this.gravityScale * this.globalGravity;
            this.myEntity.transform.pos.x += this.xv;
            this.myEntity.transform.pos.y += this.yv;
        }
    }
    CollisionUpdate(collisionType, collider){
        if(collisionType == "up" || collisionType == "down"){
            this.myEntity.transform.pos.y -= this.yv;
            if(collisionType == "up"){
                this.myEntity.transform.pos.y += (collider.myEntity.transform.pos.y + collider.offset.y + (collider.size.y / 2) + (this.myCollider.size.y / 2)) - this.myEntity.transform.pos.y - this.myCollider.offset.y;
            }
            else{
                this.myEntity.transform.pos.y += (collider.myEntity.transform.pos.y + collider.offset.y - (collider.size.y / 2) - (this.myCollider.size.y / 2)) - this.myEntity.transform.pos.y - this.myCollider.offset.y;
            }
            this.yv = 0;
            this.xv /= this.frictionX;
        }
        else{
            this.myEntity.transform.pos.x -= this.xv;
            if(collisionType == "right"){
                this.myEntity.transform.pos.x += (collider.myEntity.transform.pos.x + collider.offset.x + (collider.size.x / 2) + (this.myCollider.size.x / 2)) - this.myEntity.transform.pos.x - this.myCollider.offset.x;
            }
            else{
                this.myEntity.transform.pos.x += (collider.myEntity.transform.pos.x + collider.offset.x - (collider.size.x / 2) - (this.myCollider.size.x / 2)) - this.myEntity.transform.pos.x - this.myCollider.offset.x;
            }
            this.xv = 0;
            this.yv /= this.frictionY;
        }
    }
}