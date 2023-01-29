const title = document.getElementById("title");
const desc = document.getElementById("description");
const form = document.querySelector("form");
const container = document.querySelector(".container");

let tasks =[];

function showAllAddTasks(){
    tasks.forEach((value,index)=>{
       const div=document.createElement("div")
       div.setAttribute("class","task");

       const innerDiv=document.createElement("div")
       div.append(innerDiv);

       const p=document.createElement("p")
       p.innerText=value.title;
       innerDiv.append(p);

       const span=document.createElement("span")
       span.innerText=value.desc;
       innerDiv.append(span);

       const btn=document.createElement("button")
       btn.setAttribute("class","deleteBtn");

       btn.innerText ="-";
       
       btn.addEventListener("click",()=>{
        removeTasks();
        tasks.splice(index,1);
        showAllAddTasks(); 
       })
       div.append(btn);
       container.append(div);
    })
}

function removeTasks(){
    tasks.forEach(()=>{
        const maindiv=document.querySelector(".task")
        maindiv.remove();
    })

    
}





form.addEventListener("submit",(e)=>{
    e.preventDefault();
    removeTasks();
    tasks.push({
        title : title.value,
        desc: desc.value,
    })

    showAllAddTasks();
    
});
