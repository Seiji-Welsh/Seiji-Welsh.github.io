class Enemy extends Component{
    constructor(health, damage, points){
        super();
        this.health = health;
        this.damage = damage;
        this.pointAmount = points;
        this.xv = 0;
        this.yv = 0;
        this.angVel = 0;
        this.drag = .9;
        this.angDrag = .9;
    }
    update(){
        this.gameObject.x += this.xv;
        this.gameObject.y += this.yv;
        this.gameObject.rotation += this.angVel;
        this.xv *= this.drag;
        this.yv *= this.drag;
        this.angVel *= this.angDrag;
    }
    lateUpdate(){
        if(this.health <= 0){
            score += this.pointAmount;
            Destroy(this.gameObject);
        }
    }
}