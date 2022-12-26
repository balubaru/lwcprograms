import { LightningElement,api,wire } from 'lwc';
import { getRecord,getFieldValue } from 'lightning/uiRecordApi';
import Name_field from '@salesforce/schema/Account.Name';
import Type_field from '@salesforce/schema/Account.Type';
import Rating_field from '@salesforce/schema/Account.Rating';
export default class Quickload_uiapirecord extends LightningElement {
    @api recordId;
    @wire(getRecord, { recordId:'$recordId', fields :[Name_field,Type_field,Rating_field]})
    record;
    get nameValue(){
    return this.record.data ? getFieldValue(this.record.data,Name_field) :'';
    }
    get typeValue(){
        return this.record.data ? getFieldValue(this.record.data,Type_field) :'';
        }
        get ratingValue(){
            return this.record.data ? getFieldValue(this.record.data,Rating_field) :'';
            }
}