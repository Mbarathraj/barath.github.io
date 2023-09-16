const add=document.querySelector('.btn-add');
const container=document.querySelector('.container')
let i=0
function getcontent(){
    return JSON.parse(localStorage.getItem('local.app') || "[]")
}
getcontent().forEach(element => {
   const text= createtextarea(element.id,element.content);
    container.insertBefore(text,add);

});
function createtextarea(id,content){
    const textareas=document.createElement('textarea')
    textareas.classList.add('sticky')
    textareas.placeholder="enter your notes"
    textareas.value=content
    textareas.addEventListener('change',()=>{
        updatecontent(id,textareas.value);
    })
    return textareas
}
function addsticky(){
    const notes=getcontent();
    i++;
    const obj={
        id:i,
        content:""
    }
   const text= createtextarea(obj.id,obj.content)
   container.insertBefore(text,add)
   notes.push(obj)
  addcontent(notes)
}
add.addEventListener('click',()=>addsticky())

function addcontent(notes){
    localStorage.setItem('local.app',JSON.stringify(notes))
}
function updatecontent(id,value){
    const notes=getcontent()
    const updateElement=notes.filter((note => note.id==id))[0];
    updateElement.content=value
    addcontent(notes)

}