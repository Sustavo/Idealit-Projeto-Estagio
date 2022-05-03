/* eslint-disable prefer-arrow/prefer-arrow-functions */
import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-real-price',
  templateUrl: './real-price.page.html',
  styleUrls: ['./real-price.page.scss'],
})
export class RealPricePage implements OnInit {
  usdCode: string;
  usdAsk: string;
  eurCode: string;
  eurAsk: string;
  btcCode: string;
  btcAsk: string;

  constructor() { }

  ngOnInit() {
  }


  price(){
    axios.get(`https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL`)
      .then((response) => {
      this.usdCode = response.data.USDBRL.code;
      this.usdAsk = response.data.USDBRL.ask;
      this.eurCode = response.data.EURBRL.code;
      this.eurAsk = response.data.EURBRL.ask;
      this.btcCode = response.data.BTCBRL.code;
      this.btcAsk = response.data.BTCBRL.ask;

    });
  }


}
