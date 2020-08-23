class BoxCollider extends Component{
    constructor(sizeX, sizeY, offsetX, offsetY){
        super();
        this.sizeX = sizeX;
        this.sizeY = sizeY;
        this.offsetX = offsetX;
        this.offsetY = offsetY;
    }
    update(){
        for(var i = 1; i <= gameObjects.length; i++){
            var obj = gameObjects[i - 1];
            var objCollider = obj.GetComponent(BoxCollider);
            if(objCollider != null && obj.order != this.gameObject.order){
                if(this.gameObject.x + (this.sizeX / 2) > (obj.x - (objCollider.sizeX / 2)) &&
                this.gameObject.x - (this.sizeX / 2) < (obj.x + (objCollider.sizeX / 2)) &&
                this.gameObject.y + (this.sizeY / 2) > (obj.y - (objCollider.sizeY / 2)) &&
                this.gameObject.y - (this.sizeY / 2) < (obj.y + (objCollider.sizeY / 2))){
                    for(var e = 1; e <= this.gameObject.components.length; e++){
                        if(typeof this.gameObject.components[e - 1].collisionUpdate == "function")
                        this.gameObject.components[e - 1].collisionUpdate(objCollider);
                    }
                }
            }
        }
    }
}