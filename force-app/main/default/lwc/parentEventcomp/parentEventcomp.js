import { LightningElement } from 'lwc';

export default class ParentEventcomp extends LightningElement {
    message='parent message';
    handleChange(event){
        this.message=event.detail;
    }
}