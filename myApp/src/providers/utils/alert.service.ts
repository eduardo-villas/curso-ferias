
import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';

@Injectable() 
export class AlertServiceProvider {
        
    constructor(private alertController: AlertController) {
        
    }
    
    showAlert(title: string = 'title', 
    subTitle: string = 'subTitle', 
    message : string = 'message', 
    buttons : any[] = ['close']) : void {
            
        let alert = this.alertController.create({
            title: title,
            subTitle: subTitle, 
            buttons: buttons,
            message: message,
        });

        alert.present();
    }

    showError(errorMessage: string = 'Erro desconhecido') : void {
        this.showAlert('Erro', 'Ocorreu um erro', errorMessage);
    }

    showAlertWithCallback(title: string, message: string) : Promise<boolean> {
        return new Promise((resolve, reject) => {
            
            const confirm = this.alertController.create(
                {
                    title,
                    message,
                    buttons: [{
                        text: 'Cancel',
                        role: 'cancel',
                        handler: () => {
                            confirm.dismiss().then(res => {
                                resolve(false);
                            })
                            return false;
                        }
                    },
                    {
                        text: 'Yes',
                        handler: () => {
                            confirm.dismiss().then(res => {
                                resolve(true);
                            })
                            return false;
                        }
                    }]
                }
            );

            confirm.present();
        } );
    }

}
