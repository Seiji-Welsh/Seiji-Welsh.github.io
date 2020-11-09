class Ground{
    constructor(x, y, width, height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.sprite = new Image();
        this.sprite.src = "https://seiji-welsh.github.io/FlappyBird/Images/ground.png";
    }
    Update(){
        this.x -= panSpeed;
        if(this.x < -this.width){
            this.x += this.width * 3;
        }
    }
    render(){
        c.drawImage(this.sprite, this.x, this.y, this.width, this.height);
    }
}