class LevelController extends Component{
    constructor(){
        super();
        this.editorPaused = true;
        this.canP = true;
    }
    Update(){
        if(Input.pDown){
            if(this.canP){
                this.canP = false;
                if(this.editorPaused){
                    this.editorPaused = false;
                }
                else{
                    this.editorPaused = true;
                }
            }
        }
        else{
            this.canP = true;
        }
    }
    SetRespawnPoint(x, y){
        SceneManager.Level1SpawnPoint.x = x;
        SceneManager.Level1SpawnPoint.y = y;
    }
}