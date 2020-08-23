class Time{
    static WaitAndRepeat(handler, waitTime, repeatAmount, args, postHandler, postArgs){
        let i = 1;
        repeater();
        function repeater(){
            Time.allCurrentTimeouts.push(setTimeout(timeOut, waitTime / TimeScale));
            function timeOut(){
                i++;
                if(args != undefined) handler(...args);
                else handler();
                if(i <= repeatAmount){
                    Time.allCurrentTimeouts.push(setTimeout(timeOut, waitTime / TimeScale));
                }
                else{
                    if(postHandler != undefined)
                    if(postArgs != undefined) postHandler(...postArgs);
                    else postHandler();
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