import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class LoaderProvider {

  private loaderElement: HTMLIonLoadingElement;

  constructor(private loadingCtrl: LoadingController) {

    this.loaderElement = null;

  };

  public async showLoader() {
    this.loaderElement = await this.loadingCtrl.create({
      message: "thinking...",
      spinner: "crescent"
    });

    this.loaderElement.present();
  };

  public hideLoader() {
    if (this.loaderElement) {
      this.loaderElement.dismiss()
    }
  };

}