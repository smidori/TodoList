import { Component } from '@angular/core';
import { Person } from '../person';
import { Transaction } from '../transaction';
import { DetailPage } from '../detail/detail.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  personId
  people: Person[] = [];
  
  //p1 = new Person("Elaine").addTransaction("borrow", "rent for Renan", 100, "open");
  

  //p1.addTransaction('borrow', 'rent for Renan', 100, 'open');

  /*
  todoList = [{
    name : 'Coding',
    dueDate:'13-05-2023',
    priority:'high',
    category: 'work'
  },
  {
    name : 'Design',
    dueDate:'28-05-23',
    priority:'low',
    category: 'work'
  },
  {
    name : 'Shopping',
    dueDate:'30-05-23',
    priority:'middle',
    category: 'personal'
  }]

*/
  personName : string ="";
  today: number = Date.now();
  constructor(public modalCtrl:ModalController) {

    let p = new Person("Daiane");
    p.addTransaction("lend", "clothes", 100, "open");
    p.addTransaction("borrow", "bread", 14, "open");
    this.people.push(p);

  }

  addPerson(){
    if (this.personName.length > 0) {
      let p = new Person(this.personName);
      this.people.push(p);
      this.personName = "";
    }  
  }

  deletePerson(index: number){
    this.people.splice(index, 1);
  }


  async goDetails(id: number){
    const modal = await this.modalCtrl.create({
      component: DetailPage
    })
    
    this.personId = this.people[id];

    await modal.present();
  }

  

}
