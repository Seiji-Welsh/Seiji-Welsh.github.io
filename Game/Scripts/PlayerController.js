class PlayerController extends Component{
    constructor(){
        super();
        this.speed = 1;
        this.jumpForce = 9;
        this.physics;
        this.grounded = false;
        this.void = -500
    }
    Start(){
        this.physics = this.myEntity.GetComponent(Physics);
    }
    Update(){
        this.physics.xv += Input.Horizontal * this.speed;
        if(Input.Vertical == 1 && this.grounded){
            this.physics.yv = this.jumpForce;
        }
        this.grounded = false;
    }
    LateUpdate(){
        if(this.myEntity.transform.pos.y < this.void){
            this.physics.xv = 0;
            this.physics.yv = 0;
            this.myEntity.transform.pos.x = 0;
            this.myEntity.transform.pos.y = 0;
        }
    }
    CollisionUpdate(collisionType, collider){
        if(collider.myEntity.tag == "ground"){
            if(collisionType == "up"){
                this.grounded = true;
            }
        }
    }
}