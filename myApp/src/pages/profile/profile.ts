import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { IonicPage } from 'ionic-angular';

import { Profile } from './profile.model';
import { ToastServiceProvider } from '../../providers/utils/toast.service';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  properties : Profile = new Profile();

  constructor(public navCtrl: NavController, private toastService: ToastServiceProvider) {
    
  }

  changeView() : void {
    this.showToast();
  }

  showToast() : void {
    this.toastService.create('O usuário clicou na foto do perfil. Carregar imagem(suporte do cordova necessário)');
  }
}
