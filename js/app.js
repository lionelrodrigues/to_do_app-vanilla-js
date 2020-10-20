//Selectors
const input = document.querySelector('.todo-input');
const button = document.querySelector('.todo-button');
const list = document.querySelector('.todo-list');
//event listner
button.addEventListener('click',addTodo);
list.addEventListener('click',deleteItem);



//functions
function addTodo(event){
    //prevent form from submitting
    event.preventDefault();
    //to do div
    const todoDiv =document.createElement('div');
    todoDiv.classList.add("todo");
    
    //create li 
    const todoLi = document.createElement('li');
    todoLi.innerText=input.value;
    todoLi.classList.add('todo-item');
    todoDiv.appendChild(todoLi);

    //checkmark 
    const completebutton = document.createElement('button');
    completebutton.innerHTML = '<i class="fas fa-check"></i>';
    completebutton.classList.add('complete-btn');
    todoDiv.appendChild(completebutton);


        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-btn');
        deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
        todoDiv.appendChild(deleteButton);
    list.appendChild(todoDiv);

    //vlear value
    input.value="";


    }
     function deleteItem(event){
        const item = event.target;
        if(item.classList[0]==='delete-btn'){
            const todo = item.parentElement;
            todo.classList.add("fall");
            console.log(todo.classList);
            todo.addEventListener('transitionend',()=>{
                    todo.remove();
            })
        }
        if(item.classList[0]==='complete-btn'){
            const todo = item.parentElement;
            todo.classList.toggle('completed');
            const icon  = item.firstChild;
            if(todo.classList.contains('completed')){
                icon.classList.replace('fa-check','fa-reply');
            }
            else{
                icon.classList.replace('fa-reply','fa-check');
            }
            
        }
   

}


