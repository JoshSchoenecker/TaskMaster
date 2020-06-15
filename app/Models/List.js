import { generateId } from "../utils.js";

export default class List {
  constructor(data) {
    this.title = data.title;
    this.listItems = data.listItems || [];
    this.id = data.id || generateId();
  }

  get Template() {
    return `
    <div class="col-4">
    <div class="card justify-self-center m-2" style="width: 18rem;">
      <div class="card-header text-center">
        <button type="button" class="close text-danger align-self-center" onclick="app.listController.deleteList('${this.id}')">
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
      </div>`;
  }

  get listItem() {
    let template = "";
    this.listItems.forEach(
      (listItem) =>
        (template += `<dd>
      <button type="button" class="close text-danger" onclick="app.listController.deleteListItem('${
        this.id
      }','${listItem.id}')" >
      <span class="taskDelete">&times</span>
      </button>
      <div>
      <input type="checkbox" ${
        listItem.completed ? "checked" : ""
      } class="form-check-input bg-success ml-2 mt-2">
      <label class="form-check-label ml-4">${listItem.title}</label>
      </div>
      </dd>`)
    );
    return template;
  }
}
