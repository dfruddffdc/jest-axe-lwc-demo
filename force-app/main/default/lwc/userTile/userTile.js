import { api, LightningElement } from "lwc";

export default class UserTile extends LightningElement {
  @api companyName;
  @api name;
  @api website;
}
