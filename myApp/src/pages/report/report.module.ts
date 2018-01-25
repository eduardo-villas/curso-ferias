
import { ReportPage } from './report';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IonicModule } from 'ionic-angular/module';

@NgModule({
    declarations:[ ReportPage ],
    imports: [ IonicPageModule.forChild(ReportPage) ],
    exports:[ ReportPage ]
})
export class ReportPageModule {}

