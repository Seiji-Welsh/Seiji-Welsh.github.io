class Enemy extends Component{
    constructor(){
        super();
        this.paused;
        this.myRenderer;
    }
    Start(){
        this.myRenderer = this.myEntity.GetComponent(Renderer);
    }
    Update(){
        if(this.myRenderer.onScreen && !levelController.editorPaused){
            this.paused = false;
        }
        else{
            this.paused = true;
        }
    }
}