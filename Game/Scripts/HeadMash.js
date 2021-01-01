class HeadMash extends Component{
    constructor(){
        super();
        this.canZ = false;
        this.onCoolDown = false;
        this.forwardRecoil = 1;
        this.zFramesHeld = 0;
        this.barZHeld = 0;
        this.chargeUpUIExists = false;
        this.chargeUpUI;
        this.chargeUpUIRenderer;
        this.maxZHeld = 18.9;
        this.maxZBar = 102;
    }
    Start(){
        this.playerAnimator = FindEntity("PlayerRenderer").GetComponent(PlayerAnimation);
        this.playerController = thePlayer.GetComponent(PlayerController);
        this.playerPhysics = thePlayer.GetComponent(Physics);
        this.playerRenderer = FindEntity("PlayerRenderer").GetComponent(Renderer);
        this.mashHitbox = FindEntity("PlayerHeadMashHitbox").GetComponent(PlayerInFrontHitbox);
        this.playerStoredSpeed = this.playerController.speed;
    }
    async Update(){
        if(!Input.zDown){
            if(this.canZ){
                if(!this.onCoolDown){
                    this.onCoolDown = true;
                    this.playerController.speed = 0;
                    this.playerAnimator.headMashing = true;
                    this.mashHitbox.mash();
                    if(this.playerRenderer.flipX){
                        this.playerPhysics.xv = -this.forwardRecoil * this.zFramesHeld;
                    }
                    else{
                        this.playerPhysics.xv = this.forwardRecoil * this.zFramesHeld;
                    }
                    await sleep(200);
                    this.playerController.speed = this.playerStoredSpeed;
                    this.playerAnimator.headMashing = false;
                    await sleep(300);
                    this.onCoolDown = false;
                }
            }
        }
        this.canZ = false;
        if(Input.zDown){
            this.canZ = true;
            this.playerController.speed = this.playerStoredSpeed * .6;
            if(!this.onCoolDown){
                this.zFramesHeld++;
                this.zFramesHeld *= .95;
                this.barZHeld++;
            }
            else{this.zFramesHeld = 0; this.barZHeld = 0;}
            if(!this.chargeUpUIExists){
                this.chargeUpUI = SceneManager.ChargeUpUI();
                this.chargeUpUIRenderer = this.chargeUpUI.GetComponent(Renderer);
            }
            this.chargeUpUIExists = true;
            if(this.barZHeld > this.maxZBar) this.barZHeld = this.maxZBar;
        }
        else{
            this.barZHeld = 0;
            this.playerController.speed = this.playerStoredSpeed;
            this.zFramesHeld = 0;
            if(this.chargeUpUIExists)
            Destroy(this.chargeUpUI);
            this.chargeUpUIExists = false;
        }
        if(this.chargeUpUIExists){
            if(this.onCoolDown) this.chargeUpUIRenderer.img.src = "https://seiji-welsh.github.io/Game/Images/UI/ChargeUpSlider/ChargeUpSlider0.png"
            else if(this.barZHeld < (this.maxZBar / 10)){this.chargeUpUIRenderer.img.src = "https://seiji-welsh.github.io/Game/Images/UI/ChargeUpSlider/ChargeUpSlider1.png"}
            else if(this.barZHeld < 2 * (this.maxZBar / 10)){this.chargeUpUIRenderer.img.src = "https://seiji-welsh.github.io/Game/Images/UI/ChargeUpSlider/ChargeUpSlider2.png"}
            else if(this.barZHeld < 3 * (this.maxZBar / 10)){this.chargeUpUIRenderer.img.src = "https://seiji-welsh.github.io/Game/Images/UI/ChargeUpSlider/ChargeUpSlider3.png"}
            else if(this.barZHeld < 4 * (this.maxZBar / 10)){this.chargeUpUIRenderer.img.src = "https://seiji-welsh.github.io/Game/Images/UI/ChargeUpSlider/ChargeUpSlider4.png"}
            else if(this.barZHeld < 5 * (this.maxZBar / 10)){this.chargeUpUIRenderer.img.src = "https://seiji-welsh.github.io/Game/Images/UI/ChargeUpSlider/ChargeUpSlider5.png"}
            else if(this.barZHeld < 6 * (this.maxZBar / 10)){this.chargeUpUIRenderer.img.src = "https://seiji-welsh.github.io/Game/Images/UI/ChargeUpSlider/ChargeUpSlider6.png"}
            else if(this.barZHeld < 7 * (this.maxZBar / 10)){this.chargeUpUIRenderer.img.src = "https://seiji-welsh.github.io/Game/Images/UI/ChargeUpSlider/ChargeUpSlider7.png"}
            else if(this.barZHeld < 8 * (this.maxZBar / 10)){this.chargeUpUIRenderer.img.src = "https://seiji-welsh.github.io/Game/Images/UI/ChargeUpSlider/ChargeUpSlider8.png"}
            else if(this.barZHeld < 9 * (this.maxZBar / 10)){this.chargeUpUIRenderer.img.src = "https://seiji-welsh.github.io/Game/Images/UI/ChargeUpSlider/ChargeUpSlider9.png"}
            else if(this.barZHeld < 10 * (this.maxZBar / 10)){this.chargeUpUIRenderer.img.src = "https://seiji-welsh.github.io/Game/Images/UI/ChargeUpSlider/ChargeUpSlider10.png"}
        }
    }
}