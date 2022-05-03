import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  email: string;
  password: string;

  constructor(private router: Router, private toastController: ToastController) {}

  goToSignup() {
    this.router.navigate(['signup']);
  }

  goToMain() {
    this.router.navigate(['main']);
  }

  async wrongInfo() {
    const toast = await this.toastController.create({
      message: 'Email ou senha Incorreta',
      duration: 3000
    });
    toast.present();
  }


  authenticate() {
    if(localStorage.length > 0 || localStorage.length === 0){
      const signupString = localStorage.getItem('signup');
      const signupObject = JSON.parse(signupString);

      if(signupObject.email === this.email && signupObject.password === this.password){
        this.goToMain();
      } else {
        this.wrongInfo();
      }

    }
  };

}
