import { LightningElement,wire } from 'lwc';
import getContactlist from '@salesforce/apex/ContactController.getContactlist';
const columns =[
    {label:'first name',FieldName:'FirstName',type:'text'},
    {label:'last name',FieldName:'LastName',type:'text'},
    {label:'contact phone',FieldName:'Phone',type:'phpne'},
    {label:'contact email',FieldName:'Email',type:'email'}
];
export default class Datatablewithdynamicdata extends LightningElement {
    tablecolumns=columns;
    @wire(getContactlist) contacts;
}