import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-new-transaction',
  templateUrl: './add-new-transaction.page.html',
  styleUrls: ['./add-new-transaction.page.scss'],
})
export class AddNewTransactionPage implements OnInit {

    type = string; 
    amount 
    status = 'open'; //payed and open
    description: string;
    transactionObj

  constructor(public modalCtrl:ModalController) { }

  ngOnInit() {
  }

  addTransaction(){
    this.transactionObj = ({itemDescription:this.description,
                            itemAmount:this.amount,
                            itemStatus:this.status,
                            itemType:this.type})
  }

  async dismiss(){
    await this.modalCtrl.dismiss(this.transactionObj);

  }

}
