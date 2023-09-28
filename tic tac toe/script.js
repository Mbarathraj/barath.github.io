const boxs=document.querySelectorAll('.box')
const restart=document.querySelector('.restart')
const statustxt=document.querySelector('.status')
 let o=`<img src="./pngimg.com - letter_o_PNG129.png">`
 let x=`<img src="./x-png-35402 - Copy.png">`
 let currentplayer=x;
let running=false
let player="X"
const win=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
let options=["","","","","","","","",""]
init()
function init(){
    boxs.forEach((box)=>{
        box.addEventListener('click',boxclick)
        restart.addEventListener('click',restartgame)
        running=true
        statustxt.textContent=player+" your turn"
})
}
function boxclick(){
   const index=this.dataset.index
   if(options[index]!="" || !running){
     return
   }
   console.log('hi')
    updatebox(this,index)
    checkwinner()
   
}
function updatebox(box,index){
      options[index]=player;
      console.log(options)
      box.innerHTML=currentplayer
      
}
function changeplayer(player){
    player=(player=="X") ? "O":"X";
    currentplayer=(currentplayer==x) ? o:x;
    statustxt.textContent=`${player} your turn`

}
function checkwinner(){
  let isWon=false
  console.log("check")
  for(let i=0;i<win.length;i++){
    const condition=win[i]
    const box1=options[condition[0]]
    const box2=options[condition[1]]
    const box3=options[condition[2]]
   if(box1=="" ||box2=="" ||box3==""){
    continue;
   }
    if(box1==box2 && box2==box3){
    isWon=true
    }
  }
  if(isWon){
     statustxt.textContent=`${player} Won`
     running=false
  }
  else if(!options.includes("")){
       statustxt.textContent="game draw"
       running=false
  }
  else{
    changeplayer(player)
  }
}
function restartgame(){
    options=["","","","","","","","",""]
}
