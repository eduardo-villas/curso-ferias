
import { HomePage} from './home';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IonicModule } from 'ionic-angular/module';

@NgModule({
    declarations:[ HomePage ],
    imports: [ IonicPageModule.forChild(HomePage) ],
    exports:[ HomePage ]
})
export class HomePageModule {}

