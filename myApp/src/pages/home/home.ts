import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IonicPage } from 'ionic-angular';
import { AlertServiceProvider } from '../../providers/utils/alert.service';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private alertService: AlertServiceProvider) {
  }

  goToProfilePage() : void {
    this.alertService.showAlert('Mudanca de pagina', 'ProfilePage');
    this.navCtrl.push('ProfilePage');
  }
  
  goToReportPage() : void {
    this.alertService.showAlert('Mudanca de pagina', 'ReportPage');
    this.navCtrl.push('ReportPage');
  }

  goToScannerPage() : void {
    this.alertService.showAlert('Mudanca de pagina', 'ScannerPage');
    this.navCtrl.push('ScannerPage');
  }

  showError() : void {
    this.alertService.showError('Erro do click do botão');
  }

  showErrorCallBack() : void {
    let promise: Promise<boolean> = this.alertService.showAlertWithCallback('test', 'teste');
    promise.then(
      (res) => {
        if (res) {
          console.log('res true' );
        } else {
          console.log('res false' );
        }
      }
    ).catch( reason => {
      console.log('aaaa');
    });
  }
}
