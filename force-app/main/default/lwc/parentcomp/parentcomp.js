import { LightningElement } from 'lwc';

export default class Parentcomp extends LightningElement {
    messagefromparent;
    handleChange(event){
        this.messagefromparent=event.target.value;
    }
}