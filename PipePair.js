class PipePair{
    constructor(x, width, height){
        this.x = x;
        this.y = randomRange(150, canvas.height - 250);
        this.scaleX = width;
        this.scaleY = height;
        this.sprite = new Image();
        this.sprite.src = "/Users/lelacreutz/Desktop/JavaScript/Website/FlappyBird/Images/Pipe.png";
        this.pipeDistance = 75;
        this.pointCollected = false;
    }
    Update(){
        if(this.x < -1000){
            pipes.shift();
        }
        this.x -= panSpeed;
        if(!resetting){
            if(this.x + this.scaleX > brid.x && this.x < brid.x + brid.scaleX &&
                (this.y < brid.y + (brid.scaleY * .9) - this.pipeDistance || this.y > brid.y  - (brid.scaleY * -.1) + this.pipeDistance)){
                Reset();
                brid.vel = 0;
            }
        }
        if(brid.x > this.x && !this.pointCollected){
            this.pointCollected = true;
            score++;
        }
    }
    render(){
        c.drawImage(this.sprite, this.x, this.y + this.pipeDistance, this.scaleX, this.scaleY);
        c.drawImage(this.sprite, this.x, this.y - (this.scaleY + this.pipeDistance), this.scaleX, this.scaleY);
    }
}