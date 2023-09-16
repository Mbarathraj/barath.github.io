document.addEventListener('DOMContentLoaded',()=>{
    const container=document.querySelector('.container')
   const allborder=document.getElementById('all')
   const code=document.getElementById('code');
   const btn=document.getElementById('btn')
   
   let coding="test";
   let border='solid';
   function updatevalue(){
      document.getElementById('all_value').innerText=this.value+'px';
     coding=`border-radius:${this.value}px;
border-style:${border};`
     code.value=coding
     container.style.cssText=coding;
   }
   btn.addEventListener('click',()=>{
  document.querySelector('textarea').select();
  document.execCommand('copy')
  alert('copied')
   })
   allborder.addEventListener("mousemove",updatevalue)
   allborder.addEventListener("change",updatevalue)
   updatevalue()
   const selection=document.getElementById('selection')
   selection.addEventListener('change',function(){
     border=this.value;
     updatevalue();
   })
});