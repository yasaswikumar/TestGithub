import { LightningElement, track } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import{ ShowToastEvent } from 'lightning/platformShowToastEvent';
//import { NavigationMixin } from 'lightning/navigation';
export default class RecordAccount extends LightningElement {

    @track accName;
    //@track Site;
    @track Rating;

    accounthandler(event){
        this.accName=event.target.value;
    }



    annualhandler(event){
        this.Rating=event.target.value;
    }

    onSaveRecordhandler()
    {
        const fields={
            'Name':this.accName,         
            'Rating':this.Rating
        };
        const recordInput ={apiName:'Account', fields};

        createRecord(recordInput).then(result=>{
                                              this.dispatchEvent(new ShowToastEvent({
                                               title:'success',
                                               message:'successfully inserted',
                                               variant:'success',
                                               mode:'dismissible'
                                              }));  
                                              console.log('Account inserted'+ result.id);           
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