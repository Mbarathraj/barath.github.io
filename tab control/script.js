const navbar=document.querySelector('.nav-bar')
const contents=document.querySelectorAll('.content')
navbar.addEventListener('click',barclick)

function barclick(event){
    const activebar=document.querySelectorAll('.active')
    activebar.forEach((bar)=>{
        bar.classList.remove('active')
    })
    event.target.classList+=' active'
    contents.forEach((content)=>{
        if(event.target.name==content.id){
            content.classList.add('conactive')
        }
        else{
            content.classList.remove('conactive')
        }
    })
    
}