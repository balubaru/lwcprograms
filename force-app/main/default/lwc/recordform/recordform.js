import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { NavigationMixin } from 'lightning/navigation';
export default class Recordform extends LightningElement {
    handleSuccess(event){
        const evt = new ShowToastEvent({
            title : "account created",  
            message :"record Id:" + event.detail.id,
            variant : "success"
        });
        this.dispatchEvent(evt);
        this[NavigationMixin.Navigate]({
            type :'standard__recordpage',
            attributes :{
                recordId : event.detail.id,
                objectApiName : 'Account',
                actionName : 'View'
            },
        });
    }
}