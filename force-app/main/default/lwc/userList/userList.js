import { LightningElement, track } from "lwc";
import { fetchUsers } from "./users";

export default class UserList extends LightningElement {
  @track users = [];

  async connectedCallback() {
    this.users = await fetchUsers();
  }
}
