class CameraEditorController extends Component{
    constructor(){
        super();
        this.speed = 1;
        this.zoomSpeed = .003;
        //this.followDistance = 25;
        this.followSpeedX = .3;
        this.followSpeedY = .3;
        this.xv = 0;
        this.yv = 0;
        this.drag = .95;
        this.target;
        this.doFollow = true;
        this.canSpace = true;
    }
    Start(){
        this.target = FindEntity("Player");
    }
    LateUpdate(){
        this.xv += Input.wasd.Horizontal * this.speed;
        this.yv += Input.wasd.Vertical * this.speed;
        this.myEntity.transform.pos.x += this.xv * this.myEntity.transform.scale.x;
        this.myEntity.transform.pos.y += this.yv * this.myEntity.transform.scale.x;
        this.xv *= this.drag;
        this.yv *= this.drag;
        this.myEntity.transform.scale.x -= Input.MouseScrollY * this.zoomSpeed * this.myEntity.transform.scale.x;
        if(this.doFollow){
            this.myEntity.transform.pos.x += (this.target.transform.pos.x - this.myEntity.transform.pos.x) / 2 * this.followSpeedX;
            this.myEntity.transform.pos.y += (this.target.transform.pos.y - this.myEntity.transform.pos.y) / 2 * this.followSpeedY;
            /*if(this.target.transform.pos.x > this.myEntity.transform.pos.x + this.followDistance){
                this.myEntity.transform.pos.x = this.target.transform.pos.x - this.followDistance;
            }
            else if(this.target.transform.pos.x < this.myEntity.transform.pos.x - this.followDistance){
                this.myEntity.transform.pos.x = this.target.transform.pos.x + this.followDistance;
            }
            if(this.target.transform.pos.y > this.myEntity.transform.pos.y + this.followDistance){
                this.myEntity.transform.pos.y = this.target.transform.pos.y - this.followDistance;
            }
            else if(this.target.transform.pos.y < this.myEntity.transform.pos.y - this.followDistance){
                this.myEntity.transform.pos.y = this.target.transform.pos.y + this.followDistance;
            }*/
        }
        if(Input.spaceDown){
            if(this.canSpace){
                this.canSpace = false;
                if(!this.doFollow){
                    this.doFollow = true;
                }
                else this.doFollow = false;
            }
        }
        else this.canSpace = true;
    }
}