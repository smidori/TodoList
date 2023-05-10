import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { type } from 'os';

@Component({
  selector: 'app-add-new-transaction',
  templateUrl: './add-new-transaction.page.html',
  styleUrls: ['./add-new-transaction.page.scss'],
})
export class AddNewTransactionPage implements OnInit {

  type
  description
  amount
  transactionObj
  status: string = 'open'; //payed and open
  

  /*
    type: string ='aaa'; 
    amount: number = 1; 
    status: string = 'open'; //payed and open
    description: string = 'my desc';
    transactionObj: any = [];
 */
  constructor(public modalCtrl:ModalController) { }

  ngOnInit() {
  }

  addTransaction(){
    this.transactionObj = ({description:this.description,
                            amount:this.amount,
                            status:this.status,
                            type:this.type})
      this.dismiss();
  }

  async dismiss(){
    await this.modalCtrl.dismiss(this.transactionObj);
    
  }

}
