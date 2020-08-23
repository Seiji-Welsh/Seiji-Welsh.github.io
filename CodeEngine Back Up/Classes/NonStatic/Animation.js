class myAnimation{
    constructor(animationName, FPS, timeLine){
        this.name = animationName;
        this.fps = FPS;
        this.timeLine = timeLine;
        this.frameCount = this.timeLine.length;
        this.controller;
        this.currentFrame;
        this.playing = false;
    }
    Play(){
        this.currentFrame = 1;
        let thise = this;
        this.playing = true;
        this.setAnimationSprite();
        Time.WaitAndRepeat(function(){
            let allow = true;
            if(thise.controller.animationPlaying != thise){
                allow = false;
            }
            if(allow){
                if(thise.currentFrame < thise.frameCount){
                    thise.currentFrame++;
                    thise.setAnimationSprite();
                }
            }
        }, 1000 / this.fps, this.frameCount, [], function(){
            thise.playing = false;
        }, []);
    }
    setAnimationSprite(){
        this.controller.animationSprite = this.timeLine[this.currentFrame - 1];
        this.controller.myRenderer.img.src = this.controller.animationSprite;
    }
    
}