import { LightningElement,wire } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import { getPicklistValues } from 'lightning/uiObjectInfoApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import Account_Object from '@salesforce/schema/Account';
import Name_field from '@salesforce/schema/Account.Name';
import Industry_field from '@salesforce/schema/Account.Industry';
import Account_Rating from '@salesforce/schema/Account.Rating';
import Account_Phone from '@salesforce/schema/Account.Phone';
export default class Createrecord extends LightningElement {
    accountId;
    name;
    selectedindustry;
    phone;
    selectedrating;
    @wire(getPicklistValues, {
        recordTypeId :'012000000000000AAA',
        fieldApiName : Industry_field
    }) industryValues;
    @wire(getPicklistValues, {
        recordTypeId :'012000000000000AAA',
        fieldApiName : Account_Rating
    }) accountratingValues;
    handleNameChange(event){
        this.name = event.target.value;
    }
    handlePhoneChange(event){
        this.phone = event.target.value;
    }
    handleRatingChange(event){
        this.selectedrating = event.target.value;
    }
    handleIndustryChange(event){
        this.selectedindustry = event.target.value;
    }
    createAccount(){
        const fields = {};
        fields[Name_field.fieldApiName] = this.name;
        fields[Industry_field.fieldApiName] = this.selectedindustry;
        fields[Account_Rating.fieldApiName] = this.selectedrating;
        fields[Account_Phone.fieldApiName] = this.phone;
        const recordInput = { apiName :Account_Object.objectApiName,fields};
        createRecord(recordInput)
        .then(account=> {
            this.accountId = account.id;
            this.dispatchEvent(
            new ShowToastEvent({
                title : 'success',  
                message :'account created',
                variant : 'success',
            }),
            );
        })
        .catch(error=>{
        this.dispatchEvent(
            new ShowToastEvent({
                title : "error not created account",  
                message :"error.body.message",
                variant : "error",
            }),
            );
        })
    }

}