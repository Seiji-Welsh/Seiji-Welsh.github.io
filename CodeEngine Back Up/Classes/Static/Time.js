class Time{
    static WaitAndRepeat(handler, waitTime, repeatAmount, args, postHandler, postArgs){
        let i = 1;
        repeater();
        function repeater(){
            Time.allCurrentTimeouts.push(setTimeout(timeOut, waitTime));
            function timeOut(){
                i++;
                handler(...args);
                if(i <= repeatAmount){
                    Time.allCurrentTimeouts.push(setTimeout(timeOut, waitTime));
                }
                else{
                    if(postHandler != undefined)
                    postHandler(...postArgs);
                    return;
                }
            }
        }
    }
    static allCurrentTimeouts = [];
    static TimePerFrame = 0;
}
function test(){
    Time.WaitAndRepeat(function(message){
        console.log(message);
    }, 300, 10, "BRUH")
}