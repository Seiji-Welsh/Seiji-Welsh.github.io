class Enemy1AI extends Component{
    constructor(){
        super();
        this.myEnemy;
        this.myPhysics;
        this.myRenderer;
        this.speed = .8;
        this.closenessRange = 10;
        this.jumpForce = 10;
        this.pendingStatus = {
            "horizontal": false,
            "vertical": false
        }
        this.pendingJump = false;
        this.reactionTime = 100;
        this.direction = 1;
    }
    Start(){
        this.myEnemy = this.myEntity.GetComponent(Enemy);
        this.myPhysics = this.myEntity.GetComponent(Physics);
        this.myRenderer = this.myEntity.GetComponent(Renderer);
    }
    Update(){
        if(!this.myEnemy.paused){
            let thise = this;
            if(this.myEntity.transform.pos.x < thePlayer.transform.pos.x - this.closenessRange){
                Time.WaitAndRepeat(function(){
                    thise.direction = Math.random();
                }, this.reactionTime, 1)
                this.myRenderer.flipX = false;
            }
            else if(this.myEntity.transform.pos.x > thePlayer.transform.pos.x + this.closenessRange){
                Time.WaitAndRepeat(function(){
                    thise.direction = -Math.random();
                }, this.reactionTime, 1)
                this.myRenderer.flipX = true;
            }
            this.myPhysics.xv += randomRange(this.speed * .8, this.speed) * this.direction;
            if(this.pendingJump){
                this.Jump();
            }
            this.pendingJump = false;
            this.pendingStatus.horizontal = false;
            this.pendingStatus.vertical = false;
        }
    }
    Jump(){
        this.myPhysics.yv = randomRange(this.jumpForce * .95, this.jumpForce * 1.2);
    }
    CollisionUpdate(collisionType, collider){
        if(!this.myEnemy.paused){
            if(collider.myEntity.tag == "ground" || collider.myEntity.tag == "Enemy"){
                if(collisionType == "left" || collisionType == "right"){
                    this.pendingStatus.horizontal = true;
                }
                else if(collisionType == "up"){
                    this.pendingStatus.vertical = true;
                }
                if(this.pendingStatus.horizontal && this.pendingStatus.vertical){
                    this.pendingJump = true;
                }
            }
        }
    }
}