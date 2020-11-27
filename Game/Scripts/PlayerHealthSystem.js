class PlayerHealthSystem extends Component{
    constructor(){
        super();
        this.MaxHealth = 5;
        this.Health = this.MaxHealth;
        this.canRespawn = true;
        this.invinsible = false;
        this.invinsibilityTime = 1000;
        this.flickerAmount = 10;
        this.myRenderer;
        this.knockBackX = 6;
        this.knockBackY = 6;
        this.physics;
        this.collDirX = 0;
        this.collDirY = 0;
        this.holding = false;
    }
    Start(){
        this.myRenderer = FindEntity("PlayerRenderer").GetComponent(Renderer);
        this.physics = this.myEntity.GetComponent(Physics);
    }
    Update(){
        if(this.holding){
            this.physics.xv = this.knockBackX * this.collDirX;
            this.physics.yv = this.knockBackY * this.collDirY;
            this.holding = false;
        }
    }
    async Damage(collType){
        if(!this.invinsible){
            this.invinsible = true;
            this.Health--;
            switch(collType){
                case "left":
                    this.collDirX = -1;
                    this.collDirY = 1;
                    break;
                case "right":
                    this.collDirX = 1;
                    this.collDirY = 1;
                    break;
                default:
                    this.collDirY = 1;
                    this.collDirX = 0;
                    break;
                
            }
            this.holding = true;
            for(let i = 0; i < this.flickerAmount; i++){
                this.myRenderer.enabled = false;
                await sleep(this.invinsibilityTime / this.flickerAmount / 2);
                this.myRenderer.enabled = true;
                await sleep(this.invinsibilityTime / this.flickerAmount / 2);
            }
            this.invinsible = false;
            if(this.Health <= 0 && this.canRespawn){
                reloadScene(SceneManager.activeScene);
                this.canRespawn = false;
            }
        }
    }
    TriggerUpdate(collType, collider){
        switch(collider.myEntity.name){
            case "enm1": case "sp":
            this.Damage(collType);
            break;
        }
    }
}