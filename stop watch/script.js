const btnstart=document.querySelector('.btnstart')
const btnstop=document.querySelector('.btnstop')
const btnreset=document.querySelector('.btnreset')
let hrs=min=sec=ms=0,starttimer;
btnstart.addEventListener('click',()=>{
    btnstart.classList.add('btnstart-active')
    btnstop.classList.remove('btnstop-active')
     starttimer=setInterval(()=>{
        ms++;
        if(ms==100){
            sec++;
            ms=0;
        }
        if(sec==60){
            min++;
            sec=0;
        }
        if(min==60){
            hrs++;
            min=0;
        }
        updateDisplay();
    },10);
});
btnstop.addEventListener('click',()=>{
    clearInterval(starttimer);
    btnstart.classList.remove('btnstart-active')
    btnstop.classList.add('btnstop-active')
 
})

btnreset.addEventListener('click',()=>{
    hrs=min=sec=ms=0;
    clearInterval(starttimer)
    updateDisplay()
    btnstart.classList.remove('btnstart-active')
    btnstop.classList.remove('btnstop-active')
 
})

function updateDisplay(){
 
    phrs=hrs<10 ?'0'+hrs:hrs;
    pmin=min<10 ?'0'+min:min;
    psec=sec<10 ?'0'+sec:sec;
    pms=ms<10 ?'0'+ms:ms;
  document.querySelector('.hrs').innerText=phrs
  document.querySelector('.min').innerText=pmin
  document.querySelector('.sec').innerText=psec 
  document.querySelector('.ms').innerText=pms
}