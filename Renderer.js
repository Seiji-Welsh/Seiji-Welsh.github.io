class Renderer extends Component{
    constructor(sortingOrder, imgSrc){
        super();
        this.sprite = new Image;
        this.sprite.src = imgSrc;
        this.sortingOrder = sortingOrder;
        this.drawPositionX;
        this.inversedPosY;
        this.drawPositionY;
        this.useAntialiasing = false;
    }
    start(){
        this.drawPositionX = this.gameObject.x - (this.gameObject.scaleX / 2);
        this.inversedPosY = -(this.gameObject.y - canvas.height);
        this.drawPositionY = this.inversedPosY - (this.gameObject.scaleY / 2);
    }
    update(){
        this.drawPositionX = this.gameObject.x - (this.gameObject.scaleX / 2);
        this.inversedPosY = -(this.gameObject.y - canvas.height);
        this.drawPositionY = this.inversedPosY - (this.gameObject.scaleY / 2);
    }
    renderUpdate(){
        c.save();
        c.translate(this.gameObject.x, this.inversedPosY);
        c.rotate(degToRad(-this.gameObject.rotation));
        c.translate(-this.gameObject.x, -this.inversedPosY);
        if(this.useAntialiasing) c.imageSmoothingEnabled = true;
        else c.imageSmoothingEnabled = false;
        c.drawImage(this.sprite, this.drawPositionX, this.drawPositionY, this.gameObject.scaleX, this.gameObject.scaleY);
        c.restore();
    }
}