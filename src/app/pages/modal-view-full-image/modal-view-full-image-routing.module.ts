import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalViewFullImagePage } from './modal-view-full-image.page';

const routes: Routes = [
  {
    path: '',
    component: ModalViewFullImagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalViewFullImagePageRoutingModule {}
