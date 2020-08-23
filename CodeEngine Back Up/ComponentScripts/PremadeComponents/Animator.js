class Animator extends Component{
    constructor(animationsArray, defaultAnimationName){
        super();
        this.defaultAnimation;
        this.animationPlaying;
        this.animationSprite;
        this.myRenderer;
        this.animations = [...animationsArray];
        for(let i = 1; i <= this.animations.length; i++){
            if(this.animations[i - 1].name == defaultAnimationName){
                this.defaultAnimation = this.animations[i - 1];
            }
        }
        for(let i = 1; i <= this.animations.length; i++){
            this.animations[i - 1].controller = this;
        }
    }
    Start(){
        this.myRenderer = this.myEntity.GetComponent(Renderer);
        this.animationPlaying = this.defaultAnimation;
    }
    PlayAnimation(name){
        for(let i = 1; i <= this.animations.length; i++){
            if(this.animations[i - 1].name == name){
                this.animationPlaying = this.animations[i - 1];
                return this.animations[i - 1];
            }
        }
        return;
    }
    LateUpdate(){
        if(!this.animationPlaying.playing){
            this.animationPlaying.Play();
        }
    }
}