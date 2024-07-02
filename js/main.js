import ToDoList from "./todolist";
import ToDoItem from "./todoitem";

const toDoList = new ToDoList()

document.addEventListener("readystatechange", (event) => {
    if(event.target.readyState === "complete"){
        initApp();
    }
})

const initApp = () =>{
    refreshThePage();
}
const refresh =()=>{
  clearListDisplay();

}