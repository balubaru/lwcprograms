import { LightningElement } from 'lwc';
const columns =[
    { label : 'Opportunity name', fieldName : 'opportunityName', type:'text'},
    { label : 'Confidence', fieldName : 'confidence', type:'percent', cellAttributes:{
        iconName:{fieldName:'trendIcon'},iconPosition:'right'}},
    { label : 'Amount', fieldName : 'amount', type:'currency',typeAttributes:{ currencyCode:'eur'}},
    { label : 'Contact Email', fieldName : 'contact', type:'email'},
    { label : 'Contact phone', fieldName : 'phone', type:'phpne'},
];
const data =[{
    id:'a',
    opportunityName :'cloudhub',
    confidence :0.2,
    amount :25000,
    contact:'jrogers@cloudhub.com',
    phone :'25648789565',
    trendIcon:'utility:down'
},
{
    id:'b',
    opportunityName :'quip',
    confidence :7.8,
    amount :75000,
    contact:'quip@quip.com',
    phone :'25648685565',
    trendIcon:'utility:up'
}
];
export default class Datatable extends LightningElement {
  tabledata=data;
  tablecolumns=columns;
}