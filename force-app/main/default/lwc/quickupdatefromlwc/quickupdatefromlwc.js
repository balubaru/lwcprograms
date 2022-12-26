import { LightningElement,api } from 'lwc';
import {showtoastevent} from 'lightning/platformshowtoastevent';
import { CloseActionScreenEvent } from 'lightning/actions';
export default class Quickupdatefromlwc extends LightningElement {
@api recordId;
@api objectApiName;
handleSuccess(e){
    this.dispatchEvent(new CloseActionScreenEvent());
    this.dispatchEvent(
        new showtoastevent({
            title:'success',
            message:'record updated',
            variant:'success'
        })
    );

    }
}
