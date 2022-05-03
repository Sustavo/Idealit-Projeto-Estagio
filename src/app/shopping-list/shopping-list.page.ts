import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.page.html',
  styleUrls: ['./shopping-list.page.scss'],
})
export class ShoppingListPage implements OnInit {
  addMarket: string;
  constructor() { }

  ngOnInit() {
  }

  market() {
    const market = [];
    market.push(this.addMarket);
    console.log(market);
    localStorage.setItem('market', JSON.stringify(market));
    }


}
