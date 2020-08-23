class CameraEditorController extends Component{
    constructor(){
        super();
        this.speed = .5;
        this.zoomSpeed = .005;
        this.followSpeed = .5;
        this.xv = 0;
        this.yv = 0;
        this.drag = .9;
        this.target;
    }
    Start(){
        this.target = FindEntity("Player");
    }
    Update(){
        this.xv += Input.wasd.Horizontal;
        this.yv += Input.wasd.Vertical;
        this.myEntity.transform.pos.x += this.xv * this.myEntity.transform.scale.x;
        this.myEntity.transform.pos.y += this.yv * this.myEntity.transform.scale.x;
        this.xv *= this.drag;
        this.yv *= this.drag;
        this.myEntity.transform.scale.x -= Input.MouseScrollY * this.zoomSpeed * this.myEntity.transform.scale.x;
        if(Input.wasd.Horizontal == 0 && Input.wasd.Vertical == 0 && Input.spaceDown){
            this.myEntity.transform.pos.x += (this.target.transform.pos.x - this.myEntity.transform.pos.x) / 2 * this.followSpeed;
            this.myEntity.transform.pos.y += (this.target.transform.pos.y - this.myEntity.transform.pos.y) / 2 * this.followSpeed;
        }
    }
}