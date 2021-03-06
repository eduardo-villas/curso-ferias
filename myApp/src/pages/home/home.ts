import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IonicPage } from 'ionic-angular';
import { AlertServiceProvider } from '../../providers/utils/alert.service';
import { AuthServiceProvider } from '../../providers/auth-service/auth.service';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, 
    private alertService: AlertServiceProvider,
    private authService: AuthServiceProvider) {
    this.authService.isAutorized();
    if (!this.authService.isAutorized()) {
      this.navCtrl.setRoot('LoginPage');
    }
  }

  goToProfilePage() : void {
   // this.alertService.showAlert('Mudanca de pagina', 'ProfilePage');
    this.navCtrl.push('ProfilePage');
  }
  
  goToReportPage() : void {
  //  this.alertService.showAlert('Mudanca de pagina', 'ReportPage');
    this.navCtrl.push('ReportPage');
  }

  goToScannerPage() : void {
  //  this.alertService.showAlert('Mudanca de pagina', 'ScannerPage');
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
          this.alertService.showAlert('Promessa', 'titulo', 'apertou o yes');
        } else {
          this.alertService.showAlert('Promessa', 'titulo', 'apertou o cancel');
        }
      }
    ).catch( reason => {
      console.log('aaaa');
    });
    console.log('showErrorCallBack');
  }
}
