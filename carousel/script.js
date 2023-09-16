const next=document.querySelector('.btn-next')
const prev=document.querySelector('.btn-prev')
const imgs=document.querySelectorAll('.slider-items')
let c=0;
if(c==0){
    prev.classList.add('hidden')
}
next.addEventListener('click', ()=>{
    prev.classList.remove('hidden')
    if(c<imgs.length-1){
     imgs[c].classList.remove('active')
     imgs[c+1].classList.add('active')
    
    }
    c=c+1;
    if(c==imgs.length-1){
        next.classList.add('hidden')
    }
   console.log(c)
})

prev.addEventListener('click',()=>{
    next.classList.remove('hidden')
    if(c>0){
        imgs[c].classList.remove('active')
        imgs[c-1].classList.add('active')
        c--;
    }
   
    if(c==0){
        prev.classList.add('hidden')
    }
})