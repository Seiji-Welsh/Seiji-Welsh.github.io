let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
let x = 0;
let y = 0;
let v = 0;
let i = 1;
/*setInterval(function(){
    console.log(i)
    i++;
}, 30);*/
let a = async function(){
    for(;;){
        console.log(i);
        i++;
        await sleep(30);
    }
}