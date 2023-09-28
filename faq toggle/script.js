const btn=document.querySelector('.faq-toggle')
btn.addEventListener('click',(e)=>{
   show()
   console.log(e.target)
})
let value=true;
const text1=document.querySelector('.faq-text')
function show(){
    if(value){
   
    text1.style.display='block';
    value=false
    }
    else{
        value=true
        text1.style.display='none'

}
}