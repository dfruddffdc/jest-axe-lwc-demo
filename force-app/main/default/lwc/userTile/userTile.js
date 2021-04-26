import { api, LightningElement } from "lwc";

export default class UserTile extends LightningElement {
  @api companyName;
  @api name;
  @api role;
  @api website;

  get userClass() {
    return "slds-p-around_x-small " + this.role;
  }
}
