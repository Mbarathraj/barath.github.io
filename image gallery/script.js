document.addEventListener('DOMContentLoaded',
function (){
    const imgs=document.querySelectorAll('.images img')
    const model=document.querySelector('.model')
    const close=document.getElementById('close')
    const imgbox=document.querySelector('.img-box')
    const image=document.getElementById('img')
    const prev=document.getElementById('prev')
    const next=document.getElementById('next')
    imgs.forEach((img,index)=>{
        img.addEventListener('click',()=>{
            model.classList.add('show')
              image.src=img.src
              prev.addEventListener('click',()=>{
                  if(index==0){
                    index=12
                  }
                  index--;
                  image.src=imgs[index].src
              })
              next.addEventListener('click',()=>{
                
                if(index==11){
                  index=-1;
                }
                index++;
                image.src=imgs[index].src
            })
        })
    })

    close.addEventListener('click',()=>{
        model.classList.remove('show')
    })
}
)