const calendar=document.querySelector('.calender')
const mon=document.getElementById('month')

let navigation=0;

let events=localStorage.getItem("events") ? JSON.parse(localStorage.getItem("events")):[]

const weekdays=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]

function calloader(){
   const dt=new Date()
   if(navigation!=0){
    dt.setMonth(new Date().getMonth()+navigation)
   }
   const day=dt.getDate()
   console.log(day)
   const month=dt.getMonth()
   const year=dt.getFullYear()
  console.log(day,year,month)
   //Month and year show
   mon.innerText=`${dt.toLocaleDateString("en-us",{
    month:"long",
   })} ${year}`

   //total days of the month
   const dayInMonth=new Date(year,month + 1,0).getDate()
 
  //starting day of the month
  const firstDayOfMonth=new Date(year,month,1)

  
  //create calender
  //find empty days
  const dateText=firstDayOfMonth.toLocaleDateString('en-us',{
    weekday:"long",
    year:"numeric",
    month:"numeric",
    day:"numeric"
  })

  calendar.innerHTML=""
  const emptyday=weekdays.indexOf(dateText.split(", ")[0].toLocaleLowerCase());
  for(let i=1;i<=dayInMonth+emptyday;i++){
    const daybox=document.createElement('div')
    const event =document.createElement('div')
    event.classList.add('event')
    daybox.classList.add("day")
    const monthval=month+1<10? "0"+(month+1):month+1
    const dateval=i-emptyday<10?"0"+(i-emptyday):(i-emptyday)
    const datetext=`${dateval}-${monthval}-${year}`
    if(i>emptyday){
    daybox.innerText=i-emptyday
    daybox.append(event)
    const eventoftheday=events.find((e)=>e.date==datetext)
    if(eventoftheday!==undefined){
      console.log(eventoftheday.title)
       event.innerText=eventoftheday.title;
    }
    if(i-emptyday==day && navigation==0){
        daybox.id="cday"
    }
    }
    else{
        daybox.classList.add('plain')
    
    } 
    calendar.append(daybox)



let obj
let count=0;

  }
  let days=document.querySelectorAll('.day')
  const model=document.querySelector('.model')
  const close1=document.querySelector('.close')
  const close2=document.querySelector('.close1')
  const model1=document.querySelector('.model1')
  const input=document.querySelector('input')
  const add=document.getElementById('add')
  close1.addEventListener('click',()=>{
    model.style.display="none"
})
close2.addEventListener('click',()=>{
    model1.style.display="none"
})
  days.forEach((day)=>{
    let count=0
    day.addEventListener('click',()=>{
    
      const DatE=day.innerText<10 ?"0"+day.innerText:day.innerText
      const MontH=month+1<10 ?"0"+(month+1):(month+1)
      const datetext=`${DatE}-${MontH}-${year}`
        if(day.children[0].outerText!=""){
            model1.style.display="flex"
            const remove=document.getElementById('remove')
            remove.addEventListener('click',()=>{
                day.children[0].innerHTML="";
                model1.style.display="none"
                removing(day,month,year)
            })
        }
        else{
            model.style.display="flex"
            const input=document.querySelector('input')
            input.addEventListener('keyup',()=>{
               const add=document.getElementById('add')
               add.addEventListener('click',()=>{
                   obj=
                    {
                      "date":`${datetext}`,
                      "title":`${input.value}`
                    }
                    if(count==0){
                        store(obj,day,input.value)
                    }
                    count++
                  model.style.display="none"
               })
            })
        }
    })
  

})

}
calloader()
function buttons(){
  const next=document.getElementById('btnext')
  const prev=document.getElementById('btnback')
  prev.addEventListener('click',()=>{
     navigation--;
     calloader()
  })
  next.addEventListener('click',()=>{
    navigation++;
    calloader()
  })
}
buttons()

 



function store(obj,d,i){
  d.children[0].innerText=i
  const e=localStorage.getItem("events") ? JSON.parse(localStorage.getItem("events")):[]
  e.push(obj)
  console.log(e)
  localStorage.setItem("events",JSON.stringify(e))

}
function removing(day,month,year){
  const e=localStorage.getItem("events") ? JSON.parse(localStorage.getItem("events")):[]
    const DatE=day.innerText<10 ?"0"+day.innerText:day.innerText
    const MontH=month+1<10 ?"0"+(month+1):(month+1)
    const datetext=`${DatE}-${MontH}-${year}`
   
     const arr=e.filter((date) => date.date!=datetext)
     localStorage.setItem("events",JSON.stringify(arr))
  
}









































//add & remove events


   