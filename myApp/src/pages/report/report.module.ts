
import { ReportPage } from './report';
import { PrintPageModule } from './print/print.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
    declarations:[ ReportPage ],
    imports: [ PrintPageModule, IonicPageModule.forChild(ReportPage) ],
    exports:[ ReportPage ]
})
export class ReportPageModule {}

