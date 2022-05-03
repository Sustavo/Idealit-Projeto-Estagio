import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeleteAccountPage } from './delete-account.page';

const routes: Routes = [
  {
    path: '',
    component: DeleteAccountPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeleteAccountPageRoutingModule {}
