class EnemyBullet extends Component{
    constructor(){
        super();
        this.speed = 5;
    }
    update(){
        this.gameObject.x -= Math.cos(degToRad(this.gameObject.rotation)) * this.speed;
        this.gameObject.y -= Math.sin(degToRad(this.gameObject.rotation)) * this.speed;
    }
    lateUpdate(){
        if(this.gameObject.x > canvas.width + 200 || this.gameObject.y < -200 || this.gameObject.y > canvas.height + 200){
            Destroy(this.gameObject);
        }
    }
}
