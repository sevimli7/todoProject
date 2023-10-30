
const form=document.querySelector("#todo-form");//form
const todoInput=document.getElementById("todo");//formun içindeki input
const ull=document.querySelector(".list-group");//todoları içinde tutacak ul
const cardBody=document.querySelectorAll(".card-body")[0];//formun içinde bulunduğu kartbadi-alert eklenecek
const cardBody2=document.querySelectorAll(".card-body")[1];//ul yi içinde bulunduran kartbadi
const filter=document.getElementById("filter");//filtreleme inputu
const deleteTask=document.querySelector(".clear-todos");//tüm taskları temizle butonu


eventListeners();

function eventListeners(){

    form.addEventListener("submit",addTodo);
    document.addEventListener("DOMContentLoaded",loadAllTodosToUI);
    cardBody2.addEventListener("click",removeTodo);
    filter.addEventListener("keyup", filterTodos);
    deleteTask.addEventListener("click", deleteAllTodos)
}


function deleteAllTodos(){
    if(confirm(" tüm görevleri silmek istediğine emin misin?")){

        let listItems=document.querySelectorAll(".list-group-item");
      
        listItems.forEach((item)=>{
            item.remove(); //arayüzden sildi
            localStorage.clear();//storagedan sildi
        })
        
    }
   
}

function filterTodos(e){
    let value=e.target.value.toLowerCase();//todo metinlerini küçük harfe çevirdik.duyarlılık olmasın diye
    let listItems=document.querySelectorAll(".list-group-item");
   
    listItems.forEach((listItem)=>{
        const text=listItem.textContent.toLowerCase();
        if(text.indexOf(value)===-1){ //eşleşme bulamayınca -1 sonucu verir indexof fonksiyonu
            //bulamadı
            listItem.setAttribute("style","display:none !important");
        }else{
            listItem.setAttribute("style","display:block");

        }
    });
    
}

function removeTodo(e){ //arayüzden silme
    if(e.target.className==="fa-solid fa-xmark close"){
        e.target.parentElement.parentElement.remove(); //i den a ya, a dan li ye ulaştık
        deleteTodoFromStorage(e.target.parentElement.parentElement.textContent);
        showAlert("success","görev silindi");
    }

}

function deleteTodoFromStorage(deleteTodo){ //todoyu storageden silme

    let todos=getTodosFromStorage();
    todos.forEach((todo,index)=>{
        if(todo===deleteTodo){
            todos.splice(index,1) //arrayden degeri siliyoruz
        }
    });
    localStorage.setItem("todos",JSON.stringify(todos))//ve storage yeni halini kaydediyoruz
    
}

function loadAllTodosToUI(){
    let todos=getTodosFromStorage();
    todos.forEach(element => {
        addTodoToUI(element);
        
    });
}

function addTodo(e){
    let newTodo=todoInput.value.trim();//girilen metni traşladık
   
  
    if(newTodo===""){
   
       showAlert("danger","Boş görev eklenemez");
    }else{
       
        addTodoToUI(newTodo);
        addTodoToLocalStorage(newTodo);
        showAlert("success","Görev başarıyla eklendi");
       
    }
  
    e.preventDefault();
}

function getTodosFromStorage(){  //storageden  varsa todo dondurur
    let todos;
    if(localStorage.getItem("todos")===null){
        todos=[];
    }else{
        todos=JSON.parse(localStorage.getItem("todos"));//arraye cevirdik
    }
    return todos;
}

function addTodoToLocalStorage(newTodo){
   let todos=getTodosFromStorage();

   todos.push(newTodo);

    localStorage.setItem("todos",JSON.stringify(todos) );//güncelleme -stringe cevirdi
}

function showAlert(type,message){
    const alert=document.createElement("div");
    alert.className=`alert alert-${type}`;
    alert.role="alert";
    alert.textContent=message;
    cardBody.appendChild(alert);
    
    setTimeout(function(){alert.remove()},1000);//uyarı mesajlarını zamanlama

}

function addTodoToUI(newTodo){
    const newLi=document.createElement("li");//yeni li
    newLi.className="list-group-item d-flex justify-content-between";

    const newA=document.createElement("a");//yeni a
    newA.className="delete-item";
    newA.href="#";
    newA.innerHTML='<i class="fa-solid fa-xmark close"></i>';

    
    newLi.appendChild(document.createTextNode(newTodo));
    newLi.appendChild(newA);
   

  ull.appendChild(newLi);
 
    todoInput.value="";

}

//burada online düxeltme yaptım. repodaki dosya üzerine gelince "." tuşuna basınca değişiklik yapmamıza olanak sağlıyor

