class Parallax extends Component{
    constructor(px, py, ox, oy, moving, mxs){
        super();
        this.effectSeverityX = px;
        this.effectSeverityY = py;
        this.offsetX = ox * 960;
        this.offsetY = oy;
        this.moveXSpeed = mxs
        this.startox = this.offsetX;
        this.startoy = this.offsetY;
        this.moving = moving;
    }
    Start(){
        this.setParallax();
    }
    LateUpdate(){
        this.setParallax();
    }
    setParallax(){
        if(this.moving){
            this.offsetX += this.moveXSpeed;
            if(this.offsetX < this.startox - 960){
                this.offsetX = this.startox;
            }
            if(this.offsetX > this.startox + 960){
                this.offsetX = this.startox;
            }
        }
        this.myEntity.transform.pos.x = mainCamera.transform.pos.x * this.effectSeverityX + this.offsetX;
        this.myEntity.transform.pos.y = mainCamera.transform.pos.y * this.effectSeverityY + this.offsetY;
    }
}