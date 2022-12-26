import { LightningElement } from 'lwc';

export default class Bindingexample extends LightningElement {
    message = 'welcome to binding example';
    handleChange(event){
     this.message = event.target.value;
    }
}