class Enemy1Animation extends Component{
    constructor(){
        super();
        this.animator;
    }
    Start(){
        this.animator = this.myEntity.GetComponent(Animator);
    }
}