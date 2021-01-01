class PlayerInFrontHitbox extends Component{
    constructor(){
        super();
        this.attacking = false;
        this.cancelled = true;
        this.tilePhysicsController;
        this.tilePhysics;
        this.addedCompsUsed = false;
        this.tileKnockback = .4;
        this.savedZValue = 0;
    }
    Start(){
        this.playerRenderer = FindEntity("PlayerRenderer").GetComponent(Renderer);
        this.relPos = this.myEntity.GetComponent(RelativePosition);
        this.storedXOffset = this.relPos.offsetX;
        this.headMash = thePlayer.GetComponent(HeadMash);
    }
    Update(){
        if(!this.playerRenderer.flipX){
            this.relPos.offsetX = this.storedXOffset;
        }
        else{
            this.relPos.offsetX = -this.storedXOffset;
        }
        if(this.tilePhysics != undefined){
            if(!this.addedCompsUsed){
                this.addedCompsUsed = true;
                this.tilePhysicsController.enabled = true;
                this.tilePhysics.enabled = true;
                this.tilePhysics.Start();
                this.tilePhysicsController.Start();
                if(!this.playerRenderer.flipX){
                    this.tilePhysics.xv += this.tileKnockback * this.savedZValue;
                }
                else{
                    this.tilePhysics.xv -= this.tileKnockback * this.savedZValue;
                }
                this.tilePhysics.yv = .3 * this.savedZValue;
                this.addedCompsUsed = false;
                this.tilePhysicsController = undefined;
                this.tilePhysics = undefined;
            }
        }
    }
    async mash(){
        this.attacking = true;
        this.cancelled = false;
        this.savedZValue = this.headMash.zFramesHeld;
        await sleep(200);
        if(!this.cancelled){
            this.attacking = false;
        }
    }
    CollisionUpdate(collisionType, entCollider){
        if(this.attacking){
            if(entCollider.myEntity.tag4 == "destructable"){
                this.tilePhysics = entCollider.myEntity.AddComponent(new Physics(.5, 1.05, 1.03, 1, 1), true);
                this.tilePhysicsController = entCollider.myEntity.AddComponent(new PhysicalTile());
                this.tilePhysicsController.enabled = false;
                this.tilePhysics.enabled = false;
                entCollider.myEntity.name = "physicsTile";
                entCollider.myEntity.tag3 = "denySmoothing";
            }
            this.cancelled = true;
            this.attacking = false;
        }
    }
}
class PhysicalTile extends Component{
    constructor(){
        super();
        this.lifeTime = 5000;
        this.playerRender;
        this.startPosX;
        this.startPosY;
        this.exists = true;
        this.checkForGround = false;
        this.firstFrame = true;
    }
    async Start(){
        this.startPosX = this.myEntity.transform.pos.x;
        this.startPosY = this.myEntity.transform.pos.y;
        await sleep(300);
        this.checkForGround = true;
        await sleep(this.lifeTime - 300);
        this.KillMe();

    }
    async KillMe(){
        if(this.exists){
            this.exists = false;
            await sleep(50)
            SceneManager.DestructionSmokeEffect(this.myEntity.transform.pos.x, this.myEntity.transform.pos.y);
            Destroy(this.myEntity);
        }
    }
    LateUpdate(){
        if(this.myEntity.transform.pos.x == this.startPosX && this.myEntity.transform.pos.y == this.startPosY && !this.firstFrame){
            this.KillMe();
        }
        this.firstFrame = false;
    }
    TriggerUpdate(collisionType, entCollider){
        if(entCollider.myEntity.tag == "Enemy"){
            SceneManager.DestructionSmokeEffect(entCollider.myEntity.transform.pos.x, entCollider.myEntity.transform.pos.y);
            Destroy(entCollider.myEntity);
            this.KillMe();
        }
    }
    CollisionUpdate(collisionType, entCollider){
        if(this.checkForGround){
            if(entCollider.myEntity.name != "enm1"){
                this.KillMe();
            }
        }
    }
}