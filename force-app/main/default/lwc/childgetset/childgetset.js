import { LightningElement,api } from 'lwc';

export default class Childgetset extends LightningElement {
  messagefromgetset;
  @api
  get messagegetset(){
    return this.messagefromgetset;
  } 
  set messagegetset(value){
    this.messagefromgetset=value;
  }
}