import List from "../Models/List.js";
import store from '../store.js'
import ListItem from '../Models/ListItem.js'
//Public
class ListService {
  //TODO  Here is where we handle all of our business logic,
  //given the information you need in the controller,
  //what methods will you need to do when this class is first 'constructed'?
  //NOTE You will need this code to persist your data into local storage, be sure to call the store method to save after each change
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
    debugger
    let newListItem = new ListItem(newListData)
    let list = store.State.lists.find(list => list.id == listId)
    list.listItems.push(newListItem)
    store.saveState()
    console.log("attempting to create list item: Service");
    
  }
//  TODO List Item delete
  deleteListItem(listId){
    let list = store.State.lists.find(list => list.id == listId)
    
    store.saveState()
    console.log("attempting to delete: Service");
    
  }
}

const SERVICE = new ListService();
export default SERVICE;
