class Entity{
    constructor(name, tag, components, tag2, tag3, tag4, tag5){
        this.name = name;
        this.tag = tag;
        this.tag2 = tag2;
        this.tag3 = tag3;
        this.tag4 = tag4;
        this.tag5 = tag5;
        this.components = [...components];
        this.order;
        this.active = true;
        this.inversedPosY;
        this.transform = {
            "pos" : {
                "x" : 0,
                "y" : 0
            },
            "scale" : {
                "x" : 1,
                "y" : 1
            },
            "angle" : 0
        }
    }
    Start(){
        if(this.active){
            for(let i = 1; i <= this.components.length; i++){
                if(typeof this.components[i - 1].Start == "function" && this.components[i - 1].enabled)
                this.components[i - 1].Start();
            } 
        }
    }
    Update(){
        if(this.active){
            for(let i = 1; i <= this.components.length; i++){
                if(typeof this.components[i - 1].Update == "function" && this.components[i - 1].enabled)
                this.components[i - 1].Update();
            }
        }
    }
    LateUpdate(){
        if(this.active){
            for(let i = 1; i <= this.components.length; i++){
                if(typeof this.components[i - 1].LateUpdate == "function" && this.components[i - 1].enabled)
                this.components[i - 1].LateUpdate();
            }
        }
        this.inversedPosY = -(this.transform.pos.y - canvas.height);
    }
    RenderUpdate(){
        if(this.active){
            for(let i = 1; i <= this.components.length; i++){
                if(typeof this.components[i - 1].RenderUpdate == "function" && this.components[i - 1].enabled)
                this.components[i - 1].RenderUpdate();
            }
        }
    }
    PostRenderUpdate(){
        if(this.active){
            for(let i = 1; i <= this.components.length; i++){
                if(typeof this.components[i - 1].PostRenderUpdate == "function" && this.components[i - 1].enabled)
                this.components[i - 1].PostRenderUpdate();
            }
        }
    }
    GetComponent(className){
        for(let i = 1; i <= this.components.length; i++){
            if(this.components[i - 1] instanceof className){
                return this.components[i - 1];
            }
        }
        return null;
    }
    AddComponent(component, doUnshift){
        if(doUnshift){
            this.components.unshift(component);
        }
        else this.components.push(component);
        component.myEntity = this;
        return component;
        //you do have to manually call start
    }
}