
window.onload= async function(){
    const states=document.getElementById('state')
    const districts=document.getElementById('district')
    districts.disabled=true
    const respose=await fetch('./statesdis.json')
    const data= await respose.json()
    data.states.forEach((value)=>{
        states.innerHTML+=`<option value="${value.state}"> ${value.state}</option>`
    })
    states.addEventListener('change',(e)=>{
        e.preventDefault()
        districts.disabled=false
        const selectedstate=e.target.value
        console.log(selectedstate)
        districts.innerHTML=`<option value="">${'Select District'}</option>`
        data.states.forEach((value)=>{
                if(value.state==selectedstate)
                     value.districts.forEach((val)=>{
                        districts.innerHTML+=`<option value="${val}"> ${val}</option>`
                    })
                  
        })
    })
}
