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
    
  }

  ngOnInit() {

  }

  async addTransaction(){
    const modal = await this.modalCtrl.create({
      component:AddNewTransactionPage
    })

    modal.onDidDismiss.then((newTrxObj: any)=> {
      //console.log(newTrxObj.data);
      
        console.log(newTrxObj.data);
        return this.transactions.push(newTrxObj.data as never); //??????
    })

    return await modal.present()
  }



}
