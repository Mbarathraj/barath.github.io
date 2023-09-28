const form=document.getElementById('form')
const username=document.getElementById('UserName')
const email=document.getElementById('Email')
const pass1=document.getElementById('Password')
const pass2=document.getElementById('Password1')
const error=document.getElementById('error')

function checkRequired(inputs){
    inputs.forEach((input)=>{
        if(input.value.trim() === ""){
            errorvalue(input,`${getname(input)} is Required`)
        }
        else{
            successvalue(input)
        }
    })
}
function getname(input){
    return input.id
}
function errorvalue(input,message){
    const formgroup=input.parentElement;
    formgroup.className='form-group error';
    const p=formgroup.querySelector('p')
    p.innerHTML=message
}
function successvalue(input){
const formgroup=input.parentElement;
formgroup.className='form-group success';
const p=formgroup.querySelector('p')
p.innerHTML=""
}
function cheklength(input){
    if(input.value.trim().length<5 || input.value.trim().length >15 ){
        errorvalue(input,'User name atleast 5 characters and atmost 15 characters')
    }
}
function checkpassword(input){
    if(!input.checksPassword){
        errorvalue(input,'password 1 u 1 l 1 s 1n')
    }
    if(input.value.trim().length<6 || input.value.trim().length>15){
        errorvalue(input,'password must be 6 characters and less than 15 characters')
    }
}
function checkpassword2(input1,input2)
{   
    if(input1.value!=input2.value){
        errorvalue(input2,'Password must be same')
    }
}
String.prototype.checksPassword=function(){
    return !!this.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
}
form.addEventListener('submit',function(e){
    e.preventDefault()
    checkRequired([username, email, pass1 ,pass2])
    if(username.value!=""){
        cheklength(username)
    }
    if(pass1.value!=""){
        checkpassword(pass1)
    }
    if(pass2.value!=""){
        checkpassword2(pass1,pass2)
    }
})
