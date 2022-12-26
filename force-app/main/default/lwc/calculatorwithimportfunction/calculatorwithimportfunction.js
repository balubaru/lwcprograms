import { LightningElement } from 'lwc';
import myfunction from 'c/defaultcomp';
import { add2numbers,sub2numbers } from 'c/calculatorfunctioncomp';
export default class Calculatorwithimportfunction extends LightningElement {
firstnumber;
secondnumber;
result;
title=myfunction();
handleAddition(){
//this.result = parseInt(this.firstnumber) + parseInt(this.secondnumber);
this.result = add2numbers(this.firstnumber,this.secondnumber)
}
handleSub(){
    //this.result = parseInt(this.firstnumber) + parseInt(this.secondnumber);
    this.result = sub2numbers(this.firstnumber,this.secondnumber)
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