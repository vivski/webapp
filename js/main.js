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
const refreshThePage =()=>{
  clearListDisplay();
  renderList();
  clearItemEntry();
  setFocusOnItemField();


}

const clearListDisplay = () =>{
    const parentElement = document.getElementById("listItems");
    deleteContents(parentElement);
}

const deleteContents = (parentElement) =>{
    let child = parentElement.lastElementChild;
    while(child){
        parentElement.removeChild(child)
        child = parentElement.lastElementChild;
    }
};

const renderList = () =>{
    const list = toDoList.getList();
    list.forEach((item) => {
        buildListItem(item);
    });
};

const buildListItem = (item) => {

}