import ListService from "../Services/ListService.js";
import store from "../store.js";

function _drawLists() {
  let template = "";
  let lists = store.State.lists;

  lists.forEach((List) => (template += List.Template));
  document.getElementById("lists").innerHTML = template;
}

//Public
export default class ListController {
  constructor() {
    _drawLists();
  }

  createList(event) {
    event.preventDefault();
    let formData = event.target;
    let newList = { title: formData.listName.value };

    ListService.createList(newList);
    _drawLists();
    formData.reset();
  }
  deleteList(listId) {
    if (confirm("Are you sure?")) {
      ListService.deleteList(listId);
    }
    _drawLists();
  }

  createListItem(event, listId) {
    event.preventDefault();
    let formData = event.target;
    let newListData = {
      title: formData.listItem.value,
    };
    ListService.createListItem(newListData, listId);
    _drawLists();
  }

  deleteListItem(listId, listItemId) {
    if (confirm("Are you sure?")) {
      ListService.deleteListItem(listId, listItemId);
    }
    _drawLists();
  }
}
