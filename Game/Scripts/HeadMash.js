class HeadMash extends Component{
    constructor(){
        super();
        this.canZ = true;
        this.playerAnimator;
        this.onCoolDown = false;
        this.playerController;
        this.playerPhysics;
        this.playerRenderer;
        this.forwardRecoil = 17;
        this.mashHitbox;
    }
    Start(){
        this.playerAnimator = FindEntity("PlayerRenderer").GetComponent(PlayerAnimation);
        this.playerController = thePlayer.GetComponent(PlayerController);
        this.playerPhysics = thePlayer.GetComponent(Physics);
        this.playerRenderer = FindEntity("PlayerRenderer").GetComponent(Renderer);
        this.mashHitbox = FindEntity("PlayerHeadMashHitbox").GetComponent(PlayerInFrontHitbox);
    }
    async Update(){
        if(!this.onCoolDown){
            if(Input.zDown){
                if(this.canZ){
                    this.canZ = false;
                    this.onCoolDown = true;
                    let playerStoredSpeed = this.playerController.speed;
                    this.playerController.speed = .1;
                    this.playerAnimator.headMashing = true;
                    this.mashHitbox.mash();
                    if(this.playerRenderer.flipX){
                        this.playerPhysics.xv = -this.forwardRecoil;
                    }
                    else{
                        this.playerPhysics.xv = this.forwardRecoil;
                    }
                    await sleep(200);
                    this.playerController.speed = playerStoredSpeed;
                    this.playerAnimator.headMashing = false;
                    await sleep(300);
                    this.onCoolDown = false;
                }
            }
            else this.canZ = true;
        }
    }
}