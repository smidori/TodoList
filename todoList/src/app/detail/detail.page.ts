import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { ModalController } from '@ionic/angular';
import { AddNewTransactionPage } from '../add-new-transaction/add-new-transaction.page';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  person:Person=new Person("A");
  transactions = [];

  constructor(public modalCtrl:ModalController) { 
    let trx1 = ({description:'description test',
      amount:1,
      status:'open',
      type:'borrow'})

    this.transactions.push(trx1);
  }

  ngOnInit() {

  }

  async addTransaction(){
    const modal = await this.modalCtrl.create({
      component:AddNewTransactionPage
    })
    modal.onDidDismiss().then((newTrxObj)=> {
        console.log("trxxxxxxxx: " + newTrxObj.data)
        console.log("transactions length: " + this.transactions.length);
        this.transactions.push(newTrxObj.data as never); //??????
        console.log("transactions: " + this.transactions[0]);
        console.log("transactions length: " + this.transactions.length);
    })
     await modal.present()
  }



}
