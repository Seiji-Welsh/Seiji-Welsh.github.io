class RelativePosition extends Component{
    constructor(parent, offsetX, offsetY){
        super();
        this.parent = parent;
        this.offsetX = offsetX;
        this.offsetY = offsetY;
    }
    LateUpdate(){
        this.myEntity.transform.pos.x = this.parent.transform.pos.x + this.offsetX;
        this.myEntity.transform.pos.y = this.parent.transform.pos.y + this.offsetY;
    }
}