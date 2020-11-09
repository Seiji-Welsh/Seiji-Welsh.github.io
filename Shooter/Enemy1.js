class Enemy1 extends Component{
    constructor(){
        super();
        this.horizSpeed = 3
        this.rotSpeed = 3;
        this.playerPoint;
    }
    update(){
        this.gameObject.x -= this.horizSpeed;
        if(player.x < this.gameObject.x){
            this.playerPoint = vectorToAngle(this.gameObject.x - player.x, this.gameObject.y - player.y);
        }
        else this.playerPoint = 0;
    }
    lateUpdate(){
        if(this.gameObject.GetComponent(Enemy).angVel > .1 || this.playerPoint == 0){
            if(player.y > this.gameObject.y){
                if(this.gameObject.rotation > 0){
                    this.gameObject.rotation += this.rotSpeed;   
                }
            }
            else if(this.gameObject.rotation >= 0){
                this.gameObject.rotation -= this.rotSpeed;
            }
        }
        else this.gameObject.rotation = this.playerPoint
    }
    start(){
        setTimeout(shootBullet, Math.random() * 2000 + 500, this);
        function shootBullet(thisThing){
            if(thisThing.gameObject.alive){
                if(thisThing.playerPoint != 0){
                    var myBullet = Instantiate(new GameObject("Enemy1Bullet", "invinsibleEnemy"), [new Renderer(0, "seiji-welsh.github.io/Shooter/images/bullet.png")
                    , new EnemyBullet(), new BoxCollider(10, 80, 0, 0), new ScrollingObject()], thisThing.gameObject.x - (thisThing.gameObject.scaleX / 2)
                    , thisThing.gameObject.y - Math.sin(degToRad(thisThing.gameObject.rotation)) * (thisThing.gameObject.scaleY / 2), 20, 8);
                    myBullet.rotation = thisThing.gameObject.rotation;
                }
                setTimeout(shootBullet, Math.random() * 2000 + 500, thisThing);
            }
        }
    }
}