import { LightningElement, track } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import{ ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class contactcreate extends LightningElement {

    @track LastName;
    @track phone;
    @track testlwc;

    accounthandler(event){
        this.LastName=event.target.value;
    }
    annualhandler(event){
        this.phone=event.target.value;
    }
    lwhandler(event){
        this.testlwc=event.target.value;
    }
    onSaveRecordhandler()
    {
        const fields={
            'LastName':this.LastName,         
            'Phone':this.phone,
            'TestingLWc__c':this.testlwc
        };
        const recordInput ={apiName:'Contact', fields};

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