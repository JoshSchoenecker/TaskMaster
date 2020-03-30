import { generateId } from "../utils.js";

export default class List {
  constructor(data) {
    this.title = data.title 
    this.listItems = data.listItems || []
    this.id = data.id || generateId();
  }

  get Template() {
    return /*html*/`
    <div class="col-4">
    <div class="card" style="width: 18rem;">
      <div class="card-header text-center">
        <button type="button" class="close text-danger align-self-center" onclick="app.listController.delete('${this.id}')">
        <span>&times;</span>
      </button>
        <h4>${this.title}</h4>
    </div>
        <form onsubmit="app.listController.createListItem(event, '${this.id}')">
        <div class="form-group">
        <input type="text" name="listItem" class="form-control" placeholder="New Task..."/>
        </div>
        </form>
        <dl class="toDoStyle">
        ${this.listItem}
        </dl>
      </div>
      </div>`
  }

  // NOTE onclick="app.listController.delete('${listId}','${this.id}')"
  get listItem(){
    let template = ''
    this.listItems.forEach(listItem => template +=  `<dd>
      <button type="button" onclick="app.listController.deleteListItem('${this.id}')" class="close text-danger" >
      <span>&times;</span>
      </button>
      <div class="form-check">
      <input type="checkbox" class="form-check-input bg-success my-2">
      <label class="form-check-label">${listItem.title}</label>
      </div>
      </dd>`)
    return template
  }

  
}


