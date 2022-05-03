import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  name: string;
  email: string;
  password: string;

  constructor(private router: Router, private toastController: ToastController) {
   }
  ngOnInit(){}

  goToHome() {
    this.router.navigate(['home']);
  }

  async signupAccept() {
    const toast = await this.toastController.create({
      message: 'Cadastro feito com sucesso',
      duration: 3000
    });
    toast.present();
  }

  async signupReject() {
    const toast = await this.toastController.create({
      message: 'Preencha todos os dados',
      duration: 3000
    });
    toast.present();
  }

  signup() {
    const signup = {
      name: this.name,
      email: this.email,
      password: this.password,
    };
    console.log(this.name, this.email, this.password);
    if(!this.name || !this.email || !this.password) {
      this.signupReject();
    } else {
      this.signupAccept();
      this.goToHome();
      localStorage.setItem('signup', JSON.stringify(signup));
    }

  }

}
