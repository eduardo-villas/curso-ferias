import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    console.log('oi');
  }

  goToProfilePage() : void {
    this.navCtrl.push("ProfilePage")
  }
  
  goToReportPage() : void {
    this.navCtrl.push("ReportPage")
  }

  goToScannerPage() : void {
    this.navCtrl.push("ScannerPage")
  }
}
