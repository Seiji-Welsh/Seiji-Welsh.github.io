class Bullet extends Component{
    constructor(){
        super();
        this.speed = 10;
        this.xv;
    }
    start(){
        this.xv = this.speed;
    }
    update(){
        this.gameObject.x += this.xv;
    }
    lateUpdate(){
        if(this.gameObject.x > canvas.width + 50){
            Destroy(this.gameObject);
        }
    }
    collisionUpdate(collider){
        if(collider.gameObject.tag == "enemy"){
            var enmyComp = collider.gameObject.GetComponent(Enemy);
            enmyComp.health--;
            switch(collider.gameObject.name){
                case "asteroid":
                    enmyComp.xv += 5;
                    enmyComp.yv += Math.random() * 5 - 2;
                    enmyComp.angVel += Math.random() * 15 - 7;
                    score += 2;
                    break;
                case "enemy1":
                    enmyComp.xv = 15;
                    enmyComp.yv = Math.random() * 10 - 5;
                    enmyComp.angVel = Math.random() * 30 - 15;
                    score += 10;
                    break;
            }
            Destroy(this.gameObject);
        }
    }
}
