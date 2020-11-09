class PlayerController extends Component{
    constructor(){
        super();
        this.speed = 3.85;
        this.jumpForce = 15;
        this.physics;
        this.grounded = false;
        this.void = -2000
        this.myRenderersRenderer;
        this.isFrame1 = true;
        this.canDie = true;
    }
    Update(){
        if(this.isFrame1){
            this.physics = this.myEntity.GetComponent(Physics);
            this.myRenderersRenderer = FindEntity("PlayerRenderer").GetComponent(Renderer);
        }
        if(Input.Horizontal == 1){
            this.myRenderersRenderer.flipX = false;
        }
        else if(Input.Horizontal == -1){
            this.myRenderersRenderer.flipX = true;
        }
        this.physics.xv += Input.Horizontal * this.speed;
        if(this.grounded){
            if(Input.arrows.up)
            this.physics.yv = this.jumpForce;
        }
        this.grounded = false;
    }
    async LateUpdate(){
        if(this.myEntity.transform.pos.y < this.void && this.canDie){
            this.canDie = false;
            await sleep(10);
            reloadScene(SceneManager.activeScene);
        }
    }
    CollisionUpdate(collisionType, collider){
        if(collider.myEntity.tag == "ground" || collider.myEntity.tag == "Enemy"){
            if(collisionType == "up"){
                this.grounded = true;
            }
        }
    }
    PostRenderUpdate(){
        this.isFrame1 = false;
    }
}