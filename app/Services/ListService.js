import List from "../Models/List.js";
import store from "../store.js";
import ListItem from "../Models/ListItem.js";
//Public
class ListService {
  createList(newListData) {
    let newList = new List(newListData);
    store.State.lists.push(newList);
    store.saveState();
  }
  deleteList(listId) {
    store.State.lists = store.State.lists.filter((List) => List.id != listId);
    store.saveState();
  }

  // List Items
  createListItem(newListData, listId) {
    let newListItem = new ListItem(newListData);
    let list = store.State.lists.find((list) => list.id == listId);
    list.listItems.push(newListItem);
    store.saveState();
  }

  deleteListItem(listId, listItemId) {
    // find specific list and item
    let list = store.State.lists.find((list) => list.id == listId);
    let itemIndex = list.listItems.findIndex((i) => i.id == listItemId);
    // delete list item
    list.listItems.splice(itemIndex, 1);
    // update state
    store.saveState();
  }
}

const SERVICE = new ListService();
export default SERVICE;
