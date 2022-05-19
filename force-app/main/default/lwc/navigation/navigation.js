import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class RedirectToRecordPage extends NavigationMixin(LightningElement) {

    navigateToAccountPage() {
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: '0015j00000dyHvbAAE',
                objectApiName: 'Account',
                actionName: 'view'
            }
        });
 }
}