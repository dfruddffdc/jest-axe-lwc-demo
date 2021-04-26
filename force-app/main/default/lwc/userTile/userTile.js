import { api, LightningElement } from "lwc";

export default class UserTile extends LightningElement {
  @api companyName;
  @api name;
  @api role;
  @api website;

  get containerClass() {
    return "slds-box " + this.role;
  }
}
