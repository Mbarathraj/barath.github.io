const form=document.querySelector('form')
const output=document.querySelector('.output')
const spinner=document.querySelector('#loading')
const qrcodeElement=document.getElementById('qrcode')
const save=document.getElementById('save')
function genrateqr(e){
    e.preventDefault()
    const url=document.getElementById('url').value
    const clrDark=document.getElementById('colorDark').value
    const clrLight=document.getElementById('colorLight').value
    if(url===""){
        alert("please enter your url")
    }
    else{
        spinner.style.display="flex"
        setTimeout(()=>{
           spinner.style.display="none"
          document.getElementById('qrcode').innerHTML=""
           var qrcode = new QRCode("qrcode", {
            text: url,
            width: 200,
            height: 200,
            colorDark : clrDark,
            colorLight : clrLight,
            correctLevel : QRCode.CorrectLevel.H
        });
        },2000)  
    }
}
function download() {
    const imgsrc=qrcodeElement.querySelector('img').src
    save.href=imgsrc
}
form.addEventListener('submit',genrateqr)

save.addEventListener('click',(e)=>{
    download()
    setTimeout(() => {
    save.download='qrcode'
    }, 1000);
    
})