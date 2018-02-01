
import { PrintPage } from './print';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
    declarations:[ PrintPage ],
    imports: [ IonicPageModule.forChild(PrintPage) ],
    exports:[ PrintPage ]
})
export class PrintPageModule {}

