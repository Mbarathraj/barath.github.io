const pizza=document.querySelector('.pizza')
const cake=document.querySelector('.cake')
const ice=document.querySelector('.ice')
const all=document.querySelector('.all')
const box1=document.querySelector('.box1')
const box2=document.querySelector('.box2')
const box3=document.querySelector('.box3')
const input=document.querySelector('input')
const box=document.querySelectorAll('.box')
const btn=document.querySelector('.btn');
input.addEventListener('keyup',(e)=>{
    box1.classList.remove('none')
    box2.classList.remove('none')
    box3.classList.remove('none')
    let key=(e.target.value.toLowerCase().trim())
   
    box.forEach((ele)=>{
        const data=ele.dataset.item; 
        if(data.includes(key)){
            ele.style.display='inline-block'
           
        }
        else{
            ele.style.display='none'
        }
    })

})
all.addEventListener('click',()=>{
   box1.classList.remove('none')
   box2.classList.remove('none')
   box3.classList.remove('none')
})
pizza.addEventListener('click',()=>{
    box1.classList.remove('none')
    box2.classList.add('none')
    box3.classList.add('none')
    
})
cake.addEventListener('click',()=>{
    box2.classList.remove('none')
    box1.classList.add('none')
    box3.classList.add('none')
    
})
ice.addEventListener('click',()=>{
    box3.classList.remove('none')
    box1.classList.add('none')
    box2.classList.add('none')
    
})
