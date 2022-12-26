import { LightningElement,api } from 'lwc';

export default class Calculatorwithproperty extends LightningElement {
    @api title;
    @api fnumber;
    @api snumber;
    result;
    connectedCallback(){
        this.result=this.fnumber+this.snumber;
    }
    handleChange(event){
        if(event.target.name=="fstnumber"){
            this.fnumber=parseInt(event.target.value);
        }
        if(event.target.name=="secnumber"){
            this.snumber=parseInt(event.target.value);
        }
        this.result = this.fnumber+this.snumber;
    }
}