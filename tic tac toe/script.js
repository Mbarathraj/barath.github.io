const boxs=document.querySelectorAll('.box')
const statustxt=document.querySelector('.status')
const restart=document.querySelector('.restart')
let option=["","","","","","","","",""]
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
let running=false
const x=`<img src="./x-png-35399.png" alt="">`
const o=`<img src="./pngimg.com - letter_o_PNG129.png" alt="">`
let currentplayer=x;
let player="X"
document.querySelector('.play').addEventListener('click',init)

function init(){
  boxs.forEach((box)=>{
    box.addEventListener('click',boxclick)
    running=true
    statustxt.textContent=`${player} your turn`
    document.querySelector('.restart').addEventListener('click',restartGame)
  })
}
function boxclick(){
    const index=this.dataset.index
    if(option[index]!="" || !running){
        return
    }
    updatebox(this,index)
    checkWinner()
}
function updatebox(box,index){
   option[index]=player;
   box.innerHTML=currentplayer
}
function checkWinner(){
    let isWon=false
    for(let i=0;i<win.length;i++){
       const condition=win[i];
       const box1=option[condition[0]]
       const box2=option[condition[1]]
       const box3=option[condition[2]]
       if(box1=="" || box2=="" || box3==""){
        continue
       }
       else if(box1==box2 && box2==box3){
       isWon=true;
       }
    }
    if(isWon){
        statustxt.textContent=`${player} is Won`
        running=false
    }
    else if(!option.includes("")){
        statustxt.textContent="game is draw"
        running=false
    }
    else{
        changeplayer()
    }
}
function changeplayer(){
    player=(player=="X") ? "O":"X";
    currentplayer=(currentplayer==x) ? o:x;
    statustxt.textContent=`${player} your turn`
}
function restartGame(){
     option=["","","","","","","","",""]
     player="X"
     currentplayer=x
     statustxt.textContent="Play Now"
     boxs.forEach((box)=>{
        box.innerHTML=""
     })
}
