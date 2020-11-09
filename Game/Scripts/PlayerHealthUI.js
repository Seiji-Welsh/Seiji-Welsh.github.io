class PlayerHealthUI extends Component{
    constructor(){
        super();
        this.text;
        this.playerHealthThing;
    }
    Start(){
        this.text = this.myEntity.GetComponent(TextRendererUI);
        this.playerHealthThing = thePlayer.GetComponent(PlayerHealthSystem);
    }
    LateUpdate(){
        this.text.text = "Health: " + this.playerHealthThing.Health;
    }
}