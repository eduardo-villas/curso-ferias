
import { ListPage } from './list';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IonicModule } from 'ionic-angular/module';

@NgModule({
    declarations:[ ListPage ],
    imports: [ IonicPageModule.forChild(ListPage) ],
    exports:[ ListPage ]
})
export class ListPageModule {}

