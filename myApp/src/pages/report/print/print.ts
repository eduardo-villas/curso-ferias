import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { IonicPage } from 'ionic-angular';
import { AlertServiceProvider } from '../../../providers/utils/alert.service';

@IonicPage()
@Component({
  selector: 'page-print',
  templateUrl: 'print.html'
})
export class PrintPage {

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private alertService: AlertServiceProvider) {
    let itens = this.navParams.get('reportParams');
    if (itens) {
      this.alertService.showAlert('parametros', JSON.stringify(itens));
    }
  }


}
