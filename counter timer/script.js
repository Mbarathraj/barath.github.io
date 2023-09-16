const day=document.getElementById('days')
const hours=document.getElementById('hours')
const min=document.getElementById('min')
const sec=document.getElementById('sec')
function counter(){
const currentyear= new Date().getFullYear()
const currentdate=new Date()
const nextyear=new Date(`January 1 ${currentyear} 00:00:00`)

const diff=nextyear-currentdate
const noofdays=Math.floor((diff/1000/60/60/24))
const h=Math.floor(diff/1000/60/60)%24
const m=Math.floor(diff/1000/60)%60
const s=Math.floor(diff/1000)%60
day.innerText=noofdays<10?"0"+noofdays:noofdays;
hours.innerText=h<10?"0"+h:h;
min.innerHTML=m<10?"0"+m:m;
sec.innerHTML=s<10?"0"+s:s;
}
setInterval(counter,1000)