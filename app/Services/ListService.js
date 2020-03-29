import List from "../Models/List.js";
import store from '../store.js'
import ListItem from '../Models/ListItem.js'
//Public
class ListService {
  createList(newListData){
    let newList = new List(newListData)
    store.State.lists.push(newList)
    store.saveState()
    console.log("attempting to creat list: service");
    
  }
  delete(listId){
    store.State.lists = store.State.lists.filter(List => List.id != listId)
    store.saveState()
    console.log("attempting to delete: Service");
    
  }

  createListItem(newListData, listId){
    let newListItem = new ListItem(newListData)
    let list = store.State.lists.find(list => list.id == listId)
    list.listItems.push(newListItem)
    store.saveState()
    console.log("attempting to create list item: Service");
    
  }
//  TODO List Item delete
  deleteListItem(listId, taskId){
    console.log(listId(ListItem));
    store.State.lists = store.State.lists.filter(List => List.id != taskId)
    store.saveState()
    console.log("attempting to delete: Service");
    
  }
}

const SERVICE = new ListService();
export default SERVICE;
