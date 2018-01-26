
import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';
import { Toast } from 'ionic-angular/components/toast/toast';

@Injectable() 
export class ToastServiceProvider {
    
    toast: Toast;
    
    constructor(private toastCtrl: ToastController) {
        
    }
    
    create(message: string, duration: number = 3000, showCloseButton: boolean = true) : void {
        
        if (this.toast) {
            this.toast.dismiss();
        }

        this.toast = this.toastCtrl.create({
            message: message,
            duration: duration,
            position: 'middle',
            showCloseButton: showCloseButton
        });
        
        this.toast.present();
        
    }
}
