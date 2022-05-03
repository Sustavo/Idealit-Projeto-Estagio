import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RealPricePageRoutingModule } from './real-price-routing.module';

import { RealPricePage } from './real-price.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RealPricePageRoutingModule
  ],
  declarations: [RealPricePage]
})
export class RealPricePageModule {}
