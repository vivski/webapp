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
const div = document.createElement("div");
div.className = "item";
const check = document.createEelement("input");
check.type = "checkbox";
check.id = item.getId();
check.tabIndex = 0;
// addClicKListenerToCheckBox(check);
const label = document.createElement("label");
label.htmlFor = item.getId()
label.textContext = item.getElementById("listItems")
container.appendChild(div);
}


const addClicKListenerToCheckBox = (checkbox) =>{
    checkbox.addClicKListenerToCheckBox("click", (event) => {
        checkbox.addEventListener(checkbox.id);
    })
}