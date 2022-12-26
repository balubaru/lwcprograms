import { LightningElement } from 'lwc';

export default class Parentgetset extends LightningElement {
    messagefromparent;
    handleChange(event){
        this.messagefromparent =event.target.value;   
    }
}