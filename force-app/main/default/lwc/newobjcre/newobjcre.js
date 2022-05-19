import { LightningElement, track } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import {NavigationMixin} from 'lightning/navigation';

export default class Newobjcre extends NavigationMixin(LightningElement)  {

    @track Name;
    @track phone;
    Namehandler(event){
        this.Name=event.target.value;
    }
    phandler(event){
        this.phone=event.target.value;
    }
   
    savehandler(event){
        const fields={
            'Name':this.Name,
            'Phone':this.phone
        };
        const recordInput={apiName:'Account',fields};

        createRecord(recordInput).then(Result);

        this[NavigationMixin.Navigate]({
            type:'standard__recordPage',
            attributes:{
                recordId:result.id,
                objectApiName:'Account',
                actionName:'view'
            },
                state: {
                          filterName: 'Recent' // or by 18 char '00BT0000002TONQMA4'
                }
            
        });
    }
    }