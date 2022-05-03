import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeleteAccountPageRoutingModule } from './delete-account-routing.module';

import { DeleteAccountPage } from './delete-account.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeleteAccountPageRoutingModule
  ],
  declarations: [DeleteAccountPage]
})
export class DeleteAccountPageModule {}
