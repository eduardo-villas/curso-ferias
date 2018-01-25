import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { IonicPage } from 'ionic-angular';

import { ToastController } from 'ionic-angular';
import { Profile } from './profile.model';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  properties : Profile[] = [{name: 'teste1'}, {name: 'teste2'}];

  constructor(public navCtrl: NavController, private toastCtrl: ToastController) {
    console.log('oi');
  }

  changeView() : void {
    this.showToast();
  }

  showToast() : void {
    let toast = this.toastCtrl.create({
      message: 'O usuário clicou na foto do perfil. Carregar imagem(suporte do cordova necessário)',
      duration: 3000,
      position: 'middle'
    });
    toast.onDidDismiss(() => {
      console.log('estes executado quando esconde o toast');
    });

    toast.present();

  }
}
