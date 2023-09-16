function RunClock(){
    var hrs=new Date().getHours()
    var min=new Date().getMinutes()
    var sec=new Date().getSeconds()
    let txt='AM'
    if(hrs>12){
        hrs-=12;
        txt='PM'
    }
    else if(hrs==0){
            txt='AM'
    }
  hrs=hrs<10?'0'+hrs:hrs;
  min=min<10?'0'+min:min;
  sec=sec<10?'0'+sec:sec;
    document.querySelector('.clock').innerHTML=`${hrs} : ${min} : ${sec} ${txt}`


}
setInterval(RunClock,1000)
