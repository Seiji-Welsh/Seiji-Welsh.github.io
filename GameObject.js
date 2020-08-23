class GameObject{
    constructor(name, tag){
        this.tag = tag;
        this.order = gameObjects.length
        this.name = name;
        this.components;
        this.x = 0;
        this.y = 0;
        this.scaleX = 100;
        this.scaleY = 100;
        this.rotation = 0;
        this.alive = true;
    }
    start(){
        for(var i = 1; i <= this.components.length; i++){
            if(typeof this.components[i - 1].start == "function"){
                this.components[i - 1].start();
            }
        }
    }
    update(){
        for(var i = 1; i <= this.components.length; i++){
            if(typeof this.components[i - 1].update == "function")
            this.components[i - 1].update();
        }
    }
    lateUpdate(){
        for(var i = 1; i <= this.components.length; i++){
            if(typeof this.components[i - 1].lateUpdate == "function")
            this.components[i - 1].lateUpdate();
        }
        if(this.rotation > 360){
            this.rotation -= 360;
        }
    }
    renderUpdate(){
        for(var i = 1; i <= this.components.length; i++){
            if(typeof this.components[i - 1].renderUpdate == "function")
            this.components[i - 1].renderUpdate();
        }
    }
    GetComponent(className){
        for(var i = 1; i <= this.components.length; i++){
            if(this.components[i - 1] instanceof className){
                return this.components[i - 1];
            }
        }
        return null;
    }
}