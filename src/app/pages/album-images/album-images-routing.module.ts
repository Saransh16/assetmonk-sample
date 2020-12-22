import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlbumImagesPage } from './album-images.page';

const routes: Routes = [
  {
    path: '',
    component: AlbumImagesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlbumImagesPageRoutingModule {}
