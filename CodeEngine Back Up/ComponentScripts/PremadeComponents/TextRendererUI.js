class TextRendererUI extends Component{
    constructor(text, alignment, font, textColor){
        super();
        this.text = text;
        this.alignment = alignment;
        this.font = font;
        this.textColor = textColor;
    }
    PostRenderUpdate(){
        ctx.font = this.font;
        ctx.fillStyle = this.textColor;
        ctx.textAlign = this.alignment;
        ctx.fillText(this.text, this.myEntity.transform.pos.x, this.myEntity.inversedPosY);
    }
}