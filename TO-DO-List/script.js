   let pending = 0;
   let completed = 0; 

function addtask(){
   let task=document.getElementById("task").value;
   document.getElementById("task").value="";
   
    if(task.trim() ===""){
      alert("Please enter the task");
      return;
   }
    

   let li=document.createElement("li");
   li.textContent=task;

   let list=document.getElementById("tasklist");
   list.append(li);
    
   pending++;
   updateCounter();
   let editBtn=document.createElement("button");
   editBtn.textContent="Edit";
   li.append(editBtn);

   editBtn.className = "editBtn";

   let delBtn = document.createElement("button");
   delBtn.textContent="Delete";
   li.append(delBtn);

   delBtn.className="delBtn";

   let check=document.createElement("input");
   check.type="checkbox";
   li.prepend(check);
   
   editBtn.onclick=function(){
      document.getElementById("task").value = task;
      li.remove();
   }
   delBtn.onclick=function(){
      li.remove();
   }
   
   check.onchange=function(){
      if(check.checked){
         li.style.textDecoration="line-through";
         li.style.color = "gray";
         li.style.opacity = "0.6";
         completed++;
         pending--;
      }
      else{

         li.style.textDecoration="none";
         li.style.color="black";
         li.style.opacity=1; 
         pending++;
         completed--;

      }
      updateCounter();
      
   }
}
function updateCounter(){

    document.getElementById("pending").textContent = pending;

    document.getElementById("completed").textContent = completed;

}