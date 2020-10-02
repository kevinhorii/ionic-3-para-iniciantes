import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }

    public somaDoisNumueros(): void{
      //alert ("minha funcao funcionou...");
    }

    ionViewDidLoad(){
      this.somaDoisNumueros();
  }

}
