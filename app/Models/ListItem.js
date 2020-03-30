import { generateId } from "../utils.js";

export default class ListItem {
  constructor(data) {
    this.title = data.title;
    this.id = data.id || generateId();
    this.completed = data.completed || false;
  }

}