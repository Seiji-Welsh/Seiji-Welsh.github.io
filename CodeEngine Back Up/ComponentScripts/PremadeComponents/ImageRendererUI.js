class ImageRendererUI extends Component{
    constructor(imgSrc, imgWidth, imgHeight){
        super();
        this.img = new Image();
        this.img.src = imgSrc;
        this.imgSizeX = imgWidth;
        this.imgSizeY = imgHeight;
        this.allowRotation = true;
    }
    PostRenderUpdate(){
        let drawPos = {
            "x" : this.myEntity.transform.pos.x - ((this.imgSizeX * this.myEntity.transform.scale.x) / 2),
            "y" : this.myEntity.inversedPosY - ((this.imgSizeY * this.myEntity.transform.scale.y) / 2)
        }
        if(this.allowRotation){
            let drawOrigin = {
                "x" : this.myEntity.transform.pos.x,
                "y" : this.myEntity.inversedPosY
            }
            ctx.save();
            ctx.translate(drawOrigin.x, drawOrigin.y);
            ctx.rotate(degToRad(-this.myEntity.transform.angle));
            ctx.translate(-drawOrigin.x, -drawOrigin.y);
            ctx.drawImage(this.img, drawPos.x, drawPos.y, this.imgSizeX * this.myEntity.transform.scale.x
            , this.imgSizeY * this.myEntity.transform.scale.y);
            ctx.restore();
        }
        else{
            ctx.drawImage(this.img, drawPos.x, drawPos.y, this.imgSizeX * this.myEntity.transform.scale.x
            , this.imgSizeY * this.myEntity.transform.scale.y);
        }
    }
}