let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
let data = [];
let lineWidth = 3;
let currentI;
let setup = function(){
    data = [];
    for(let i = 0; i < canvas.width / lineWidth; i++){
        data.push(Math.random());
    }
}
let draw = function(color){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for(let i = 0; i < data.length; i++){
        ctx.fillStyle = color;
        //if(currentI + 1 <= i){
        //    ctx.fillStyle = "lime";
        //}
        if(currentI + 1 == i){
            ctx.fillStyle = "red";
        }
        ctx.fillRect(canvas.width - (i * lineWidth), canvas.height, lineWidth, data[i] * -canvas.height);
    }
}
let quickSort = async function(){
    while(true){
        let repeat = false;
        for(let i = 0; i < data.length; i++){
            currentI = i;
            if(data[i] < data[i + 1]){
                let storedI = data[i];
                data[i] = data[i + 1];
                data[i + 1] = storedI;
                if(i % 100 == 0){
                    draw("white");
                }
                repeat = true;
                await sleep(200);
                //break;
            }
        }
        if(!repeat){
            draw("lime")
            return;
        }
    }
}
setup();
draw("white");
addEventListener("keydown", async function(e){
    if(e.keyCode == 32){
        setup();
        draw("white");
        //await sleep(300);
        for(let i = 0; i < data.length; i++){
            quickSort();
        }
        quickSort();
    }
    else if(e.keyCode == 37){
        canvas.width -= 10;
        console.log("ferf")
        draw("lime");
    }
    else if(e.keyCode == 39){
        canvas.width += 10;
        draw("lime");
    }
});