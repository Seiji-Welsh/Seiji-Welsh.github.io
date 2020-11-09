class Renderer extends Component{
    constructor(sortOrd, imgSrc, imgWidth, imgHeight, canRotate){
        super();
        this.sortingOrder = sortOrd;
        this.img = new Image();
        this.img.src = imgSrc;
        this.imgSizeX = imgWidth;
        this.imgSizeY = imgHeight;
        this.allowRotation = canRotate;
        this.onScreen = true;
        this.flipX = false;
        this.flipY = false;
    }
    RenderUpdate(){
        let preScaleOrigin = CoordinateToDrawPos(this.myEntity.transform.pos.x, this.myEntity.inversedPosY);
        let cameraScale = mainCamera.transform.scale.x;
        let drawPos = {
            "x" : (preScaleOrigin.x - ((this.imgSizeX * this.myEntity.transform.scale.x) / 2)) / cameraScale,
            "y" : (preScaleOrigin.y - ((this.imgSizeY * this.myEntity.transform.scale.y) / 2)) / cameraScale
        }
        if(!(drawPos.x > canvas.width || drawPos.x + (this.imgSizeX * this.myEntity.transform.scale.x) / cameraScale < 0 || 
        drawPos.y > canvas.height || drawPos.y + (this.imgSizeY * this.myEntity.transform.scale.y) / cameraScale < 0)){
            this.onScreen = true;
            ctx.save();
            if(this.flipX){
                ctx.scale(-1, 1);
                drawPos.x *= -1;
                drawPos.x -= this.imgSizeX / cameraScale;
            }
            if(this.flipY){
                ctx.scale(1, -1);
                drawPos.y *= -1;
                drawPos.y -= this.imgSizeY / cameraScale;
            }
            if(this.allowRotation){
                let drawOrigin = {
                    "x" : drawPos.x + ((this.imgSizeX * this.myEntity.transform.scale.x) / 2) / cameraScale,
                    "y" : drawPos.y + ((this.imgSizeY * this.myEntity.transform.scale.y) / 2) / cameraScale
                }
                ctx.translate(drawOrigin.x, drawOrigin.y);
                ctx.rotate(degToRad(-this.myEntity.transform.angle));
                ctx.translate(-drawOrigin.x, -drawOrigin.y);
                ctx.drawImage(this.img, drawPos.x, drawPos.y, this.imgSizeX * this.myEntity.transform.scale.x / cameraScale
                , this.imgSizeY * this.myEntity.transform.scale.y / cameraScale);
                ctx.translate(drawOrigin.x, drawOrigin.y);
                ctx.rotate(degToRad(this.myEntity.transform.angle));
                ctx.translate(-drawOrigin.x, -drawOrigin.y);
            }
            else{
                ctx.drawImage(this.img, drawPos.x, drawPos.y, this.imgSizeX * this.myEntity.transform.scale.x / cameraScale
                , this.imgSizeY * this.myEntity.transform.scale.y / cameraScale);
            }
            ctx.restore();
        }
        else this.onScreen = false;
    }
}