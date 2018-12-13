import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Toast } from '@ionic-native/toast';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  randomString = '';
  constructor(public navCtrl: NavController,
   private barcodeScanner: BarcodeScanner,
    private toast: Toast) {
      this.randomString = 18097 + ';' +1531899086738;//"Harsha"+Math.floor(Math.random() * 999);
      console.log(this.randomString);
      this.toast.show(`QRCode Generated: `+this.randomString, '5000', 'center').subscribe(
        toast => {
          console.log(toast);
        }
      );

  }

  scan() {
    //this.selectedProduct = {};
    this.barcodeScanner.scan().then((barcodeData) => {
      /*this.selectedProduct = this.products.find(product => product.plu === barcodeData.text);
      if(this.selectedProduct !== undefined) {
        this.productFound = true;
      } else {
        this.productFound = false;*/
        this.toast.show(`QRCode Data Read from QRCODE: `+barcodeData.text, '5000', 'center').subscribe(
          toast => {
            console.log(toast);
          }
        );
      //}
    }, (err) => {
      this.toast.show(err, '5000', 'center').subscribe(
        toast => {
          console.log(toast);
        }
      );
    });
  }

}
