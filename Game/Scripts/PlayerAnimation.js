class PlayerAnimation extends Component{
    constructor(){
        super();
        this.myAnimator;
        this.controllerScript;
        this.headMashing = false;
    }
    Start(){
        this.myAnimator = this.myEntity.GetComponent(Animator);
        this.controllerScript = thePlayer.GetComponent(PlayerController);
    }
    LateUpdate(){
        if(!this.headMashing){
            if(this.controllerScript.grounded){
                if(Input.Horizontal != 0){
                    this.myAnimator.PlayAnimation("Run");
                }
                else{
                    this.myAnimator.PlayAnimation("Idle");
                }
            }
            else{
                this.myAnimator.PlayAnimation("Jump");
            }
        }
        else{
            this.myAnimator.PlayAnimation("HeadMash");  
        }
    }
}