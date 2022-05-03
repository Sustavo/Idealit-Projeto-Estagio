import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RealPricePage } from './real-price.page';

const routes: Routes = [
  {
    path: '',
    component: RealPricePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RealPricePageRoutingModule {}
