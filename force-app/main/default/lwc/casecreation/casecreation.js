import { LightningElement, track } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';

export default class Casecreation extends LightningElement {

    @track Origin;
    @track Required;

    originHandler(event){
        this.Origin=event.target.value;
    }
    reHandler(event){
        this.Required=event.target.value;
    }
    saverecord(){
        const fields={
                 'Origin':this.Origin,
                 'Required__C':this.Required
        };    
        
        const recordInput={apiname:'Case', fields};
        createRecord(recordInput).then(result);
    }
}