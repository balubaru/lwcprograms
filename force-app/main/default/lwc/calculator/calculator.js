import { LightningElement } from 'lwc';

export default class Calculator extends LightningElement {

 firstnumber;
 secondnumber;
 result;
 handleAddition(){
    this.result = parseInt(this.firstnumber) + parseInt(this.secondnumber);
 }

 handleChange(event){
     if(event.target.name =='fstnumber'){
        this.firstnumber = event.target.value;
     }
     else if(event.target.name =='secnumber'){
        this.secondnumber = event.target.value;
     }
 }
}