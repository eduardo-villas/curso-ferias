import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { IonicPage } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { AuthServiceProvider } from '../../providers/auth-service/auth.service';
import { AlertServiceProvider } from '../../providers/utils/alert.service';
import { UserServiceProvider } from '../../providers/user-service/user.service';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage implements OnInit {
  
  loginForm = { login: "", senha: "" };
  currentUser : Object;

  constructor(public navCtrl: NavController, 
    private authService : AuthServiceProvider, 
    private alertService: AlertServiceProvider,
    private userService: UserServiceProvider) {
    if (this.authService.isAutorized()) {
        // this.navCtrl.setRoot('HomePage');
      }
  }
    
    ngOnInit(): void {
      // this.userService.getCurrentUser().then( res => {
      //    this.currentUser = res;
      //    if (res)
      //       this.navCtrl.setRoot('HomePage');
      // });
    }
      
    login(loginForm) : void {
      
      let ob : Observable<any> = this.authService.login(loginForm);

      ob.subscribe(
        (res) => {
          if (res) {
            this.authService.saveAccessData(res);
            this.navCtrl.setRoot('HomePage');
          } else {
            this.alertService.showError('Erro ao tentar se autenticar');
          }
        },
        (error) => {
          this.alertService.showError('Erro fatal');      
        }
      );
      
    }
    
  }
  