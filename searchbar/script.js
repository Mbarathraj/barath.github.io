const suggetions=document.querySelector('.suggestions')
const input=document.getElementById('search')
input.addEventListener('keyup',filtersugg)
input.addEventListener('click',()=>{
    input.select()
})
const body=document.querySelector('html').addEventListener('click',()=>{
     suggetions.innerHTML=""
})
async function filtersugg(){
    const response=await fetch('./search.json')
    const keylist=await response.json()
    let list=[]
    let val=this.value;
    if(val.length){
    list= keylist.filter((key)=>{
        return key.search.toLowerCase().includes(val.toLowerCase())})
       showsuggestion(list)
    }   
    else{
        suggetions.innerHTML=""
    }
}
function showsuggestion(list){
    const output=list.map((list)=>{
        return `<li onclick='show(this)'>${list.search}</li>`
    })
    suggetions.innerHTML=`<ul>${output.join("")}</ul>`
}
function show(list){
    input.value=list.innerHTML
    suggetions.innerHTML=""
}
