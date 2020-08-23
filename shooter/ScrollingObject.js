class ScrollingObject extends Component{
    constructor(){
        super();
        this.scrollSpeed = 3;
    }
    update(){
        this.gameObject.x -= this.scrollSpeed;
    }
    lateUpdate(){
        if(this.gameObject.x < -200){
            Destroy(this.gameObject);
        }
    }
}
