class MeteorBG extends Component{
    constructor(fallSpeed, yMin, yMax){
        super();
        this.myParallax;
        this.fallSpeed = fallSpeed;
        this.yMin = yMin;
        this.yMax = yMax;

    }
    Start(){
        this.myParallax = this.myEntity.GetComponent(Parallax);
    }
    Update(){
        this.myParallax.offsetY -= this.fallSpeed;
        if(this.myParallax.offsetY < this.yMin) this.myParallax.offsetY = randomRange(this.yMax/2, this.yMax);
    }
}