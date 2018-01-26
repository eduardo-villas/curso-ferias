import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { IonicPage } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';
import { Storage } from '@ionic/storage';

import { Profile } from './profile.model';
import { ToastServiceProvider } from '../../providers/utils/toast.service';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
  
  properties : Profile = new Profile();
  imgUrl : string;
  imgUrlDefaul: string;
  
  constructor(public navCtrl: NavController, 
    private toastService: ToastServiceProvider,
    private camera: Camera,
    private storage: Storage
  ) {
    this.imgUrlDefaul = '../../assets/imgs/male-profile-picture.png';
  }
  
  options = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
  };
  
  changeView() : void {
    this.imgUrl = '../../assets/imgs/female-profile-picture.png'
    //this.camera.getPicture(this.options).then( (pictureUrl) => {
    //    this.updateImage(pictureUrl);
    //});
    //this.showToast();
  }
  
  updateImage(value) : void {
    this.imgUrl = `data:image/jpeg;base64,${value}`;

    localStorage.setItem('imgUrl', this.imgUrl);
    this.storage.set('imgUrl', this.imgUrl);
  }

  showToast() : void {
    this.toastService.create('O usuário clicou na foto do perfil. Carregar imagem(suporte do cordova necessário)');
  }
}
