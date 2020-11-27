class DestructionSmokeEffect extends Component{
    constructor(){
        super();
        this.lifeTime = 500;
    }
    async Start(){
        await sleep(this.lifeTime)
        Destroy(this.myEntity);
    }
}