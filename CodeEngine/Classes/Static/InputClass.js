class Input{
    static Horizontal = 0;
    static Vertical = 0;
    static spaceDown = false;
    static minusDown = false;
    static plusDown = false;
    static bDown = false;
    static mouseDown = false;
    static eDown = false;
    static CommandDown = false;
    static pDown = false;
    static oneDown = false;
    static arrows = {
        "left" : 0,
        "up" : 0,
        "right" : 0,
        "down" : 0,
    }
    static wasd = {
        "a" : 0,
        "w" : 0,
        "d" : 0,
        "s" : 0,
        "Horizontal" : 0,
        "Vertical" : 0
    }
    static InputDown(evt){
        if(evt.keyCode == 91){
            Input.CommandDown = true;
        }
        if(!Input.CommandDown){
            switch(evt.keyCode){
                //arrows
                case 37:
                    Input.arrows.left = -1;
                    break;
                case 38:
                    Input.arrows.up = 1;
                    break;
                case 39:
                    Input.arrows.right = 1;
                    break;
                case 40:
                    Input.arrows.down = -1;
                    break;
                //wasd
                case 65:
                    Input.wasd.a = -1;
                    break;
                case 87:
                    Input.wasd.w = 1;
                    break;
                case 68:
                    Input.wasd.d = 1;
                    break;
                case 83:
                    Input.wasd.s = -1;
                    break;
                //Other Inputs
                case 32:
                    Input.spaceDown = true;
                    break;
                case 187:
                    Input.plusDown = true;
                    break;
                case 189:
                    Input.minusDown = true;
                    break;
                case 66:
                    Input.bDown = true;
                    break;
                case 69:
                    Input.eDown = true;
                    break;
                case 27:
                    if(fullScreenOn)
                    toggleFullScreen();
                    break;
                case 80:
                    Input.pDown = true;
                    break;
                case 49:
                    Input.oneDown = true;
                    break;
            }
        }
        Input.Horizontal = Input.arrows.right + Input.arrows.left;
        Input.Vertical = Input.arrows.up + Input.arrows.down;
        Input.wasd.Horizontal = Input.wasd.d + Input.wasd.a;
        Input.wasd.Vertical = Input.wasd.w + Input.wasd.s;
    }
    static InputUp(evt){
        switch(evt.keyCode){
            //arrows
            case 37:
                Input.arrows.left = 0;
                break;
            case 38:
                Input.arrows.up = 0;
                break;
            case 39:
                Input.arrows.right = 0;
                break;
            case 40:
                Input.arrows.down = 0;
                break;
            //wasd
            case 65:
                Input.wasd.a = 0;
                break;
            case 87:
                Input.wasd.w = 0;
                break;
            case 68:
                Input.wasd.d = 0;
                break;
            case 83:
                Input.wasd.s = 0;
                break;
            //Other Inputs
            case 32:
                Input.spaceDown = false;
                break;
            case 187:
                Input.plusDown = false;
                break;
            case 189:
                Input.minusDown = false;
                break;
            case 66:
                Input.bDown = false;
                break;
            case 69:
                Input.eDown = false;
                break;
            case 91:
                Input.CommandDown = false;
                break;
            case 80:
                Input.pDown = false;
                break;
            case 49:
                Input.oneDown = false;
                break;
            //Only Up Inputs
        }
        Input.Horizontal = Input.arrows.right + Input.arrows.left;
        Input.Vertical = Input.arrows.up + Input.arrows.down;
        Input.wasd.Horizontal = Input.wasd.d + Input.wasd.a;
        Input.wasd.Vertical = Input.wasd.w + Input.wasd.s;
    }
    static MouseWheel(evt){
        Input.MouseScrollY = -evt.deltaY;
        evt.preventDefault();
    }
    static MouseMove(evt){
        let rect = canvas.getBoundingClientRect();
        Input.mousePosition.x = evt.clientX - rect.left;
        Input.mousePosition.y = -((evt.clientY - rect.top) - canvas.height);;
    }
    static MouseDown(){
        Input.mouseDown = true;
    }
    static MouseUp(){
        Input.mouseDown = false;
    }
    static MouseScrollY = 0;
    static leftClick = false;
    static mousePosition = {
        "x" : 0,
        "y" : 0
    }
}