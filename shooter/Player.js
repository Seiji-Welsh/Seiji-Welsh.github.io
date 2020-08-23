class Player extends Component{
    constructor(){
        super();
        this.xv = 0;
        this.yv = 0;
        this.drag = .9;
        this.speed = .5;
    }
    update(){
        this.gameObject.x += this.xv;
        this.gameObject.y += this.yv;
        this.xv *= this.drag;
        this.yv *= this.drag;
        this.xv += input.horizontal * this.speed;
        this.yv += input.vertical * this.speed;
        this.gameObject.rotation = (this.yv + (-this.xv / 2)) * 7;
        if(this.gameObject.x < 0) this.gameObject.x = 0;
        if(this.gameObject.x > canvas.width) this.gameObject.x = canvas.width;
        if(this.gameObject.y < 0) this.gameObject.y = 0;
        if(this.gameObject.y > canvas.height) this.gameObject.y = canvas.height;
    }
    collisionUpdate(collider){
        if(collider.gameObject.tag == "enemy" || collider.gameObject.tag == "invinsibleEnemy"){
            sceneLoad();
        }
    }
}
