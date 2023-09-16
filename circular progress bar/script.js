const array=[
    {
        course:"HTML",
        percentage:99,
        color:"red"
    },
    {
        course:"CSS",
        percentage:70,
        color:"purple"
    },

]
const container=document.querySelector('.container')
array.forEach((arr)=>{
  container.innerHTML+=` <div class="progress-bar">
  <div class="circular-progress">
      <span id="value" style="color:${arr.color}">0%</span>
  </div>
  <label for="" id="text" style="color:${arr.color}">${arr.course}</label>
</div>`
})
const progress=document.querySelectorAll('.progress-bar')
progress.forEach((prog,index)=>{
    let progStartValue=0;
    let progEndValue=array[index].percentage
    let speed=50
    let progTimer=setInterval(()=>{
        progStartValue++
        if(progStartValue==progEndValue){
            clearInterval(progTimer)
        }
        prog.querySelector('.circular-progress').style.background=`conic-gradient(${array[index].color} ${3.6 *progStartValue}deg, #cccc 0deg)`;
        prog.querySelector('#value').innerHTML=progStartValue+"%"
    },speed)
})