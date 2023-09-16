const imgs=document.querySelectorAll('.img a')
let imgid=1;
imgs.forEach((img)=>{
  img.addEventListener('click',(e)=>{
    e.preventDefault()
    imgid=img.dataset.id
    console.log(imgid)
    moveimg(imgid);
  })

})
function moveimg(id){
    const imgwidth=document.querySelector('.main-img img:first-child').clientWidth
    
    const imgframe=document.querySelector('.main-img')
    if(id==1){
        imgframe.style.transform=`translateX(450px)`
    }
    if(id==2){
        imgframe.style.transform=`translateX(0px)`
    }
    if(id==3){
        imgframe.style.transform=`translateX(-450px)`
    }

    
}