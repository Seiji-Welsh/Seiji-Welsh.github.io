class Camera extends Component{
    constructor(){
        super();
    }
    LateUpdate(){
        this.myEntity.transform.scale.y = this.myEntity.transform.scale.x;
    }
}