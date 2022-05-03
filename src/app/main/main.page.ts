import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  constructor(private router: Router, private toastController: ToastController) { }

  ngOnInit() {
  }

  goToHome(){
    this.router.navigate(['home']);
  }
  goToRealPrice() {
    this.router.navigate(['real-price']);
  };

  goToShoppingList() {
    this.router.navigate(['shopping-list']);
  };

  goToWeather() {
    this.router.navigate(['weather']);
  };

  async deleteAccountmessage() {
    const toast = await this.toastController.create({
      message: 'Conta apagada com sucesso!',
      duration: 3000
    });
    toast.present();
  }

  deleteAccount() {
    localStorage.removeItem('signup');
    this.deleteAccountmessage();
    this.goToHome();
  }

}
