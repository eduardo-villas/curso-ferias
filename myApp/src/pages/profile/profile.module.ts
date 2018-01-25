
import { ProfilePage } from './profile';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IonicModule } from 'ionic-angular/module';

@NgModule({
    declarations:[ ProfilePage ],
    imports: [ IonicPageModule.forChild(ProfilePage) ],
    exports:[ ProfilePage ]
})
export class ProfilePageModule {}

