const data = [
    {
      id: 1,
      name: "Fire Boltt Ninja 2",
      img: "https://m.media-amazon.com/images/I/617eiZeFtNL._SL1500_.jpg",
      amt: 1599,
      seller: "Boltt Store",
      catagory: "Watch",
    },
  
    {
      id: 2,
      name: "Noise Pulse Go",
      img: "https://m.media-amazon.com/images/I/61akt30bJsL._SL1500_.jpg",
      amt: 1300,
      seller: "Noise Store",
      catagory: "Watch",
    },
  
    {
      id: 3,
      name: "boAt Xtend Pro",
      img: "https://m.media-amazon.com/images/I/61ZuL8CUigL._SL1500_.jpg",
      amt: 2799,
      seller: "Rajesh Watchs",
      catagory: "Watch",
    },
    {
      id: 4,
      name: "Lenovo Tab M8",
      img: "https://m.media-amazon.com/images/I/71SvqTFPXJL._SL1500_.jpg",
      amt: 9270,
      seller: "Stonehenge Retail",
      catagory: "Tablets",
    },
    {
      id: 5,
      name: "Honor PAD X8",
      img: "https://m.media-amazon.com/images/I/710G-VKcgtL._SL1500_.jpg",
      amt: 12999,
      seller: "Honor india",
      catagory: "Tablets",
    },
  
    {
      id: 6,
      name: "IKALL N9 ",
      img: "https://m.media-amazon.com/images/I/7185GL6hPlL._SL1500_.jpg",
      amt: 3999,
      seller: "IKALL Store",
      catagory: "Tablets",
    },
  
    {
      id: 7,
      name: "Oppo Pad Air",
      img: "https://m.media-amazon.com/images/I/513FD4w8hGL._SL1500_.jpg",
      amt: 15999,
      seller: "Oppo Store",
      catagory: "Tablets",
    },
    {
      id: 8,
      name: "Acer EK220Q",
      img: "https://m.media-amazon.com/images/I/8150iUXkc5L._SL1500_.jpg",
      amt: 6249,
      seller: "Accer Store",
      catagory: "Monitors",
    },
    {
      id: 9,
      name: "Samsung 24",
      img: "https://m.media-amazon.com/images/I/81TjRLHaz1L._SL1500_.jpg",
      amt: 9799,
      seller: "Samsung Store",
      catagory: "Monitors",
    },
  
    {
      id: 10,
      name: "ZEBRONICS AC32FHD ",
      img: "https://m.media-amazon.com/images/I/813Y1TIZwfL._SL1500_.jpg",
      amt: 12799,
      seller: "ZEBRONICS Store",
      catagory: "Monitors",
    },
  ];
const productsContainer=document.querySelector('.products')
const menu=document.getElementById('menu')
const menuContent=document.querySelector('.menu-content')
const closed=document.getElementById('close')
menu.addEventListener('click',()=>{
    menuContent.style.display="block"
    closed.style.visibility="visible"
    menu.style.visibility="hidden"
    menuContent.style.display="block";
   
})
closed.addEventListener('click',()=>{
    menuContent.style.display="none"
    closed.style.visibility="hidden";
    menu.style.visibility="visible";
   

})
function display(products){
  if(products.length){
  const productsDetails=products.map((product)=>
    ` <div class="product">
    <div class="pic">
        <img src="${product.img}" alt="" class="img">
    </div>
    <div class="product-details">
        <span class="product-Name">${product.name}</span>
        <span class="amt">Rs.${product.amt}</span>
        <span class="seller">${product.seller}</span>
     </div>
</div>`
  ).join("")
  productsContainer.innerHTML=productsDetails
}
else{
 productsContainer.innerHTML=`<h3 id="nota">Product is Not Available</h3>`
}
}
display(data)

dispcat(data)
function dispcat(products){
  const head=  `<h3>Category</h3>
    <ul id="Category">
    </ul>
    <h3>Price Range</h3>
    <div class="price">
        <input type="range" value="50" id="range">
        <span class="priceValue">500</span>
    </div>`
    menuContent.innerHTML+=head
    const catagory=document.getElementById('Category')
 const allCat=products.map((product)=>product.catagory)
 const newcat=["All", ...allCat.filter((product,index)=>{
    return allCat.indexOf(product)==index
 })]
catagory.innerHTML=newcat.map((cat)=> `<li>${cat}</li>`).join("")
catagory.addEventListener('click',(e)=>{
  const selected=e.target.textContent;
  selected==="All" ? display(data) : display(data.filter((product)=> product.catagory==selected))
})
 
}
const range=document.querySelector('#range')
const priceValue=document.querySelector('.priceValue')

function setprice(){
  const priceList=data.map((product)=> product.amt)
  const min=Math.min(...priceList)
  const max=Math.max(...priceList)
  range.min=min;
  range.max=max;
  priceValue.textContent="Rs:"+min
  range.addEventListener('input',(e)=>{
    let userpricevalue=e.target.value
    display(data.filter((product)=> product.amt<= (userpricevalue)))
    priceValue.textContent="Rs"+e.target.value

  })
}
setprice()

const search=document.getElementById('search')
search.addEventListener('keyup',(e)=>{
  const value=e.target.value.toLowerCase().trim()
  if(value){
      display(data.filter((product)=> product.name.toLowerCase().indexOf(value)!=-1))
  }
  else{
    display(data)
  }
  
})