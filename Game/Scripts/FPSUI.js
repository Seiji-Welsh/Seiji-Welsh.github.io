class FPSUI extends Component{
    constructor(){
        super();
        this.Text;
    }
    Start(){
        this.Text = this.myEntity.GetComponent(TextRendererUI);
        let thise = this;
        Time.WaitAndRepeat(function(){
            thise.Text.text = "FPS: " + Math.round(1000 / FrameTime);
        }, 200, Infinity, [], undefined, []);
    }
}
class RunTimeFPSUI extends Component{
    constructor(){
        super();
        this.Text;
    }
    Start(){
        this.Text = this.myEntity.GetComponent(TextRendererUI);
        let thise = this;
        Time.WaitAndRepeat(function(){
            thise.Text.text = "RR: " + Math.round(1000 / RunTimeFrameTime);
        }, 200, Infinity, [], undefined, []);
    }
}