import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { IonicPage } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

import { ToastServiceProvider } from '../../providers/utils/toast.service';

@IonicPage()
@Component({
  selector: 'page-scanner',
  templateUrl: 'scanner.html'
})
export class ScannerPage {
  
  constructor(public navCtrl: NavController, 
    private barcodeScanner: BarcodeScanner,
    private toastService: ToastServiceProvider) {
  }
  
  scan() : void {
    const options = {
      /**
      * Show flip camera button. Supported on iOS and Android.
      */
      showFlipCameraButton: true,
      /**
      * Disable animations. Supported on iOS only.
      */
      disableAnimations: true,
      /**
      * Disable success beep. Supported on iOS only.
      */
      disableSuccessBeep: true,
      /**
      * Prompt text. Supported on Android only.
      */
      prompt: 'Scanner presença',
      /**
      * Formats separated by commas. Defaults to all formats except `PDF_417` and `RSS_EXPANDED`.
      */
      formats: 'QR_CODE,PDF417',
      /**
      * Orientation. Supported on Android only. Can be set to `portrait` or `landscape`. Defaults to none so the user can rotate the phone and pick an orientation.
      */
      orientation: 'portrait',
      
    }
    this.barcodeScanner.scan(options).then((result) => {
      this.toastService.create(JSON.stringify(result));
    }).catch((reason) => {
      console.log(reason);
    });
  }
  
}
