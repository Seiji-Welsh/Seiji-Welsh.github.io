class PlayerPositionUI extends Component{
    constructor(){
        super();
        this.Text;
        this.player;
    }
    Start(){
        this.player = FindEntity("Player");
        this.Text = this.myEntity.GetComponent(TextRendererUI);
    }
    PostRenderUpdate(){
        this.Text.text = Math.round(this.player.transform.pos.x).toString() + ", " + Math.round(this.player.transform.pos.y).toString();
    }
}