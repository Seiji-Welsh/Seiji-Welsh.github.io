class Checkpoint extends Component{
    constructor(){
        super();
        this.cpDistance = 100;
        this.renderer;
    }
    Start(){
        this.renderer = this.myEntity.GetComponent(Renderer);
    }
    LateUpdate(){
        if(distance(thePlayer.transform.pos.x, thePlayer.transform.pos.y, this.myEntity.transform.pos.x, this.myEntity.transform.pos.y) < this.cpDistance){
            switch(this.myEntity.name){
                case "cp1":
                    if(!SceneManager.Level1Checkpoints.cp1.active){
                        SceneManager.Level1Checkpoints.cp1.active = true;
                        this.renderer.img.src = "https://seiji-welsh.github.io/Game/Images/Tiles/ComputerActivated.png";
                    }
                    break;
            }
        }
    }
}