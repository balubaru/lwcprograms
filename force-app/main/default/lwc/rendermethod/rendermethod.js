import { LightningElement } from 'lwc';
import templateone from './templateone.html';
import templatetwo from './templatetwo.html';
export default class Rendermethod extends LightningElement {
  showtemplateone=true;

  render(){
    return this.showtemplateone?templateone:templatetwo;
}
switchtemplate(){
    this.showtemplateone = this.showtemplateone ===true ? false : true;
}
}