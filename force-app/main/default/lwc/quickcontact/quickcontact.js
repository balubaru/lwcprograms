import { LightningElement,api} from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import First_Name from '@salesforce/schema/Contact.FirstName';
import Last_Name from '@salesforce/schema/Contact.LastName';
import Email from '@salesforce/schema/Contact.Email';
import Phone from '@salesforce/schema/Contact.Phone';
export default class Quickcontact extends LightningElement {
    contactfields = [First_Name,Last_Name,Email,Phone];
    @api recordId;
    handleSuccess(event){
        const evt = new ShowToastEvent({
            title : "contact created",  
            message :"Record ID:" + event.detail.id,
            variant : "success"
        });
        this.dispatchEvent(evt);
     }
     handleSubmit(event){
        event.preventDefault();
        const fields = event.detail.fields;
        fields.AccountId = this.recordId;
        this.template.querySelector('lightning-record-form').sumbit(fields);
        eval("$A.get('e.force:refreshView').fire();");
     }
}