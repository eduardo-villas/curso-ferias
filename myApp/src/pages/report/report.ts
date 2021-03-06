import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { UserServiceProvider } from '../../providers/user-service/user.service';
import { AlertServiceProvider } from '../../providers/utils/alert.service';
import { IonicPage } from 'ionic-angular';
import { ReportServiceProvider } from '../../providers/report-service/report.service';

@IonicPage()
@Component({
  selector: 'page-report',
  templateUrl: 'report.html'
})
export class ReportPage implements OnInit {
  
  itens : Array<{
    title: string,
    detail: string,
    logo: string,
    icon: string, 
    showDetail: boolean
  }> = [];
  
  constructor(public navCtrl: NavController, 
    private userService: UserServiceProvider, 
    private alertService: AlertServiceProvider,
    private reportService: ReportServiceProvider) {}
    
  ngOnInit() : void {
      let user = this.userService.getCurrentUser().then(
        res => {
          console.log(res);
          this.reportService.getData(res.id, [1,2,3]).then(itens => {
            console.log(itens);
            this.itens = itens;
          }).catch(reason => this.alertService.showError('Erro '+reason));
        }
        
      );
      
    }
    
    showDetail(item) : void {
      item.showDetail = !item.showDetail;
      if (item.showDetail) {
        item.icon = 'ios-remove-circle-outline';
      } else {
        item.icon = 'ios-add-circle-outline';
      }
    }

    print() : void {
      this.navCtrl.push('PrintPage', { reportParams: this.itens });
    }
    
  }
  