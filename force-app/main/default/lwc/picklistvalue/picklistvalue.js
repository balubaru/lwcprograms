import { LightningElement, wire } from 'lwc';
import { getPicklistValues } from 'lightning/uiObjectInfoApi';
import Lead_Source from '@salesforce/schema/Contact.LeadSource';
import Type from '@salesforce/schema/Account.Type';
export default class Picklistvalue extends LightningElement {
    selectedValue = '';
    selectedAccountType = '';
    selectedLeadSource = '';
    /* static values */
    get options(){
        return [
            { label: 'New', value: 'new' },
            { label: 'In Progress', value: 'inprogress' },
            { label: 'Finished', value: 'finished' },
        ];
    }
    /*  wire getpicklistvalues for type field  */
    @wire(getPicklistValues, {
        recordTypeId: '012000000000000AAA',
        fieldApiName: Type
    }) typeValues;
    @wire(getPicklistValues, {
        recordTypeId: '012000000000000AAA',
        fieldApiName: Lead_Source
    }) leadsourceValues;
    handleChange(event) {
        this.selectedValue = event.target.value;
    }
    handleLeadSourceChange(event) {
        this.selectedLeadSource = event.target.value;
    }
    handleTypeChange(event) {
        this.selectedAccountType = event.target.value;
    }
}