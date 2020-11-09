class PlayerAnimation extends Component{
    constructor(){
        super();
        this.myAnimator;
        this.controllerScript;
    }
    Start(){
        this.myAnimator = this.myEntity.GetComponent(Animator);
        this.controllerScript = FindEntity("Player").GetComponent(PlayerController);
    }
    LateUpdate(){
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
}