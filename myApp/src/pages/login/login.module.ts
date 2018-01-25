
import { LoginPage } from './login';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IonicModule } from 'ionic-angular/module';

@NgModule({
    declarations:[ LoginPage ],
    imports: [ IonicPageModule.forChild(LoginPage) ],
    exports:[ LoginPage ]
})
export class LoginPageModule {}

