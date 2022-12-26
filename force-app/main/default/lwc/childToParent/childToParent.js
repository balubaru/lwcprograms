import { LightningElement } from 'lwc';

export default class ChildToParent extends LightningElement {
   handleClick(event){
    const messageEvent= new CustomEvent('childmessage',{detail:'hi,i am from child message'});
    this.dispatchEvent(messageEvent);
   } 
}