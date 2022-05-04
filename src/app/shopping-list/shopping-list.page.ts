import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.page.html',
  styleUrls: ['./shopping-list.page.scss'],
})
export class ShoppingListPage implements OnInit {
  item: string;
  public items = [];
  constructor(private router: Router) { }

  ngOnInit() {
    if (!localStorage.length){
      localStorage.setItem('market', JSON.stringify(this.items));
    }
    const arrayTrat = JSON.parse(localStorage.getItem('market'));
    this.items = arrayTrat;
  }

  addItem() {
    this.items.push(this.item);
    localStorage.setItem('market', JSON.stringify(this.items));
    }

    goToMain(){
      this.router.navigate(['main']);
    };
}
