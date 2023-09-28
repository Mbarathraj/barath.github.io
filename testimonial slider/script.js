data = [
    {
        id: 1,
        name: "John Doe",
        img:"https://img.freepik.com/free-photo/young-male-curly-hair-isolated-colorful-shirt-snapping-fingers_141793-30531.jpg?size=626&ext=jpg&ga=GA1.1.721264697.1692273249&semt=ais",
        job_description: "Software Engineer",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        id: 2,
        name: "Jane Smith",
        img:"https://img.freepik.com/free-photo/close-up-view-impressed-young-handsome-caucasian-man-wearing-glasses-isolated-green-wall_141793-80002.jpg?size=626&ext=jpg&ga=GA1.2.721264697.1692273249&semt=ais",
        job_description: "Graphic Designer",
        text: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
    },
    {
        id: 3,
        name: "Michael Johnson",
        img:"https://img.freepik.com/free-photo/brunet-man-wearing-checkered-shirt_273609-19935.jpg?size=626&ext=jpg&ga=GA1.1.721264697.1692273249&semt=ais",
        job_description: "Marketing Manager",
        text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque."
    },
    {
        id: 4,
        name: "Emily Williams",
        img:"https://img.freepik.com/free-photo/medium-shot-smiley-man-with-green-background_23-2149302484.jpg?w=740&t=st=1692798686~exp=1692799286~hmac=57edc8f2f7022bdb2a04baa9f3726fad76b4e28fd1132d68817c52cd6477e380",
        job_description: "Content Writer",
        text: "Fusce consequat arcu at augue faucibus, ut fringilla velit pellentesque."
    },
]
const img=document.querySelector('.pic')
const names=document.querySelector('h3')
const job=document.getElementById('job')
const text=document.querySelector('.text')
const left=document.querySelector('.left')
const right=document.querySelector('.right')
let c=1;
let c1=0;
names.innerText=data[0].name
job.innerText=data[0].job_description
text.innerText=data[0].text
img.children[0].attributes[0].value=data[0].img

left.addEventListener('click',()=>{
   
    if(c1==0){
        c1=data.length;
     } 
     c1--
    img.children[0].attributes[0].value=data[c1].img
    names.innerText=data[c1].name
    job.innerText=data[c1].job_description
    text.innerText=data[c1].text
    console.log(c1)
    
    
})
right.addEventListener('click',()=>{
  
    
    names.innerText=data[c].name
    job.innerText=data[c].job_description
    text.innerText=data[c].text
    img.children[0].attributes[0].value=data[c].img
    c++
    console.log(c)
    if(c==data.length){
        c=0;
     }
})


