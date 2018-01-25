import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-report',
  templateUrl: 'report.html'
})
export class ReportPage {

  constructor(public navCtrl: NavController) {
    console.log('oi');
  }

  changeView() : void {
    
  }

}
