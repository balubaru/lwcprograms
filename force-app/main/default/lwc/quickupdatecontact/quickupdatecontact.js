import { LightningElement,track,api,wire } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { updateRecord } from 'lightning/uiRecordApi';
import LastName_field from '@salesforce/schema/Contact.LastName';
import FirstName_field from '@salesforce/schema/Contact.FirstName';
import Id_field from '@salesforce/schema/Contact.Id';
import { getRecord } from 'lightning/uiRecordApi';
const FIELDS =[LastName_field,FirstName_field];
export default class Quickupdatecontact extends LightningElement {
    @api recordId;
    contact;
    lastname;
    firstname;
    @wire(getRecord,{ recordId:'$recordId', fields:FIELDS})
    wiredRecord({error, data}){
        if (data) {
        this.contact = data;
        this.lastname = this.contact.fields.lastName.value;
        this.firstname = this.contact.fields.firstName.value;
    }
   }
   updateContact(){  
    const fields = {};
    fields[Id_field.fieldApiName] = this.recordId;
    fields[LastName_field.fieldApiName] = this.lastname;
    fields[FirstName_field.fieldApiName] = this.firstname;
   const recordInput={ fields };
    updateRecord(recordInput)
    .then(()=> {
        this.dispatchEvent(
        new ShowToastEvent({
            title : 'success',  
            message :'contact updated',
            variant : 'success',
        })
        );
        eval("$A.get('e.force:refreshView').fire();");
    })
    .catch(error=>{
    this.dispatchEvent(
        new ShowToastEvent({
            title : "error not created contact",  
            message :"error.body.message",
            variant : "error",
        })
        );
    });
}   
    handlefnameChange(event){
        this.firstname=event.target.value;
    }
    handlelnameChange(event){
        this.lastname=event.target.value;
    }

}