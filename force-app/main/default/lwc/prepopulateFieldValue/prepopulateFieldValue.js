import { LightningElement, api, wire } from 'lwc';
import { NavigationMixin } from 'lightning/NavigationMixin';
import { encodeDefaultFieldValues } from 'lightning/pageReferenceUtils';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { getRecord } from 'lightning/uiRecordApi';
import ACT_NAME from '@salesforce/schema/account.name'
import ACT_BILL_STREET from '@salesforce/schema/Account.BillingStreet';
import ACT_BILL_POSTAL_CODE from '@salesforce/schema/Account.BillingPostalCode';
import ACT_BILL_CITY from '@salesforce/schema/Account.BillingCity';
import ACT_BILL_COUNTRY from '@salesforce/schema/Account.BillingCountry';
import ACT_BILL_STATE from '@salesforce/schema/Account.BillingState';
const FIELDS = [ACT_NAME, ACT_BILL_STREET, ACT_BILL_POSTAL_CODE, ACT_BILL_CITYACT_BILL_COUNTRY, ACT_BILL_STATE];
export default class PrepopulateFieldValue extends NavigationMixin(LightningElement) {
    @api recordId;
    accountRec;
    @wire(getRecord, { recordid: '$recordId', fields: FIELDS })
    accountRecord({ error, data }) {
        if (error) {
            let errmessage = 'unknown error';
            if (Array.isArray(error.body)) {
                error.message = error.body.map(e => e.message).join(',');
            }
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'error loading contact',
                    message: 'error message',
                    variant: 'error ',
                }),
            );
        }
        else if (data) {
            this.accountRec = data;
            this.navigatetonewcontactdefaults();
        }
    }
    navigatetonewcontactdefaults() {
        const act_name = this.accountRec.fields.name.value ? String(this.accountRec.fields.name.value) : '';
        const act_street = this.accountRec.fields[ACT_BILL_STREET.fieldApiName].value ? String(this.accountRec.fields[ACT_BILL_STREET.fieldApiName].value) : '';
        const act_city = this.accountRec.fields[ACT_BILL_CITY.fieldApiName].value ? String(this.accountRec.fields[ACT_BILL_CITY.fieldApiName].value) : '';
        const act_postalcode = this.accountRec.fields[ACT_BILL_POSTAL_CODE.fieldApiName].value ? String(this.accountRec.fields[ACT_BILL_POSTAL_CODE.fieldApiName].value) : '';
        const act_state = this.accountRec.fields[ACT_BILL_STATE.fieldApiName].value ? String(this.accountRec.fields[ACT_BILL_STATE.fieldApiName].value) : '';
        const act_country = this.accountRec.fields[ACT_BILL_COUNTRY.fieldApiName].value ? String(this.accountRec.fields[ACT_BILL_COUNTRY.fieldApiName].value) : '';
        const defaultValues = encodeDefaultFieldValues({
            LastName: act_name,
            MailingStreet: act_street,
            MailingCity: act_city,
            MailingPostalCode: act_postalcode,
            MailingState: act_state,
            Mailingcountry: act_country,
            AccountId: this.recordId
        });

        this[NavigationMixin.Navigate]({
            type: 'Standard__ObjectPage',
            attributes: {
                ObjectApiName: 'Contact',
                actionName: 'new'
            },
            state: {
                DefaultFieldValues: defaultValues
            }
        });
    }
}