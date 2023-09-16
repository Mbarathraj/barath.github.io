const items=document.querySelectorAll('.item')
const cart=document.querySelector('.cart')
const cartClose=document.querySelector('.close')
let cartCount=document.querySelector('.cart-count')
let count=0;
items.forEach((item,index1)=>{
    item.querySelector('.btn').addEventListener("click",(e)=>{
      
         cart.innerHTML+=`
         <div class="cart-content">
          <img src="${item.children[0].children[0].src}" alt="">
          <div class="detail-box" data-id='${item.getAttribute('data-filter')}'>
              <div class="food-name">
                ${item.children[1].children[0].innerText}
              </div>
              <div class="price-box">
                  <div class="food-price">${item.children[1].children[1].innerText}</div>
                  <div class="cart-amt">Total ${item.children[1].children[1].innerText}</div>
              </div>
              <label for="cart-quantity">Quantity:</label>
              <input type="number" name="" value="1" id="cart-quantity" min="1">
              <ion-icon name="trash-outline" class="del"></ion-icon>
              <br>
              <button class="buy">buy</button>
          </div>
      </div>`
      count++;
 
      cartCount.innerHTML=count
      const quantity=document.querySelectorAll('#cart-quantity')
      let tAmt=document.querySelectorAll('.cart-amt')
      const price=document.querySelectorAll('.food-price')
      e.target.classList.add('disabled')
      const added=document.querySelectorAll('.added')
      added[index1].style.display="block"
      quantity.forEach((qn,index)=>{
        qn.addEventListener('change',()=>{
               let qtAmt=parseInt(tAmt[index].innerHTML.substring(13))
               let qprice=parseInt(price[index].innerHTML.substring(7))
               qtAmt=qn.value*qprice
               tAmt[index].innerHTML=`Total Price:${qtAmt}`
             
        })
       
      })
      const cartContent=document.querySelectorAll('.cart-content')
      const del=document.querySelectorAll('.del')
      del.forEach((dele,index2)=>{
        dele.addEventListener('click',()=>{
          let filter=(cartContent[index2].querySelector('.detail-box').getAttribute('data-id'))
          cartContent[index2].style.display="none"
        items[filter-1].querySelector('.added').style.display="none"
        items[filter-1].querySelector('.btn').classList.remove('disabled')
          cartCount.innerHTML=--count
        })
      })
      const buy=document.querySelectorAll('.buy')
      buy.forEach((b,index)=>{
        b.addEventListener('click',()=>{
          alert('Order Placed')
          
        })
      })
      
    
    })
  
})
const cartIcon=document.getElementById('icon')
cartIcon.addEventListener('click',()=>{
  cart.classList.add('active')
})
function cartclosing(){
  cart.classList.remove('active')
}




