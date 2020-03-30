import ListService from "../Services/ListService.js";
import store from '../store.js'

//TODO Don't forget to render to the screen after every data change.
function _drawLists() {
  let template  = ''
  let lists = store.State.lists
console.log("attempting to draw list: draw function");

  lists.forEach(List => template += List.Template)
  document.getElementById('lists').innerHTML = template

}


//Public
export default class ListController {
  constructor() {
    _drawLists();
  }

  //TODO: Your app will need the ability to create, and delete both lists and listItems
  createList(event){
    console.log("attempting to create list: Controller");
    
    event.preventDefault()
    let formData = event.target
    let newList = {title: formData.listName.value}

    ListService.createList(newList)
    _drawLists()
    formData.reset()
  }
  deleteList(listId){
    console.log(listId);
    if (confirm("Are you sure?")){
    ListService.deleteList(listId)
  } 
  _drawLists()
}
  
  

createListItem(event, listId){
  event.preventDefault()
  console.log("attempting to create list item: Controller");
  
  let formData = event.target
  let newListData = {
  title: formData.listItem.value
}
  ListService.createListItem(newListData, listId)
  _drawLists()
}



deleteListItem(listId, listItemId){
  if (confirm("Are you sure?")){
ListService.deleteListItem(listId,listItemId)
  }
_drawLists()
}
}