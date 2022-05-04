import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { Router } from '@angular/router';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.page.html',
  styleUrls: ['./weather.page.scss'],
})
export class WeatherPage implements OnInit {
  cep: string;
  city: string;
  address: string;
  cAverage: number;
  teste: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  decimalPlace(n) {
    return (Math.round(n * 100) / 100).toFixed(2);
  }

  goToMain(){
    this.router.navigate(['main']);
  };

  weather() {
    axios.get(`https://cep.awesomeapi.com.br/json/${this.cep}`)
      .then((response) => {
      this.city = response.data.city;
      this.address = response.data.address;
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=3d9ef3a8b18ab3d37d245ebeee190711`)
      .then((weatherResp) => {
        this.cAverage = (weatherResp.data.main.temp - 273.15);
        this.teste = weatherResp.data.weather[0].description;
      });
    });


  }

}
