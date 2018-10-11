import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PagRepaso1Page } from '../pag-repaso1/pag-repaso1';
import { PagRepaso2Page } from '../pag-repaso2/pag-repaso2';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  pag = PagRepaso1Page;
  pag2 = PagRepaso2Page;

  constructor(public navCtrl: NavController) {

  }
  Pag()
  {
    this.navCtrl.push(this.pag);
  }
  Pag2()
  {
    this.navCtrl.push(this.pag2);
  }

}
