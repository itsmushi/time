
var currentMin=0;
var currentSec=0;
$(document).ready(()=>{
    
    $(".Reset").attr("disabled", "disabled")
    $("button").click(function(){
        var clicked=$(this).text()
        var interval

        runTime(clicked)
    })
})

function runTime(clicked){
    $(".Reset").removeAttr("disabled")
     
    var minutes=0
    var seconds=0
    
    if(clicked=="Start"){
        //change the text in the start button to stop
        $(".1").text("Stop")

        resume(minutes,seconds)
       
        
    }else if(clicked=="Reset"){
        var seconds=0
        var minutes=0
        $(".sec").text("00")
        $(".min").text("00")
        $(".1").text("Start")
        clearInterval(interval)
        $(".Reset").attr("disabled", "disabled")
    }
    else if(clicked=="Stop"){
        $(".1").text("Continue")
        clearInterval(interval)
    }
    else if(clicked=="Continue"){
        $(".1").text("Stop")
        resume(currentMin,currentSec)
    }
}

//adding zero function for numbers less than 10
function displayProper(val){
    seconds=val
    if(seconds<10){
        secondsString="0"+seconds
    }else{
        secondsString=""+seconds
    }
    return secondsString
}

//function that do the counting of time
function resume(minutes,seconds){
    // secondsString=displayProper(seconds)
    // minutesString=displayProper(minutes)
   
    interval=setInterval(() => {
        secondsString= displayProper(seconds)
        $(".sec").text(secondsString)
        minutesString=displayProper(minutes)
        $(".min").text(minutesString)
        
        seconds=seconds+1;
        currentSec=seconds;
        
        if(seconds==60){
            minutes=minutes+1
            seconds=0;
            secondsString="0"+seconds
            currentMin=minutes
            
        }
    }, 1000);
   
}
