class Player{
    constructor(x, y, width, height){
        this.gravScale = .7;
        this.vel = 0;
        this.x = x;
        this.y = y;
        this.originX = this.x + (this.scaleX / 2);
        this.originY = this.y + (this.scaleY / 2);
        this.scaleX = width;
        this.scaleY = height;
        this.angle = 0;
        this.sprite = new Image();
        this.sprite.src = "https://Seiji-Welsh.github.io/FlappyBird/Images/bird.png";
        this.rotSpeed = 10;
    }
    Update(){
        this.vel -= this.gravScale;
        this.vel *= .98;
        if(this.vel > -5){
            if(this.angle < 20){
                this.angle += this.rotSpeed * 2;
            }
            else this.angle = 20;
        }
        else{
            if(this.angle > -90){
                this.angle -= this.rotSpeed;
            }
        }
        if(resetting){
            this.x -= panSpeed;
            if(panSpeed > 0)
            panSpeed -= .1;
            else panSpeed = 0;
        }
        if(!(this.y > canvas.height - 135)){
            this.y -= this.vel;
        }
        else{
            onFloor = true;
            if(!resetting){
                Reset();
            }
        }
        if(onFloor) this.y = canvas.height - 134;
        this.originX = this.x + (this.scaleX / 2);
        this.originY = this.y + (this.scaleY / 2);
    }
    render(){
        c.save();
        c.translate(this.originX, this.originY);
        c.rotate(-degToRad(this.angle));
        c.translate(-this.originX, -this.originY);
        c.drawImage(this.sprite, this.x, this.y, this.scaleX, this.scaleY);
        c.restore();
    }
}