let button=document.querySelector('.search').querySelector('button');
button.addEventListener("click",()=>{
  let task=document.querySelector('input').value;
  addTask(task);
  document.querySelector('input').value="";
})


function addTask(task){
  
  let tasks=document.querySelector('.tasks');
  tasks.innerHTML+=`<div class='task'><img src='unchecked.png' class='uncheck'> <h4>${task}<div class='line'></div></h4><img src='cross.png' class='cross'></div>`

  
  let check_uncheck=document.querySelectorAll('.uncheck');
  
  for(let i of check_uncheck){
    i.addEventListener("click",()=>{
      
      
      
      
if(i.classList.contains('uncheck')){
  i.src="checked.png";
  i.classList.remove('uncheck');
  i.classList.add('check');
  i.parentElement.querySelector('.line').classList.toggle('lineup');
}
      else{
        i.src="unchecked.png";
        i.classList.remove('check');
        i.classList.add('uncheck');
        i.parentElement.querySelector('.line').classList.toggle('lineup');
      }
    })
  }

let crosses=document.querySelectorAll('.cross');
for(let cross of crosses ){
  cross.addEventListener("click",()=>{
    cross.parentElement.remove();
  })
}
 }
  
  
 




