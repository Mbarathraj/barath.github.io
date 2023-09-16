const togglebtn=document.querySelector('#togglebtn')
const input=document.querySelector('.container input')
let password=true;
togglebtn.addEventListener('click',()=>{
    if(password){   
       input.type='text'
       //input.setAttribute("type","text")
       password=false
       togglebtn.classList='fa fa-eye'
    }
    else{
        input.type='password'
        password=true
        togglebtn.classList='fa fa-eye-slash'
    }
})