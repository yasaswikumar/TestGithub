import { LightningElement, track } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import{ ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class createcse extends LightningElement {

    @track origin;
    @track required;
   // @track testlwc;

   casehandler(event){
        this.origin=event.target.value;
    }
    reqhandler(event){
        this.required=event.target.value;
    }
    onSaveRecordhandler()
    {
        const fields={
            'Origin':this.origin,         
            'Required__C':this.required
           
        };
        const recordInput ={apiName:'Case', fields};

        createRecord(recordInput).then(result=>{
                                              this.dispatchEvent(new ShowToastEvent({
                                               title:'success',
                                               message:'successfully inserted',
                                               variant:'success',
                                               mode:'dismissible'
                                              }));  
                                              console.log('Contact inserted'+ result.id);           
                                            })
                                       .catch(error=>{
                                           console.log('Error while inserting...'+error.body.message);
                                           this.dispatchEvent(new ShowToastEvent({
                                            title:'Error',
                                            message:'Error whi inserting',
                                            variant:'error',
                                            mode:'dismissible'
                                           }));  

        })
        
    }

}