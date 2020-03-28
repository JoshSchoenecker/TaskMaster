import { generateId } from "../utils.js";

export default class List {
  constructor(data) {
    this.title = data.title 
    this.listItem = data.listItem || []
    //TODO Your constructor takes in a data object that should have the properties you need to create your list here is a freebie, it will set the id its provided, or if that is undefined it will create a new one (this is an alternative to object destructuring)
    this.id = data.id || generateId();
  }
  //Be sure to add the methods needed to create the view template for this model
  //For starting out, your tasks may be strings alone, but later you may wish to turn them into full objects, that will be up to you
  get Template() {
    return /*html*/`
    <div class="col-4 rounded shadow">
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
        <dl>
        ${this.listItem}
        </dl>
      </div>
      </div>`
  }

  get listItems(){
    let template = ''
    this.listItem.forEach(listItem => template += listItem.getTemplate(this.id))
    return template
  }

  getTemplate(listId){
    return /*html*/`
    <dd>
    <button type="button" class="close text-danger" onclick="app.listController.delete('${listId}','${this.id}')">
    <span>&times;</span>
    </button>
    <h5>${this.listItem}</h5>
    </dd>`
  }
}
