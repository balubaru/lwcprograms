import { LightningElement } from 'lwc';

export default class Getterexample extends LightningElement {
fname ='';
lname ='';
handleChange(event){
    const targetName= event.target.name;
    if(targetName =='firstname'){
        this.fname = event.target.value;
    }
    else if(targetName =='lastname'){
    this.lname = event.target.value;
}
}  
    get uppercasedfullname(){
    return(this.fname+' '+this.lname).toUpperCase();
    }
    }